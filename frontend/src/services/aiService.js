// frontend/src/services/aiService.js
import api from "./api";

const aiService = {
  sendMessage: async (text) => {
    const res = await api.post("/ai/chat", { text });
    return res.data;
  },

  analyzeSentiment: async (text) => {
    const res = await api.post("/ai/sentiment", { text });
    return res.data;
  },

  getRecommendations: async (mood) => {
    const res = await api.get(`/ai/recommend/${mood}`);
    return res.data;
  },
};

export default aiService;
