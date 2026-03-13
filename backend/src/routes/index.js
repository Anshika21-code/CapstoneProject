// backend/src/routes/index.js
import express from "express";

import authRoutes from "./authRoutes.js";
import userRoutes from "./userRoutes.js";
import doctorRoutes from "./doctorRoutes.js";
import adminRoutes from "./adminRoutes.js";
import chatRoutes from "./chatRoutes.js";
import appointmentRoutes from "./appointmentRoutes.js";
import blogRoutes from "./blogRoutes.js";
import aiRoutes from "./aiRoutes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/doctor", doctorRoutes);
router.use("/admin", adminRoutes);
router.use("/chat", chatRoutes);
router.use("/appointment", appointmentRoutes);
router.use("/blog", blogRoutes);
router.use("/ai", aiRoutes);

export default router;
