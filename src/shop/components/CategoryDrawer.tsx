import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import type { Category } from "../../types";
import "./CategoryDrawer.css";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    categories: Category[];
    activeId: string | number | null;
    onSelect: (id: string | number | null) => void;
}

export function CategoryDrawer({ isOpen, onClose, categories, activeId, onSelect }: Props) {
    const handleSelect = (id: string | number | null) => {
        onSelect(id);
        onClose();
        // Scroll handling is done in the parent or via handleClick logic
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[200]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 left-0 w-full max-w-[300px] bg-white shadow-2xl z-[201] flex flex-col"
                    >
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Categorías</h3>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Explorar catálogo</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-400 hover:text-slate-900"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto py-4 px-3 no-scrollbar">
                            <nav className="flex flex-col gap-1">
                                <button
                                    onClick={() => handleSelect(null)}
                                    className={`flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all group ${activeId === null
                                            ? "bg-primary-dynamic/10 text-primary-dynamic"
                                            : "text-slate-600 hover:bg-slate-50"
                                        }`}
                                >
                                    <span className={`text-sm font-bold ${activeId === null ? "font-black" : ""}`}>
                                        Todas las categorías
                                    </span>
                                    <ChevronRight size={16} className={activeId === null ? "opacity-100" : "opacity-0 group-hover:opacity-100 transition-opacity"} />
                                </button>

                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => handleSelect(cat.id)}
                                        className={`flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all group ${String(activeId) === String(cat.id)
                                                ? "bg-primary-dynamic/10 text-primary-dynamic"
                                                : "text-slate-600 hover:bg-slate-50"
                                            }`}
                                    >
                                        <span className={`text-sm font-bold ${String(activeId) === String(cat.id) ? "font-black" : ""}`}>
                                            {cat.name}
                                        </span>
                                        <ChevronRight size={16} className={String(activeId) === String(cat.id) ? "opacity-100" : "opacity-0 group-hover:opacity-100 transition-opacity"} />
                                    </button>
                                ))}
                            </nav>
                        </div>

                        <div className="p-6 border-t border-slate-100 bg-slate-50/50">
                            <p className="text-[10px] text-slate-400 font-medium text-center uppercase tracking-widest">
                                Vendex Chat &copy; 2026
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
