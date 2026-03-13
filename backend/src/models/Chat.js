// backend/src/models/Chat.js
import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    roomName: { type: String, required: true },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export default mongoose.model("Chat", chatSchema);
