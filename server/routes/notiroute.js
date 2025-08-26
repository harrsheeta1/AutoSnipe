import express from "express";
import { getNotifications, markAsRead } from "../controllers/notificationController.js";

const router = express.Router();

// Get all notifications for a user
router.get("/" ,getNotifications);

// Mark notification as read
router.post("/:id/read", markAsRead);

export default router;
