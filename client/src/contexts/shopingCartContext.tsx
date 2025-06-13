import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { IdType } from "../types/idType";

type ShoppingCartProviderProps = {
    children: ReactNode;
}

type ShopingCartContext = {
    getItemQuantity: (id: IdType, size: number) => number;
    increaseCartQuantity: (id: IdType, by: number, size: number) => void;
    decreaseCartQuantity: (id: IdType, size: number) => void;
    removeFromCart: (id: IdType, size: number) => void;
    cleanCart: () => void;
    cartQuantity: number;
    cartItems: CartItem[];
}

export type CartItem = {
    id: IdType;
    // name: string;  
    quantity: number;
    size: number;
    // color:string;
    // size: number;
    // price: number;
    // img: string;
}

const ShoppingCartContext = createContext({} as ShopingCartContext)

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        try {
            const storedCart = localStorage.getItem("shopping-cart");
            return storedCart ? JSON.parse(storedCart) : [];
        } catch (e) {
            console.error("Failed to load cart from localStorage", e);
            return [];
        }
    });


    useEffect(() => {
        localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

    const getItemQuantity = (id: IdType, size: number) => {
        return cartItems.find(it => it.id === id && it.size === size)?.quantity || 0;
    }

    const increaseCartQuantity = (id: IdType, by: number, size: number) => {
        setCartItems(currItems => {
            const existingItem = currItems.find(it => it.id === id && it.size === size);

            if (!existingItem) {
                return [...currItems, { id, quantity: by, size }];
            } else {
                return currItems.map(it => {
                    if (it.id === id && it.size === size) {
                        return { ...it, quantity: it.quantity + by };
                    } else {
                        return it;
                    }
                });
            }
        });
    };


    const decreaseCartQuantity = (id: IdType, size: number) => {
        setCartItems(currItems => {
            const item = currItems.find(it => it.id === id && it.size === size);

            if (item?.quantity === 1) {
                return currItems.filter(it => !(it.id === id && it.size === size));
            } else {
                return currItems.map(it => {
                    if (it.id === id && it.size === size) {
                        return { ...it, quantity: it.quantity - 1 };
                    } else {
                        return it;
                    }
                });
            }
        });
    };


    const removeFromCart = (id: IdType, size: number) => {
        setCartItems(items => items.filter(it => !(it.id === id && it.size === size)));
    };

    const cleanCart = () => {
        setCartItems([])
    }


    return (
        <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cleanCart, cartQuantity, cartItems }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}