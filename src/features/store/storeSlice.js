import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const SERVER_URL = "https://tomato-server.herokuapp.com";

export const fetchAsyncStores = createAsyncThunk(
  "stores/allStores",
  async () => {
    const response = await axios.get(`${SERVER_URL}/store/getAll`);
    return response.data;
  }
);
export const fetchAsyncStoreData = createAsyncThunk(
  "store/Data",
  async (id) => {
    const response = await axios.get(`${SERVER_URL}/storedata/${id}`);
    return response.data;
  }
);

export const fetchAsyncStoreMenu = createAsyncThunk(
  "store/menu",
  async (id) => {
    const response = await axios.get(`${SERVER_URL}/storeMenu/${id}`);
    return response.data;
  }
);

const initialState = {
  storelist: [],
  storedata: {},
  storeMenu: [],
};

const storeSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    removeSelectedStore: (state) => {
      state.selectStore = {};
    },
  },
  extraReducers: {
    [fetchAsyncStores.fulfilled]: (state, { payload }) => {
      // console.log("Fetched");
      return { ...state, storelist: payload };
    },
    [fetchAsyncStores.rejected]: () => {
      console.log("Errr");
    },
    [fetchAsyncStoreData.fulfilled]: (state, { payload }) => {
      // console.log("payload");
      return { ...state, storedata: payload };
    },
    [fetchAsyncStoreData.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncStoreMenu.fulfilled]: (state, { payload }) => {
      // console.log("Fetched MNU");
      return { ...state, storeMenu: payload };
    },
    [fetchAsyncStoreMenu.rejected]: () => {
      console.log("Error");
    },
  },
});
export const getUser = (state) => state.stores.user;
export const getStoreMenu = (state) => state.stores.storeMenu;
export const getAllStore = (state) => state.stores.storelist;
export const getStoreData = (state) => state.stores.storedata;
export default storeSlice.reducer;
