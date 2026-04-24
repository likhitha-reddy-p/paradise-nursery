import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart
} from "../redux/CartSlice";

function CartItem() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (items.length === 0) {
      alert("Cart is empty!");
      return;
    }

    alert(`Order placed successfully! 🌱 Total: $${total}`);
    dispatch(clearCart());
  };

  return (
    <div className="cart">
      <h2>Cart</h2>

      {items.map(item => (
        <div key={item.id}>
          <h4>{item.name}</h4>

          <p>
            ${item.price} × {item.quantity} = ${item.price * item.quantity}
          </p>

          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>

          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <h3>Total Cart Value: ${total}</h3>

      <button onClick={handleCheckout}>
        Checkout
      </button>

      <br /><br />

      <button onClick={() => window.scrollTo(0, 0)}>
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;