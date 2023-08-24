import React, { useEffect } from "react";
import "./Style.css";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList } from "../../Redux/movieApiSlice";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

Modal.setAppElement("#root");

const VedioModel = ({ isOpen, onClose }) => {
  const { movieDetail } = useSelector((state) => state.movie);

  const customStyles = {
    content: {
      top: "60%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "700px",
      height: "600px",
      border: "none",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(0,0,0,0.2)",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.1)",
    },
  };
  console.log("movie detail", movieDetail);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Video Modal"
      style={customStyles}
    >
      {movieDetail && (
        <div>
          <video
            src={movieDetail.video_url}
            type="video/mp4"
            controls
            className="vdo"
          />
          <div className="vedio-container">
            <h3>{movieDetail.title}</h3>
            <div className="vdo-contents">
              <div>
                <span className="spcl buton">
                  <PlayArrowIcon className="vd-icon" />
                  Resume
                </span>
                <span className="span">
                  <AddIcon className="vd-icon" />
                </span>
                <span className="span">
                  <ThumbUpOffAltIcon className="vd-icon" />
                </span>
              </div>
              <div>
                <span className="span">
                  <VolumeUpIcon className="vd-icon"/>
                </span>
              </div>
            </div>
            <div className="vdo-contents">
              <div className="vdo-dis">
                <p>{movieDetail.description}</p>
              </div>
              <div>
              <p>Cast : {movieDetail.cast} </p>
              <p>Genres :{movieDetail.keywords} </p>
              <p>Director :{movieDetail.director} </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </Modal>
  );
};

export default VedioModel;
