// frontend/src/components/admin/ContentModeration.jsx
import React, { useEffect, useState } from "react";
import blogService from "../../services/blogService";
import adminService from "../../services/adminService";
import { Trash2 } from "lucide-react";

export default function ContentModeration() {
  const [blogs, setBlogs] = useState([]);

  const fetchContent = async () => {
    const data = await blogService.getAllBlogs();
    setBlogs(data || []);
  };

  const removeBlog = async (id) => {
    if (!window.confirm("Delete this blog?")) return;
    await adminService.deleteBlog(id);
    fetchContent();
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Content Moderation</h2>

      <div className="space-y-4">
        {blogs.map((b) => (
          <div
            key={b._id}
            className="p-5 border rounded-lg bg-white flex justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="text-gray-600 text-sm">{b.category}</p>
            </div>

            <button
              onClick={() => removeBlog(b._id)}
              className="p-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}

        {blogs.length === 0 && (
          <p className="text-gray-500 mt-4">No content available.</p>
        )}
      </div>
    </div>
  );
}
