// frontend/src/services/userService.js
import api from "./api";

const userService = {
  getProfile: async () => {
    const res = await api.get("/user/profile");
    return res.data;
  },

  updateProfile: async (data) => {
    const res = await api.put("/user/profile", data);
    return res.data;
  },

  logMood: async (mood) => {
    const res = await api.post("/user/mood", { mood });
    return res.data;
  },

  getMoodLogs: async () => {
    const res = await api.get("/user/mood");
    return res.data;
  },

  getAllUsers: async () => {
    const res = await api.get("/admin/users");
    return res.data;
  },

  deleteUser: async (id) => {
    const res = await api.delete(`/admin/users/${id}`);
    return res.data;
  },
};

export default userService;
