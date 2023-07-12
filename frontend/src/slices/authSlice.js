import { createSlice } from "@reduxjs/toolkit";

//check local storage if we have userInfo, parse to return javascript object
//userInfo state
const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

// create slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    //clear credential
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});
// action
export const { setCredentials, logout } = authSlice.actions;
// when change state, that's reducer
export default authSlice.reducer;
