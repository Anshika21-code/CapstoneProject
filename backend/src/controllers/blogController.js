// backend/src/controllers/blogController.js
import Blog from "../models/Blog.js";

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "name");
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      author: req.userId,
    });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
