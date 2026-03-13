// backend/src/controllers/chatController.js
import Chat from "../models/Chat.js";
import Message from "../models/Message.js";

export const createRoom = async (req, res) => {
  try {
    const room = await Chat.create({
      roomName: req.body.roomName,
      participants: [req.userId],
    });

    res.json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMessages = async (req, res) => {
  try {
    const msgs = await Message.find({ chatId: req.params.roomId }).populate(
      "sender",
      "name"
    );
    res.json(msgs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
