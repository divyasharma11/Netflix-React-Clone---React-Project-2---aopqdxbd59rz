import React, { useEffect, useState } from 'react'
import "./Style.css";
import axios from 'axios';
import Nav from './Nav';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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
              filter: JSON.stringify({ type: "tv show" }),
            },
          }
        );
        setMovies((prevTvShows) => [...prevTvShows, ...response.data.data]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from the API:", error);
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);
  return (
    < div className='bg'>
    <Nav />
    {loading && 
    <span className="loader"></span>
    }

      <div className="poster">
      {movies.length > 0 &&
        movies.map((movie) => {
          return (
              <div className="carts">
                <img src={movie.thumbnail} />
              </div>           
          );
        })}
        </div>
       
    </div>
  )
}

export default Movies