import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    qty: 0,
    user: {},
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
      state.qty += 1;
    },

    userLogin: (state, action) => {
      state.user.put(action.payload);
    },

    reset: (state) => {
      state.items = [];
      state.qty = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, reset, userLogin } = cartSlice.actions;
export const getCartQty = (state) => state.cart.qty;
export const getCartitems = (state) => state.cart.items;
export default cartSlice.reducer;
