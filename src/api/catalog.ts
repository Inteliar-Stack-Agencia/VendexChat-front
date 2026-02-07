import type { CatalogResponse, OrderPayload, OrderResponse } from "../types";

const API_BASE = import.meta.env.VITE_API_URL || "https://api.vendexchat.app";

export async function fetchCatalog(slug: string): Promise<CatalogResponse> {
  const url = `${API_BASE}/public/store/${slug}/catalog`;
  console.log("[fetchCatalog] GET", url);
  const res = await fetch(url);
  console.log("[fetchCatalog] Response status:", res.status);
  if (!res.ok) {
    throw new Error(`Failed to load store: ${res.status}`);
  }
  const json = await res.json();
  console.log("[fetchCatalog] RAW JSON keys:", Object.keys(json));
  console.log("[fetchCatalog] RAW JSON:", JSON.stringify(json, null, 2));
  if (json.categories) {
    console.log("[fetchCatalog] First category keys:", Object.keys(json.categories[0] || {}));
    console.log("[fetchCatalog] First category:", JSON.stringify(json.categories[0], null, 2));
  }
  return json;
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
