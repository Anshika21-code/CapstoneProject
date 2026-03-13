// frontend/src/components/user/Profile.jsx
import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import userService from "../../services/userService";

export default function Profile() {
  const { user, setUser } = useAuth();
  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updated = await userService.updateProfile(form);
    if (updated) setUser(updated);
    alert("Profile updated!");
  };

  return (
    <div className="max-w-xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold">My Profile</h2>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label className="text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full mt-1 border px-3 py-2 rounded-md"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            disabled
            value={form.email}
            className="w-full mt-1 border px-3 py-2 rounded-md bg-gray-100"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full mt-1 border px-3 py-2 rounded-md"
          />
        </div>

        <button
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          type="submit"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
