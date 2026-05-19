import { memo, useState } from "react";
import { Plus, Minus, Star } from "lucide-react";
import type { Product } from "../../../types";
import { getProductImageUrl } from "../../../utils/imageUrl";
import { formatPrice } from "../../../utils/format";

const M_BG    = '#0f0f1a';
const M_CARD  = '#1a1a2e';
const M_BLUE  = '#3b82f6';
const M_WHITE = '#ffffff';
const M_MUTED = 'rgba(255,255,255,0.45)';
const M_BORDER = 'rgba(59,130,246,0.18)';

interface MundoProductCardProps {
    product: Product & { is_featured?: boolean };
    quantity: number;
    onAdd: (p: Product) => void;
    onUpdate: (id: string, q: number) => void;
    isMorfiEmpresas?: boolean;
}

export const MundoProductCard = memo(function MundoProductCard({
    product, quantity, onAdd, onUpdate, isMorfiEmpresas,
}: MundoProductCardProps) {
    const hasOffer = product.offer_price !== null;
    const isOutOfStock = !product.unlimited_stock && product.stock <= 0;
    const [imgError, setImgError] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <div
            className={`group relative overflow-hidden rounded-2xl flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 ${isOutOfStock ? 'opacity-50' : ''}`}
            style={{
                backgroundColor: M_CARD,
                border: `1px solid ${product.is_featured ? 'rgba(59,130,246,0.4)' : M_BORDER}`,
                boxShadow: product.is_featured ? '0 0 20px rgba(59,130,246,0.12)' : '0 4px 16px rgba(0,0,0,0.3)',
            }}
        >
            {/* Image */}
            <div className="relative w-full overflow-hidden flex-shrink-0" style={{ backgroundColor: '#0d0d1f', aspectRatio: '4/3' }}>
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
                    <div className="w-full h-full flex items-center justify-center text-6xl font-black uppercase"
                        style={{ color: 'rgba(59,130,246,0.4)', backgroundColor: '#0d0d1f' }}>
                        {product.name.charAt(0)}
                    </div>
                )}

                {hasOffer && !isMorfiEmpresas && (
                    <div className="absolute top-3 right-3 text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-full tracking-wider shadow-md"
                        style={{ backgroundColor: '#ef4444' }}>
                        OFERTA
                    </div>
                )}

                {product.is_featured && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: 'rgba(59,130,246,0.9)', backdropFilter: 'blur(4px)' }}>
                        <Star className="w-3 h-3 text-white fill-white" />
                        <span className="text-[9px] font-black uppercase tracking-wider text-white">Destacado</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 p-4 md:p-5 flex-1">
                <div>
                    <h3 className="text-base md:text-lg font-bold leading-tight line-clamp-2" style={{ color: M_WHITE }}>
                        {product.name}
                    </h3>
                    {product.description && (
                        <p className="text-[10px] md:text-xs mt-1 leading-relaxed line-clamp-2" style={{ color: M_MUTED }}>
                            {product.description}
                        </p>
                    )}
                </div>

                <div className="flex items-center justify-between mt-auto pt-3 border-t" style={{ borderColor: 'rgba(59,130,246,0.12)' }}>
                    {!isMorfiEmpresas && (
                        <div className="flex flex-col leading-none">
                            {hasOffer && (
                                <span className="text-[9px] line-through font-medium" style={{ color: M_MUTED }}>
                                    {formatPrice(product.price)}
                                </span>
                            )}
                            <span className="text-xl md:text-2xl font-black" style={{ color: M_BLUE }}>
                                {formatPrice(hasOffer ? product.offer_price! : product.price)}
                            </span>
                        </div>
                    )}

                    <div className="ml-auto flex-shrink-0">
                        {isOutOfStock ? (
                            <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: M_MUTED }}>
                                Agotado
                            </span>
                        ) : isMorfiEmpresas ? (
                            <button
                                onClick={e => { e.stopPropagation(); onAdd(product); }}
                                className="flex items-center gap-1 px-3 py-1.5 rounded-lg transition-all hover:opacity-85 active:scale-95"
                                style={{ backgroundColor: M_BLUE, color: M_WHITE }}>
                                <span className="text-[10px] font-bold uppercase tracking-widest">
                                    {quantity > 0 ? 'Más' : 'Agregar'}
                                </span>
                            </button>
                        ) : quantity > 0 ? (
                            <div className="flex items-center gap-1.5 p-0.5 rounded-xl" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
                                <button
                                    onClick={e => { e.stopPropagation(); onUpdate(product.id, quantity - 1); }}
                                    className="w-7 h-7 rounded-lg flex items-center justify-center transition-all active:scale-90"
                                    style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: M_WHITE }}>
                                    <Minus className="w-3.5 h-3.5" />
                                </button>
                                <span className="text-xs font-extrabold w-5 text-center" style={{ color: M_WHITE }}>
                                    {quantity}
                                </span>
                                <button
                                    onClick={e => { e.stopPropagation(); onUpdate(product.id, quantity + 1); }}
                                    className="w-7 h-7 rounded-lg flex items-center justify-center transition-all active:scale-90"
                                    style={{ backgroundColor: M_BLUE, color: M_WHITE }}>
                                    <Plus className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={e => { e.stopPropagation(); onAdd(product); }}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all hover:opacity-85 active:scale-95 shadow-sm"
                                style={{ backgroundColor: M_BLUE, color: M_WHITE }}>
                                <Plus className="w-3.5 h-3.5" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Agregar</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
});
