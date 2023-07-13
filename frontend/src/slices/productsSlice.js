import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: null,
  items: [],
};
//action creator
export const productsFetch = createAsyncThunk(
  //action type
  "products/productsFetch",
  //payloadCreator
  async () => {
    const response = await axios.get("http://localhost:5000/api/products");
    return response?.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});
export default productsSlice.reducer;
