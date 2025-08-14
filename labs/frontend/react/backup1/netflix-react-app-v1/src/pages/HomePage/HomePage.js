import React from "react";
import NetflixPage from "../NetflixPage/NetflixPage";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="px-2 py-3 my-3 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">
          Welcome to Netflix App!
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            This app demonstrates the core features of React with sample Netflix app.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/netflix" className="btn btn-primary btn-lg px-4 gap-3">
              Browse Netflix
            </Link>
            <Link
              to="/users"
              className="btn btn-outline-secondary btn-lg px-4">
              Browse Users
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
