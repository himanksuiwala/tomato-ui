import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import storeReducer from "../features/store/storeSlice"
export const store = configureStore({
  reducer: {
    stores:storeReducer
  },
});
