// backend/src/routes/doctorRoutes.js
import express from "express";
import { getDoctors, getDoctorById, bookAppointment } from "../controllers/doctorController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getDoctors);
router.get("/:id", getDoctorById);

router.post("/book", auth, bookAppointment);

export default router;
