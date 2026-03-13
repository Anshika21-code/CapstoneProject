// backend/src/services/sentimentAnalysis.js

export const analyzeSentiment = async (text) => {
  text = text.toLowerCase();

  if (text.includes("sad") || text.includes("depressed") || text.includes("angry"))
    return "negative";

  if (text.includes("happy") || text.includes("good") || text.includes("great"))
    return "positive";

  return "neutral";
};
