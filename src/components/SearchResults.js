import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Product from "./Product";

function SearchResults() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query")?.toLowerCase() || "";

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const results = products.filter(
      (product) =>
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
    setFiltered(results);
  }, [products, query]);

  if (loading) return <div className="text-center my-5">Loading...</div>;

  return (
    <div className="container my-5">
      <h2 className="mb-4">Search Results for "<strong>{query}</strong>"</h2>
      {filtered.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {filtered.map((product) => (
            <div className="col" key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;