import { memo, useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { Product } from "../../../types";
import { getProductImageUrl } from "../../../utils/imageUrl";
import { formatPrice } from "../../../utils/format";

const G_GREEN = '#2D5F34';
const G_GOLDEN = '#D4A574';
const G_CREAM = '#F5F1EB';
const G_WARM_WHITE = '#FFFDF8';
const G_BROWN = '#6A3E24';
const G_RED = '#8B3A3A';

interface GauchoProductCardProps {
    product: Product;
    quantity: number;
    onAdd: (p: Product, deliveryDay?: string) => void;
    onUpdate: (id: string, q: number, deliveryDay?: string) => void;
    isMorfiEmpresas?: boolean;
}

export const GauchoProductCard = memo(function GauchoProductCard({
    product, quantity, onAdd, onUpdate, isMorfiEmpresas
}: GauchoProductCardProps) {
    const hasOffer = product.offer_price !== null;
    const isOutOfStock = !product.unlimited_stock && product.stock <= 0;
    const [imgError, setImgError] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <div
            className={`group relative overflow-hidden rounded-2xl flex h-28 md:h-32 transition-all duration-300 hover:shadow-lg ${isOutOfStock ? 'opacity-60' : ''}`}
            style={{
                backgroundColor: G_WARM_WHITE,
                border: `1px solid rgba(45,95,52,0.13)`,
                boxShadow: '0 2px 10px rgba(45,95,52,0.07)',
            }}
        >
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ backgroundColor: G_GREEN }} />

            {/* Product image */}
            <div className="relative w-24 md:w-32 h-full flex-shrink-0 ml-1 overflow-hidden">
                {product.image_url && !imgError ? (
                    <img
                        src={getProductImageUrl(product.image_url, 256)}
                        alt={product.name}
                        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                        loading="lazy"
                        decoding="async"
                        width={256}
                        height={256}
                        onLoad={() => setImgLoaded(true)}
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center gaucho-title text-3xl uppercase"
                        style={{ backgroundColor: G_CREAM, color: G_GREEN }}>
                        {product.name.charAt(0)}
                    </div>
                )}

                {/* Offer badge */}
                {hasOffer && !isMorfiEmpresas && (
                    <div className="absolute top-2 left-2 text-white text-[8px] font-black uppercase px-2 py-0.5 rounded-full tracking-tighter shadow-sm z-10 gaucho-body"
                        style={{ backgroundColor: G_RED }}>
                        OFERTA
                    </div>
                )}

                {/* Morfi qty badge */}
                {isMorfiEmpresas && quantity > 0 && (
                    <div className="absolute top-1.5 right-1.5 text-white text-[9px] font-black min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center z-10"
                        style={{ backgroundColor: G_GREEN }}>
                        {quantity}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex-1 p-2.5 md:p-3 flex flex-col justify-between min-w-0">
                <div className="space-y-0.5">
                    <h3 className="gaucho-body font-extrabold text-[10px] md:text-sm line-clamp-2 leading-tight uppercase tracking-tight"
                        style={{ color: G_GREEN }}>
                        {product.name}
                    </h3>
                    {product.description && (
                        <p className="gaucho-body text-[8px] md:text-[10px] line-clamp-2 leading-tight font-medium"
                            style={{ color: G_BROWN }}>
                            {product.description}
                        </p>
                    )}
                </div>

                <div className="flex items-center justify-between mt-auto gap-2">
                    {/* Price */}
                    {!isMorfiEmpresas && (
                        <div className="flex flex-col leading-none">
                            {hasOffer && (
                                <span className="gaucho-body text-[8px] line-through font-medium"
                                    style={{ color: G_BROWN, opacity: 0.45 }}>
                                    {formatPrice(product.price)}
                                </span>
                            )}
                            <span className="gaucho-body text-xs md:text-sm font-extrabold tracking-tight"
                                style={{ color: G_GOLDEN }}>
                                {formatPrice(hasOffer ? product.offer_price! : product.price)}
                            </span>
                        </div>
                    )}

                    {/* Add to cart controls */}
                    <div className="ml-auto flex-shrink-0">
                        {isOutOfStock ? (
                            <span className="gaucho-body text-[8px] font-bold uppercase tracking-wider"
                                style={{ color: G_BROWN, opacity: 0.45 }}>
                                Agotado
                            </span>
                        ) : isMorfiEmpresas ? (
                            <button
                                onClick={(e) => { e.stopPropagation(); onAdd(product); }}
                                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-all hover:opacity-85 active:scale-95 shadow-sm"
                                style={{ backgroundColor: G_GREEN, color: G_WARM_WHITE }}>
                                <span className="gaucho-body text-[8px] md:text-[10px] font-bold uppercase tracking-widest">
                                    {quantity > 0 ? 'Más' : 'Agregar'}
                                </span>
                            </button>
                        ) : quantity > 0 ? (
                            <div className="flex items-center gap-1.5 p-0.5 rounded-xl"
                                style={{ backgroundColor: G_CREAM }}>
                                <button
                                    onClick={(e) => { e.stopPropagation(); onUpdate(product.id, quantity - 1); }}
                                    className="w-6 h-6 md:w-7 md:h-7 rounded-lg flex items-center justify-center transition-all active:scale-90 shadow-sm"
                                    style={{ backgroundColor: G_WARM_WHITE, color: G_GREEN }}>
                                    <Minus className="w-3 h-3" />
                                </button>
                                <span className="gaucho-body text-[10px] md:text-xs font-extrabold w-4 text-center"
                                    style={{ color: G_GREEN }}>
                                    {quantity}
                                </span>
                                <button
                                    onClick={(e) => { e.stopPropagation(); onUpdate(product.id, quantity + 1); }}
                                    className="w-6 h-6 md:w-7 md:h-7 rounded-lg flex items-center justify-center transition-all active:scale-90"
                                    style={{ backgroundColor: G_GREEN, color: G_WARM_WHITE }}>
                                    <Plus className="w-3 h-3" />
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={(e) => { e.stopPropagation(); onAdd(product); }}
                                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-all hover:opacity-85 active:scale-95 shadow-sm"
                                style={{ backgroundColor: G_GREEN, color: G_WARM_WHITE }}>
                                <Plus className="w-3 h-3" />
                                <span className="gaucho-body text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Agregar</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
});
