const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

//public route
//POST /api/users/auth

const authUser = asyncHandler(async (req, res) => {
  // const { email, password } = req.body;
  // const user = await User.findOne({ email });
  // if (user && (await user.matchPassword(password))) {
  //   generateToken(res, user._id);
  //   res.status(201).json({
  //     _id: user._id,
  //     name: user.name,
  //     email: user.email,
  //   });
  // } else {
  //   res.status(401);
  //   throw new Error("Invalid email or password");
  // }
  res.status(200).json({ message: "Auth user" });
});

//public route - register a new user
//POST /api/users

const registerUser = asyncHandler(async (req, res) => {
  const { email, password, username } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }
  const newUser = await User.create({
    email,
    password,
    username,
  });
  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      password: newUser.password,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//public route - logout
//POST /api/users/logout

const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "logout user" });
});

//PRIVATE route - get user profile
//GET /api/users/logout

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "user profile user" });
});

//PRIVATE route - update user profile
//PUT /api/users/profile

const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "update user" });
});

module.exports = {
  authUser,
  registerUser,
  logoutUser,
  updateUserProfile,
  getUserProfile,
};
