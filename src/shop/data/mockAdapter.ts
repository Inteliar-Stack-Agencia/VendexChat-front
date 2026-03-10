import type { CatalogResponse } from "../../types";

export const MOCK_TENANT = {
    id: "demo-id",
    name: "Sabor Casero (VIP Demo)",
    slug: "demo-store",
    logo_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop",
    banner_url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=400&fit=crop",
    description: "Experiencia VIP: Viandas caseras con delivery a todo CABA. Pedidos hasta las 10hs.",
    address: "Palermo, CABA",
    whatsapp: "5491112345678",
    primary_color: "#14b8a6",
    coupons_enabled: true,
    delivery_cost: 0,
    metadata: {
        ai_prompt: "Eres el asistente VIP de Sabor Casero. Ayuda a los clientes con el menú de viandas diarias, planes semanales y cupones de descuento.",
        enable_weekly_planning: true
    }
};

export const MOCK_CATALOG: CatalogResponse = {
    store: MOCK_TENANT as any,
    announcement: "🌟 ¡BIENVENIDO VIP! Usa el código VENDEX15 para un 15% de descuento adicional.",
    categories: [
        {
            id: "cat-1",
            name: "Viandas del Día",
            products: [
                {
                    id: "p1",
                    name: "Milanesa napolitana con papas",
                    description: "Milanesa de ternera con salsa, muzzarella y papas doradas",
                    price: 4500,
                    offer_price: null,
                    image_url: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&h=300&fit=crop",
                    stock: 99,
                    unlimited_stock: true,
                    is_active: true,
                    category_id: "cat-1",
                    sort_order: 1,
                },
                {
                    id: "p2",
                    name: "Pollo grillado con ensalada",
                    description: "Pechuga grillada con mix de hojas verdes",
                    price: 4200,
                    offer_price: 3800,
                    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
                    stock: 99,
                    unlimited_stock: true,
                    is_active: true,
                    category_id: "cat-1",
                    sort_order: 2,
                }
            ]
        },
        {
            id: "cat-2",
            name: "Combos Semanales",
            products: [
                {
                    id: "p4",
                    name: "Plan 5 viandas – Clásico",
                    description: "5 viandas variadas de lunes a viernes. Elige tus platos tras la compra.",
                    price: 18500,
                    offer_price: 15900,
                    image_url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
                    stock: 99,
                    unlimited_stock: true,
                    is_active: true,
                    category_id: "cat-2",
                    sort_order: 1,
                    metadata: {
                        is_weekly_plan: true,
                        days: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]
                    }
                }
            ]
        },
        {
            id: "cat-3",
            name: "Postres",
            products: [
                {
                    id: "p6",
                    name: "Flan casero",
                    description: "Clásico flan de huevo con dulce de leche y crema",
                    price: 2200,
                    offer_price: null,
                    image_url: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
                    stock: 99,
                    unlimited_stock: true,
                    is_active: true,
                    category_id: "cat-3",
                    sort_order: 1,
                }
            ]
        },
        {
            id: "cat-4",
            name: "Bebidas",
            products: [
                {
                    id: "p8",
                    name: "Jugo exprimido",
                    description: "Naranja natural 500ml",
                    price: 1200,
                    offer_price: null,
                    image_url: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop",
                    stock: 99,
                    unlimited_stock: true,
                    is_active: true,
                    category_id: "cat-4",
                    sort_order: 1,
                }
            ]
        },
        {
            id: "cat-5",
            name: "Especiales",
            products: [
                {
                    id: "p10",
                    name: "Caja Sorpresa",
                    description: "Una selección de los mejores platos del chef para toda la familia.",
                    price: 25000,
                    offer_price: 21000,
                    image_url: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
                    stock: 5,
                    unlimited_stock: false,
                    is_active: true,
                    category_id: "cat-5",
                    sort_order: 1,
                }
            ]
        },
        {
            id: "cat-6",
            name: "Congelados",
            products: [
                {
                    id: "p11",
                    name: "Pack 10 Viandas Freezer",
                    description: "Viandas listas para calentar. Duran 3 meses.",
                    price: 32000,
                    offer_price: null,
                    image_url: "https://images.unsplash.com/photo-1547748291-a1e9766487e4?w=400&h=300&fit=crop",
                    stock: 99,
                    unlimited_stock: true,
                    is_active: true,
                    category_id: "cat-6",
                    sort_order: 1,
                }
            ]
        }
    ]
};

export async function fetchMockCatalog(slug: string): Promise<CatalogResponse> {
    console.log(`[MockAdapter] Fetching catalog for VIP demo: ${slug}`);
    await new Promise(resolve => setTimeout(resolve, 500));
    return MOCK_CATALOG;
}
