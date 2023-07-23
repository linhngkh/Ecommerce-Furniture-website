import mongoose from "mongoose";

const productsModel = new mongoose.Schema({
  imgUrl: String,
  name: {
    type: String,
    required: true,
  },
  price: { type: Number },
  discount: { type: Number },
});

const Product = mongoose.model("Product", productsModel);

export default Product;
