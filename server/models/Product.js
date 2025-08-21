import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  url: String,
  name: String,
  currentPrice: Number,
  desiredPrice: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("Product", productSchema);
