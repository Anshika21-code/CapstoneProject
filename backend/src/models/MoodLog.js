// backend/src/models/MoodLog.js
import mongoose from "mongoose";

const moodLogSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    mood: { type: String, required: true },
    sentiment: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("MoodLog", moodLogSchema);
