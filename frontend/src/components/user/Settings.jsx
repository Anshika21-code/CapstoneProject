// frontend/src/components/user/Settings.jsx
import React, { useState } from "react";
import userService from "../../services/userService";

export default function Settings() {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    const res = await userService.changePassword(form);
    if (res) alert("Password updated successfully");
  };

  return (
    <div className="max-w-xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold">Account Settings</h2>

      <div className="mt-6">
        <h3 className="font-medium text-lg">Change Password</h3>

        <form className="mt-4 space-y-4" onSubmit={handlePasswordChange}>
          <div>
            <label className="text-sm font-medium">Current Password</label>
            <input
              type="password"
              name="currentPassword"
              value={form.currentPassword}
              onChange={handleChange}
              required
              className="w-full mt-1 border px-3 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="text-sm font-medium">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={form.newPassword}
              onChange={handleChange}
              required
              className="w-full mt-1 border px-3 py-2 rounded-md"
            />
          </div>

          <button
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            type="submit"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}
