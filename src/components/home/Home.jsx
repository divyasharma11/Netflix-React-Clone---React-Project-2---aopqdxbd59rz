import React from "react";
import "./Home.css";
import MovieApi from "../MovieApi/MovieApi";
import Header from "../header/Header";
const Home = () => {

  return (
    <>
      <Header />
       <div className="movie-api">
         <MovieApi />
         </div>
    </>
  );
};

export default Home;
