-- ============================================
-- Fix get_catalog RPC
-- The function was overwritten with an incompatible version that:
--   1. Used p_slug instead of p_identifier (breaking frontend parameter mapping)
--   2. Only searched by slug, not custom_domain (breaking custom domain stores)
--   3. Returned products as a flat top-level array instead of nested in categories
--   4. Was missing global_settings and popups in the response
-- This migration restores the correct version compatible with the frontend.
-- ============================================

DROP FUNCTION IF EXISTS get_catalog(text);

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
      metadata, welcome_message, footer_message,
      delivery_cost, is_active, min_order,
      accept_orders, email, country, city, popups,
      sliders, low_stock_threshold
    FROM stores
    WHERE slug = p_identifier OR custom_domain = p_identifier
    LIMIT 1
  ),
  store_popups AS (
    SELECT
      COALESCE(
        json_agg(
          json_build_object(
            'id',      p.id,
            'title',   p.title,
            'message', p.message,
            'active',  p.active
          )
          ORDER BY p.created_at
        ) FILTER (WHERE p.id IS NOT NULL),
        '[]'::json
      ) AS popups
    FROM popups p
    WHERE p.store_id = (SELECT id FROM store_row)
  ),
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
      p.is_active,
      p.is_featured
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
            'is_active',       is_active,
            'is_featured',     is_featured
          ) ORDER BY prod_sort
        ) FILTER (WHERE prod_id IS NOT NULL),
        '[]'::json
      ) AS products
    FROM cat_products
    GROUP BY cat_id, cat_name, cat_sort
  )
  SELECT json_build_object(
    'store',           (
                         SELECT row_to_json(s)::jsonb
                           || jsonb_build_object(
                                'popups',
                                CASE
                                  WHEN (SELECT json_array_length(popups::json) FROM store_popups) > 0
                                  THEN (SELECT popups FROM store_popups)::jsonb
                                  WHEN s.popups IS NOT NULL AND jsonb_array_length(s.popups) > 0
                                  THEN s.popups
                                  ELSE '[]'::jsonb
                                END
                              )
                         FROM store_row s
                       ),
    'categories',      COALESCE(
                         (SELECT json_agg(c ORDER BY c.sort_order) FROM catalog_cats c),
                         '[]'::json
                       ),
    'global_settings', '{}'::json
  );
$$;

GRANT EXECUTE ON FUNCTION get_catalog(TEXT) TO anon, authenticated;
