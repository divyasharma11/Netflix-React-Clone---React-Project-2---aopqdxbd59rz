import React from "react";
import logo from "../images/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from "@mui/material";
const Navbar = () => {
  return (
    <nav>
        <div className="nav-left">
      <div className="logo-container">
        <img src={logo} alt="Netflix Logo" />
      </div>
      <div className="nav-link">
        <Link to="/my-list" className="link" title="my list">
          My List{" "}
        </Link>

        <Link to="/movies" className="link" title="movies">
          Movies
        </Link>

        <Link to="/tv-shows" className="link" title="tv shows">
          TV Shows
        </Link>
      </div>
      </div>
      <div className="nav-right">
       <div className="search-icon">
        <SearchIcon className="srch"/>
       </div>
       <div>
        <Avatar  className="avatar"/>
       </div>
      </div>
    </nav>
  );
};

export default Navbar;
