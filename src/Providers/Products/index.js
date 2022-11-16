import { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { name: "John", category: "male", price: "10.00" },
    { name: "Mary", category: "female", price: "20.00" },
    { name: "Monica", category: "female", price: "30,00" },
    { name: "Ashley", category: "female", price: "15.99" },
    { name: "Billy", category: "male", price: "10.90" },
    { name: "Jack", category: "male", price: "33.88" },
  ]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
