import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMovieList = createAsyncThunk("movie/getMovieList", async () => {
  const url = "https://academics.newtonschool.co/api/v1/ott/show";
  try {
    const response = await axios.get(url, {
      headers: {
        projectId: "aopqdxbd59rz",
      },
    });
    return response;
  } catch (error) {
    console.log("error", error);
  }
});
export const getMovieListById = createAsyncThunk("movie/getMovieListById", async (id) => {
  const url = `https://academics.newtonschool.co/api/v1/ott/show/${id}`;
  try {
    const response = await axios.get(url, {
      headers: {
        projectId: "aopqdxbd59rz",
      },
    });
    return response;
  } catch (error) {
    console.log("error", error);
  }
});

const initialState = {
  movieList: [],
  movieDetail:[],
};

export const movieApiSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    // increment: (state) => {
    //     state.value += 1
    // },
  },
  extraReducers: {
    [getMovieList.fulfilled]: (state, action) => {
      state.movieList = action.payload.data.data;
    },
    [getMovieList.rejected]: (state) => {
      console.log("rejected");
      state.movieList = [];
    },
    [getMovieListById.fulfilled]: (state, action) => {
      state. movieDetail = action.payload.data.data;
    },
    [getMovieListById.rejected]: (state) => {
      console.log("rejected");
      state. movieDetail = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {} =movieApiSlice.actions;

export default movieApiSlice.reducer;
