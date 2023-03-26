import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="d-flex justify-content-center   header shadow p-3 bg-body-tertiary rounded">
      <nav className="navbar navbar-expand-lg bg-body-tertiary w-75">
        <div className="container-fluid">
         <h2><NavLink to='/'  className= { ({ isActive }) => (isActive ? 'active topic-name text-decoration-none' : ' topic-name text-decoration-none')  } > Quizzers </NavLink> </h2>
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
              <li className="nav-item"><NavLink to='/topics'  className= { ({ isActive }) => (isActive ? 'active topic-name text-decoration-none' : ' topic-name text-decoration-none')  } > Topics </NavLink> </li>
              {/* <li className="nav-item"><Link to='/topics' className= {` topic-name text-decoration-none `} active> Topics </Link> </li> */}
              <li className="nav-item"><NavLink to="/statistics" className= { ({ isActive }) => (isActive ? ' active topic-name text-decoration-none' : ' topic-name text-decoration-none')  }>Statistics </NavLink> </li>
              <li className="nav-item"><NavLink to="/blog" className={ ({ isActive }) => (isActive ? ' active topic-name text-decoration-none' : ' topic-name text-decoration-none')  }> Blog </NavLink> </li>
        
             

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
