const jwt = require("jsonwebtoken");

const expressAsyncHandler = require("express-async-handler");
const User = require("../models/User");
const ExpressAsyncHandler = require("express-async-handler");

const protect = ExpressAsyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not Authorized, invalid token");
    }
  } else {
    res.status(401);
    throw new Error("Not Authorized, no token");
  }
});
module.exports = { protect };
