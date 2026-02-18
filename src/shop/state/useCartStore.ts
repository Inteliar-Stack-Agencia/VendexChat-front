import { useCart } from "../../context/CartContext";
import type { Product } from "../../types";

export function useCartState() {
    const { items, addItem, updateQuantity: originalUpdateQuantity, clearCart, totalItems, totalPrice } = useCart();

    return {
        items,
        addItem,
        updateQuantity: (productId: string | number, delta: number) => {
            const item = items.find(i => String(i.product.id) === String(productId));
            if (item) {
                originalUpdateQuantity(String(productId), item.quantity + delta);
            }
        },
        clearCart,
        totalItems,
        totalPrice,
        // Helper para obtener cantidad de un producto específico
        getItemQuantity: (productId: string | number) => {
            return items.find(i => String(i.product.id) === String(productId))?.quantity || 0;
        }
    };
}
