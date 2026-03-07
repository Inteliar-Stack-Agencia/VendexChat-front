-- ============================================
-- Perf: índices faltantes adicionales
-- ============================================

-- 1. products.store_id — CRÍTICO
--    Columna FK añadida en 002 sin índice.
--    Todas las páginas admin (listado de productos) hacen .eq('store_id', ...)
--    sobre la tabla completa → full scan en cada request autenticado.
CREATE INDEX IF NOT EXISTS idx_products_store ON products (store_id);

-- 2. stores.owner_id — ALTO IMPACTO
--    Las RLS policies evalúan owner_id = auth.uid() en cada request autenticado.
--    Sin índice, cada policy hace un filter scan sobre stores.
CREATE INDEX IF NOT EXISTS idx_stores_owner ON stores (owner_id);

-- 3. orders.status — MEDIO
--    Las vistas de panel de admin filtran por status (pending/confirmed/etc.)
--    sin soporte de índice.
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders (status);

-- 4. order_items.product_id — MEDIO
--    FK sin índice. Queries de stock, ingresos por producto y dashboards
--    hacen sequential scan.
CREATE INDEX IF NOT EXISTS idx_order_items_product ON order_items (product_id);

-- 5. subscriptions.store_id — BAJO
--    FK sin índice. Las verificaciones de billing y el trigger handle_new_user
--    consultan por store_id.
CREATE INDEX IF NOT EXISTS idx_subscriptions_store ON subscriptions (store_id);

-- 6. gateways.store_id — BAJO
--    FK sin índice.
CREATE INDEX IF NOT EXISTS idx_gateways_store ON gateways (store_id);
