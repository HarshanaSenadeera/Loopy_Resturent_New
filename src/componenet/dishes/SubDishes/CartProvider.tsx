
// CartContext.tsx
import React, { createContext, useContext, useState,ReactNode  } from 'react';
// DishItem.ts
export interface DishItem {
    id: number;
    title: string;
    price: number;
    pic: string;
    quantity: number;
}

interface CartContextType {
    cartItems: DishItem[];
    setCartItems: React.Dispatch<React.SetStateAction<DishItem[]>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<DishItem[]>([]);

    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
