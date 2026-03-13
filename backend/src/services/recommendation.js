// backend/src/services/recommendation.js
export const getRecommendation = (mood) => {
  const data = {
    happy: "Keep a gratitude journal and maintain positive interactions.",
    sad: "Try breathing exercises, talk to someone you trust.",
    stressed: "Do a 5-minute meditation and avoid screen time.",
    angry: "Practice grounding techniques and take a short walk.",
    neutral: "Maintain your routine and track your mood.",
  };

  return data[mood] || "Stay mindful and track your mental health.";
};
