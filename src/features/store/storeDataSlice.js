// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { fetchAsyncStores } from "./storeSlice";

// export const fetchAsyncStoreMenu = createAsyncThunk(
//   "store/menu",
//   async (id) => {
//     const response = await axios.get(`http://localhost:3001/storeMenu/${id}`);
//     return response.data;
//   }
// );

// const initialState = {
//   storeMenu: [],
// };

// const storeDataSlice = createSlice({
//   name: "storeMenu",
//   initialState,
//   reducers: {
//     removeStoreMenu: (state) => {
//       state.selectMenu = [];
//     },
//   },
//   extraReducers: {
//     [fetchAsyncStoreMenu.fulfilled]: (state, { payload }) => {
//       console.log("Fetched MNU");
//       return { ...state, storeMenu: payload };
//     },
//     [fetchAsyncStoreMenu.rejected]: () => {
//       console.log("Error");
//     },
//   },
// });

// export const getStoreMenu = (state) => state.storeMenu.storeMenu;
// export default storeDataSlice.reducer;
