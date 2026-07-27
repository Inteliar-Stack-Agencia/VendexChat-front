import { memo, useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { Product } from "../../../types";
import { getProductImageUrl } from "../../../utils/imageUrl";
import { formatPrice } from "../../../utils/format";
import { MV_SURFACE, MV_BG, MV_TEXT, MV_TITLE, MV_CTA, MV_BADGE_BG, MV_HIGHLIGHT } from "./morfiViandasColors";

interface MorfiViandasProductCardProps {
    product: Product;
    quantity: number;
    onAdd: (p: Product, deliveryDay?: string) => void;
    onUpdate: (id: string, q: number, deliveryDay?: string) => void;
    isMorfiEmpresas?: boolean;
}

export const MorfiViandasProductCard = memo(function MorfiViandasProductCard({
    product, quantity, onAdd, onUpdate, isMorfiEmpresas
}: MorfiViandasProductCardProps) {
    const hasOffer = product.offer_price !== null;
    const isOutOfStock = !product.unlimited_stock && product.stock <= 0;
    const [imgError, setImgError] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <div
            className={`group relative overflow-hidden rounded-2xl flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 ${isOutOfStock ? 'opacity-60' : ''}`}
            style={{ backgroundColor: MV_SURFACE, border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}
        >
            <div className="relative w-full overflow-hidden flex-shrink-0" style={{ backgroundColor: MV_BG, aspectRatio: '4/3' }}>
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
                    <div className="w-full h-full flex items-center justify-center morfiviandas-title text-6xl" style={{ color: MV_CTA, backgroundColor: MV_BADGE_BG }}>
                        {product.name.charAt(0)}
                    </div>
                )}

                {hasOffer && !isMorfiEmpresas && (
                    <div className="absolute top-3 right-3 text-[9px] font-black uppercase px-2.5 py-1 rounded-full tracking-wider shadow-md"
                        style={{ backgroundColor: MV_HIGHLIGHT, color: MV_TITLE }}>
                        Oferta
                    </div>
                )}

                {isMorfiEmpresas && quantity > 0 && (
                    <div className="absolute top-3 right-3 text-white text-xs font-black min-w-[24px] h-6 px-1.5 rounded-full flex items-center justify-center shadow-md"
                        style={{ backgroundColor: MV_CTA }}>
                        {quantity}
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-2 p-4 md:p-5 flex-1">
                <div>
                    <h3 className="font-bold text-base md:text-lg leading-tight line-clamp-2" style={{ color: MV_TITLE }}>
                        {product.name}
                    </h3>
                    {product.description && (
                        <p className="text-xs mt-1 leading-relaxed line-clamp-2" style={{ color: MV_TEXT }}>
                            {product.description}
                        </p>
                    )}
                </div>

                <div className="flex items-center justify-between mt-auto pt-3 border-t" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                    {!isMorfiEmpresas && (
                        <div className="flex flex-col leading-none">
                            {hasOffer && (
                                <span className="text-[10px] line-through font-medium opacity-50" style={{ color: MV_TEXT }}>
                                    {formatPrice(product.price)}
                                </span>
                            )}
                            <span className="text-xl md:text-2xl font-black" style={{ color: MV_CTA }}>
                                {formatPrice(hasOffer ? product.offer_price! : product.price)}
                            </span>
                        </div>
                    )}

                    <div className="ml-auto flex-shrink-0">
                        {isOutOfStock ? (
                            <span className="text-[10px] font-bold uppercase tracking-wider opacity-50" style={{ color: MV_TEXT }}>
                                Agotado
                            </span>
                        ) : isMorfiEmpresas ? (
                            <button
                                onClick={(e) => { e.stopPropagation(); onAdd(product); }}
                                className="flex items-center gap-1 px-3 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-widest text-white transition-all hover:opacity-90"
                                style={{ backgroundColor: MV_CTA }}>
                                {quantity > 0 ? 'Más' : 'Agregar'}
                            </button>
                        ) : quantity > 0 ? (
                            <div className="flex items-center gap-1.5 p-0.5 rounded-full" style={{ backgroundColor: MV_BG }}>
                                <button
                                    onClick={(e) => { e.stopPropagation(); onUpdate(product.id, quantity - 1); }}
                                    className="w-7 h-7 rounded-full flex items-center justify-center transition-all active:scale-90 shadow-sm"
                                    style={{ backgroundColor: MV_SURFACE, color: MV_CTA }}>
                                    <Minus className="w-3.5 h-3.5" />
                                </button>
                                <span className="text-xs font-extrabold w-5 text-center" style={{ color: MV_TITLE }}>{quantity}</span>
                                <button
                                    onClick={(e) => { e.stopPropagation(); onUpdate(product.id, quantity + 1); }}
                                    className="w-7 h-7 rounded-full flex items-center justify-center transition-all active:scale-90 text-white"
                                    style={{ backgroundColor: MV_CTA }}>
                                    <Plus className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={(e) => { e.stopPropagation(); onAdd(product); }}
                                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-widest text-white transition-all hover:opacity-90 shadow-sm"
                                style={{ backgroundColor: MV_CTA }}>
                                <Plus className="w-3.5 h-3.5" />
                                Agregar
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
});
