// backend/src/socket/chatSocket.js
import Message from "../models/Message.js";

export default function chatSocket(io, socket) {
  console.log("User connected:", socket.id);

  socket.on("joinRoom", (roomId) => {
    socket.join(roomId);
    console.log(`User ${socket.id} joined room ${roomId}`);
  });

  socket.on("sendMessage", async ({ roomId, senderId, text }) => {
    const message = await Message.create({
      chatId: roomId,
      sender: senderId,
      text,
    });

    io.to(roomId).emit("newMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
}
