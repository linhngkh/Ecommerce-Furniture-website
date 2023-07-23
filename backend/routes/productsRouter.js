import express from "express";
const router = express.Router();

import {
  getAllProducts,
  getSingleProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/productController.js";

//get all products
router.get("/", getAllProducts);
//get single product
router.get("/:id", getSingleProduct);
//post product
router.post("/", createProduct);
// update product
router.patch("/:id", updateProduct);
//delete product
router.delete("/:id", deleteProduct);
export default router;
