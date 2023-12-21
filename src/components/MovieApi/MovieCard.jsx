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
import { Tooltip } from "@mui/material";
const MovieCard = ({
  videoUrl,
  thumbnail,
  keywords,
  showId,
  inMyList = false,
  onMyListChange,
}) => {
  const [myListItem, setMyListItem] = useState(inMyList);
  const [openModal, setOpenModal] = useState(false);
  const [like, setLike] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = (id) => {
    setOpenModal(true);
  };

  function closeModal(id) {
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
      setMyListItem((prevState) => !prevState);
      onMyListChange();
    } catch (error) {
      console.error("Error in Add/Remove API:", error);
    }
  };

  const handlePlayMovie = () => {
    navigate("/playmovie", {
      state: { videoUrl },
    });
  };
  return (
    <>
      <div className="cord">
        <div className="carts" onClick={handlePlayMovie}>
          <img src={thumbnail} alt="img" />
        </div>
        <div className="hide-container">
          <div className="color">
            <div className="second">
              <div className="second-content">
                <Tooltip title="Play" placement="top">
                  <span className="spcl span" onClick={handlePlayMovie}>
                    <PlayArrowIcon className="sm-icon" />
                  </span>
                </Tooltip>
                <Tooltip
                  title={myListItem ? "Remove from MyList" : "Add to MyList"}
                  placement="top"
                >
                  <span className="span" onClick={addToWatchlist}>
                    {myListItem ? (
                      <RemoveIcon className="sm-icon" />
                    ) : (
                      <AddIcon className="sm-icon" />
                    )}
                  </span>
                </Tooltip>
                <Tooltip title={like ? "Dislike" : "Like"} placement="top">
                  <span
                    className={`span ${like && "like-span"}`}
                    onClick={() => setLike(!like)}
                  >
                    <ThumbUpOffAltIcon
                      className={`sm-icon ${like && "like-btn"}`}
                    />
                  </span>
                </Tooltip>
              </div>
              <div>
                <Tooltip title="More Info" placement="top">
                  <span
                    className="span"
                    onClick={() => handleOpenModal(showId)}
                  >
                    <KeyboardArrowDownIcon className="sm-icon" />
                  </span>
                </Tooltip>
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
