// frontend/src/components/blog/BlogEditor.jsx
import React, { useState } from "react";
import blogService from "../../services/blogService";

export default function BlogEditor() {
  const [form, setForm] = useState({
    title: "",
    category: "",
    content: "",
  });

  const [thumbnail, setThumbnail] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleThumbnail = (e) => setThumbnail(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", form.title);
    data.append("category", form.category);
    data.append("content", form.content);
    if (thumbnail) data.append("thumbnail", thumbnail);

    const res = await blogService.createBlog(data);
    if (res) alert("Blog published successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Publish New Blog</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            name="title"
            required
            value={form.title}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="block font-medium">Category</label>
          <input
            type="text"
            name="category"
            required
            value={form.category}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="block font-medium">Thumbnail</label>
          <input type="file" onChange={handleThumbnail} className="mt-1" />
        </div>

        <div>
          <label className="block font-medium">Content</label>
          <textarea
            name="content"
            rows="8"
            required
            value={form.content}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 mt-1"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
}
