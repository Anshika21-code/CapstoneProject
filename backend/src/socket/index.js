// backend/src/socket/index.js
import chatSocket from "./chatSocket.js";
import notificationSocket from "./notificationSocket.js";

export default function initializeSockets(io) {
  io.on("connection", (socket) => {
    chatSocket(io, socket);
    notificationSocket(io, socket);
  });
}
