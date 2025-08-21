import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  trackedProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

export default mongoose.model("User", userSchema);
