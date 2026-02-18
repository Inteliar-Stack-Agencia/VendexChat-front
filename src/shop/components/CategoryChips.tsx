interface Category {
    id: string | number;
    name: string;
}

interface CategoryChipsProps {
    categories: Category[];
    activeId: string | number | null;
    onSelect: (id: string | number | null) => void;
}

export function CategoryChips({ categories, activeId, onSelect }: CategoryChipsProps) {
    return (
        <div className="sticky top-[65px] z-30 bg-white border-b border-slate-100 overflow-x-auto no-scrollbar py-3 px-4 flex gap-2">
            <button
                onClick={() => onSelect(null)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${activeId === null
                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-100"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
            >
                Todos
            </button>
            {categories.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => onSelect(cat.id)}
                    className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${activeId === cat.id
                            ? "bg-emerald-600 text-white shadow-md shadow-emerald-100"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                >
                    {cat.name}
                </button>
            ))}
        </div>
    );
}
