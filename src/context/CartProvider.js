import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([]);
    const [totalValue, setTotalValue] = useState();

    const addCart = (produto) => {
        const item = cart.find(item => item.id === produto.id);

        if (item) {
            const save = cart.map((cart) => {
                cart.id === item.id ? cart.quantidade = cart.quantidade + 1 : cart
                return cart;
            })
            return setCart([...save])
        }

        setCart([...cart, { ...produto }])
    }

    const removeCart = (produto) => {
        const item = cart.find(item => item.id === produto.id);

        if (item && item.quantidade > 1) {
            const save = cart.map((cart) => {
                cart.id === item.id ? cart.quantidade = cart.quantidade - 1 : cart;
                return cart;
            })
            return setCart([...save])
        }

        const remove = cart.filter(item => item.id !== produto.id);
        setCart([...remove]);
    }

    const store = {
        cart,
        removeCart,
        totalValue,
        addCart,
        setTotalValue,
    }

    return (
        <CartContext.Provider value={store}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext)
    const { ...store } = context
    return { ...store }
}