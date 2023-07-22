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
import productsRoute from "./routes/productsRouter.js";

//connect mongoDB
import connectDB from "./config/db.js";

connectDB();

// middleware

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);

app.use("/api/products", productsRoute);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  // make static folder
  app.use(express.static(path.join(__dirname, "frontend/dist")));
  //if get any routes that not /api/users, then show dist/index.html
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send(`<h1>Server is ready</h1>`);
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`.bgBlue));
