import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getRegister = createAsyncThunk(
  "login/getRegister",
  async (payload) => {
    const url = "https://academics.newtonschool.co/api/v1/user/signup";
    const res = await axios
      .post(url, payload, {
        headers: {
          projectId: "aopqdxbd59rz",
        },
      })
      .then((data) => data);
    console.log("result", res);
    return res;
  }
);
export const getLogIn = createAsyncThunk("login/getLogIn", async (payload) => {
  const url = "https://academics.newtonschool.co/api/v1/user/login";
  try {
    const res = await axios.post(
      url,
      {
        email: payload.email,
        password: payload.password,
      },
      {
        headers: {
          projectId: "aopqdxbd59rz",
        },
      }
    );
    // .then((data) => data.data);
    console.log("result", res);
    return res;
  } catch (error) {
    console.log("error", error);
  }
});

const initialState = {
  isRegister: false,
  registerMsg: "",
  isLoggedIn: false,
  logInMsg: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    // increment: (state) => {
    //     state.value += 1
    // },
  },
  extraReducers: {
    [getRegister.pending]: (state) => {
      console.log("panding");
      state.isRegister = false;
    },
    [getRegister.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      state.isRegister = true;
    },
    [getRegister.rejected]: (state) => {
      console.log("rejected");
      state.isRegister = false;
    },
    [getLogIn.pending]: (state) => {
      console.log("panding");
    },
    [getLogIn.fulfilled]: (state) => {
      console.log("fulfilled");
      state.isLoggedIn = true;
    },
    [getLogIn.rejected]: (state) => {
      console.log("rejected");
      state.isLoggedIn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = loginSlice.actions;

export default loginSlice.reducer;
