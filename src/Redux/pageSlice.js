import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTvShow = createAsyncThunk("page/getTvShow", async () => {
  const url = "https://academics.newtonschool.co/api/v1/ott/show";
  try {
    const response = await axios.get(url, {
      headers: {
        projectId: "aopqdxbd59rz",
      },
      params: {
        filter: JSON.stringify({ type: "tv show" }),
      },
    });
    console.log("result", response);
    return response;
  } catch (error) {
    console.log("error", error);
  }
});

export const getMovieShow = createAsyncThunk("page/getMovieShow", async () => {
  const url = "https://academics.newtonschool.co/api/v1/ott/show";
  try {
    const response = await axios.get(url, {
      headers: {
        projectId: "aopqdxbd59rz",
      },
      params: {
        filter: JSON.stringify({ type: "movie" }),
      },
    });
    console.log("result", response);
    return response;
  } catch (error) {
    console.log("error", error);
  }
});

const initialState = {
  tvshowList:[],
  movieshowList: [],
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    // increment: (state) => {
    //     state.value += 1
    // },
  },
  extraReducers: {
    [getTvShow.pending]: (state) => {
      console.log("panding");
    },
    [getTvShow.fulfilled]: (state, action) => {
      console.log("fulfilled", action.payload);
      state.tvshowList = action.payload.data.data;
    },
    [getTvShow.rejected]: (state) => {
      console.log("rejected");
      state.tvshowList = [];
    },
    [ getMovieShow .pending]: (state) => {
      console.log("panding");
    },
    [ getMovieShow .fulfilled]: (state, action) => {
      console.log("fulfilled", action.payload);
      state.movieshowList = action.payload.data.data;
    },
    [ getMovieShow .rejected]: (state) => {
      console.log("rejected");
      state.movieshowList = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = pageSlice.actions;

export default pageSlice.reducer;
