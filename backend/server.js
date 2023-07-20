import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;
const app = express();
import colors from "colors";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

//connect mongoDB
import connectDB from "./config/db.js";
import { products } from "./products.js";
connectDB();

// middleware

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);

app.get("/api/products", (req, res) => {
  res.send(products);
});
app.get("/", (req, res) => res.send("Server is ready"));

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server running on port ${port}`.bgBlue));
