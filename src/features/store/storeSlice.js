import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncStores = createAsyncThunk(
  "stores/allStores",
  async () => {
    const response = await axios.get(`http://localhost:3001/store/list`);
    return response.data;
  }
);

const initialState = {
  storelist: {},
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
      console.log("Fetched");
      return { ...state, storelist: payload };
    },

    [fetchAsyncStores.rejected]:()=> {
      console.log("Errr");
    },
  },
});

export const getAllStore = (state) =>state.stores.storelist

export default storeSlice.reducer