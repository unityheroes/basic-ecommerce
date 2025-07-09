import "./Product.css";
import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function Product({ product }) {
  const { title, description, price, image } = product;
  const { addToCart } = useCart();

  return (
    <div className="card h-100 shadow-sm">
      <img src={image} className="card-img-top product-img" alt={title} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{title}</h5>
          <p className="card-text description text-muted">
            {description.length > 160 ? description.substring(0, 160) + "..." : description}
          </p>
          <h6 className="text-success">${price}</h6>
        </div>

        <div className="d-grid gap-2 mt-3">
          <Link to={`/products/${product.id}`} className="btn btn-outline-primary">
            View Details
          </Link>
          <button
            className="btn btn-success"
            onClick={() => addToCart(product)}
          >
            <FontAwesomeIcon icon={faCartPlus} className="me-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;