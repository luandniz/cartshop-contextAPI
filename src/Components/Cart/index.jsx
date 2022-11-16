import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";
import { Button } from "../Button";

export const Cart = () => {
  const { cart, removeCart } = useContext(CartContext);
  // const cartLocal = JSON.parse(localStorage.getItem("@ContextCart"))
  return (
    <ul>
      <h3>CART</h3>
      {cart.map((element, index) => (
        <div key={index}>
          <li>{element.name}</li>
          <li>{element.price}</li>
          <Button
            children="REMOVE FROM CART"
            onClick={() => removeCart(element)}
          />
        </div>
      ))}
    </ul>
  );
};
