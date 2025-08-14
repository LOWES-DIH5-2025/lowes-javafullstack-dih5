// rafce --- using https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

import { NavLink } from "react-router-dom";

const MenuList = () => {
  return (
    <>
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/netflix">
          Netflix
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/products">
          Products
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/users">
          Users
        </NavLink>
      </li>
    </>
  );
}

export default MenuList