import { Menu } from "lucide-react";

const G_GREEN = '#2D5F34';
const G_CREAM = '#F5F1EB';
const G_BROWN = '#6A3E24';
const G_WARM_WHITE = '#FFFDF8';

interface Category {
    id: string | number;
    name: string;
}

interface GauchoCategoryChipsProps {
    categories: Category[];
    activeId: string | number | null;
    onSelect: (id: string | number | null) => void;
    onMenuClick: () => void;
}

export function GauchoCategoryChips({ categories, activeId, onSelect, onMenuClick }: GauchoCategoryChipsProps) {
    const sorted = [...categories].sort((a, b) => a.name.localeCompare(b.name));
    const showMenu = sorted.length > 6;
    const displayCategories = showMenu ? sorted.slice(0, 5) : sorted;

    return (
        <div className="overflow-x-auto no-scrollbar py-3 px-4" style={{ backgroundColor: G_CREAM, borderBottom: '1px solid rgba(45,95,52,0.1)' }}>
            <div className="flex items-center gap-2 max-w-[1440px] mx-auto w-max md:w-full md:justify-center">
                {showMenu && (
                    <button
                        onClick={onMenuClick}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full gaucho-body text-[10px] font-bold uppercase tracking-widest transition-all hover:opacity-75 whitespace-nowrap flex-shrink-0"
                        style={{ backgroundColor: 'rgba(45,95,52,0.1)', color: G_GREEN, border: '1px solid rgba(45,95,52,0.2)' }}
                    >
                        <Menu size={12} />
                        <span>Ver todo</span>
                    </button>
                )}

                {displayCategories.map((cat) => {
                    const isActive = activeId === cat.id;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => onSelect(cat.id)}
                            className="whitespace-nowrap px-4 py-2 rounded-full gaucho-body text-[10px] font-bold uppercase tracking-widest transition-all flex-shrink-0"
                            style={isActive ? {
                                backgroundColor: G_GREEN,
                                color: G_WARM_WHITE,
                                boxShadow: '0 2px 10px rgba(45,95,52,0.35)',
                            } : {
                                backgroundColor: 'transparent',
                                color: G_BROWN,
                                border: '1px solid rgba(106,62,36,0.2)',
                            }}
                        >
                            {cat.name}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
