import React, { useEffect, useState } from 'react'
import "./Style.css";
import axios from 'axios';
import Nav from './Nav';
const TvShows = () => {
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTvShows = async () => {
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
        setTvShows((prevTvShows) => [...prevTvShows, ...response.data.data]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from the API:", error);
        setLoading(false);
      }
    };
    fetchTvShows();
  }, []);
  return (
    < div className='bg'>
    <Nav />
    {loading && 
    <span className="loader"></span>
    }

      <div className="poster">
      {tvShows.length > 0 &&
        tvShows.map((show) => {
          return (
              <div className="poster-carts">
                <img src={show.thumbnail} />
              </div>           
          );
        })}
        </div>
       
    </div>
  )
}

export default TvShows