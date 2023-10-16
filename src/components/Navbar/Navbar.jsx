import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <p>My Profile</p>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <p>Portfolio</p>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
