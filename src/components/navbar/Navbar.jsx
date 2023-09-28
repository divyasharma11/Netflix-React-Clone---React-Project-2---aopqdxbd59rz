import React from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="logo-container">
        <img
          src={logo}
          alt="Netflix Logo"
          className="logoimg"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="sign-link">
        <Link to={"/signin"} className="link">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
