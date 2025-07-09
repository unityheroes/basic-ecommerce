import { useState } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

function Checkout() {
  const { cartItems, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [canSubmit, setCanSubmit] = useState(false);

  const handleChange = (e) => {
    const updatedData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(updatedData);

    // Check if all fields are filled
    const allFilled = Object.values(updatedData).every((value) => value.trim() !== "");
    setCanSubmit(allFilled);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  const handleOrderClick = (e) => {
    if (!canSubmit) {
      e.preventDefault();
      alert("Please fill in all fields");
      return;
    }

    clearCart();
  };

  if (cartItems.length === 0) {
    return <div className="container my-5"><h3>Your cart is empty.</h3></div>;
  }

  return (
    <div className="container my-5">
      <h2>Checkout</h2>
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
        </div>
        <div className="col-12">
          <label className="form-label">Address</label>
          <input type="text" name="address" className="form-control" value={formData.address} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Phone Number</label>
          <input type="text" name="phone" className="form-control" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="col-12">
          <h5 className="checkout-total"  >Total: ${total.toFixed(2)}</h5>
          <Link
            to="/order-success"
            className="btn btn-success mt-2"
            onClick={handleOrderClick}
          >
            Place Order
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Checkout;