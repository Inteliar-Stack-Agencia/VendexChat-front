import type { Category } from "../../types";
import "./CategorySidebar.css";

interface Props {
    categories: Category[];
    activeId: string | null;
    onSelect: (id: string | null) => void;
}

export function CategorySidebar({ categories, activeId, onSelect }: Props) {
    const handleClick = (id: string | null) => {
        onSelect(id);
        if (id === null) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const el = document.getElementById(`category-${id}`);
            if (el) {
                const navHeight = 20; // Sidebar doesn't need as much offset as top nav
                const y = el.getBoundingClientRect().top + window.scrollY - navHeight;
                window.scrollTo({ top: y, behavior: "smooth" });
            }
        }
    };

    return (
        <aside className="category-sidebar">
            <div className="category-sidebar__sticky">
                <h3 className="category-sidebar__title">Categorías</h3>
                <nav className="category-sidebar__nav">
                    <button
                        className={`category-sidebar__item${activeId === null ? " category-sidebar__item--active" : ""}`}
                        onClick={() => handleClick(null)}
                    >
                        Todos
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`category-sidebar__item${activeId === cat.id ? " category-sidebar__item--active" : ""}`}
                            onClick={() => handleClick(cat.id)}
                        >
                            {cat.name}
                        </button>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
