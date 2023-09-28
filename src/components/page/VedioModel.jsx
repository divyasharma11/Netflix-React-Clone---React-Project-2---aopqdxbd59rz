import React, { useEffect, useState } from "react";
import "./Style.css";
import Modal from "react-modal";
import {useSelector } from "react-redux";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import axios from "axios";
import MovieCard from "../MovieApi/MovieCard";
import CloseIcon from "@mui/icons-material/Close";
import { Tooltip } from "@mui/material";

 Modal.setAppElement("#root");
const customStyles = {
  content: {
    position:"absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "800px",
    height: "600px",
    border: "none",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0,0,0,0.8)",
    overflowY: "scroll", 
      margin: "20px 0"

  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.7)",
  },
};

const VedioModel = ({ isOpen, onClose , myListItem,showId,onClick,}) => {
  const[videoContent,setVideoContent]=useState({});
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [like,setLike]=useState(false);
  const [isMute, setIsMute] = useState(false);
  

  const fetchVideoContent = async () => {
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/ott/show/${showId}`,

        {
          headers: {
            projectId: "aopqdxbd59rz",
          },
        }
      );

      setVideoContent(response.data.data);
      console.log("content: ", videoContent);
    } catch (error) {
      console.error("Error in Movie extra data API:", error);
    }
  };

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/ott/show",
        {
          headers: {
            projectId: "aopqdxbd59rz",
          },
        }
      );
      setMovies(response.data.data);
      console.log("movies-content: ", movies);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching extra data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchVideoContent();
      fetchMovies();
    }
  }, [isOpen, showId]);

  const volumeOnHandler = () => {
    setIsMute(true);
  };

  const volumeOffHandler = () => {
    setIsMute(false);
  };
 
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Video Modal"
      style={customStyles}
      className="modal"
    >
        <CloseIcon className="modal_close" onClick={onClose} />
          <video
            src={videoContent.video_url}
            type="video/mp4"
            muted={isMute}
            controls
            autoPlay
            className="vdo"
          />
          <div className="vedio-container">
            <h3>{videoContent.title}</h3>
            <div className="vdo-contents">
              <div>
              <Tooltip title="Play" placement="top">
                <span className="buton">
                  <PlayArrowIcon className="vd-icons" />
                  play
                </span>
               </Tooltip>
               <Tooltip 
                title={myListItem ? "Remove from MyList" : "Add to MyList"}
                placement="top" >
                <span className="span" onClick={onClick}>
                  { myListItem ?(
                 <RemoveIcon className="vd-icon" />
                  ):(

                  <AddIcon className="vd-icon" />
                  )}
                </span>
                </Tooltip>
                <Tooltip title={like ? "Dislike" : "Like"} placement="top">
                <span 
                className={`span ${like && "like-span"}`}
                onClick={() => setLike(!like)}
                >
                  <ThumbUpOffAltIcon
                   className={`vd-icon ${like && "like-btn"}`}
                    />
                </span>
                </Tooltip>
              </div>
              <div className=" volume">
              {isMute ? (
                  <Tooltip title="Unmute" placement="top">
                    <span className="span ">
                    <VolumeOffIcon
                      className="vd-icon volumeOff"
                      onClick={volumeOffHandler}
                    />
                    </span>
                  </Tooltip>
                ) : (
                  <Tooltip title="mute" placement="top">
                   <span className="span ">
                    <VolumeUpIcon
                      className="vd-icon"
                      onClick={volumeOnHandler}
                    />
                    </span>
                  </Tooltip>
                )}
              </div>
            </div>
            <div className="vdo-contents two">
              <div className="vdo-dis">
                <p>{videoContent.description}</p>
              </div>
              <div className="vdo-dis2" >
              <p>Cast : {videoContent.cast} </p>
              <p>Genres :{videoContent.keywords} </p>
              <p>Director :{videoContent.director} </p>
              </div>
            </div>
          </div>
          <div className="vdo-more-container">
                {loading ? (
                  <div className="loader-container">
                    <div className="loader"></div>
                  </div>
                ) : (
                  <div className="extra-movie">
                    {movies.slice(10,30).map((movie, index) => (
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
              </div>
    </Modal>

  );
};

export default VedioModel;
