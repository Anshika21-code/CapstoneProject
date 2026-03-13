// backend/src/routes/adminRoutes.js
import express from "express";
import { getDashboardStats, verifyDoctor } from "../controllers/adminController.js";
import auth from "../middleware/auth.js";
import roleCheck from "../middleware/roleCheck.js";

const router = express.Router();

router.get("/stats", auth, roleCheck("admin"), getDashboardStats);
router.put("/verify-doctor/:id", auth, roleCheck("admin"), verifyDoctor);

export default router;
