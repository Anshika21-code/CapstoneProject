// frontend/src/components/blog/BlogPost.jsx
import React, { useEffect, useState } from "react";
import blogService from "../../services/blogService";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  const fetchBlog = async () => {
    const data = await blogService.getBlogById(id);
    setBlog(data);
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  if (!blog)
    return <p className="text-center py-10 text-gray-500">Loading blog…</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <img
        src={blog.thumbnail || "/blog-placeholder.png"}
        alt={blog.title}
        className="w-full h-60 object-cover rounded-lg"
      />

      <h1 className="text-3xl font-semibold mt-6">{blog.title}</h1>
      <p className="text-sm text-gray-500 mt-2">
        Category: {blog.category} ·{" "}
        {new Date(blog.createdAt).toLocaleDateString()}
      </p>

      <div className="mt-6 leading-relaxed text-gray-800 whitespace-pre-line">
        {blog.content}
      </div>
    </div>
  );
}
