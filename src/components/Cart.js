import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom"; // ✅ أضفناها

function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate(); // ✅

  const total = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  return (
    <div className="container my-5">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="d-flex justify-content-between align-items-center border-bottom py-3">
              <div>
                <h5>{item.title}</h5>
                <p className="text-muted">
                  ${item.price} x {item.quantity || 1}
                </p>
              </div>
              <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
          <h4 className="mt-4">Total: ${total.toFixed(2)}</h4>

          <button
            className="btn btn-success mt-3"
            onClick={() => navigate("/checkout")} // ✅ بدل alert
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;