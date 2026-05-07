import { useState, useEffect } from "react";
import { X, Plus, Minus } from "lucide-react";
import AssistantIcon from "../../components/icons/AssistantIcon";
import type { Product } from "../../types";
import { getProductImageUrl } from "../../utils/imageUrl";
import { formatPrice } from "../../utils/format";

const MORFI_DELIVERY_DAYS = ['Semanal', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'] as const;

interface QuickViewModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
    quantity: number;
    onAdd: (p: Product, deliveryDay?: string) => void;
    onUpdate: (id: string | number, delta: number, deliveryDay?: string) => void;
    onAskAI?: (p: Product) => void;
    isMorfiEmpresas?: boolean;
    getQuantityForDay?: (day: string) => number;
}

export function ProductQuickViewModal({
    product,
    isOpen,
    onClose,
    quantity,
    onAdd,
    onUpdate,
    onAskAI,
    isMorfiEmpresas,
    getQuantityForDay,
}: QuickViewModalProps) {
    const [imgError, setImgError] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);
    const [selectedDay, setSelectedDay] = useState<string>('');
    const [localQty, setLocalQty] = useState(1);

    // Reset state when modal opens or product changes
    useEffect(() => {
        if (isOpen) {
            setSelectedDay('');
            setLocalQty(1);
            setImgError(false);
            setImgLoaded(false);
        }
    }, [isOpen, product?.id]);

    if (!isOpen || !product) return null;

    const handleMorfiAdd = () => {
        if (!selectedDay) return;
        const existingQty = getQuantityForDay ? getQuantityForDay(selectedDay) : 0;
        if (existingQty === 0) {
            // Item doesn't exist for this day yet — add it, then set desired qty
            onAdd(product, selectedDay);
            if (localQty > 1) {
                onUpdate(product.id, localQty, selectedDay);
            }
        } else {
            // Item already exists — increase by localQty
            onUpdate(product.id, existingQty + localQty, selectedDay);
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose} />

            <div className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-md text-slate-500 hover:text-slate-900 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col md:flex-row h-full max-h-[92vh] overflow-y-auto">
                    <div className="md:w-1/2 min-h-[280px] md:min-h-[460px] bg-slate-100 overflow-hidden relative flex items-center justify-center">
                        {product.image_url && !imgError ? (
                            <img src={getProductImageUrl(product.image_url, 800)} alt={product.name} className={`w-full h-full object-cover transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`} loading="eager" decoding="async" width={800} height={600} onLoad={() => setImgLoaded(true)} onError={() => setImgError(true)} />
                        ) : (
                            <span className="text-slate-300 font-black text-6xl uppercase">{product.name.charAt(0)}</span>
                        )}
                    </div>

                    <div className="md:w-2/5 lg:w-1/3 p-6 flex flex-col">
                        <div className="flex-1">
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 leading-tight break-words">{product.name}</h2>

                            {!isMorfiEmpresas && (
                                <div className="text-2xl font-bold text-primary-dynamic mb-4">{formatPrice(product.price)}</div>
                            )}

                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                {product.description || "Sin descripción disponible."}
                            </p>

                            {!isMorfiEmpresas && onAskAI && (
                                <button
                                    onClick={() => onAskAI(product)}
                                    className="flex items-center gap-2 text-primary-dynamic bg-primary-dynamic/10 px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary-dynamic/20 transition-all mb-4"
                                >
                                    <AssistantIcon className="w-4 h-4" />
                                    Consultar con IA
                                </button>
                            )}

                            {isMorfiEmpresas && (
                                <div className="mb-4">
                                    <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-3">Día de entrega:</p>
                                    <div className="space-y-2">
                                        {MORFI_DELIVERY_DAYS.map(day => {
                                            const dayQty = getQuantityForDay ? getQuantityForDay(day) : 0;
                                            return (
                                                <label
                                                    key={day}
                                                    className={`flex items-center justify-between gap-3 px-3 py-2 rounded-xl cursor-pointer transition-all border ${selectedDay === day ? 'border-slate-900 bg-slate-50' : 'border-transparent hover:bg-slate-50'}`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <input
                                                            type="radio"
                                                            name="delivery_day"
                                                            value={day}
                                                            checked={selectedDay === day}
                                                            onChange={() => {
                                                                setSelectedDay(day);
                                                                setLocalQty(1);
                                                            }}
                                                            className="accent-slate-900 w-4 h-4"
                                                        />
                                                        <span className="text-sm font-semibold text-slate-700">{day}</span>
                                                    </div>
                                                    {dayQty > 0 && (
                                                        <span className="text-[9px] font-black bg-slate-900 text-white px-2 py-0.5 rounded-full">
                                                            {dayQty} en pedido
                                                        </span>
                                                    )}
                                                </label>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="pt-4 border-t border-slate-100">
                            {isMorfiEmpresas ? (
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Cantidad:</span>
                                        <div className="flex items-center gap-4 bg-slate-100 rounded-full px-4 py-2">
                                            <button
                                                onClick={() => setLocalQty(q => Math.max(1, q - 1))}
                                                className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm text-slate-600 transition-transform active:scale-90"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="text-base font-bold min-w-[24px] text-center">{localQty}</span>
                                            <button
                                                onClick={() => setLocalQty(q => q + 1)}
                                                className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm text-slate-600 transition-transform active:scale-90"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleMorfiAdd}
                                        disabled={!selectedDay}
                                        className="w-full bg-primary-dynamic hover:opacity-90 disabled:opacity-50 text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary-dynamic/20 transition-all active:scale-[0.98] disabled:shadow-none"
                                    >
                                        {selectedDay ? 'Agregar al pedido' : 'Elegí un día primero'}
                                    </button>
                                </div>
                            ) : quantity > 0 ? (
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-6 bg-slate-100 rounded-full px-4 py-2 flex-1 justify-center">
                                        <button
                                            onClick={() => onUpdate(product.id, quantity - 1)}
                                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm text-slate-600 transition-transform active:scale-90"
                                        >
                                            <Minus className="w-5 h-5" />
                                        </button>
                                        <span className="text-lg font-bold min-w-[30px] text-center">{quantity}</span>
                                        <button
                                            onClick={() => onUpdate(product.id, quantity + 1)}
                                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm text-slate-600 transition-transform active:scale-90"
                                        >
                                            <Plus className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <button
                                    onClick={() => onAdd(product)}
                                    className="w-full bg-primary-dynamic hover:opacity-90 text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary-dynamic/20 transition-all active:scale-[0.98]"
                                >
                                    Agregar al pedido
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
