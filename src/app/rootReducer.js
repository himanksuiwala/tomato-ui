import storeReducer from "../features/store/storeSlice";
import storeDataReducer from "../features/store/storeDataSlice";
import cartReducer from "../features/store/cartSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig={
    key:'root',
    storage,
    whitelist:["cart"]
}

const rootReducer = combineReducers({
  stores: storeReducer,
  storeData: storeDataReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig,rootReducer);
