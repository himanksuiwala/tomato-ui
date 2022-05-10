import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    qty: 0,
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

// const initialState = {
//   // cartItems: localStorage.getItem("cartItems")
//   //   ? JSON.parse(localStorage.getItem("cartItems"))
//   //   : [],
//   cartItems:[],
//   totalqty: 0,
//   cartTotal: 0,
// };
// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       const existingIndex = state.cartItems.findIndex(
//         (item) => item.id === action.payload.id
//       );

//       if (existingIndex >= 0) {
//         state.cartItems[existingIndex] = {
//           ...state.cartItems[existingIndex],
//           cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
//         };
//       } else {
//         let tempProductItem = { ...action.payload, cartQuantity: 1 };
//         state.cartItems.push(tempProductItem);
//       }
//       // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//     },
//   },
// });

export const { addProduct, reset } = cartSlice.actions;
export const getCartQty = (state) => state.cart.qty;
export const getCartitems = (state) => state.cart.items;
export default cartSlice.reducer;
