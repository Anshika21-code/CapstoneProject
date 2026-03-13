// frontend/src/services/chatService.js
import api from "./api";

const chatService = {
  getRooms: async () => {
    const res = await api.get("/chat/rooms");
    return res.data;
  },

  getMessages: async (roomId) => {
    const res = await api.get(`/chat/messages/${roomId}`);
    return res.data;
  },

  sendMessage: async (roomId, text) => {
    const res = await api.post("/chat/send", { roomId, text });
    return res.data;
  },
};

export default chatService;
