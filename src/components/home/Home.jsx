import React, { useEffect } from "react";
import "./Home.css";
import MovieApi from "../MovieApi/MovieApi";
import Header from "../header/Header";
import Foot from "../page/Foot";
import Nav from "../page/Nav";
import DataContext from "../DataContextProvider";
import { useContext } from "react";

const Home = () => {
  const {data} =useContext(DataContext);
  return (
    <>
    <Nav />
    {data && 
    <>
      <Header />
       <div className="movie-api">
         <MovieApi /> 
     </div> 
    <Foot />
    </>
    }
    </>
  );
};

export default Home;
