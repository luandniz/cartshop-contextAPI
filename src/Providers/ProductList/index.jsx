import { createContext } from "react";
import { useContext } from "react";
import { ProductsContext } from "../Products";

export const ProductListContext = createContext();
export const ProductListProvider = ({ children }) => {
  const { products, setProducts } = useContext(ProductsContext);

  const addProduct = (item) => {
    setProducts([...products, item]);
  };

  return (
    <ProductListContext.Provider value={{ addProduct }}>
      {children}
    </ProductListContext.Provider>
  );
};
