// rafce --- using https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

import { NavLink } from "react-router-dom";

const MenuList = () => {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="/">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/products">
          Products
        </a>
      </li>
    </>
  );
}

export default MenuList