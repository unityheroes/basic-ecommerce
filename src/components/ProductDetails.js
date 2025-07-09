import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dummyReviews from "../fakedata/dummyReviews";
import { useCart } from '../components/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
function ProductDetails() {
const { addToCart } = useCart();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: "", comment: "", rating: 5 });

  const ApiUrl = `https://fakestoreapi.com/products`;

  // Fetch product
  useEffect(() => {
    fetch(`${ApiUrl}/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  
  useEffect(() => {
    const shuffled = dummyReviews.sort(() => 0.5 - Math.random());
    setReviews(shuffled.slice(0, 5));
  }, []);

 
  const handleAddReview = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.comment) {
      setReviews([newReview, ...reviews.slice(0, 4)]); 
      setNewReview({ name: "", comment: "", rating: 5 });
    }
  };

  if (!product) return <div className="text-center my-5">Loading...</div>;

  return (
    <div className="container my-5">
      <div className="row">
        
        <div className="col-lg-8 mx-auto">
          <div className="card shadow-sm p-4">
            <div className="row">
              <div className="col-md-5 text-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid rounded"
                  style={{ maxHeight: "400px", objectFit: "contain" }}
                />
              </div>
              <div className="col-md-7">
                <h2 className="mb-3">{product.title}</h2>
                <h4 className="text-success mb-3">${product.price}</h4>
                <p className="text-muted">{product.description}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Rating:</strong> {product.rating?.rate} ⭐ ({product.rating?.count} reviews)</p>
                <button
  className="btn btn-primary mt-2"
  onClick={() => addToCart(product)}
>
  Add to Cart
</button>
              </div>
            </div>

            
            <div className="mt-5">
              <h4>User Reviews</h4>
             {reviews.map((review, index) => (
  <div key={index} className="mb-3 border-bottom pb-2">
    <strong>{review.name}</strong>
    <div className="text-warning small">
      {[...Array(5)].map((_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={i < review.rating ? solidStar : regularStar}
          className="me-1"
        />
      ))}
    </div>
    <p className="mb-1">{review.comment}</p>
  </div>
))}

              
              <h5 className="mt-4">Add a Review</h5>
              <form onSubmit={handleAddReview} className="border p-3 rounded shadow-sm bg-light">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Comment</label>
                  <textarea
                    className="form-control"
                    rows="2"
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Rating</label>
                  <select
                    className="form-select"
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                  >
                    {[5, 4, 3, 2, 1].map((r) => (
                      <option key={r} value={r}>{r} Stars</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn btn-success">Submit Review</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;