// backend/src/ai/crisisDetection.js

export const detectCrisis = (text) => {
  text = text.toLowerCase();

  const crisisWords = [
    "suicide",
    "kill myself",
    "end my life",
    "no reason to live",
    "want to die",
    "self harm",
    "cut myself",
  ];

  const hit = crisisWords.some((word) => text.includes(word));

  return hit
    ? { crisis: true, level: "high" }
    : { crisis: false, level: "safe" };
};
