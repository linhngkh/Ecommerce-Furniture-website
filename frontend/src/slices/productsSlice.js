import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_URL;

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
    const response = await axios.get(`http://localhost:5000/api/products`);
    return response?.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productsFetch.pending, (state, { payload }) => {
      state.status = "pending";
    });
    builder.addCase(productsFetch.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.items = payload;
    });
    builder.addCase(productsFetch.rejected, (state, { payload }) => {
      state.status = "rejected";
    });
  },
});
export default productsSlice.reducer;
