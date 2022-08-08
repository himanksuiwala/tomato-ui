import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const SERVER_URL = "http://localhost:3001";

export const fetchAsyncUserLogin = createAsyncThunk(
  "user/Login",
  async (cred) => {
    const response = await axios.post(`${SERVER_URL}/user/login`, cred, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    return response.data;
  }
);

export const fetchAsyncUserRegister = createAsyncThunk(
  "user/Register",
  async (cred) => {
    const response = await axios.post(`${SERVER_URL}/user`, cred, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    console.log(response.data);
    return response.data;
  }
);
export const fetchAsyncUserLogOut = createAsyncThunk(
  "user/LogOut",
  async (token) => {
    const response = await axios.get(`${SERVER_URL}/user/logout`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    return response.data;
  }
);

export const fetchAsyncUserOrder = createAsyncThunk(
  "user/orders",
  async (config) => {
    const response = await axios.get(`${SERVER_URL}/cart`, config);
    return response.data;
  }
);

export const fetchAsyncStoreLogin = createAsyncThunk(
  "store/Login",
  async (config) => {
    const response = await axios.post(`${SERVER_URL}/store/login`, config, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    console.log(response.data);
    return response.data;
  }
);

export const fetchAsyncStoreRegister = createAsyncThunk(
  "store/Registers",
  async (config) => {
    const response = await axios.post(`${SERVER_URL}/store`, config, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    console.log(response.data);
    return response.data;
  }
);

const initialState = {
  user: [],
  orders: [],
  store: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncStoreRegister.fulfilled]: (state, { payload }) => {
      return { ...state, store: payload };
    },
    [fetchAsyncStoreRegister.rejected]: (state) => {
      alert("Please Check Your Username & Password.");
      state.store = [];
    },

    [fetchAsyncStoreLogin.fulfilled]: (state, { payload }) => {
      return { ...state, store: payload };
    },
    [fetchAsyncStoreLogin.rejected]: (state) => {
      alert("Please Check Your Username & Password.");
      state.store = [];
    },
    [fetchAsyncUserLogin.fulfilled]: (state, { payload }) => {
      return { ...state, user: payload };
    },
    [fetchAsyncUserLogin.rejected]: (state) => {
      alert("Please Check Your Username & Password.");
      state.user = [];
    },
    [fetchAsyncUserRegister.fulfilled]: (state, { payload }) => {
      return { ...state, user: payload };
    },
    [fetchAsyncUserRegister.rejected]: (state) => {
      alert("Account with same username already exists");
      state.user = [];
    },
    [fetchAsyncUserLogOut.fulfilled]: (state, { payload }) => {
      state.user = [];
      state.orders = [];
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
