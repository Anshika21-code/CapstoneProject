// backend/src/controllers/doctorController.js
import Doctor from "../models/Doctor.js";
import Appointment from "../models/Appointment.js";

export const getDoctors = async (req, res) => {
  try {
    const docs = await Doctor.find().populate("userId", "name email avatar");
    res.json(docs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id).populate("userId");
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const bookAppointment = async (req, res) => {
  try {
    const { doctorId, date } = req.body;
    const appt = await Appointment.create({
      userId: req.userId,
      doctorId,
      date,
    });

    res.json(appt);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
