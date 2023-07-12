import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// auth user/set token
//route POST /api/users/auth
//access public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth user" });
});

// Register a new user
//route POST /api/users
//access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  res.status(200).json({ message: "register user" });
});

// Log put user
//route POST /api/users/logout
//access public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "logput user" });
});

// Get user profile
//route GET /api/users/profile
//access private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "profile user" });
});

// Update user profile
//route PUT /api/users/profile
//access private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "update profile user" });
});
export {
  authUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  registerUser,
};
