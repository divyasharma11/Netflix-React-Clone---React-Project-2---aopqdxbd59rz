import React from "react";
import "./Home.css";
import MovieApi from "../MovieApi/MovieApi";
import Nav from "../page/Nav";

const Home = () => {
 

  return (
    <>
      <div className="background">
        <Nav />
        <div className="head-btn">
          <button className="h-btn">Play</button>
          <button className="h-btn">My List</button>
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
