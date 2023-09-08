import React, { useContext, useEffect, useState } from 'react'
import "./Style.css";
import Nav from './Nav';
import DataContext from "../DataContextProvider";
import axios from 'axios';
import MovieCard from "../MovieApi/MovieCard"
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const { data } = useContext(DataContext);

 
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://academics.newtonschool.co/api/v1/ott/show",
          {
            headers: {
              projectId: "aopqdxbd59rz",
            },
            params: {
              filter: JSON.stringify({ type: "movie" }),
            },
          }
        );
        setMovies(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from the API:", error);
        setLoading(false);
      }
    };
    useEffect(() => {
    fetchMovies();
  }, []);
 
 
  return (
    < div className='bg'>
    <Nav />
    {data && (
        <>
          {loading ? (
            <div className="loaderContainer">
              <div className="loader"></div>
            </div>
          ) : (
            <div className="poster">
              {movies.map((movie, index) => (
                <MovieCard
                  thumbnail={movie.thumbnail}
                  title={movie.title}
                  showId={movie._id}
                  keywords={movie.keywords}
                  key={index}
                  videoUrl={movie.video_url}
                />
              ))}
            </div>
          )}
        </>
      )}
       
    </div>
  )
}

export default Movies