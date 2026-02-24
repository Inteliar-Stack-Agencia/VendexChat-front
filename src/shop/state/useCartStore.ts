import { useCart } from "../../context/CartContext";
import type { Product } from "../../types";

export function useCartState() {
    const { items, addItem, updateQuantity: originalUpdateQuantity, removeItem, clearCart, totalItems, totalPrice } = useCart();

    return {
        items,
        addItem,
        removeItem,
        updateQuantity: (productId: string | number, delta: number, deliveryDay?: string) => {
            const item = items.find(i =>
                String(i.product.id) === String(productId) && i.delivery_day === deliveryDay
            );
            if (item) {
                originalUpdateQuantity(String(productId), item.quantity + delta, deliveryDay);
            }
        },
        clearCart,
        totalItems,
        totalPrice,
        // Helper para obtener cantidad de un producto específico (opcionalmente por día)
        getItemQuantity: (productId: string | number, deliveryDay?: string) => {
            if (deliveryDay) {
                return items.find(i =>
                    String(i.product.id) === String(productId) && i.delivery_day === deliveryDay
                )?.quantity || 0;
            }
            // Si no hay día, sumamos todos los del mismo producto (para vista general)
            return items
                .filter(i => String(i.product.id) === String(productId))
                .reduce((sum, i) => sum + i.quantity, 0);
        }
    };
}
