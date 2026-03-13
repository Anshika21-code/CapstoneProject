// backend/src/services/chatbotService.js
import { generateAIResponse } from "./aiService.js";

export const chatbotReply = async (message) => {
  try {
    const prompt = `You are a supportive mental health assistant. Reply kindly: ${message}`;
    return await generateAIResponse(prompt);
  } catch (err) {
    console.log("Chatbot error:", err.message);
    return "I'm here for you. Tell me more.";
  }
};
