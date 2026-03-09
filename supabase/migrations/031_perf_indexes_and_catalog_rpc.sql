-- ============================================
-- Perf: índices faltantes + rewrite de get_catalog
-- ============================================

-- 1. Índice en custom_domain (faltaba — causa full table scan para dominios personalizados)
CREATE INDEX IF NOT EXISTS idx_stores_custom_domain ON stores (custom_domain);

-- 2. Índice compuesto en products(category_id, is_active)
--    La query filtra ambas columnas; el índice simple en category_id
--    obligaba a un filter scan adicional sobre is_active.
CREATE INDEX IF NOT EXISTS idx_products_category_active ON products (category_id, is_active);

-- 3. Rewrite de get_catalog: reemplaza subconsulta correlacionada (N+1 por categoría)
--    con un single JOIN + json_agg agrupado.
CREATE OR REPLACE FUNCTION get_catalog(p_identifier TEXT)
RETURNS JSON
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  WITH
  store_row AS (
    SELECT
      id, name, slug, logo_url, banner_url, description,
      whatsapp, phone, address, delivery_info, custom_domain,
      coupons_enabled, instagram, facebook, schedule,
      physical_schedule, online_schedule, primary_color,
      metadata, welcome_message, footer_message
    FROM stores
    WHERE slug = p_identifier OR custom_domain = p_identifier
    LIMIT 1
  ),
  -- Un solo JOIN: todas las categorías + todos sus productos activos en una pasada
  cat_products AS (
    SELECT
      c.id           AS cat_id,
      c.name         AS cat_name,
      c.sort_order   AS cat_sort,
      p.id           AS prod_id,
      p.name,
      p.description,
      COALESCE(p.offer_price, p.price) AS price,
      p.offer_price,
      p.image_url,
      p.sort_order   AS prod_sort,
      p.category_id,
      p.stock,
      COALESCE(p.unlimited_stock, false) AS unlimited_stock,
      p.is_active
    FROM categories c
    LEFT JOIN products p
      ON p.category_id = c.id AND p.is_active = true
    WHERE c.store_id = (SELECT id FROM store_row)
  ),
  catalog_cats AS (
    SELECT
      cat_id        AS id,
      cat_name      AS name,
      cat_sort      AS sort_order,
      COALESCE(
        json_agg(
          json_build_object(
            'id',              prod_id,
            'name',            name,
            'description',     description,
            'price',           price,
            'offer_price',     offer_price,
            'image_url',       image_url,
            'sort_order',      prod_sort,
            'category_id',     category_id,
            'stock',           stock,
            'unlimited_stock', unlimited_stock,
            'is_active',       is_active
          ) ORDER BY prod_sort
        ) FILTER (WHERE prod_id IS NOT NULL),
        '[]'::json
      ) AS products
    FROM cat_products
    GROUP BY cat_id, cat_name, cat_sort
  )
  SELECT json_build_object(
    'store',           (SELECT row_to_json(s) FROM store_row s),
    'categories',      COALESCE(
                         (SELECT json_agg(c ORDER BY c.sort_order) FROM catalog_cats c),
                         '[]'::json
                       ),
    'global_settings', '{}'::json
  );
$$;

GRANT EXECUTE ON FUNCTION get_catalog(TEXT) TO anon, authenticated;
