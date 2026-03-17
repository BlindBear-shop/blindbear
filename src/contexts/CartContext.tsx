import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { CartItem, Product } from "@/data/products";

interface CartContextType {
  items: CartItem[];
  addItem: (
    product: Product,
    size: string,
    color: string,
    quantity?: number
  ) => void;
  removeItem: (
    productId: string,
    size: string,
    color: string
  ) => void;
  updateQuantity: (
    productId: string,
    size: string,
    color: string,
    quantity: number
  ) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

const STORAGE_KEY = "cart_items";

export const CartProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // ✅ Load from localStorage (safe parse)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch {
      setItems([]);
    }
  }, []);

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = useCallback(
    (
      product: Product,
      size: string,
      color: string,
      quantity = 1
    ) => {
      setItems((prev) => {
        const existing = prev.find(
          (i) =>
            i.product.id === product.id &&
            i.size === size &&
            i.color === color
        );

        if (existing) {
          return prev.map((i) =>
            i.product.id === product.id &&
            i.size === size &&
            i.color === color
              ? {
                  ...i,
                  quantity: i.quantity + quantity,
                }
              : i
          );
        }

        return [...prev, { product, size, color, quantity }];
      });
    },
    []
  );

  const removeItem = useCallback(
    (productId: string, size: string, color: string) => {
      setItems((prev) =>
        prev.filter(
          (i) =>
            !(
              i.product.id === productId &&
              i.size === size &&
              i.color === color
            )
        )
      );
    },
    []
  );

  const updateQuantity = useCallback(
    (
      productId: string,
      size: string,
      color: string,
      quantity: number
    ) => {
      if (quantity <= 0) {
        removeItem(productId, size, color);
        return;
      }

      setItems((prev) =>
        prev.map((i) =>
          i.product.id === productId &&
          i.size === size &&
          i.color === color
            ? { ...i, quantity }
            : i
        )
      );
    },
    [removeItem]
  );

  const clearCart = useCallback(() => {
    setItems([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const totalItems = items.reduce(
    (sum, i) => sum + i.quantity,
    0
  );

  const totalPrice = items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error(
      "useCart must be used within CartProvider"
    );
  return context;
};