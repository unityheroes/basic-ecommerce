import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useCart } from "../components/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function OrderSuccess() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="text-center border p-5 shadow rounded bg-white">
        <FontAwesomeIcon
          icon={faCheckCircle}
          size="7x"
          className="text-success mb-4"
        />
        <h1 className="text-success mb-3">Your Order Has Been Placed!</h1>
        <p className="lead mb-3">Thank you for shopping with us. Your order was successfully received and is now being processed.</p>
        <p className="text-muted">You will receive an email confirmation shortly with the details.</p>
        <Link to="/" className="btn btn-outline-success mt-4 px-4 py-2">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;