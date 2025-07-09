import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

 const addToCart = (product) => {
  setCartItems((prevItems) => {
    const existingItem = prevItems.find((item) => item.id === product.id);

    if (existingItem) {
      return prevItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
    } else {
      return [...prevItems, { ...product, quantity: 1 }];
    }
  });
};

const removeFromCart = (productId) => {
  setCartItems((prevItems) =>
    prevItems
      .map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);