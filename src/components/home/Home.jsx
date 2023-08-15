import React from "react";
import "./Home.css";
import MovieApi from "../MovieApi/MovieApi";
import Nav from "../page/Nav";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
const Home = () => {
 

  return (
    <>
      <div className="background">
        <Nav />
        <div className="head-btn">
    
          <button className="h-btn">
         <PlayArrowIcon className="home-icon" />
          Play</button>
         
          <button className="h-btn">
            <PowerSettingsNewIcon className="home-icon1" />
            More info</button>
            
        </div>
      </div>
      <div className="fade-bottom"></div>
       <div className="movie-api">
         <MovieApi />
         </div>
    </>
  );
};

export default Home;
