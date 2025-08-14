// Component Skeleton -- may have import, fn defn which returns JSX, export

import { Link } from "react-router-dom";
import MenuList from "../MenuList/MenuList";
import { useCart } from "../../contexts/CartContext";

// fn comp with anonymous fn
const Header = function () {
  const { cart } = useCart();

  // must return JSX
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            React Demo App!
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <MenuList />
            </ul>
          </div>
          <button className="btn btn-danger">Cart({cart.length})</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
