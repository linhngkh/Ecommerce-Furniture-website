import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;
const app = express();
import colors from "colors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
// import { corsOptions } from "./config/corsOptions.js";
import userRoutes from "./routes/userRoutes.js";
import productsRoutes from "./routes/productsRouter.js";

//connect mongoDB
import connectDB from "./config/db.js";

connectDB();

// middleware
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);

app.use("/api/products", productsRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`.bgBlue));
