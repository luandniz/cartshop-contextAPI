import { Home } from "./Pages/Home";
import { useContext } from "react";
import { ProductsContext } from "./Providers/Products";

function App() {
  const { products } = useContext(ProductsContext);
  console.log(products);
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
