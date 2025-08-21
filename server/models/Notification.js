// src/models/Notification.js
import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  message: { type: String, required: true },
  type: { type: String, enum: ["price_drop", "price_increase"], default: "price_drop" },
  status: { type: String, enum: ["pending", "sent", "failed"], default: "pending" },
  sentAt: { type: Date },
});

export default mongoose.model("Notification", notificationSchema);
