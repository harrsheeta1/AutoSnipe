import express from "express";
import { addProduct, getProducts, triggerPriceCheck } from "../controllers/productController.js";

const router = express.Router();

// Add new product to track
router.post("/add", addProduct);

// Get all tracked products
router.get("/", getProducts);

// Force price check (manual trigger, optional)
router.post("/check/:id", triggerPriceCheck);

export default router;
