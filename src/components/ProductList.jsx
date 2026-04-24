import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulent" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor" },
  { id: 3, name: "Peace Lily", price: 20, category: "Flowering" },
  { id: 4, name: "Spider Plant", price: 12, category: "Indoor" },
  { id: 5, name: "Cactus", price: 8, category: "Succulent" },
  { id: 6, name: "Orchid", price: 25, category: "Flowering" }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = (id) => {
    return cartItems.some(item => item.id === id);
  };

  const categories = ["Indoor", "Succulent", "Flowering"];

  return (
    <div>
      <h2>Plants</h2>

      {categories.map(cat => (
        <div key={cat}>
          <h3>{cat}</h3>

          {plants
            .filter(p => p.category === cat)
            .map(p => (
              <div key={p.id}>
                <h4>{p.name}</h4>
                <p>Price: ${p.price}</p>

                <button
                  onClick={() => dispatch(addToCart(p))}
                  disabled={isInCart(p.id)}
                >
                  {isInCart(p.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;