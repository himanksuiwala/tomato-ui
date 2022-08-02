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

export const fetchAsyncUserOrder = createAsyncThunk(
  "user/orders",
  async (config) => {
    const response = await axios.get(`http://localhost:3001/cart`, config);
    return response.data;
  }
);

const initialState = {
  user: [],
  orders: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncUserLogin.fulfilled]: (state, { payload }) => {
      return { ...state, user: payload };
    },
    [fetchAsyncUserLogin.rejected]: (state) => {
      alert("Please Check Your Username & Password.");
      state.user = [];
    },
    [fetchAsyncUserLogOut.fulfilled]: (state, { payload }) => {
      state.user = [];
      console.log("USER LoggedOUT", state.user);
    },
    [fetchAsyncUserOrder.fulfilled]: (state, { payload }) => {
      return { ...state, orders: payload };
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const setUser = userSlice.actions;
export const getUserInfo = (state) => state.user.user;
export const getUserOrders = (state) => state.user.orders;
export default userSlice.reducer;
