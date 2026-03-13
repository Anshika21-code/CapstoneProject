// backend/src/routes/aiRoutes.js
import express from "express";
import { getSentiment } from "../controllers/aiController.js";

const router = express.Router();

router.post("/sentiment", getSentiment);

export default router;
