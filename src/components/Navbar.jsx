import React from "react";
import logo from "../imgs1/logo2.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-light">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="logo" className="h-100" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/jobfeed" className="nav-link">
                Job Feeds
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/work" className="nav-link">
                Working In Canada
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav me-5">
            <Button className="btn1" text="Sign Up" />
            <Button className="btn2" text="Sign In" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
