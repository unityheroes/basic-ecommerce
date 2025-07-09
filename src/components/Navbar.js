import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYinYang, faShoppingCart, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import { useEffect, useState } from 'react';

function Navbar() {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [darkMode]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} shadow-sm`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <FontAwesomeIcon icon={faYinYang} /> MyShop
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <form className="d-flex ms-auto me-3" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          <ul className="navbar-nav mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>

            <li className="nav-item position-relative">
              <Link className="nav-link" to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                {cartCount > 0 && (
                  <span className="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>

          
           <li className="nav-item ms-3 d-flex align-items-center">
  <div className="form-check form-switch">
    <input
      className="form-check-input"
      type="checkbox"
      id="darkModeSwitch"
      checked={darkMode}
      onChange={() => setDarkMode(!darkMode)}
    />
    <label className="form-check-label text-nowrap" htmlFor="darkModeSwitch">
      {darkMode ? (
        <span><FontAwesomeIcon icon={faMoon} /> Dark</span>
      ) : (
        <span><FontAwesomeIcon icon={faSun} /> Light</span>
      )}
    </label>
  </div>
</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;