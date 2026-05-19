import { Menu } from "lucide-react";

const M_BG    = '#0f0f1a';
const M_CARD  = '#1a1a2e';
const M_BLUE  = '#3b82f6';
const M_WHITE = '#ffffff';
const M_MUTED = 'rgba(255,255,255,0.5)';

interface Category {
    id: string | number;
    name: string;
}

interface MundoCategoryChipsProps {
    categories: Category[];
    activeId: string | number | null;
    onSelect: (id: string | number | null) => void;
    onMenuClick: () => void;
}

export function MundoCategoryChips({ categories, activeId, onSelect, onMenuClick }: MundoCategoryChipsProps) {
    const sorted = [...categories].sort((a, b) => a.name.localeCompare(b.name));
    const showMenu = sorted.length > 6;
    const displayCategories = showMenu ? sorted.slice(0, 5) : sorted;

    return (
        <div className="px-4 py-6" style={{ backgroundColor: M_BG, borderBottom: '1px solid rgba(59,130,246,0.12)' }}>
            <div className="flex items-center justify-center gap-2.5 flex-wrap max-w-3xl mx-auto">
                {showMenu && (
                    <button
                        onClick={onMenuClick}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all hover:opacity-75"
                        style={{ backgroundColor: 'rgba(59,130,246,0.1)', color: M_BLUE, border: '1px solid rgba(59,130,246,0.3)' }}
                    >
                        <Menu size={14} />
                        Ver todo
                    </button>
                )}
                {displayCategories.map(cat => {
                    const isActive = activeId === cat.id;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => onSelect(cat.id)}
                            className="px-6 py-2.5 rounded-2xl font-bold uppercase tracking-widest transition-all text-sm hover:opacity-90 active:scale-95"
                            style={isActive ? {
                                backgroundColor: M_BLUE,
                                color: M_WHITE,
                                boxShadow: '0 4px 16px rgba(59,130,246,0.35)',
                                border: '2px solid transparent',
                            } : {
                                backgroundColor: M_CARD,
                                color: M_MUTED,
                                border: '2px solid rgba(59,130,246,0.2)',
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
