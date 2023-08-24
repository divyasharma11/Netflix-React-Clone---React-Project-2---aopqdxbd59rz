import React, { useEffect, useState } from 'react'
import "./Style.css";
import Nav from './Nav';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieShow } from '../../Redux/pageSlice';
const Movies = () => {
  const dispatch = useDispatch();
  const {movieshowList} = useSelector((state)=> state.page);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(false);
    dispatch(getMovieShow());
  },[]);
  return (
    < div className='bg'>
    <Nav />
    {loading && 
    <span className="loader"></span>
    }

      <div className="poster">
      {movieshowList.length > 0 &&
        movieshowList.map((movie) => {
          return (
              <div className="poster-carts">
                <img src={movie.thumbnail} />
              </div>           
          );
        })}
        </div>
       
    </div>
  )
}

export default Movies