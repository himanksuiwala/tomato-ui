import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const SERVER_URL = "https://tomato-server.herokuapp.com";
export const fetchAsyncUserOrder = createAsyncThunk(
  "user/orders",
  async (config) => {
    const response = await axios.get(`${SERVER_URL}cart`, config);
    return response.data;
  }
);

const initialState = {
  orderList: [],
};

const OrderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncUserOrder.fulfilled]: (state, { payload }) => {
      console.log("fet");
      return { ...state, orderList: payload };
    },
  },
});

export const getOrder = (state) => state.orders.orderList;
