// frontend/src/services/blogService.js
import api from "./api";

const blogService = {
  getAllBlogs: async () => {
    const res = await api.get("/blog");
    return res.data;
  },

  getBlogById: async (id) => {
    const res = await api.get(`/blog/${id}`);
    return res.data;
  },

  getCategories: async () => {
    const res = await api.get("/blog/categories");
    return res.data;
  },

  getBlogsByCategory: async (category) => {
    const res = await api.get(`/blog/category/${category}`);
    return res.data;
  },

  createBlog: async (formData) => {
    const res = await api.post("/blog", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  },
};

export default blogService;
