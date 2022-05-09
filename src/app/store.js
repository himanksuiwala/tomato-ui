import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import storeReducer from "../features/store/storeSlice";
import storeDataReducer from "../features/store/storeDataSlice";
import cartReducer from "../features/store/cartSlice";
export const store = configureStore({
  reducer: {
    stores: storeReducer,
    storeData: storeDataReducer,
    cart: cartReducer,
  },
});
