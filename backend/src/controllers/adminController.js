// backend/src/controllers/adminController.js
import Doctor from "../models/Doctor.js";
import User from "../models/User.js";
import Blog from "../models/Blog.js";

export const getDashboardStats = async (req, res) => {
  try {
    const users = await User.countDocuments();
    const doctors = await Doctor.countDocuments();
    const blogs = await Blog.countDocuments();

    res.json({ users, doctors, blogs });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const verifyDoctor = async (req, res) => {
  try {
    const updated = await Doctor.findByIdAndUpdate(
      req.params.id,
      { verified: "approved" },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
