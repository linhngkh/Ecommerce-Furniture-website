import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;
import colors from "colors";
//connect mongoDB
import connectDB from "./config/db.js";
connectDB();

import userRoutes from "./routes/userRoutes.js";

const app = express();
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);
app.get("/", (req, res) => res.send("Server is ready"));

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server running on port ${port}`.bgBlue));
