import { createContext, useContext, useReducer, useState, useEffect } from "react";

export interface CartItem {
  id: string;
  name: string;
  engName: string;
  brand: string;
  price: number;
  qty: number;
  image: string;
  cafe24ProductNo?: number;
}

type CartAction =
  | { type: "ADD"; item: CartItem }
  | { type: "REMOVE"; id: string }
  | { type: "UPDATE_QTY"; id: string; qty: number }
  | { type: "CLEAR" };

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "ADD": {
      const existing = state.find((i) => i.id === action.item.id);
      if (existing) {
        return state.map((i) =>
          i.id === action.item.id ? { ...i, qty: i.qty + action.item.qty } : i
        );
      }
      return [...state, action.item];
    }
    case "REMOVE":
      return state.filter((i) => i.id !== action.id);
    case "UPDATE_QTY":
      if (action.qty <= 0) return state.filter((i) => i.id !== action.id);
      return state.map((i) => (i.id === action.id ? { ...i, qty: action.qty } : i));
    case "CLEAR":
      return [];
  }
}

function loadCart(): CartItem[] {
  try {
    const stored = localStorage.getItem("waoh_cart");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

interface CartContextValue {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "qty"> & { qty?: number }) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  totalCount: number;
  totalPrice: number;
  shippingFee: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, dispatch] = useReducer(cartReducer, undefined, loadCart);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("waoh_cart", JSON.stringify(items));
  }, [items]);

  const totalCount = items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shippingFee = totalPrice >= 45000 || totalPrice === 0 ? 0 : 3000;

  const addToCart = (item: Omit<CartItem, "qty"> & { qty?: number }) =>
    dispatch({ type: "ADD", item: { ...item, qty: item.qty ?? 1 } });
  const removeFromCart = (id: string) => dispatch({ type: "REMOVE", id });
  const updateQty = (id: string, qty: number) => dispatch({ type: "UPDATE_QTY", id, qty });
  const clearCart = () => dispatch({ type: "CLEAR" });

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        totalCount,
        totalPrice,
        shippingFee,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
