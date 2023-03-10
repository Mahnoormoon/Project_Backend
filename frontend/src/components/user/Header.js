import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from './ToDoCafe_Logo.png';

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      {/* Container wrapper */}
      <div className="container">
        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navbar brand */}
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src={logo}
              height={40}
              alt="ToDoCafe' Logo"
              loading="lazy"
            />
            <h6 className="mt-2"> ToDoCafe'</h6>
          </a>
          {/* Left links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/home">
                &nbsp;&nbsp;Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/aboutus">
              &nbsp;&nbsp;About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/contact">
              &nbsp;&nbsp;Contact Us
              </NavLink>
            </li>
            <li class="nav-item dropdown">
        <Link
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          Services
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li>
            <Link class="dropdown-item" to="/main/musiclisting">Music</Link>
          </li>
          <li>
            <a class="dropdown-item" href="#">Study Methods</a>
          </li>
        </ul>
      </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item me-2">
              <NavLink className="btn btn-outline-white" to="/main/signup">
                Create Account
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="btn btn-outline-white" to="/main/login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* Container wrapper */}
    </nav>
  );
};
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
export default Header;