import { Cart } from "../../Components/Cart";
import { ListProducts } from "../../Components/ListProducts";
export const Home = () => {
  return (
    <div>
      <div>
        <ListProducts />
        <Cart />
      </div>
    </div>
  );
};
