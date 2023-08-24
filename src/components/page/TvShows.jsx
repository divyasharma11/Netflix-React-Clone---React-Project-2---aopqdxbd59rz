import React, { useEffect, useState } from 'react'
import "./Style.css";
import Nav from './Nav';
import { useDispatch, useSelector } from 'react-redux';
import { getTvShow } from '../../Redux/pageSlice';
const TvShows = () => {
  const dispatch = useDispatch();
  const {tvshowList} = useSelector((state)=> state.page);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(false);
    dispatch(getTvShow());
  },[]);

  return (
    < div className='bg'>
    <Nav />
    {loading && 
    <span className="loader"></span>
    }

      <div className="poster">
      {tvshowList.length > 0 &&
       tvshowList.map((show) => {
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