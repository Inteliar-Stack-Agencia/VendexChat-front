import { Plus, Minus } from "lucide-react";
import type { Product } from "../../types";

interface ProductCardProps {
    product: Product;
    quantity: number;
    onAdd: (p: Product) => void;
    onUpdate: (id: string | number, delta: number) => void;
}

export function ProductCard({ product, quantity, onAdd, onUpdate }: ProductCardProps) {
    return (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="aspect-square relative overflow-hidden bg-slate-100">
                {product.image_url ? (
                    <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                        No image
                    </div>
                )}
            </div>

            <div className="p-4 flex flex-col flex-1">
                <h3 className="font-semibold text-slate-900 leading-tight mb-1">{product.name}</h3>
                <p className="text-xs text-slate-500 line-clamp-2 mb-3 flex-1">{product.description}</p>

                <div className="flex items-center justify-between mt-auto pt-2">
                    <span className="font-bold text-emerald-600">${product.price.toLocaleString()}</span>

                    {quantity > 0 ? (
                        <div className="flex items-center gap-3 bg-slate-100 rounded-full px-2 py-1">
                            <button
                                onClick={() => onUpdate(product.id, -1)}
                                className="w-7 h-7 flex items-center justify-center rounded-full bg-white shadow-sm text-slate-600 active:scale-95"
                            >
                                <Minus className="w-4 h-4" />
                            </button>
                            <span className="text-sm font-bold min-w-[20px] text-center">{quantity}</span>
                            <button
                                onClick={() => onUpdate(product.id, 1)}
                                className="w-7 h-7 flex items-center justify-center rounded-full bg-white shadow-sm text-slate-600 active:scale-95"
                            >
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => onAdd(product)}
                            className="bg-emerald-600 text-white rounded-full px-4 py-1.5 text-sm font-bold shadow-md shadow-emerald-100 active:scale-95 transition-transform"
                        >
                            Agregar
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
