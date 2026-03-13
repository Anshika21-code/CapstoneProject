// backend/src/controllers/appointmentController.js
import Appointment from "../models/Appointment.js";

export const getUserAppointments = async (req, res) => {
  try {
    const appts = await Appointment.find({ userId: req.userId }).populate(
      "doctorId"
    );
    res.json(appts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
