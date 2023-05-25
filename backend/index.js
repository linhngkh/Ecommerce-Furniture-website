require("dotenv").config();
const express = require("express");
const app = express();
const colors = require("colors");
const PORT = process.env.PORT;
const connectDB = require("./config/db");
//connect db
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.bgMagenta);
});
