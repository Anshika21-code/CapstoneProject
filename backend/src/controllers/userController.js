// backend/src/controllers/userController.js
import User from "../models/User.js";
import MoodLog from "../models/MoodLog.js";

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate("moodHistory");
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.userId, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const logMood = async (req, res) => {
  try {
    const entry = await MoodLog.create({
      userId: req.userId,
      mood: req.body.mood,
      sentiment: req.body.sentiment,
    });

    await User.findByIdAndUpdate(req.userId, {
      $push: { moodHistory: entry._id },
    });

    res.json(entry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMoodLogs = async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate("moodHistory");
    res.json(user.moodHistory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
