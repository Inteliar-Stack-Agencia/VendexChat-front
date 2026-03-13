import { X } from 'lucide-react';
import type { Popup } from '../../types';

interface PopupModalProps {
    popup: Popup;
    onClose: () => void;
}

export default function PopupModal({ popup, onClose }: PopupModalProps) {
    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black/50" />
            <div
                className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 animate-in fade-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
                <h2 className="text-base font-black text-slate-900 uppercase tracking-wide pr-6 mb-3">
                    {popup.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">
                    {popup.message}
                </p>
                <button
                    onClick={onClose}
                    className="mt-5 w-full bg-slate-900 hover:bg-slate-800 text-white font-black uppercase tracking-widest text-xs py-3 rounded-xl transition-all active:scale-[0.98]"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
}
