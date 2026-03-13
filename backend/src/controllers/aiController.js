// backend/src/controllers/aiController.js
import Sentiment from "../models/Sentiment.js";
import { analyzeSentiment } from "../services/sentimentAnalysis.js";

export const getSentiment = async (req, res) => {
  try {
    const { text } = req.body;

    const result = await analyzeSentiment(text);

    const saved = await Sentiment.create({ text, sentiment: result });

    res.json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
