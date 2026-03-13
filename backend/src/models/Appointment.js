// backend/src/models/Appointment.js
import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
    date: { type: Date, required: true },
    status: { type: String, enum: ["pending", "confirmed", "completed"], default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.model("Appointment", appointmentSchema);
