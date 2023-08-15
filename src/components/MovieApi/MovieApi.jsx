import React, { useEffect, useState } from "react";
import "./MovieApi.css";
import axios from "axios";
const MovieApi = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    // Function to fetch data from API
    const Api_Url = "https://academics.newtonschool.co/api/v1/ott/show";
    const fetchData = async () => {
      try {
        const response = await axios.get(Api_Url, {
          headers: {
            projectId: "aopqdxbd59rz",
          },
        });

        // const jsonData = await response.json();
        setMovieList((prevData)=>[...prevData,...response.data.data]);
        
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
 
  return (
    <div className="movie-container">
      <h2>Netflix Originals</h2>
      <div className="poster-content">
      {movieList.length > 0 &&
        movieList.slice(5, 15).map((movie) => {
          return (
              <div className="carts">
                <img src={movie.thumbnail} />
              </div>           
          );
        })}
        </div>

      <h2>Trending Now</h2>
      <div className="poster-content">
      {movieList.length > 0 &&
        movieList.slice(15, 25).map((movie) => {
          return (
              <div className="carts">
                <img src={movie.thumbnail} />
              </div>           
          );
        })}
        </div>
      <h2>Top Rated</h2>
      <div className="poster-content">
      {movieList.length > 0 &&
        movieList.slice(25, 35).map((movie) => {
          return (
              <div className="carts">
                <img src={movie.thumbnail} />
              </div>           
          );
        })}
        </div>
      <h2>Action Movies</h2>
      <div className="poster-content">
      {movieList.length > 0 &&
        movieList.slice(35, 45).map((movie) => {
          return (
              <div className="carts">
                <img src={movie.thumbnail} />
              </div>           
          );
        })}
        </div>
      <h2>Horror Movies</h2>
      <div className="poster-content">
      {movieList.length > 0 &&
        movieList.slice(45, 55).map((movie) => {
          return (
              <div className="carts">
                <img src={movie.thumbnail} />
              </div>           
          );
        })}
        </div>
      <h2>Romance Movies</h2>
      <div className="poster-content">
      {movieList.length > 0 &&
        movieList.slice(55, 65).map((movie) => {
          return (
              <div className="carts">
                <img src={movie.thumbnail} />
              </div>           
          );
        })}
        </div>
    
      <h2>Documantaries</h2>
      <div className="poster-content">
      {movieList.length > 0 &&
        movieList.slice(65, 75).map((movie) => {
          return (
              <div className="carts">
                <img src={movie.thumbnail} />
              </div>           
          );
        })}
        </div>
        </div>
  );
};

export default MovieApi;
