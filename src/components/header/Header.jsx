import React, { useEffect, useState } from "react";
import "./Header.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import {imgList} from '../Poster'
import Nav from "../page/Nav";
const Header = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

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
        <Nav />
      <div className="moviePosterContainer">
        <div className="moviePosterContent">
          <h1 className="moviePosterTitle">
            {imgList[currentIndex]?.title}
          </h1>
          <h4 className="moviePosterDescription">
            {imgList[currentIndex]?.description}
          </h4>
          <div className="head-btn">
            <button className="h-btn">
              <PlayArrowIcon className="home-icon" />
              Play
            </button>
            <button className="h-btn">
              <PowerSettingsNewIcon className="home-icon1" />
              More info
            </button>
          </div>
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
