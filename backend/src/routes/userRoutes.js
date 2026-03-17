// backend/src/routes/userRoutes.js
import express from "express";
import { getProfile, updateProfile, logMood, getMoodLogs } from "../controllers/userController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/profile", auth, getProfile);
router.put("/profile", auth, updateProfile);

router.post("/mood", auth, logMood);
router.get("/mood", auth, getMoodLogs);

export default router;
