// CartContext.js
import React, { createContext, useContext, useState } from "react";

// Step 1: Create context -- so that data can be supplied thru it
const CartContext = createContext();

// Step 2: thru the CartProvider component -- we can supply the data
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((current) => [...current, product]);
  };

  // {
  //   cart: cart,
  //   addToCart: addToCart
  // }
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// useContext facilitates the context available in the components
// custom hook
export const useCart = () => useContext(CartContext);