import { Plus, Minus } from "lucide-react";
import type { Product } from "../../types";

interface ProductCardProps {
    product: Product;
    quantity: number;
    onAdd: (p: Product) => void;
    onUpdate: (id: string, q: number) => void;
}

export function ProductCard({ product, quantity, onAdd, onUpdate }: ProductCardProps) {
    const hasOffer = product.offer_price !== null;
    const isOutOfStock = !product.unlimited_stock && product.stock <= 0;

    return (
        <div className={`group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col h-full ${isOutOfStock ? 'opacity-75 grayscale-[0.5]' : ''}`}>
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-slate-50">
                {product.image_url ? (
                    <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-200 font-black text-4xl">
                        {product.name.charAt(0)}
                    </div>
                )}

                {hasOffer && (
                    <div className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-full tracking-widest shadow-lg shadow-amber-200">
                        Oferta
                    </div>
                )}

                {isOutOfStock && (
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] flex items-center justify-center px-4">
                        <div className="bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-2xl">
                            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Sin Stock</span>
                        </div>
                    </div>
                )}

                {/* Quick Add Button (Desktop Hover) */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    {!quantity && !isOutOfStock && (
                        <button
                            onClick={(e) => { e.stopPropagation(); onAdd(product); }}
                            className="bg-white text-slate-900 p-4 rounded-2xl shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-slate-900 hover:text-white"
                        >
                            <Plus className="w-6 h-6" />
                        </button>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
                <div className="flex-1">
                    <h3 className="font-bold text-slate-900 text-sm line-clamp-1 mb-1 group-hover:text-emerald-600 transition-colors uppercase tracking-tight">{product.name}</h3>
                    {product.description && (
                        <p className="text-[11px] text-slate-400 font-medium line-clamp-2 leading-tight mb-3">
                            {product.description}
                        </p>
                    )}
                </div>

                <div className="flex items-center justify-between mt-auto pt-2">
                    <div className="flex flex-col">
                        {hasOffer && (
                            <span className="text-[10px] text-slate-400 line-through font-bold">
                                ${product.price}
                            </span>
                        )}
                        <span className="text-lg font-black text-slate-900 tracking-tighter">
                            ${hasOffer ? product.offer_price : product.price}
                        </span>
                    </div>

                    {isOutOfStock ? (
                        <div className="bg-slate-100 px-3 py-2 rounded-xl">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Agotado</span>
                        </div>
                    ) : quantity > 0 ? (
                        <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-2xl shadow-lg shadow-slate-200">
                            <button
                                onClick={(e) => { e.stopPropagation(); onUpdate(product.id, quantity - 1); }}
                                className="w-8 h-8 rounded-xl flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                            >
                                <Minus className="w-4 h-4" />
                            </button>
                            <span className="text-sm font-black text-white w-4 text-center">{quantity}</span>
                            <button
                                onClick={(e) => { e.stopPropagation(); onUpdate(product.id, quantity + 1); }}
                                className="w-8 h-8 rounded-xl flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                            >
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={(e) => { e.stopPropagation(); onAdd(product); }}
                            className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100/50 hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-sm"
                        >
                            <Plus className="w-5 h-5" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
