import Product from "./Product";
import { useEffect ,useState} from "react";

const UrlApi = "https://fakestoreapi.com/products";


function ProductList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
    fetch(UrlApi)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching products:", error));
}, []);
    return (
        <div className="container">
            <h3 className="text-center">Our Products</h3>
            <div className="row">
                {products.map((product) => {
                    return (
                        <div className="col-md-3 mt-2" key={product.id}>
                            <Product product= {product} />
                        </div>
                    );
                })}
                <div className="col-md-12 p-3">



                </div>
            </div>
        </div>

    );
}
export default ProductList;