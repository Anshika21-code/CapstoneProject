// backend/src/ai/sentimentModel.js

export const predictSentiment = (text) => {
  text = text.toLowerCase();

  if (
    text.includes("sad") ||
    text.includes("lonely") ||
    text.includes("depressed") ||
    text.includes("stress") ||
    text.includes("angry")
  ) {
    return "negative";
  }

  if (
    text.includes("happy") ||
    text.includes("joy") ||
    text.includes("great") ||
    text.includes("good") ||
    text.includes("love")
  ) {
    return "positive";
  }

  return "neutral";
};
