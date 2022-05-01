import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="./favicon-96x96.png"
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top mx-2"
            />
            <b>News App</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link active" to="/business">
                Business
              </Link>
              <Link className="nav-link active" to="/entertainment">
                Entertainment
              </Link>
              <Link className="nav-link active" to="/health">
                Health
              </Link>
              <Link className="nav-link active" to="/science">
                Science
              </Link>
              <Link className="nav-link active" to="/sports">
                Sports
              </Link>
              <Link className="nav-link active" to="/technology">
                Technology
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
