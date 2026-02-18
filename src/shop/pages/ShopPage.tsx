import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useShopData } from "../hooks/useShopData";
import { useCartState } from "../state/useCartStore";
import { StoreHeader } from "../components/StoreHeader";
import { CategoryChips } from "../components/CategoryChips";
import { ProductCard } from "../components/ProductCard";
import { ProductRow } from "../components/ProductRow";
import { CartDrawer } from "../components/CartDrawer";
import { CartBar } from "../components/CartBar";
import { ProductQuickViewModal } from "../components/ProductQuickViewModal";
import type { Product } from "../../types";

export default function ShopPage() {
    const { slug } = useParams<{ slug: string }>();
    const { data, loading, error } = useShopData(slug);
    const { items, addItem, updateQuantity, clearCart, totalItems, totalPrice, getItemQuantity } = useCartState();

    const [activeCategory, setActiveCategory] = useState<string | number | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

    // Determinar modo de vista (prioridad: data.store.config.catalogView)
    const viewMode = (data?.store as any)?.config?.catalogView || "grid";

    const filteredCategories = useMemo(() => {
        if (!data) return [];

        return data.categories.map(cat => ({
            ...cat,
            products: (cat.products || []).filter(p => {
                const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    p.description?.toLowerCase().includes(searchTerm.toLowerCase());
                const matchesCategory = activeCategory === null || String(cat.id) === String(activeCategory);
                return matchesSearch && matchesCategory;
            })
        })).filter(cat => cat.products.length > 0);
    }, [data, searchTerm, activeCategory]);

    if (loading) {
        return (
            <div className="h-screen flex flex-col items-center justify-center gap-4 bg-slate-50">
                <div className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin" />
                <p className="text-slate-500 font-medium animate-pulse">Cargando tienda...</p>
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="h-screen flex flex-col items-center justify-center p-6 text-center bg-slate-50">
                <div className="text-slate-300 mb-4 text-6xl">⚠️</div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Tienda no encontrada</h2>
                <p className="text-slate-500 max-w-xs">{error || "No pudimos cargar la tienda solicitada."}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-24">
            <StoreHeader
                name={data.store.name}
                logo={data.store.logo_url || ""}
                onSearch={setSearchTerm}
            />

            <CategoryChips
                categories={data.categories}
                activeId={activeCategory}
                onSelect={setActiveCategory}
            />

            <main className="max-w-4xl mx-auto px-4 py-8">
                {filteredCategories.length === 0 ? (
                    <div className="text-center py-20 text-slate-400">
                        No se encontraron productos coincidentes.
                    </div>
                ) : (
                    filteredCategories.map((cat) => (
                        <section key={cat.id} className="mb-12">
                            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                {cat.name}
                                <span className="text-xs bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">
                                    {cat.products.length}
                                </span>
                            </h2>

                            <div className={
                                viewMode === "grid"
                                    ? "grid grid-cols-2 sm:grid-cols-3 gap-4"
                                    : "flex flex-col gap-3"
                            }>
                                {cat.products.map((p) => (
                                    <div key={p.id} onClick={() => !getItemQuantity(p.id) && setQuickViewProduct(p)} className="cursor-pointer">
                                        {viewMode === "grid" ? (
                                            <ProductCard
                                                product={p}
                                                quantity={getItemQuantity(p.id)}
                                                onAdd={(prod) => addItem(prod)}
                                                onUpdate={updateQuantity}
                                            />
                                        ) : (
                                            <ProductRow
                                                product={p}
                                                quantity={getItemQuantity(p.id)}
                                                onAdd={(prod) => addItem(prod)}
                                                onUpdate={updateQuantity}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))
                )}
            </main>

            <CartBar
                totalItems={totalItems}
                totalPrice={totalPrice}
                onClick={() => setIsCartOpen(true)}
            />

            <CartDrawer
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                items={items}
                totalPrice={totalPrice}
                onUpdateQuantity={updateQuantity}
                onClear={clearCart}
                whatsappNumber={data.store.whatsapp}
            />

            <ProductQuickViewModal
                isOpen={!!quickViewProduct}
                onClose={() => setQuickViewProduct(null)}
                product={quickViewProduct}
                quantity={quickViewProduct ? getItemQuantity(quickViewProduct.id) : 0}
                onAdd={addItem}
                onUpdate={updateQuantity}
            />
        </div>
    );
}
