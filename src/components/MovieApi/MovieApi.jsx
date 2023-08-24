import React, { useEffect, useState } from "react";
import "./MovieApi.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList, getMovieListById } from "../../Redux/movieApiSlice";
import { useNavigate } from "react-router-dom";
import VedioModel from "../page/VedioModel";

const MovieApi = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { movieList } = useSelector((state) => state.movie);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  
  const handleOpenModal = (id) => {
    setOpenModal(true);
    dispatch(getMovieListById(id));
  };
  
  function closeModal() {
    setOpenModal(false);
  }
  return (
    <div className="movie-container">
      <h2>Netflix Originals</h2>
      <div className="poster-content">
        {movieList.length > 0 &&
          movieList.slice(5, 15).map((movie) => {
            return (
              <div className="cord">
                <div className="carts">
                  <img src={movie.thumbnail} />
                </div>
                <div className="hide-container">
                  <div className="first">
                    <p>{movie.title}</p>
                    <span>
                      <VolumeUpIcon />
                    </span>
                  </div>
                  <div className="color">
                    <div className="second">
                      <div className="second-content">
                        <span className="spcl span">
                          <PlayArrowIcon className="sm-icon" />
                        </span>
                        <span className="span">
                          <AddIcon className="sm-icon" />
                        </span>
                        <span className="span">
                          <ThumbUpOffAltIcon className="sm-icon" />
                        </span>
                      </div>
                      <div>
                        <span className="span" onClick={()=>handleOpenModal(movie._id)}>
                          <KeyboardArrowDownIcon className="sm-icon" />
                        </span>
                        <VedioModel isOpen={openModal} onClose={closeModal} />
                      </div>
                    </div>
                    <div className="third">
                      <p> {movie.keywords}</p>
                    </div>
                    <div className="fourth">
                      <p>{movie.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <h2>Trending Now</h2>
      <div className="poster-content">
        {movieList.length > 0 &&
          movieList.slice(15, 25).map((movie) => {
            return (
              <div className="cord">
                <div className="carts">
                  <img src={movie.thumbnail} />
                </div>
                <div className="hide-container">
                  <div className="first">
                    <p>{movie.title}</p>
                    <span>
                      <VolumeUpIcon />
                    </span>
                  </div>
                  <div className="color">
                    <div className="second">
                      <div className="second-content">
                        <span className="spcl span">
                          <PlayArrowIcon className="sm-icon" />
                        </span>
                        <span className="span">
                          <AddIcon className="sm-icon" />
                        </span>
                        <span className="span">
                          <ThumbUpOffAltIcon className="sm-icon" />
                        </span>
                      </div>
                      <div>
                        <span className="span">
                          <KeyboardArrowDownIcon className="sm-icon" />
                        </span>
                      </div>
                    </div>
                    <div className="third">
                      <p> {movie.keywords}</p>
                    </div>
                    <div className="fourth">
                      <p>{movie.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <h2>Top Rated</h2>
      <div className="poster-content">
        {movieList.length > 0 &&
          movieList.slice(25, 35).map((movie) => {
            return (
              <div className="cord">
                <div className="carts">
                  <img src={movie.thumbnail} />
                </div>
                <div className="hide-container">
                  <div className="first">
                    <p>{movie.title}</p>
                    <span>
                      <VolumeUpIcon />
                    </span>
                  </div>
                  <div className="color">
                    <div className="second">
                      <div className="second-content">
                        <span className="spcl span">
                          <PlayArrowIcon className="sm-icon" />
                        </span>
                        <span className="span">
                          <AddIcon className="sm-icon" />
                        </span>
                        <span className="span">
                          <ThumbUpOffAltIcon className="sm-icon" />
                        </span>
                      </div>
                      <div>
                        <span className="span">
                          <KeyboardArrowDownIcon className="sm-icon" />
                        </span>
                      </div>
                    </div>
                    <div className="third">
                      <p> {movie.keywords}</p>
                    </div>
                    <div className="fourth">
                      <p>{movie.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <h2>Action Movies</h2>
      <div className="poster-content">
        {movieList.length > 0 &&
          movieList.slice(35, 45).map((movie) => {
            return (
              <div className="cord">
                <div className="carts">
                  <img src={movie.thumbnail} />
                </div>
                <div className="hide-container">
                  <div className="first">
                    <p>{movie.title}</p>
                    <span>
                      <VolumeUpIcon />
                    </span>
                  </div>
                  <div className="color">
                    <div className="second">
                      <div className="second-content">
                        <span className="spcl span">
                          <PlayArrowIcon className="sm-icon" />
                        </span>
                        <span className="span">
                          <AddIcon className="sm-icon" />
                        </span>
                        <span className="span">
                          <ThumbUpOffAltIcon className="sm-icon" />
                        </span>
                      </div>
                      <div>
                        <span className="span">
                          <KeyboardArrowDownIcon className="sm-icon" />
                        </span>
                      </div>
                    </div>
                    <div className="third">
                      <p> {movie.keywords}</p>
                    </div>
                    <div className="fourth">
                      <p>{movie.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <h2>Horror Movies</h2>
      <div className="poster-content">
        {movieList.length > 0 &&
          movieList.slice(45, 55).map((movie) => {
            return (
              <div className="cord">
                <div className="carts">
                  <img src={movie.thumbnail} />
                </div>
                <div className="hide-container">
                  <div className="first">
                    <p>{movie.title}</p>
                    <span>
                      <VolumeUpIcon />
                    </span>
                  </div>
                  <div className="color">
                    <div className="second">
                      <div className="second-content">
                        <span className="spcl span">
                          <PlayArrowIcon className="sm-icon" />
                        </span>
                        <span className="span">
                          <AddIcon className="sm-icon" />
                        </span>
                        <span className="span">
                          <ThumbUpOffAltIcon className="sm-icon" />
                        </span>
                      </div>
                      <div>
                        <span className="span">
                          <KeyboardArrowDownIcon className="sm-icon" />
                        </span>
                      </div>
                    </div>
                    <div className="third">
                      <p> {movie.keywords}</p>
                    </div>
                    <div className="fourth">
                      <p>{movie.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <h2>Romance Movies</h2>
      <div className="poster-content">
        {movieList.length > 0 &&
          movieList.slice(55, 65).map((movie) => {
            return (
              <div className="cord">
                <div className="carts">
                  <img src={movie.thumbnail} />
                </div>
                <div className="hide-container">
                  <div className="first">
                    <p>{movie.title}</p>
                    <span>
                      <VolumeUpIcon />
                    </span>
                  </div>
                  <div className="color">
                    <div className="second">
                      <div className="second-content">
                        <span className="spcl span">
                          <PlayArrowIcon className="sm-icon" />
                        </span>
                        <span className="span">
                          <AddIcon className="sm-icon" />
                        </span>
                        <span className="span">
                          <ThumbUpOffAltIcon className="sm-icon" />
                        </span>
                      </div>
                      <div>
                        <span className="span">
                          <KeyboardArrowDownIcon
                            className="sm-icon"
                            onClick={() => navigate("/model")}
                          />
                        </span>
                      </div>
                    </div>
                    <div className="third">
                      <p> {movie.keywords}</p>
                    </div>
                    <div className="fourth">
                      <p>{movie.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <h2>Documantaries</h2>
      <div className="poster-content">
        {movieList.length > 0 &&
          movieList.slice(65, 75).map((movie) => {
            return (
              <div className="cord">
                <div className="carts">
                  <img src={movie.thumbnail} />
                </div>
                <div className="hide-container">
                  <div className="first">
                    <p>{movie.title}</p>
                    <span>
                      <VolumeUpIcon />
                    </span>
                  </div>
                  <div className="color">
                    <div className="second">
                      <div className="second-content">
                        <span className="spcl span">
                          <PlayArrowIcon className="sm-icon" />
                        </span>
                        <span className="span">
                          <AddIcon className="sm-icon" />
                        </span>
                        <span className="span">
                          <ThumbUpOffAltIcon className="sm-icon" />
                        </span>
                      </div>
                      <div>
                        <span className="span">
                          <KeyboardArrowDownIcon
                            className="sm-icon"
                            onClick={() => navigate("/model")}
                          />
                        </span>
                      </div>
                    </div>
                    <div className="third">
                      <p> {movie.keywords}</p>
                    </div>
                    <div className="fourth">
                      <p>{movie.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MovieApi;
