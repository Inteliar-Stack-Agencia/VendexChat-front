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
import { StoreInfoSections } from "../components/StoreInfoSections";
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
                <p className="text-slate-400 font-medium max-w-sm">No pudimos encontrar la tienda <span className="text-slate-900 font-bold">"{slug}"</span>. Verifica que la URL sea correcta.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white pb-24">
            <StoreHeader
                name={data.store.name}
                logo={data.store.logo_url || ""}
                banner={data.store.banner_url || ""}
                description={data.store.description || ""}
                onSearch={setSearchTerm}
            />

            <CategoryChips
                categories={data.categories}
                activeId={activeCategory}
                onSelect={setActiveCategory}
            />

            <main className="max-w-4xl mx-auto px-4 py-12">
                {filteredCategories.length === 0 ? (
                    <div className="text-center py-20 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-100">
                        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No se encontraron productos</p>
                    </div>
                ) : (
                    filteredCategories.map((cat) => (
                        <section key={cat.id} className="mb-16">
                            <div className="flex items-center gap-4 mb-8">
                                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                                    {cat.name}
                                </h2>
                                <div className="h-px flex-1 bg-slate-100" />
                                <span className="text-[10px] font-black bg-slate-100 text-slate-400 px-3 py-1 rounded-full uppercase tracking-tighter">
                                    {cat.products.length} Items
                                </span>
                            </div>

                            <div className={
                                viewMode === "grid"
                                    ? "grid grid-cols-2 md:grid-cols-3 gap-6"
                                    : "flex flex-col gap-4"
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

            {/* Info Sections: Nosotros / Zonas */}
            <StoreInfoSections
                description={data.store.description}
                address={data.store.address}
                deliveryInfo={data.store.delivery_info}
                storeName={data.store.name}
            />

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
                storeId={data.store.id}
                couponsEnabled={data.store.coupons_enabled}
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
