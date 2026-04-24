import { useSelector } from "react-redux";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function App() {
  const items = useSelector(state => state.cart.items);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>

      <div className="navbar">
        <div>🌱 Paradise Nursery</div>
        <div>🛒 Cart: {totalItems}</div>
      </div>

      <div className="container">
        <ProductList />
        <CartItem />
      </div>

    </div>
  );
}

export default App;