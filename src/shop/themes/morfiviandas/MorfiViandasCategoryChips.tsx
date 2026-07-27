import { Menu } from "lucide-react";
import { MV_BG, MV_SURFACE, MV_TEXT, MV_CTA } from "./morfiViandasColors";

interface Category {
    id: string | number;
    name: string;
}

interface MorfiViandasCategoryChipsProps {
    categories: Category[];
    activeId: string | number | null;
    onSelect: (id: string | number | null) => void;
    onMenuClick: () => void;
}

export function MorfiViandasCategoryChips({ categories, activeId, onSelect, onMenuClick }: MorfiViandasCategoryChipsProps) {
    const sorted = [...categories].sort((a, b) => a.name.localeCompare(b.name));
    const showMenu = sorted.length > 6;
    const displayCategories = showMenu ? sorted.slice(0, 5) : sorted;

    return (
        <div className="px-4 py-6" style={{ backgroundColor: MV_BG }}>
            <div className="flex items-center justify-center gap-2.5 flex-wrap max-w-3xl mx-auto">
                {showMenu && (
                    <button
                        onClick={onMenuClick}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all hover:opacity-80"
                        style={{ backgroundColor: MV_SURFACE, color: MV_TEXT, border: '1px solid rgba(0,0,0,0.1)' }}
                    >
                        <Menu size={14} />
                        Ver todo
                    </button>
                )}
                {displayCategories.map((cat) => {
                    const isActive = activeId === cat.id;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => onSelect(cat.id)}
                            className="px-6 py-2.5 rounded-full font-bold text-xs transition-all hover:opacity-90 active:scale-95"
                            style={isActive ? {
                                backgroundColor: MV_CTA,
                                color: '#fff',
                                boxShadow: '0 4px 14px rgba(0,140,162,0.3)',
                            } : {
                                backgroundColor: MV_SURFACE,
                                color: MV_TEXT,
                                border: '1px solid rgba(0,0,0,0.1)',
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
