// backend/src/ai/recommendationEngine.js

export const getAIRecommendations = (mood) => {
  const recs = {
    positive: [
      "Keep practicing gratitude journaling.",
      "Try sharing your positivity with a close friend.",
    ],
    neutral: [
      "Take a short mindful break.",
      "Drink some water and stretch for 2 minutes.",
    ],
    negative: [
      "Try 5-minute guided breathing.",
      "Reach out to someone you trust.",
      "Limit screen-time for 30 minutes.",
    ],
  };

  return recs[mood] || ["Stay mindful and track your emotional state."];
};
