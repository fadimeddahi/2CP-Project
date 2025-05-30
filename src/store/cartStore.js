import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.id === product.id);
          
          if (existingItem) {
            // If item exists, increase quantity
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          
          // If item doesn't exist, add it with quantity 1
          return {
            items: [...state.items, { ...product, quantity: 1 }],
          };
        }),

      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        })),

      clearCart: () => set({ items: [] }),

      updateQuantity: (productId, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        })),      getTotalPrice: () => {
        const items = get().items || [];
        return items.reduce(
          (total, item) => total + (Number(item.price) || 0) * (item.quantity || 0),
          0
        );
      },
    }),
    {
      name: 'cart-storage', // unique name for localStorage key
    }
  )
);

export default useCartStore;
