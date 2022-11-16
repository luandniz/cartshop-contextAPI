import { CartProvider } from "./Cart";
import { ProductListProvider } from "./ProductList";
import { ProductsProvider } from "./Products";

export const Providers = ({ children }) => {
  return (
    <ProductsProvider>
      <ProductListProvider>
        <CartProvider>{children}</CartProvider>
      </ProductListProvider>
    </ProductsProvider>
  );
};
