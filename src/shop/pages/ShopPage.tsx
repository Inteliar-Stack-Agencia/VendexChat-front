import { useState, useMemo, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useShopData } from "../hooks/useShopData";
import { useCartState } from "../state/useCartStore";
import { supabase } from "../../lib/supabase";
import { StoreHeader } from "../components/StoreHeader";
import { CategoryChips } from "../components/CategoryChips";
import { ProductCard } from "../components/ProductCard";
import { CartBar } from "../components/CartBar";
import { ProductQuickViewModal } from "../components/ProductQuickViewModal";
import { WeeklyMenuGrid } from "../components/WeeklyMenuGrid";
import { GlobalAnnouncement } from "../components/GlobalAnnouncement";
import FloatingAiAssistant from "../components/FloatingAiAssistant";
import PopupModal from "../components/PopupModal";
import { Suspense, lazy } from "react";
import type { Popup } from "../../types";
import { GauchoHeader } from "../themes/gaucho/GauchoHeader";
import { GauchoProductCard } from "../themes/gaucho/GauchoProductCard";
import { GauchoCategoryChips } from "../themes/gaucho/GauchoCategoryChips";
import { GauchoInfoSections } from "../themes/gaucho/GauchoInfoSections";
import { MundoHeader } from "../themes/mundoelectronico/MundoHeader";
import { MundoProductCard } from "../themes/mundoelectronico/MundoProductCard";
import { MundoCategoryChips } from "../themes/mundoelectronico/MundoCategoryChips";
import { MundoInfoSections } from "../themes/mundoelectronico/MundoInfoSections";
import { MundoTopSections } from "../themes/mundoelectronico/MundoTopSections";

const GAUCHO_SLUG = 'gauchopet';
const MUNDO_SLUG = 'mundoelectronico';

const CartDrawer = lazy(() => import("../components/CartDrawer").then(m => ({ default: m.CartDrawer })));
const CategoryDrawer = lazy(() => import("../components/CategoryDrawer").then(m => ({ default: m.CategoryDrawer })));
const StoreInfoSections = lazy(() => import("../components/StoreInfoSections").then(m => ({ default: m.StoreInfoSections })));
const ChatBotWidget = lazy(() => import("../components/ChatBotWidget").then(m => ({ default: m.ChatBotWidget })));
import type { Product } from "../../types";

export default function ShopPage({ isDemo }: { isDemo?: boolean }) {
    const { slug } = useParams<{ slug: string }>();
    const { data, loading, slow, error, storePreview } = useShopData(slug, isDemo);
    const { items, addItem, updateQuantity, clearCart, totalItems, totalPrice, getItemQuantity } = useCartState();

    const [activeCategory, setActiveCategory] = useState<string | number | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [expandedCategories, setExpandedCategories] = useState<Set<string | number>>(new Set());
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isCategoryDrawerOpen, setIsCategoryDrawerOpen] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [chatInitialMessage, setChatInitialMessage] = useState<string | null>(null);
    const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
    const [activePopups, setActivePopups] = useState<Popup[]>([]);
    const [planType, setPlanType] = useState<string | null>(null);
    const planFetchedFor = useRef<string | null>(null);

    const isMorfiEmpresas = data?.store?.slug === 'empresas';
    const isGaucho = slug === GAUCHO_SLUG || data?.store?.slug === GAUCHO_SLUG;
    const isMundoElectronico = slug === MUNDO_SLUG || data?.store?.slug === MUNDO_SLUG;
    const [showMundoCatalog, setShowMundoCatalog] = useState(false);

    useEffect(() => {
        if (data?.store?.popups) {
            const storeId = data.store.id;
            const sessionKey = `vdx_popups_seen_${storeId}`;
            const seenIds: string[] = JSON.parse(sessionStorage.getItem(sessionKey) || '[]');

            const unseen = data.store.popups.filter(p => p.active && !seenIds.includes(String(p.id)));
            if (unseen.length > 0) {
                setActivePopups(unseen);
            }
        }
    }, [data]);

    useEffect(() => {
        const storeId = data?.store?.id;
        if (!storeId || planFetchedFor.current === storeId) return;
        planFetchedFor.current = storeId;
        supabase
            .from("subscriptions")
            .select("plan_type")
            .eq("store_id", storeId)
            .eq("status", "active")
            .maybeSingle()
            .then(({ data: sub }) => setPlanType(sub?.plan_type ?? null));
    }, [data?.store?.id]);

    const hasBotAccess = planType !== null && planType !== "free";

    const openChat = (initialMsg?: string) => {
        setChatInitialMessage(initialMsg || null);
        setIsChatOpen(true);
    };

    // New: Mode state for Bespoke stores
    const [viewMode, setViewMode] = useState<'standard' | 'weekly'>('standard');

    // Auto-switch to weekly if enabled in metadata
    useEffect(() => {
        if (data?.store?.metadata?.enable_weekly_planning) {
            setViewMode('weekly');
        }
    }, [data]);

    const effectiveActiveCategory = useMemo(() => {
        if (!data) return null;
        return activeCategory ?? data.categories[0]?.id ?? null;
    }, [data, activeCategory]);

    const filteredCategories = useMemo(() => {
        if (!data) return [];

        const words = searchTerm.toLowerCase().trim().split(/\s+/).filter(Boolean);
        const allWithFilteredProducts = data.categories.map(cat => {
            const catName = cat.name.toLowerCase();
            return {
                ...cat,
                products: (cat.products || []).filter(p => {
                    const prodName = p.name.toLowerCase();
                    const prodDesc = (p.description || "").toLowerCase();
                    // Every word must match either the category name, product name or description
                    return words.every(w =>
                        catName.includes(w) || prodName.includes(w) || prodDesc.includes(w)
                    );
                })
            };
        }).filter(cat => cat.products.length > 0);

        // When no search term, filter to active category (default to first)
        if (!searchTerm && effectiveActiveCategory !== null) {
            return allWithFilteredProducts.filter(cat => String(cat.id) === String(effectiveActiveCategory));
        }

        return allWithFilteredProducts;
    }, [data, searchTerm, effectiveActiveCategory]);

    useEffect(() => {
        if (data?.store?.primary_color) {
            document.documentElement.style.setProperty('--primary-color', data.store.primary_color);
        }
    }, [data]);

    if (loading) {
        // Si ya tenemos info de la tienda, mostramos el header real con skeleton de productos
        if (storePreview) {
            const HeaderComponent = isGaucho ? GauchoHeader : isMundoElectronico ? MundoHeader : StoreHeader;
            return (
                <div className={`min-h-screen pb-24 ${isGaucho ? 'bg-[#F5F1EB]' : 'bg-white'}`}>
                    <HeaderComponent
                        name={storePreview.name}
                        logo={storePreview.logo_url || ""}
                        banner={storePreview.banner_url || ""}
                        description={storePreview.description || ""}
                        address={storePreview.address || ""}
                        whatsapp={storePreview.whatsapp || storePreview.phone || ""}
                        instagram={storePreview.instagram || ""}
                        facebook={storePreview.facebook || ""}
                        totalItems={0}
                        announcement={null}
                        onSearch={() => { }}
                        onChatClick={() => { }}
                        onCartClick={() => { }}
                    />
                    {/* Category chips skeleton */}
                    <div className="flex gap-2 px-4 py-4 overflow-hidden animate-pulse">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="h-8 w-20 bg-slate-100 rounded-full flex-shrink-0" />
                        ))}
                    </div>
                    {slow && (
                        <p className="text-center text-xs text-slate-400 font-medium pb-2 animate-pulse">
                            Estamos cargando los productos, un momento...
                        </p>
                    )}
                    {/* Product cards skeleton */}
                    <div className="max-w-[1440px] mx-auto px-4 py-4 animate-pulse">
                        <div className="h-4 w-32 bg-slate-100 rounded mb-4" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[1, 2, 3, 4, 5, 6].map(i => (
                                <div key={i} className="flex h-28 rounded-2xl border border-slate-100 overflow-hidden">
                                    <div className="w-24 bg-slate-100 flex-shrink-0" />
                                    <div className="flex-1 p-3 space-y-2">
                                        <div className="h-3 w-3/4 bg-slate-100 rounded" />
                                        <div className="h-3 w-1/2 bg-slate-100 rounded" />
                                        <div className="h-4 w-12 bg-slate-100 rounded mt-auto" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }

        // Sin preview: skeleton completo
        return (
            <div className="min-h-screen bg-white animate-pulse">
                {/* Sticky nav bar skeleton */}
                <div className="sticky top-0 z-50 bg-white border-b border-slate-50 px-4 py-3 shadow-sm">
                    <div className="max-w-[1440px] mx-auto flex items-center gap-3">
                        <div className="flex-1 h-10 bg-slate-100 rounded-2xl" />
                        <div className="w-10 h-10 bg-slate-100 rounded-xl" />
                        <div className="w-20 h-10 bg-slate-100 rounded-xl" />
                    </div>
                </div>
                {/* Banner skeleton */}
                <div className="relative h-40 md:h-56 bg-slate-100 overflow-hidden">
                    <div className="absolute bottom-4 left-4 flex items-end gap-4">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-slate-200 rounded-2xl" />
                        <div className="space-y-2 pb-1">
                            <div className="h-5 w-36 bg-slate-200 rounded-lg" />
                            <div className="h-3 w-24 bg-slate-200 rounded-lg" />
                        </div>
                    </div>
                </div>
                {/* Category chips skeleton */}
                <div className="flex gap-2 px-4 py-4 overflow-hidden">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-8 w-20 bg-slate-100 rounded-full flex-shrink-0" />
                    ))}
                </div>
                {slow && (
                    <p className="text-center text-xs text-slate-400 font-medium pb-2 animate-pulse">
                        Estamos cargando la tienda, un momento...
                    </p>
                )}
                {/* Product cards skeleton */}
                <div className="max-w-[1440px] mx-auto px-4 py-4">
                    <div className="h-4 w-32 bg-slate-100 rounded mb-4" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="flex h-28 rounded-2xl border border-slate-100 overflow-hidden">
                                <div className="w-24 bg-slate-100 flex-shrink-0" />
                                <div className="flex-1 p-3 space-y-2">
                                    <div className="h-3 w-3/4 bg-slate-100 rounded" />
                                    <div className="h-3 w-1/2 bg-slate-100 rounded" />
                                    <div className="h-4 w-12 bg-slate-100 rounded mt-auto" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (error || !data) {
        const isNotFound = !error || error.startsWith("STORE_NOT_FOUND:");
        return (
            <div className="h-screen flex flex-col items-center justify-center p-6 text-center bg-slate-50">
                <div className="text-slate-300 mb-4 text-6xl">⚠️</div>
                {isNotFound ? (
                    <>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Tienda no encontrada</h2>
                        <p className="text-slate-600 font-medium max-w-sm">No pudimos encontrar la tienda <span className="text-slate-900 font-bold">"{slug}"</span>. Verifica que la URL sea correcta.</p>
                    </>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Error al cargar la tienda</h2>
                        <p className="text-slate-600 font-medium max-w-sm mb-6">No pudimos cargar la tienda <span className="text-slate-900 font-bold">"{slug}"</span>. Revisá tu conexión e intentá de nuevo.</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-3 bg-slate-900 text-white text-sm font-bold rounded-2xl hover:bg-slate-700 transition-colors"
                        >
                            Reintentar
                        </button>
                    </>
                )}
            </div>
        );
    }

    const ActiveHeader = isGaucho ? GauchoHeader : isMundoElectronico ? MundoHeader : StoreHeader;
    const ActiveProductCard = isGaucho ? GauchoProductCard : isMundoElectronico ? MundoProductCard : ProductCard;
    const ActiveCategoryChips = isGaucho ? GauchoCategoryChips : isMundoElectronico ? MundoCategoryChips : CategoryChips;

    const featuredProducts = isMundoElectronico
        ? data.categories.flatMap(cat => cat.products || []).filter(p => p.is_featured)
        : [];

    return (
        <div className={`min-h-screen pb-24 ${isGaucho ? 'bg-[#F5F1EB]' : 'bg-white'}`}>
            {!isGaucho && !isMundoElectronico && <GlobalAnnouncement announcement={data.announcement} />}
            <ActiveHeader
                name={data.store.name}
                logo={data.store.logo_url || ""}
                banner={data.store.banner_url || ""}
                description={data.store.description || ""}
                address={data.store.address || ""}
                whatsapp={data.store.whatsapp || data.store.phone || ""}
                instagram={data.store.instagram || ""}
                facebook={data.store.facebook || ""}
                totalItems={totalItems}
                announcement={data.announcement}
                onSearch={setSearchTerm}
                onChatClick={hasBotAccess ? () => openChat() : () => {}}
                onCartClick={() => setIsCartOpen(true)}
                hideChatButton={isMorfiEmpresas}
            />

            {isMundoElectronico && (
                <MundoTopSections
                    whatsapp={data.store.whatsapp || data.store.phone || ""}
                    onShowShop={() => {
                        setShowMundoCatalog(true);
                        setTimeout(() => {
                            const el = document.getElementById('mundo-shop') || document.getElementById('productos');
                            el?.scrollIntoView({ behavior: 'smooth' });
                        }, 150);
                    }}
                />
            )}

            {data.store.metadata?.enable_weekly_planning && (
                <div className="max-w-[1440px] mx-auto px-4 mt-8 flex justify-center">
                    <div className="bg-slate-50 p-1.5 rounded-2xl flex gap-1 border border-slate-100">
                        <button
                            onClick={() => setViewMode('standard')}
                            className={`px-6 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${viewMode === 'standard' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400'
                                }`}
                        >
                            Menú Diario
                        </button>
                        <button
                            onClick={() => setViewMode('weekly')}
                            className={`px-6 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${viewMode === 'weekly' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400'
                                }`}
                        >
                            Plan Semanal
                        </button>
                    </div>
                </div>
            )}

            {viewMode === 'standard' && !isGaucho && !isMundoElectronico && (
                <ActiveCategoryChips
                    categories={data.categories}
                    activeId={effectiveActiveCategory}
                    onSelect={setActiveCategory}
                    onMenuClick={() => setIsCategoryDrawerOpen(true)}
                />
            )}

            {isGaucho && (
                <section style={{ lineHeight: 0, display: 'block' }}>
                    <img src="/gaucho/menuoptimizado.png" alt="Nuestros Productos" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </section>
            )}

            {isGaucho && viewMode === 'standard' && data.categories.length > 1 && (
                <ActiveCategoryChips
                    categories={data.categories}
                    activeId={effectiveActiveCategory}
                    onSelect={setActiveCategory}
                    onMenuClick={() => setIsCategoryDrawerOpen(true)}
                />
            )}

            {isMundoElectronico && showMundoCatalog && featuredProducts.length > 0 && (
                <section id="mundo-shop" className="max-w-[1440px] mx-auto px-4 pt-10 pb-4">
                    <div className="flex items-center gap-4 mb-6">
                        <h2 className="text-sm font-black uppercase tracking-widest" style={{ color: '#3b82f6' }}>
                            ⭐ Destacados
                        </h2>
                        <div className="h-[1px] flex-1" style={{ backgroundColor: 'rgba(59,130,246,0.2)' }} />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
                        {featuredProducts.map(p => (
                            <div key={p.id} onClick={() => !getItemQuantity(p.id) && setQuickViewProduct(p)} className="cursor-pointer">
                                <MundoProductCard
                                    product={p}
                                    quantity={getItemQuantity(p.id)}
                                    onAdd={prod => addItem(prod)}
                                    onUpdate={updateQuantity}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {isMundoElectronico && showMundoCatalog && viewMode === 'standard' && (
                <ActiveCategoryChips
                    categories={data.categories}
                    activeId={effectiveActiveCategory}
                    onSelect={setActiveCategory}
                    onMenuClick={() => setIsCategoryDrawerOpen(true)}
                />
            )}

            {(!isMundoElectronico || showMundoCatalog) && <main id="productos" className="max-w-[1440px] mx-auto px-4 py-8">
                {viewMode === 'weekly' ? (
                    <WeeklyMenuGrid
                        categories={data.categories}
                        primaryColor={data.store.primary_color}
                        onItemClick={setQuickViewProduct}
                    />
                ) : filteredCategories.length === 0 ? (
                    <div className="text-center py-20 rounded-[2rem] border-2 border-dashed"
                        style={isGaucho ? { backgroundColor: 'rgba(245,241,235,0.7)', borderColor: 'rgba(45,95,52,0.2)' } : { backgroundColor: '#f8fafc', borderColor: '#f1f5f9' }}>
                        <p className={`font-bold uppercase tracking-widest text-xs ${isGaucho ? 'gaucho-body' : ''}`}
                            style={isGaucho ? { color: 'rgba(45,95,52,0.5)' } : { color: '#94a3b8' }}>
                            No se encontraron productos
                        </p>
                    </div>
                ) : (
                    filteredCategories.map((cat) => {
                        const PAGE_SIZE = isDemo ? 8 : 12;
                        const isExpanded = expandedCategories.has(cat.id);
                        const visibleProducts = isExpanded ? cat.products : cat.products.slice(0, PAGE_SIZE);
                        const remaining = cat.products.length - PAGE_SIZE;
                        return (
                            <section key={cat.id} className="mb-12">
                                {(!isGaucho || filteredCategories.length > 1) && (
                                    <div className="flex items-center gap-4 mb-6">
                                        {isGaucho ? (
                                            <h2 className="gaucho-title text-2xl md:text-3xl leading-none" style={{ color: '#2D5F34' }}>
                                                {cat.name}
                                            </h2>
                                        ) : isMundoElectronico ? (
                                            <h2 className="text-sm md:text-lg font-black uppercase tracking-tight" style={{ color: '#ffffff' }}>
                                                {cat.name}
                                            </h2>
                                        ) : (
                                            <h2 className="text-sm md:text-lg font-black text-slate-900 uppercase tracking-tight">
                                                {cat.name}
                                            </h2>
                                        )}
                                        <div className="h-[1px] flex-1" style={{ backgroundColor: isGaucho ? 'rgba(212,165,116,0.4)' : isMundoElectronico ? 'rgba(59,130,246,0.2)' : '#f1f5f9' }} />
                                        <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter ${isGaucho ? 'gaucho-body' : ''}`}
                                            style={isGaucho ? { backgroundColor: 'rgba(45,95,52,0.08)', color: '#2D5F34' } : isMundoElectronico ? { backgroundColor: 'rgba(59,130,246,0.12)', color: '#3b82f6' } : {}}>
                                            {cat.products.length} Items
                                        </span>
                                    </div>
                                )}

                                <div className={isGaucho || isMundoElectronico
                                    ? `grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7 max-w-5xl mx-auto`
                                    : `grid grid-cols-1 ${cat.products.length > 20 ? 'md:grid-cols-3' : 'md:grid-cols-2 max-w-4xl mx-auto'} gap-3 md:gap-6`
                                }>
                                    {visibleProducts.map((p) => (
                                        <div
                                            key={p.id}
                                            onClick={() => isMorfiEmpresas ? setQuickViewProduct(p) : (!getItemQuantity(p.id) && setQuickViewProduct(p))}
                                            className="cursor-pointer"
                                        >
                                            <ActiveProductCard
                                                product={p}
                                                quantity={getItemQuantity(p.id)}
                                                onAdd={isMorfiEmpresas ? () => setQuickViewProduct(p) : (prod) => addItem(prod)}
                                                onUpdate={updateQuantity}
                                                isMorfiEmpresas={isMorfiEmpresas}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {!isExpanded && remaining > 0 && (
                                    <button
                                        onClick={() => setExpandedCategories(prev => new Set(prev).add(cat.id))}
                                        className={`mt-4 w-full py-3 text-[10px] font-black uppercase tracking-widest rounded-2xl transition-all border border-dashed ${isGaucho ? 'gaucho-body' : ''}`}
                                        style={isGaucho ? {
                                            color: '#2D5F34',
                                            borderColor: 'rgba(45,95,52,0.3)',
                                        } : isMundoElectronico ? {
                                            color: '#3b82f6',
                                            borderColor: 'rgba(59,130,246,0.3)',
                                        } : {}}
                                    >
                                        Ver {remaining} productos más
                                    </button>
                                )}
                            </section>
                        );
                    })
                )}
            </main>}

            {isGaucho && null}

            {isMundoElectronico && (
                <MundoInfoSections
                    whatsapp={data.store.whatsapp || data.store.phone || ""}
                    address={data.store.address || ""}
                    instagram={data.store.instagram || ""}
                />
            )}

            {!isGaucho && !isMundoElectronico && (
                <Suspense fallback={null}>
                    <StoreInfoSections
                        description={data.store.description}
                        address={data.store.address}
                        whatsapp={data.store.whatsapp || data.store.phone || ""}
                        instagram={data.store.instagram}
                        facebook={data.store.facebook}
                        schedule={(() => {
                            const phys = data.store.physical_schedule || data.store.schedule;
                            const hasOpenPhysical = phys && Object.values(phys).some((d: any) => d?.open);
                            return hasOpenPhysical ? phys : (data.store.online_schedule || phys);
                        })()}
                        storeName={data.store.name}
                        metadata={data.store.metadata}
                        footerMessage={data.store.footer_message}
                    />
                </Suspense>
            )}

            {/* Powered by */}
            <div className="py-4 text-center">
                <a
                    href="https://vendexchat.app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-semibold text-slate-400 hover:text-slate-600 transition-colors"
                >
                    Powered by VendeXChat
                </a>
            </div>

            <CartBar
                totalItems={totalItems}
                totalPrice={totalPrice}
                onClick={() => setIsCartOpen(true)}
                hidePrice={isMorfiEmpresas}
            />

            {isCartOpen && (
                <Suspense fallback={null}>
                    <CartDrawer
                        isOpen={isCartOpen}
                        onClose={() => setIsCartOpen(false)}
                        items={items}
                        totalPrice={totalPrice}
                        onUpdateQuantity={updateQuantity}
                        onClear={clearCart}
                        whatsappNumber={data.store.whatsapp || data.store.phone || ""}
                        storeId={data.store.id}
                        storeSlug={data.store.slug}
                        couponsEnabled={data.store.coupons_enabled}
                        deliveryCost={data.store.delivery_cost || 0}
                        metadata={data.store.metadata}
                    />
                </Suspense>
            )}

            <ProductQuickViewModal
                isOpen={!!quickViewProduct}
                onClose={() => setQuickViewProduct(null)}
                product={quickViewProduct}
                quantity={quickViewProduct ? getItemQuantity(quickViewProduct.id) : 0}
                onAdd={addItem}
                onUpdate={updateQuantity}
                onAskAI={hasBotAccess ? (p) => openChat(`Hola 👋, me gustaría saber más sobre el producto: **${p.name}**`) : undefined}
                isMorfiEmpresas={isMorfiEmpresas}
                getQuantityForDay={isMorfiEmpresas && quickViewProduct
                    ? (day) => getItemQuantity(quickViewProduct.id, day)
                    : undefined}
            />


            {hasBotAccess && !isMorfiEmpresas && (
                <Suspense fallback={null}>
                    <ChatBotWidget
                        isOpen={isChatOpen}
                        onClose={() => setIsChatOpen(false)}
                        whatsappNumber={data.store.whatsapp || data.store.phone || ""}
                        initialMessage={chatInitialMessage}
                        storeId={data.store.id}
                        assistantIconUrl={isGaucho ? '/gaucho/logo-transparent.png' : undefined}
                    />
                </Suspense>
            )}

            {hasBotAccess && !isMorfiEmpresas && (
                <FloatingAiAssistant
                    onClick={() => openChat()}
                    isOpen={isChatOpen}
                    isCartOpen={isCartOpen}
                    assistantIconUrl={isGaucho ? '/gaucho/logo-transparent.png' : undefined}
                />
            )}

            <Suspense fallback={null}>
                <CategoryDrawer
                    isOpen={isCategoryDrawerOpen}
                    onClose={() => setIsCategoryDrawerOpen(false)}
                    categories={data.categories}
                    activeId={activeCategory}
                    onSelect={setActiveCategory}
                />
            </Suspense>

            {activePopups.length > 0 && (
                <PopupModal
                    key={activePopups[0].id}
                    popup={activePopups[0]}
                    onClose={() => setActivePopups(prev => {
                        const closed = prev[0];
                        if (closed && data?.store?.id) {
                            const sessionKey = `vdx_popups_seen_${data.store.id}`;
                            const seenIds: string[] = JSON.parse(sessionStorage.getItem(sessionKey) || '[]');
                            seenIds.push(String(closed.id));
                            sessionStorage.setItem(sessionKey, JSON.stringify(seenIds));
                        }
                        return prev.slice(1);
                    })}
                />
            )}
        </div >

    );
}
