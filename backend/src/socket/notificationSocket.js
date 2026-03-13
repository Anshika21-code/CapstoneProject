// backend/src/socket/notificationSocket.js
export default function notificationSocket(io, socket) {
  socket.on("notify", ({ userId, message }) => {
    io.to(userId).emit("notification", message);
  });

  socket.on("registerUser", (userId) => {
    socket.join(userId);
    console.log("User joined notification room:", userId);
  });
}
