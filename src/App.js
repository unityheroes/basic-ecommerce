import './App.css';
import Navbar from './components/Navbar';
import Silder from './components/Silder';
import ProductList from './components/ProductList';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderSuccess from './components/OrderSuccess';
import { CartProvider } from './components/CartContext';
import Login from './components/Login';
import Register from './components/Signup';
import SearchResults from './components/SearchResults';
import NotFound from './components/NotFound';

function App() {
  return (
    <CartProvider>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Silder />
                <ProductList />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/search" element={<SearchResults />} /> 

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;