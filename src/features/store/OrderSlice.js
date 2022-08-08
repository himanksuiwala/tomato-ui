import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncUserOrder = createAsyncThunk(
  "user/orders",
  async (config) => {
    const response = await axios.get(`http://localhost:3001/cart`, config);
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
