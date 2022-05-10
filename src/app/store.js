import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import storeReducer from "../features/store/storeSlice";
import storeDataReducer from "../features/store/storeDataSlice";
import cartReducer from "../features/store/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";
import { persistStore } from "redux-persist";
import rootReducer from "./rootReducer";

export const store = configureStore({reducer:rootReducer})

// export const store = configureStore({
//   reducer: {
//     stores: storeReducer,
//     storeData: storeDataReducer,
//     cart: cartReducer,
//   },
// });

export const persistor = persistStore(store);
