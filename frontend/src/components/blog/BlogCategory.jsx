// frontend/src/components/blog/BlogCategory.jsx
import React, { useEffect, useState } from "react";
import blogService from "../../services/blogService";
import { useParams, Link } from "react-router-dom";

export default function BlogCategory() {
  const { category } = useParams();
  const [blogs, setBlogs] = useState([]);

  const fetchCategoryBlogs = async () => {
    const data = await blogService.getBlogsByCategory(category);
    setBlogs(data || []);
  };

  useEffect(() => {
    fetchCategoryBlogs();
  }, [category]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">
        Category: {category}
      </h2>

      {blogs.length === 0 ? (
        <p className="text-gray-500">No blogs found in this category.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link
              key={blog._id}
              to={`/blog/${blog._id}`}
              className="border rounded-lg p-4 bg-white hover:shadow-md"
            >
              <img
                src={blog.thumbnail || "/blog-placeholder.png"}
                className="w-full h-40 object-cover rounded-md"
                alt={blog.title}
              />

              <h3 className="mt-3 font-semibold text-lg">{blog.title}</h3>
              <p className="text-gray-700 text-sm mt-2 line-clamp-3">
                {blog.excerpt ||
                  blog.content.substring(0, 120) + "..."}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
