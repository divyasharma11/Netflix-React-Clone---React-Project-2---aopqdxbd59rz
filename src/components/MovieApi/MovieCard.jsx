import React, { useEffect, useRef, useState } from "react";
import "./MovieApi.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import RemoveIcon from "@mui/icons-material/Remove";
import VedioModel from "../page/VedioModel";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const MovieCard = ({thumbnail,keywords,showId,inMyList = false,onMyListChange,}) => {
  const [myListItem, setIsInMyListItem] = useState(inMyList);
  const [list, setList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [like,setLike]=useState(false);
  const navigate = useNavigate();

  const handleOpenModal = (id) => {
    setOpenModal(true);
  };

  function closeModal() {
    setOpenModal(false);
  }
  const token = localStorage.getItem("Token");

  const addToWatchlist = async () => {
    try {
      const response = await axios.patch(
        "https://academics.newtonschool.co/api/v1/ott/watchlist/like",
        { showId: showId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            projectId: "aopqdxbd59rz",
          },
        }
      );

      setList((prevState) => !prevState);
      onMyListChange();
    } catch (error) {
      console.error("Error in Add/Remove API:", error);
    }
  };
 
  return (
    <>
      <div className="cord">
        <div className="carts" onClick={() => handleOpenModal(showId)}>
          <img src={thumbnail} alt="img" />
        </div>
        <div className="hide-container">
          {/* <div className="first">
            <p>{title}</p>
            <span>
              <VolumeUpIcon />
            </span>
          </div> */}
          <div className="color">
            <div className="second">
              <div className="second-content">
                <span
                  className="spcl span"
                  onClick={() => handleOpenModal(showId)}
                >
                  <PlayArrowIcon className="sm-icon" />
                </span>
                <span className="span" onClick={addToWatchlist}>
                  {myListItem ? (
                    <RemoveIcon className="sm-icon" />
                    ) : (
                      <AddIcon className="sm-icon" />
                  )}
                </span>
                <span 
                // className="span" 
                className={`span ${like && "like-span"}`}
                onClick={() => setLike(!like)}
                >
                  <ThumbUpOffAltIcon
                  //  className="sm-icon"
                   className={`sm-icon ${like && "like-btn"}`}
                    />
                </span>
              </div>
              <div>
                <span
                  className="span"
                  onClick={() => handleOpenModal(showId)}
                >
                  <KeyboardArrowDownIcon className="sm-icon" />
                </span>
                {openModal && (
                  <VedioModel 
                  isOpen={openModal} 
                  onClose={closeModal}
                    keywords={keywords}
                    showId={showId}
                    myListItem={myListItem}
                    onClick={addToWatchlist}
                  />
                )}
              </div>
            </div>
            <div className="third">
              <p>80% match</p>
            </div>
            <div className="fourth">
              <p>{keywords}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
