import React, { useContext, useEffect, useState } from "react";
import "./Style.css";
import Nav from "./Nav";
import MovieCard from "../MovieApi/MovieCard";
import axios from "axios";
import DataContext from "../DataContextProvider"
const MyMovieList = () => {
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(false);
 
 const {data} = useContext(DataContext);

  const token = localStorage.getItem('Token');

  const  fetchMyDataList = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/ott/watchlist/like",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            projectId: "aopqdxbd59rz",
          },
        }
      );
      console.log("line 29",response)
      setListData(response.data.data.shows);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching myList data from the API:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyDataList();
  }, []);
console.log("my data",listData)

  return ( 
      <div className="mylist-container">
      <Nav />
      <div className="data">
      {data && (
        <>
          {loading ? (
            <div className="loaderContainer">
              <div className="loader"></div>
            </div>
          ) : (
             <div className="mylist-content">
            {listData.length > 0 ? (
              listData.map((add) => (
                  <MovieCard
                    key={add._id}
                    thumbnail={add.thumbnail}
                    title={add.title}
                    showId={add._id}
                    keywords={add.keywords}
                    match="67%"
                    inMyList={true}
                    onMyListChange={fetchMyDataList}
                  />
                ))
              ) : (
                <h1 style={{color:"white"}}>No movies here !!</h1>
              )}
              
            </div>
          )}
        </>
      )}
      </div>
      </div>  
  );
};

export default MyMovieList;
