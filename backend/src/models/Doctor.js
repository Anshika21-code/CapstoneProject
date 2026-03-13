// backend/src/models/Doctor.js
import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    specialization: { type: String, required: true },
    experience: { type: Number, required: true },
    verified: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
    consultationFee: Number,
    bio: String,
  },
  { timestamps: true }
);

export default mongoose.model("Doctor", doctorSchema);
