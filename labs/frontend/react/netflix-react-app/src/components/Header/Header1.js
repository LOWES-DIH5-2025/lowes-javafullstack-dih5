import { useCart } from "../../contexts/CartContext";
import MenuList from "../MenuList/MenuList";

const Header = function () {
  const { cart } = useCart();
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            My Big React App!
          </a>
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
          <div className="collapse navbar-collapse">
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