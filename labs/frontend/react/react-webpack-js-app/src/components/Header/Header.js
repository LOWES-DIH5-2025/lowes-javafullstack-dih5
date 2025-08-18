// import

// comp defn

// export

import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
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
            </ul>
          </div>
        </div>
      </nav>
      <hr/>
    </header>
  );
}

export default Header