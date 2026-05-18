import { Menu } from "lucide-react";

const G_GREEN = '#2D5F34';
const G_GOLDEN = '#D4A574';
const G_CREAM = '#F5EDDB';
const G_BROWN = '#6A3E24';
const G_WARM_WHITE = '#FFFDF8';
const G_CORAL = '#E97B63';

const CAT_EMOJIS: Record<string, string> = {
    perro: '🐕', perros: '🐕', dog: '🐕', dogs: '🐕',
    gato: '🐈', gatos: '🐈', cat: '🐈', cats: '🐈',
};

function getCatEmoji(name: string) {
    return CAT_EMOJIS[name.toLowerCase().trim()] ?? '🐾';
}

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
        <div className="px-4 py-8" style={{ backgroundColor: G_CREAM }}>
            <div className="flex items-center justify-center gap-3 flex-wrap max-w-2xl mx-auto">
                {showMenu && (
                    <button
                        onClick={onMenuClick}
                        className="flex items-center gap-2 px-5 py-3 rounded-2xl gaucho-body text-xs font-bold uppercase tracking-widest transition-all hover:opacity-75"
                        style={{ backgroundColor: 'rgba(45,95,52,0.1)', color: G_GREEN, border: '1px solid rgba(45,95,52,0.2)' }}
                    >
                        <Menu size={14} />
                        Ver todo
                    </button>
                )}
                {displayCategories.map((cat) => {
                    const isActive = activeId === cat.id;
                    const emoji = getCatEmoji(cat.name);
                    return (
                        <button
                            key={cat.id}
                            onClick={() => onSelect(cat.id)}
                            className="px-7 py-3.5 rounded-2xl gaucho-body font-bold uppercase tracking-widest transition-all text-sm hover:opacity-90 active:scale-95"
                            style={isActive ? {
                                backgroundColor: G_GREEN,
                                color: G_WARM_WHITE,
                                boxShadow: `0 4px 16px rgba(45,95,52,0.3)`,
                                border: '2px solid transparent',
                            } : {
                                backgroundColor: G_WARM_WHITE,
                                color: G_BROWN,
                                border: `2px solid rgba(45,95,52,0.15)`,
                                boxShadow: '0 2px 8px rgba(45,95,52,0.06)',
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
