import type { Category } from "../../types";
import { ProductCard } from "./ProductCard";
import "./CategorySection.css";

interface Props {
  category: Category;
}

export function CategorySection({ category }: Props) {
  console.log("[CategorySection] category keys:", Object.keys(category));
  console.log("[CategorySection] category:", JSON.stringify(category, null, 2));
  const products = category.products ?? [];
  console.log("[CategorySection] products count:", products.length);
  if (products.length === 0) return null;

  return (
    <section className="category-section" id={`category-${category.id}`}>
      <h2 className="category-section__title">{category.name}</h2>
      <div className="category-section__grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
