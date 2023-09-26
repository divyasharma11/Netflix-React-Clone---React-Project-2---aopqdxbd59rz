import React, { useEffect, useState } from "react";
import "./Header.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import {imgList} from '../Poster'
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
      const changeMovieRandomly = () => {
        const randomIndex = Math.floor(Math.random() * imgList.length);
        setCurrentIndex(randomIndex);
        setTimeout(changeMovieRandomly, 120000);
      };
  
      changeMovieRandomly();
      return () => {
        clearTimeout(changeMovieRandomly);
      };
    }, [currentIndex]);

    
  return (
    <div className="header-container">
       <div className="moviePosterContainer"> 
          <div className="head-btn">
            <button className="h-btn one" onClick={() => navigate("/movies")}>   
              <PlayArrowIcon className="home-icon" />
               Play                 
            </button>
            <button className="h-btn" onClick={() => navigate("/tv-shows")}>
              <PowerSettingsNewIcon className="home-icon1" />
              More 
            </button>
          </div>
        <img
          src={imgList[currentIndex]?.src}
          alt="Movie"
          className="moviePosterImage"
        />
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
};

export default Header;
