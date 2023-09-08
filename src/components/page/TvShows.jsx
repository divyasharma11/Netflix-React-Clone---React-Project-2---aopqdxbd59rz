import React, { useContext, useEffect, useState } from 'react'
import "./Style.css";
import Nav from './Nav';
import DataContext from "../DataContextProvider";
import axios from 'axios';
import MovieCard from "../MovieApi/MovieCard"

const TvShows = () => {
 const [tvShow,setTvShow]=useState([]);
  const [loading, setLoading] = useState(true);

  const { data } = useContext(DataContext);

  
    const fetchTvshow = async () => {
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
        setTvShow(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from the API:", error);
        setLoading(false);
      }
    };
  
  useEffect(()=>{
    fetchTvshow();
  },[]);

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
              {tvShow.map((movie, index) => (
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

export default TvShows