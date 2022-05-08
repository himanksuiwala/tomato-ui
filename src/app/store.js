import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import storeReducer from "../features/store/storeSlice";
import storeDataReducer from "../features/store/storeDataSlice";
export const store = configureStore({
  reducer: {
    stores: storeReducer,
    storeData: storeDataReducer,
  },
});
