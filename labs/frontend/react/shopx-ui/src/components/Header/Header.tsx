// import

// comp defn

// export

import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../contexts/CartContext';

const Header = () => {
  const { cartCount } = useCart();
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">React Training</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Products</a> */}
                <NavLink to="/products" className="nav-link">Products</NavLink>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Contact</a> */}
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
              </li>
              <li className="nav-item ms-3 d-flex align-items-center">
                <NavLink to="/cart" className="btn btn-outline-light position-relative">
                  <FaShoppingCart className="me-1" />
                  Cart
                  {cartCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartCount}
                      <span className="visually-hidden">items in cart</span>
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr/>
    </header>
  );
}

export default Header