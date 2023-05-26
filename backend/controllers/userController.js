const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

//public route
//POST /api/users/auth

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
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
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "user logged out" });
});

//PRIVATE route - get user profile
//GET /api/users/profile

const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user.id,
    username: req.user.username,
    email: req.user.email,
  };
  res.status(200).json(user);
});

//PRIVATE route - update user profile
//PUT /api/users/profile

const updateUserProfile = asyncHandler(async (req, res) => {
  //get user info
  const user = await User.findById(req.user._id);

  //check user to update
  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    //check password to update
    if (req.body.password) {
      user.password = req.body.password;
    }
    //save new updated user
    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error("User not found ");
  }
});

module.exports = {
  authUser,
  registerUser,
  logoutUser,
  updateUserProfile,
  getUserProfile,
};
