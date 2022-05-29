import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncUserLogin = createAsyncThunk(
  "user/Login",
  async (cred) => {
    const response = await axios.post(
      "http://localhost:3001/user/login",
      cred,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    return response.data;
  }
);

export const fetchAsyncUserLogOut = createAsyncThunk(
  "user/LogOut",
  async (token) => {
    const response = await axios.get(`http://localhost:3001/user/logout`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    return response.data;
  }
);

const initialState = {
  user: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncUserLogin.fulfilled]: (state, { payload }) => {
      console.log("USER");
      return { ...state, user: payload };
    },
    [fetchAsyncUserLogOut.fulfilled]: (state, { payload }) => {
      console.log("USER LoggedOut");
      return { ...state, user: payload };
    },
  },
});
export const getUserInfo = (state) => state.user.user;
export default userSlice.reducer;
