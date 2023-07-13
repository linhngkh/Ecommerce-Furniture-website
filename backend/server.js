import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;
import colors from "colors";
import cookieParser from "cookie-parser";
import cors from "cors";

//connect mongoDB
import connectDB from "./config/db.js";
connectDB();

import userRoutes from "./routes/userRoutes.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Define the CORS middleware
const corsMiddleware = (req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "*"
  ); // Update with your allowed domain
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, PATCH, OPTIONS");
  next();
};

// Apply the CORS middleware to all routes
app.use(corsMiddleware);

app.use("/api/users", userRoutes);
app.get("/", (req, res) => res.send("Server is ready"));

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server running on port ${port}`.bgBlue));
