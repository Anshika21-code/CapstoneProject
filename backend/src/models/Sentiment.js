// backend/src/models/Sentiment.js
import mongoose from "mongoose";

const sentimentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    sentiment: { type: String, enum: ["positive", "neutral", "negative"] },
  },
  { timestamps: true }
);

export default mongoose.model("Sentiment",sentimentSchema);
