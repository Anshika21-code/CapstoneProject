// frontend/src/services/doctorService.js
import api from "./api";

const doctorService = {
  getDoctors: async () => {
    const res = await api.get("/doctor");
    return res.data;
  },

  getDoctorById: async (id) => {
    const res = await api.get(`/doctor/${id}`);
    return res.data;
  },

  bookAppointment: async (data) => {
    const res = await api.post("/appointment/book", data);
    return res.data;
  },

  getPendingDoctors: async () => {
    const res = await api.get("/admin/doctors/pending");
    return res.data;
  },

  verifyDoctor: async (id, status) => {
    const res = await api.put(`/admin/doctors/verify/${id}`, { status });
    return res.data;
  },
};

export default doctorService;
