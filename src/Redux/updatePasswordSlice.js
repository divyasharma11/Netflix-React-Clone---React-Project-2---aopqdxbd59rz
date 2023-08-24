import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUpdatePassword = createAsyncThunk("updatepassword/getUpdatePassword", async () => {
  const url = "https://academics.newtonschool.co/api/v1/user/updateMyPassword";
  try {
    const response = await axios.patch(url, {
      headers: {
        projectId: "aopqdxbd59rz",
      },
    });
    console.log("result", response);
    return response;
  } catch (error) {
    console.log("error", error);
  }
});

const initialState = {
  passwordList: [],
};

export const updateSlice = createSlice({
  name: "update password",
  initialState,
  reducers: {
    // increment: (state) => {
    //     state.value += 1
    // },
  },
  extraReducers: {
    [getUpdatePassword.pending]: (state) => {
      console.log("panding");
    },
    [getUpdatePassword.fulfilled]: (state, action) => {
      console.log("fulfilled", action.payload);
      state. passwordList = action.payload.data.data;
    },
    [getUpdatePassword.rejected]: (state) => {
      console.log("rejected");
      state. passwordList = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {} =updateSlice.actions;

export default updateSlice.reducer;

