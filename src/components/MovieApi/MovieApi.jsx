import React, { useContext, useEffect, useState } from "react";
import "./MovieApi.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DataContext from "../DataContextProvider";
import MovieCard from "./MovieCard";
import axios from "axios";

const MovieApi = () => {
  const [original, setOriginal] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [action, setAction] = useState([]);
  const [horror, setHorror] = useState([]);
  const [romance, setRomance] = useState([]);
  const [documentary, setDocumentary] = useState([]);

  const [originalSlice, setOriginalSlice] = useState(1);
  const [trendingSlice, setTrendingSlice] = useState(1);
  const [topRatedSlice, setTopRatedSlice] = useState(1);
  const [actionSlice, setActionSlice] = useState(1);
  const [horrorSlice, setHorrorSlice] = useState(1);
  const [romanceSlice, setRomanceSlice] = useState(1);
  const [documentarySlice, setDocumentarySlice] = useState(1);

  const [loading, setLoading] = useState(false);
  const { data } = useContext(DataContext);

  const movieData = async (filter, page) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/ott/show`,
        {
          headers: {
            projectId: "aopqdxbd59rz",
          },
          params: {
            filter: JSON.stringify(filter),
            page: page,
            limit: 5,
          },
        }
      );
      return response.data.data;
    } catch (error) {
      console.error("Error fetching data from the API:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    const originalFetch = async () => {
      const originalData = await movieData(
        { type: "tv show" },
        originalSlice
      );
      setOriginal(originalData);
      setLoading(false);
    };
    originalFetch();
  }, [originalSlice]);

  useEffect(() => {
    const trendingFetch = async () => {
      const trendingData = await movieData(
        { type: "movie" },
        trendingSlice
      );
      setTrending(trendingData);
      setLoading(false);
    };
    trendingFetch();
  }, [trendingSlice]);

  useEffect(() => {
    const topratedFetch = async () => {
      const topratedData = await movieData(
        { type: "short film" },
        topRatedSlice
      );
      setTopRated(topratedData);
      setLoading(false);
    };
    topratedFetch();
  }, [topRatedSlice]);

  useEffect(() => {
    const actionFetch = async () => {
      const actionData = await movieData(
        { type: "trailer" },
         actionSlice
         );
      setAction(actionData);
      setLoading(false);
    };
    actionFetch();
  }, [actionSlice]);

  useEffect(() => {
    const horrorFetch = async () => {
      const horrorData = await movieData({ type: "documentary" }, horrorSlice);
      setHorror(horrorData);
      setLoading(false);
    };
    horrorFetch();
  }, [horrorSlice]);

  useEffect(() => {
    const romanceFetch = async () => {
      const romanceData = await movieData({ type: "video song" }, romanceSlice);
      setRomance(romanceData);
      setLoading(false);
    };
    romanceFetch();
  }, [romanceSlice]);

  useEffect(() => {
    const documantaryFetch = async () => {
      const documentaryData = await movieData(
        { type: "web series" },
        documentarySlice
      );
      setDocumentary(documentaryData);
      setLoading(false);
    };
    documantaryFetch();
  }, [documentarySlice]);

  const handlSliceChange = (category, increment) => {
    switch (category) {
      case "original":
        setOriginalSlice((prev) => prev + increment);
        break;
      case "trending":
        setTrendingSlice((prev) => prev + increment);
        break;
      case "top":
        setTopRated((prev) => prev + increment);
        break;
      case "action":
        setActionSlice((prev) => prev + increment);
        break;
      case "horror":
        setHorrorSlice((prev) => prev + increment);
        break;
      case "romance":
        setRomanceSlice((prev) => prev + increment);
        break;
      case "documentary":
        setDocumentarySlice((prev) => prev + increment);
        break;
      default:
        break;
    }
  };
  return (
    <>
      {data && (
        <>
            <div className="movie-container">
              <h2>Netflix Originals</h2>
              <div className="paginationButtons">
                <div
                  onClick={() => {
                    handlSliceChange("original", -1); 
                  }}
                  disabled={originalSlice === 1}
                >
                  <ArrowBackIosIcon className="arrowIcon" />
                </div>
                <div
                  onClick={() => {
                    handlSliceChange("original", 1); 
                  }}
                >
                  <ArrowForwardIosIcon className="arrowIcon" />
                </div>
              </div>
              <div className="poster-content">
              {original.map((movie, index) => (
                  <MovieCard
                    thumbnail={movie.thumbnail}
                    title={movie.title}
                    keywords={movie.keywords}
                    showId={movie._id}
                    cast={movie.cast}
                    director={movie.director}
                    match="80% Match"
                    key={index}
                    className="movies"
                    videoUrl={movie.video_url}
                    description={movie.description}
                  />
                  ))}
                  </div>
            </div>
            <div className="movie-container">
              <h2>Trending</h2>
              <div className="paginationButtons">
                <div
                  onClick={() => {
                    handlSliceChange("trending", -1); 
                  }}
                  disabled={trendingSlice === 1}
                >
                  <ArrowBackIosIcon className="arrowIcon" />
                </div>
                <div
                  onClick={() => {
                    handlSliceChange("trending", 1); 
                  }}
                >
                  <ArrowForwardIosIcon className="arrowIcon" />
                </div>
              </div>
              <div className="poster-content">
              { trending.map((movie, index) => (
                  <MovieCard
                    thumbnail={movie.thumbnail}
                    title={movie.title}
                    keywords={movie.keywords}
                    showId={movie._id}
                    cast={movie.cast}
                    director={movie.director}
                    match="80% Match"
                    key={index}
                    className="movies"
                    videoUrl={movie.video_url}
                    description={movie.description}
                  />
                  ))}
                  </div>
            </div>
            <div className="movie-container">
              <h2>Top Rated</h2>
              <div className="paginationButtons">
                <div
                  onClick={() => {
                    handlSliceChange("top", -1); 
                  }}
                  disabled={topRatedSlice === 1}
                >
                  <ArrowBackIosIcon className="arrowIcon" />
                </div>
                <div
                  onClick={() => {
                    handlSliceChange("top", 1); 
                  }}
                >
                  <ArrowForwardIosIcon className="arrowIcon" />
                </div>
              </div>
              <div className="poster-content">
              { topRated.map((movie, index) => (
                  <MovieCard
                    thumbnail={movie.thumbnail}
                    title={movie.title}
                    keywords={movie.keywords}
                    showId={movie._id}
                    cast={movie.cast}
                    director={movie.director}
                    match="80% Match"
                    key={index}
                    className="movies"
                    videoUrl={movie.video_url}
                    description={movie.description}
                  />
                  ))}
                  </div>
            </div>
            <div className="movie-container">
              <h2>Action</h2>
              <div className="paginationButtons">
                <div
                  onClick={() => {
                    handlSliceChange("action", -1); 
                  }}
                  disabled={actionSlice === 1}
                >
                  <ArrowBackIosIcon className="arrowIcon" />
                </div>
                <div
                  onClick={() => {
                    handlSliceChange("action", 1); 
                  }}
                >
                  <ArrowForwardIosIcon className="arrowIcon" />
                </div>
              </div>
              <div className="poster-content">
              { action.map((movie, index) => (
                  <MovieCard
                    thumbnail={movie.thumbnail}
                    title={movie.title}
                    keywords={movie.keywords}
                    showId={movie._id}
                    cast={movie.cast}
                    director={movie.director}
                    match="80% Match"
                    key={index}
                    className="movies"
                    videoUrl={movie.video_url}
                    description={movie.description}
                  />
                  ))}
                  </div>
            </div>
            <div className="movie-container">
              <h2>Horror</h2>
              <div className="paginationButtons">
                <div
                  onClick={() => {
                    handlSliceChange("horror", -1);
                  }}
                  disabled={horrorSlice === 1}
                >
                  <ArrowBackIosIcon className="arrowIcon" />
                </div>
                <div
                  onClick={() => {
                    handlSliceChange("horror", 1); 
                  }}
                >
                  <ArrowForwardIosIcon className="arrowIcon" />
                </div>
              </div>
              <div className="poster-content">
              { horror.map((movie, index) => (
                  <MovieCard
                    thumbnail={movie.thumbnail}
                    title={movie.title}
                    keywords={movie.keywords}
                    showId={movie._id}
                    cast={movie.cast}
                    director={movie.director}
                    match="80% Match"
                    key={index}
                    className="movies"
                    videoUrl={movie.video_url}
                    description={movie.description}
                  />
                  ))}
                  </div>
            </div>
            <div className="movie-container">
              <h2>Romance</h2>
              <div className="paginationButtons">
                <div
                  onClick={() => {
                    handlSliceChange("romance", -1); 
                  }}
                  disabled={romanceSlice === 1}
                >
                  <ArrowBackIosIcon className="arrowIcon" />
                </div>
                <div
                  onClick={() => {
                    handlSliceChange("romance", 1); 
                  }}
                >
                  <ArrowForwardIosIcon className="arrowIcon" />
                </div>
              </div>
              <div className="poster-content">
              { romance.map((movie, index) => (
                  <MovieCard
                    thumbnail={movie.thumbnail}
                    title={movie.title}
                    keywords={movie.keywords}
                    showId={movie._id}
                    cast={movie.cast}
                    director={movie.director}
                    match="80% Match"
                    key={index}
                    className="movies"
                    videoUrl={movie.video_url}
                    description={movie.description}
                  />
                  ))}
                  </div>
            </div>
            <div className="movie-container">
              <h2>Documentary</h2>
              <div className="paginationButtons">
                <div
                  onClick={() => {
                    handlSliceChange("documentary", -1); 
                  }}
                  disabled={documentarySlice === 1}
                >
                  <ArrowBackIosIcon className="arrowIcon" />
                </div>
                <div
                  onClick={() => {
                    handlSliceChange("documentary", 1);
                  }}
                >
                  <ArrowForwardIosIcon className="arrowIcon" />
                </div>
              </div>
              <div className="poster-content">
              { documentary.map((movie, index) => (
                  <MovieCard
                    thumbnail={movie.thumbnail}
                    title={movie.title}
                    keywords={movie.keywords}
                    showId={movie._id}
                    cast={movie.cast}
                    director={movie.director}
                    match="80% Match"
                    key={index}
                    className="movies"
                    videoUrl={movie.video_url}
                    description={movie.description}
                  />
                  ))}
                  </div>
            </div>
        </>
      )}
    </>
  );
};

export default MovieApi;
