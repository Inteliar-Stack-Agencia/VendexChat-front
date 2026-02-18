import { X, Plus, Minus, Send, Trash2 } from "lucide-react";
import { type CartItem } from "../../types";

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    items: CartItem[];
    totalPrice: number;
    onUpdateQuantity: (id: string | number, delta: number) => void;
    onClear: () => void;
    whatsappNumber: string;
}

export function CartDrawer({
    isOpen,
    onClose,
    items,
    totalPrice,
    onUpdateQuantity,
    onClear,
    whatsappNumber
}: CartDrawerProps) {
    if (!isOpen) return null;

    const handleSendWhatsApp = () => {
        const message = `Hola! Quiero hacer este pedido:\n\n` +
            items.map(i => `- ${i.quantity}x ${i.product.name} — $${(i.product.price * i.quantity).toLocaleString()}`).join('\n') +
            `\n\n*Total: $${totalPrice.toLocaleString()}*`;

        const encoded = encodeURIComponent(message);
        window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank');
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className="relative w-full max-w-md bg-white h-screen shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-slate-900">Tu Pedido</h2>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <X className="w-5 h-5 text-slate-500" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-3">
                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center">
                                <Trash2 className="w-8 h-8" />
                            </div>
                            <p>Tu carrito está vacío</p>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={item.product.id} className="flex gap-4 items-start pb-4 border-b border-slate-50">
                                <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                                    {item.product.image_url && <img src={item.product.image_url} alt={item.product.name} className="w-full h-full object-cover" />}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-slate-900 text-sm truncate">{item.product.name}</h4>
                                    <p className="text-emerald-600 font-bold text-sm">${(item.product.price * item.quantity).toLocaleString()}</p>
                                </div>
                                <div className="flex items-center gap-2 bg-slate-100 rounded-full p-1">
                                    <button
                                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                                        className="w-6 h-6 flex items-center justify-center rounded-full bg-white shadow-sm text-slate-600"
                                    >
                                        <Minus className="w-3 h-3" />
                                    </button>
                                    <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                                    <button
                                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                                        className="w-6 h-6 flex items-center justify-center rounded-full bg-white shadow-sm text-slate-600"
                                    >
                                        <Plus className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="p-6 border-t border-slate-100 space-y-4 bg-slate-50/50">
                    <div className="flex items-center justify-between font-bold text-lg">
                        <span className="text-slate-600">Total</span>
                        <span className="text-emerald-600">${totalPrice.toLocaleString()}</span>
                    </div>

                    <button
                        disabled={items.length === 0}
                        onClick={handleSendWhatsApp}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-lg shadow-emerald-200"
                    >
                        <Send className="w-5 h-5" />
                        Enviar Pedido por WhatsApp
                    </button>

                    {items.length > 0 && (
                        <button
                            onClick={onClear}
                            className="w-full text-slate-400 hover:text-red-500 text-sm font-medium transition-colors"
                        >
                            Vaciar carrito
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
