// backend/src/routes/blogRoutes.js
import express from "express";
import { getBlogs, createBlog } from "../controllers/blogController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getBlogs);
router.post("/", auth, createBlog);

export default router;
