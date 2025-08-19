// import

// comp defn

// export

import { NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };
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
                <NavLink to="/" className="nav-link" end>Home</NavLink>
              </li>
              {/* Show Products only when logged in */}
              {user && (
                <>
                  <li className="nav-item">
                    <NavLink to="/products" className="nav-link">Products</NavLink>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
              </li>
              
              {/* Show Cart only when logged in */}

              {user && (
                <>
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
                </>
              )}

              {/* Auth buttons */}
              <li className="nav-item ms-3 d-flex align-items-center">
                {user ? (
                  <div className="dropdown">
                    <button 
                      className="btn btn-outline-light dropdown-toggle d-flex align-items-center"
                      type="button" 
                      id="userDropdown" 
                      data-bs-toggle="dropdown" 
                      aria-expanded="false"
                    >
                      <FaUser className="me-1" />
                      {user.email}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                      <li>
                        <button 
                          className="dropdown-item d-flex align-items-center"
                          onClick={handleLogout}
                        >
                          <FaSignOutAlt className="me-2" />
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <NavLink to="/login" className="btn btn-outline-light">
                    <FaSignInAlt className="me-1" />
                    Login
                  </NavLink>
                )}
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