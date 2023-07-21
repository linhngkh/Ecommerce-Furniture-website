import mongoose from "mongoose";

const productsModel = mongoose.Schema({
  imgUrl: String,
  name: {
    type: String,
    required: true,
  },
  price: Number,
  discount: Number,
});

const Product = mongoose.model("Product", productsModel);

export default Product;
