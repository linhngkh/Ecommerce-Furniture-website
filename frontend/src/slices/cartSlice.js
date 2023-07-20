import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      //check if item is in the cart and find cart index
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        //product = action.payload
        //set initial product value = 1
        const temporaryProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temporaryProduct);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
