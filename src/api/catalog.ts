import type {
  ApiCatalogResponse,
  CatalogResponse,
  OrderPayload,
  OrderResponse,
} from "../types";

const API_BASE = import.meta.env.VITE_API_URL || "https://api.vendexchat.app";

function normalizeCatalog(raw: ApiCatalogResponse): CatalogResponse {
  const productsByCategory = raw.products_by_category ?? {};

  const categories = (raw.categories ?? [])
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((cat) => {
      const rawProducts = productsByCategory[cat.id] ?? [];
      return {
        id: cat.id,
        name: cat.name,
        products: rawProducts
          .sort((a, b) => a.sort_order - b.sort_order)
          .map((p) => ({
            id: p.id,
            name: p.title,
            description: p.description,
            price: p.final_price ?? p.price,
            offer_price: p.offer_price,
            image_url: p.image_url,
          })),
      };
    });

  return { store: raw.store, categories };
}

export async function fetchCatalog(slug: string): Promise<CatalogResponse> {
  const url = `${API_BASE}/public/store/${slug}/catalog`;
  console.log("[fetchCatalog] GET", url);
  const res = await fetch(url);
  console.log("[fetchCatalog] Response status:", res.status);
  if (!res.ok) {
    throw new Error(`Failed to load store: ${res.status}`);
  }
  const raw: ApiCatalogResponse = await res.json();
  const normalized = normalizeCatalog(raw);
  console.log("[fetchCatalog] Normalized:", normalized.categories.length, "categories,",
    normalized.categories.reduce((sum, c) => sum + c.products.length, 0), "products");
  return normalized;
}

export async function createOrder(payload: OrderPayload): Promise<OrderResponse> {
  const res = await fetch(`${API_BASE}/public/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new Error(`Failed to create order: ${res.status}`);
  }
  return res.json();
}

export async function getOrder(publicId: string): Promise<OrderResponse> {
  const res = await fetch(`${API_BASE}/public/orders/${publicId}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch order: ${res.status}`);
  }
  return res.json();
}
