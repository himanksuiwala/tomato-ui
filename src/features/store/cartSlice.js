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

    reset: (state) => {
      state.items = [];
      state.qty = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, reset } = cartSlice.actions;
export const getCartQty = (state) => state.cart.qty;
export const getCartitems = (state) => state.cart.items;
export default cartSlice.reducer;
