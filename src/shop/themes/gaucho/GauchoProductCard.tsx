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
            className={`group relative overflow-hidden rounded-2xl flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 ${isOutOfStock ? 'opacity-60' : ''}`}
            style={{
                backgroundColor: G_WARM_WHITE,
                border: `1px solid rgba(45,95,52,0.12)`,
                boxShadow: '0 4px 16px rgba(45,95,52,0.08)',
            }}
        >
            {/* Product image — top, aspect-[4/3] */}
            <div className="relative w-full overflow-hidden flex-shrink-0" style={{ backgroundColor: G_CREAM, aspectRatio: '4/3' }}>
                {product.image_url && !imgError ? (
                    <img
                        src={getProductImageUrl(product.image_url, 512)}
                        alt={product.name}
                        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                        loading="lazy"
                        decoding="async"
                        width={512}
                        height={512}
                        onLoad={() => setImgLoaded(true)}
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center gaucho-title text-6xl uppercase"
                        style={{ color: G_GREEN, backgroundColor: G_CREAM }}>
                        {product.name.charAt(0)}
                    </div>
                )}

                {/* Offer badge */}
                {hasOffer && !isMorfiEmpresas && (
                    <div className="absolute top-3 right-3 text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-full tracking-wider shadow-md gaucho-body"
                        style={{ backgroundColor: G_RED }}>
                        OFERTA
                    </div>
                )}

                {/* Morfi qty badge */}
                {isMorfiEmpresas && quantity > 0 && (
                    <div className="absolute top-3 right-3 text-white text-xs font-black min-w-[24px] h-6 px-1.5 rounded-full flex items-center justify-center shadow-md"
                        style={{ backgroundColor: G_GREEN }}>
                        {quantity}
                    </div>
                )}

                {/* Natural badge — bottom left of image */}
                <div className="absolute bottom-2 left-2">
                    <span className="gaucho-body text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: 'rgba(45,95,52,0.85)', color: '#FFFDF8' }}>
                        100% Natural
                    </span>
                </div>
            </div>

            {/* Content — below image */}
            <div className="flex flex-col gap-2 p-4 md:p-5 flex-1">
                <div>
                    <h3 className="gaucho-title text-lg md:text-xl leading-tight line-clamp-2"
                        style={{ color: G_GREEN }}>
                        {product.name}
                    </h3>
                    {product.description && (
                        <p className="gaucho-body text-[10px] md:text-xs mt-1 leading-relaxed line-clamp-2"
                            style={{ color: G_BROWN }}>
                            {product.description}
                        </p>
                    )}
                </div>

                {/* Price + controls */}
                <div className="flex items-center justify-between mt-auto pt-1 border-t" style={{ borderColor: 'rgba(45,95,52,0.08)' }}>
                    {!isMorfiEmpresas && (
                        <div className="flex flex-col leading-none">
                            {hasOffer && (
                                <span className="gaucho-body text-[9px] line-through font-medium"
                                    style={{ color: G_BROWN, opacity: 0.4 }}>
                                    {formatPrice(product.price)}
                                </span>
                            )}
                            <span className="gaucho-title text-xl md:text-2xl"
                                style={{ color: G_GOLDEN }}>
                                {formatPrice(hasOffer ? product.offer_price! : product.price)}
                            </span>
                        </div>
                    )}

                    <div className="ml-auto flex-shrink-0">
                        {isOutOfStock ? (
                            <span className="gaucho-body text-[9px] font-bold uppercase tracking-wider"
                                style={{ color: G_BROWN, opacity: 0.4 }}>
                                Agotado
                            </span>
                        ) : isMorfiEmpresas ? (
                            <button
                                onClick={(e) => { e.stopPropagation(); onAdd(product); }}
                                className="flex items-center gap-1 px-3 py-1.5 rounded-lg transition-all hover:opacity-85 active:scale-95"
                                style={{ backgroundColor: G_GREEN, color: G_WARM_WHITE }}>
                                <span className="gaucho-body text-[10px] font-bold uppercase tracking-widest">
                                    {quantity > 0 ? 'Más' : 'Agregar'}
                                </span>
                            </button>
                        ) : quantity > 0 ? (
                            <div className="flex items-center gap-1.5 p-0.5 rounded-xl"
                                style={{ backgroundColor: G_CREAM }}>
                                <button
                                    onClick={(e) => { e.stopPropagation(); onUpdate(product.id, quantity - 1); }}
                                    className="w-7 h-7 rounded-lg flex items-center justify-center transition-all active:scale-90 shadow-sm"
                                    style={{ backgroundColor: G_WARM_WHITE, color: G_GREEN }}>
                                    <Minus className="w-3.5 h-3.5" />
                                </button>
                                <span className="gaucho-body text-xs font-extrabold w-5 text-center"
                                    style={{ color: G_GREEN }}>
                                    {quantity}
                                </span>
                                <button
                                    onClick={(e) => { e.stopPropagation(); onUpdate(product.id, quantity + 1); }}
                                    className="w-7 h-7 rounded-lg flex items-center justify-center transition-all active:scale-90"
                                    style={{ backgroundColor: G_GREEN, color: G_WARM_WHITE }}>
                                    <Plus className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={(e) => { e.stopPropagation(); onAdd(product); }}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all hover:opacity-85 active:scale-95 shadow-sm"
                                style={{ backgroundColor: G_GREEN, color: G_WARM_WHITE }}>
                                <Plus className="w-3.5 h-3.5" />
                                <span className="gaucho-body text-[10px] font-bold uppercase tracking-widest">Agregar</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
});
