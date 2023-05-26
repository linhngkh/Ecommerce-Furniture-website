const express = require("express");
const router = express.Router();
const {
  authUser,
  registerUser,
  logoutUser,
  updateUserProfile,
  getUserProfile,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

//public routes
router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);

// private routes
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

module.exports = router;
