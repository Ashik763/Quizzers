import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="d-flex justify-content-center   header shadow p-3 bg-body-tertiary rounded">
      <nav className="navbar navbar-expand-lg bg-body-tertiary w-75">
        <div className="container-fluid">
         <h2>Quizzers</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">Topics</li>
              <li className="nav-item">Statistics</li>
              <li className="nav-item">Blog</li>
             

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
