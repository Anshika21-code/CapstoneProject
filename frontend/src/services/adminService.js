// frontend/src/services/adminService.js
import api from "./api";

const adminService = {
  getStats: async () => {
    const res = await api.get("/admin/stats");
    return res.data;
  },

  deleteBlog: async (id) => {
    const res = await api.delete(`/admin/blog/${id}`);
    return res.data;
  },

  broadcastNotification: async (message) => {
    const res = await api.post("/admin/notify", { message });
    return res.data;
  },
};

export default adminService;
