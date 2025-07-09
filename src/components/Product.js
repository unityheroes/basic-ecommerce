import "./Product.css"
function Product({ product }) {
  const { title, description, price, image } = product;

  return (
    <div className="card h-100">
      <img src={image} className="card-img-top product-img" alt={title} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{title}</h5>
<p className="card-text description">
  {description.length > 160 ? description.substring(0, 160) + "..." : description}
</p>        </div>
        <a href="#" className="btn btn-primary mt-3">Details</a>
      </div>
    </div>
  );
}

export default Product;