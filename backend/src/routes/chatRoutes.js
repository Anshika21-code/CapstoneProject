// backend/src/routes/chatRoutes.js
import express from "express";
import { createRoom, getMessages } from "../controllers/chatController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/create-room", auth, createRoom);
router.get("/messages/:roomId", auth, getMessages);

export default router;
