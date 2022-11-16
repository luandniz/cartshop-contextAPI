import { useContext } from "react";
import { ProductsContext } from "../../Providers/Products";
import { ProductListContext } from "../../Providers/ProductList";
import { Button } from "../../Components/Button";
import { CartContext } from "../../Providers/Cart";

export const ListProducts = () => {
  const { products, setProducts } = useContext(ProductsContext);
  const { addProduct } = useContext(ProductListContext);
  const { addCart } = useContext(CartContext);
  return (
    <ul>
      {products.map((element, index) => (
        <div key={index}>
          <li>{element.name}</li>
          <li>{element.category}</li>
          <li>{element.price}</li>
          <Button children="ADD TO CART" onClick={() => addCart(element)} />
        </div>
      ))}
    </ul>
  );
};
