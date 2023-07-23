import Product from "../models/productsModel.js";
import mongoose from "mongoose";

// get all products

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
};

// get a single workout

const getSingleProduct = async (req, res) => {
  const { id } = req.params;

  //check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such product" });
  }

  const product = await Product.findById(id);

  if (!product) {
    return res.status(400).json({ error: "No such products" });
  }

  res.status(200).json(product);
};

// POST a new product

const createProduct = async (req, res) => {
  const { name, price, discount, imgUrl } = req.body;

  try {
    const product = await Product.create({ name, price, discount, imgUrl });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such product" });
  }
  const product = await Product.findOneAndDelete({ _id: id });

  if (!product) {
    return res.status(400).json({ error: "No such product" });
  }
  res.status(200).json(product);
};

//update product

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!product) {
    return res.status(400).json({ error: "No such product" });
  }
  res.status(200).json(product);
};

export {
  getAllProducts,
  getSingleProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
