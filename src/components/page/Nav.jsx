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

      setSearching(searchData);
    } catch (error) {
      console.error("Error fetching data from search:", error);
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
  
 const closeIconHandler=()=>{
  setInputVisible(false);
  searchRef.current.style.display = "block";
  searchContentRef.current.style.display = "none";
  setInputSearch("");
  setData(true);
 }
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
            <div search-container>
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
          {/* <div>
            <Dropdown>
              <TriggerButton className="nav-Dropdown">
                <img src={avatar} alt="Avatar" className="avatar" />
              </TriggerButton>
              <Menu slots={{ listbox: StyledListbox }} className="menu-list">
                <StyledMenuItem className="accountItems">
                  <div className="icon-text">
                    <img src={avatar} alt="Avatar" className="AvatarImg" />
                    <p className="icontxt">{userInfo?.userName}</p>
                  </div>
                </StyledMenuItem>
                <StyledMenuItem className="drop-items">
                  <div className="icon-text">
                    <ModeOutlinedIcon className="drop-icons" />
                    <p
                      className="icontxt"
                      onClick={() => navigate("/manage-profile")}
                    >
                      Manage Profiles
                    </p>
                  </div>
                </StyledMenuItem>
                <StyledMenuItem className="accountItems">
                  <div className="icon-text">
                    <AdminPanelSettingsOutlinedIcon className="drop-icons" />
                    <p
                      className="icontxt"
                      onClick={() => navigate("/coming-soon")}
                    >
                      Transfer Profile
                    </p>
                  </div>
                </StyledMenuItem>
                <StyledMenuItem className="accountItems">
                  <div className="icon-text">
                    <PermIdentityOutlinedIcon className="drop-icons" />
                    <p className="icontxt" onClick={() => navigate("/password")}>
                     Update Password
                    </p>
                  </div>
                </StyledMenuItem>
                <StyledMenuItem className="accountItems">
                  <div className="icon-text">
                    <HelpOutlineOutlinedIcon className="drop-icons" />
                    <p
                      className="icontxt"
                      onClick={() => navigate("/coming-soon")}
                    >
                      Help Center
                    </p>
                  </div>
                </StyledMenuItem>
                <StyledMenuItem className="accountItems">
                  <div className="icon-text">
                    <SubscriptionsOutlinedIcon className="drop-icons" />
                    <p
                      className="icontxt"
                      onClick={() => navigate("/subscription")}
                    >
                      My Subscription
                    </p>
                  </div>
                </StyledMenuItem>
                <StyledMenuItem className="accountItems">
                  <div className="last-Icon">
                    <p className="icontxt" onClick={() => SignOut(navigate)}>
                      Sign out of Netflix
                    </p>
                  </div>
                </StyledMenuItem>
              </Menu>
            </Dropdown>
          </div> */}
        </div>
      </nav>
      <div className="search-container" ref={searchContentRef}>
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
      </div>
    </>
  );
};
// const blue = {
//   100: "#DAECFF",
//   200: "#99CCF3",
//   400: "#3399FF",
//   500: "#007FFF",
//   600: "#0072E5",
//   900: "#003A75",
// };

// const grey = {
//   50: "#f6f8fa",
//   100: "#eaeef2",
//   200: "#d0d7de",
//   300: "#afb8c1",
//   400: "#8c959f",
//   500: "#6e7781",
//   600: "#57606a",
//   700: "#424a53",
//   800: "#32383f",
//   900: "#24292f",
// };

// const StyledListbox = styled("ul")(
//   ({ theme }) => `
//   font-family: IBM Plex Sans, sans-serif;
//   font-size: 0.875rem;
//   box-sizing: border-box;
//   min-width: 200px;
//   overflow: auto;
//   outline: 0px;
//   z-index: 1;
//   `
// );

// const StyledMenuItem = styled(MenuItem)(
//   ({ theme }) => `
//   list-style: none;
//   padding: 8px;
//   border-radius: 8px;
//   cursor: default;
//   user-select: none;

//   &:last-of-type {
//     border-bottom: none;
//   }

//   &.${menuItemClasses.focusVisible} {
//     outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
//     background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
//     color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
//   }

//   &.${menuItemClasses.disabled} {
//     color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
//   }
//   `
// );

// const TriggerButton = styled(MenuButton)(
//   ({ theme }) => `
//   font-family: IBM Plex Sans, sans-serif;
//   font-size: 0.875rem;
//   font-weight: 600;
//   box-sizing: border-box;
//   min-height: calc(1.5em + 22px);
//   border-radius: 12px;
//   padding: 8px 14px;
//   line-height: 1.5;
//   background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
//   border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
//   color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};

//   transition-property: all;
//   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//   transition-duration: 120ms;

//   &:hover {
//     background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
//     border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
//   }

//   &:focus-visible {
//     border-color: ${blue[400]};
//     outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
//   }
//   `
// );
export default Nav;
