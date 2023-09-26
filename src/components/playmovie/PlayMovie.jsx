import React from 'react'
import { useLocation } from 'react-router-dom';
import "./PlayMovie.css"
const PlayMovie = () => {
    const location = useLocation();
    const videoUrl = location.state?.videoUrl;

  return (
    <div className="Play-video-container">
         <video autoPlay controls className="play-video">
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  )
}

export default PlayMovie;