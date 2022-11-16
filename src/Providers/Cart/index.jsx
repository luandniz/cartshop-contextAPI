import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log("CAAART", cart);

  const addCart = (item) => {
    let newId = Math.floor(Date.now() * Math.random()).toString(36);
    setCart([...cart, { ...item, id: newId }]);
  };

  const removeCart = (item) => {
    const newListCart = cart.filter((element) => element.id !== item.id);
    setCart(newListCart);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
};
