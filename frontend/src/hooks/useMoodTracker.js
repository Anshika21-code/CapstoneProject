// frontend/src/hooks/useMoodTracker.js
import { useState } from "react";
import userService from "../services/userService";
import aiService from "../services/aiService";

export default function useMoodTracker() {
  const [mood, setMood] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  const logMood = async () => {
    if (!mood) return;

    await userService.logMood(mood);

    // Sentiment analysis
    const s = await aiService.analyzeSentiment(mood);
    setSentiment(s?.sentiment);

    // AI recommendations
    const r = await aiService.getRecommendations(s?.sentiment);
    setRecommendations(r);
  };

  return {
    mood,
    setMood,
    sentiment,
    recommendations,
    logMood,
  };
}
