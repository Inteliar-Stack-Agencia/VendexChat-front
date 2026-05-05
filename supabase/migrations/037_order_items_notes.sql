-- Add notes column to order_items for per-item delivery info (e.g., day of delivery for Morfi Empresas).
ALTER TABLE order_items ADD COLUMN IF NOT EXISTS notes TEXT;
