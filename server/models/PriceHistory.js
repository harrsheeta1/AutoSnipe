// src/models/PriceHistory.js
import mongoose from "mongoose";

const priceHistorySchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  price: { type: Number, required: true },
  checkedAt: { type: Date, default: Date.now },
});

export default mongoose.model("PriceHistory", priceHistorySchema);
