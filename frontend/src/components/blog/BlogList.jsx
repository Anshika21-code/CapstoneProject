// frontend/src/components/blog/BlogList.jsx
import React, { useEffect, useState } from "react";
import blogService from "../../services/blogService";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState("All");

  const fetchBlogs = async () => {
    const data = await blogService.getAllBlogs();
    setBlogs(data || []);
  };

  const fetchCategories = async () => {
    const data = await blogService.getCategories();
    setCategories(["All", ...data]);
  };

  useEffect(() => {
    fetchBlogs();
    fetchCategories();
  }, []);

  const filtered = blogs.filter((b) => {
    const matchCategory =
      selectedCat === "All" || b.category === selectedCat;
    const matchSearch = b.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold mb-6">Mental Health Articles</h2>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex items-center border px-3 py-2 rounded-md w-full sm:w-80">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search blogs…"
            className="ml-2 flex-1 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="border px-3 py-2 rounded-md"
          value={selectedCat}
          onChange={(e) => setSelectedCat(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Blog cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((blog) => (
          <Link
            key={blog._id}
            to={`/blog/${blog._id}`}
            className="border rounded-lg bg-white p-4 hover:shadow-md"
          >
            <img
              src={blog.thumbnail || "/blog-placeholder.png"}
              className="w-full h-40 object-cover rounded-md"
              alt={blog.title}
            />

            <h3 className="mt-3 font-semibold text-lg">{blog.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{blog.category}</p>

            <p className="text-gray-700 text-sm mt-3 line-clamp-3">
              {blog.excerpt || blog.content.substring(0, 120) + "..."}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
