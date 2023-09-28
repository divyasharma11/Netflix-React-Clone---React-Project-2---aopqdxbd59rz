import React, { useEffect, useRef, useState } from "react";
import "./Style.css";
import logo from "../images/logo.png";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
// import { Dropdown } from "@mui/base/Dropdown";
// import { Menu } from "@mui/base/Menu";
// import { MenuButton } from "@mui/base/MenuButton";
// import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
// import { styled } from "@mui/system";
// import avatar from "../images/avatar.jpg";
// import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
// import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import SignOut from "../SignOut";
import MovieCard from "../MovieApi/MovieCard";
import axios from "axios";
import { useContext } from "react";
import DataContext from "../DataContextProvider";
import MenuIcon from "@mui/icons-material/Menu";
import DropdownMenu from "../DropdownMenu";

const Nav = () => {
  const navigate = useNavigate();
  const [show, handleShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [inputVisible, setInputVisible] = useState(false);
  const searchRef = useRef(null);
  const searchContentRef = useRef(null);
  const [searching, setSearching] = useState([]);
  const searchingRef = useRef([]);

  const { setData } = useContext(DataContext);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", this);
    };
  }, []);
  const fetchSearchMovie = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/ott/show",
        {
          headers: {
            projectId: "aopqdxbd59rz",
          },
        }
      );
      searchingRef.current = response.data.data;
      const searchData = searchingRef.current.filter((movie) =>
        movie.title.toLowerCase().includes(inputSearch.toLowerCase())
      );
      setLoading(false);
      setSearching(searchData);
    } catch (error) {
      console.error("Error fetching data from search:", error);
      setLoading(false);
    }
  };

  const inputHandler = (e) => {
    setInputSearch(e.target.value);
    if (e.target.value) {
      fetchSearchMovie();
      searchContentRef.current.style.display = "block";
      setData(false);
    } else {
      searchContentRef.current.style.display = "none";
      searchingRef.current = [];
      setData(true);
    }
  };

  const visibleInputHandler = () => {
    setInputVisible(!inputVisible);
    searchRef.current.style.display = "none";
  };

  const closeIconHandler = () => {
    setInputVisible(false);
    searchRef.current.style.display = "block";
    searchContentRef.current.style.display = "none";
    setInputSearch("");
    setData(true);
  };
  return (
    <>
      <nav className={`navbar ${show && "nav__black"} `}>
        <div className="nav-left">
          <div className="logo-containers" onClick={() => navigate("/home")}>
            <img src={logo} alt="Netflix Logo" className="logoimg" />
          </div>
          <div className="nav-link">
            <Link to="/my-list" className="link" title="my list">
              My List
            </Link>
            <Link to="/movies" className="link" title="movies">
              Movies
            </Link>
            <Link to="/tv-shows" className="link" title="tv shows">
              TV Shows
            </Link>
          </div>
          <div class="dropdown">
            <div class="dropbtn">
              {" "}
              <MenuIcon className="menu-icon" />
            </div>
            <div class="dropdown-content">
              <Link to="/my-list" className="mobile" title="my list">
                My List
              </Link>
              <Link to="/movies" className="mobile" title="movies">
                Movies
              </Link>
              <Link to="/tv-shows" className="mobile" title="tv shows">
                TV Shows
              </Link>
            </div>
          </div>
        </div>

        <div className="nav-right">
          {inputVisible && (
            <div class="search_Container">
              <input
                type="text"
                value={inputSearch}
                className="srch-input-field"
                onChange={inputHandler}
                placeholder="Search"
              />
              <CloseIcon
                className="srch close-srch"
                onClick={closeIconHandler}
              />
            </div>
          )}
          <SearchIcon
            className="srch"
            onClick={visibleInputHandler}
            ref={searchRef}
          />
          <DropdownMenu />
        </div>
      </nav>
      <div className="search-container" ref={searchContentRef}>
        {loading ? (
          <div className="loaderContainer">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="movies-container">
            {searching.map((movie, index) => (
              <MovieCard
                thumbnail={movie.thumbnail}
                title={movie.title}
                showId={movie._id}
                keywords={movie.keywords}
                match="77%"
                key={index}
                videoUrl={movie.video_url}
              />
            ))}
          </div>
        )}
      </div>
      <p className="no_data">No movies here!!!</p>
    </>
  );
};

export default Nav;
