// backend/src/routes/appointmentRoutes.js
import express from "express";
import { getUserAppointments } from "../controllers/appointmentController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getUserAppointments);

export default router;
