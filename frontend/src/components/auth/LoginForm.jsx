// frontend/src/components/auth/LoginForm.jsx
import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await login(form.email, form.password);

    navigate("/dashboard"); // redirect after login

  } catch (error) {
    alert(error.response?.data?.message || "Login failed");
  }
};

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center">Welcome Back</h2>
      <p className="text-sm text-gray-600 text-center mb-6">
        Login to continue your mental wellness journey
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-1 w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-200 outline-none"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            placeholder="********"
            value={form.password}
            onChange={handleChange}
            required
            className="mt-1 w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-200 outline-none"
          />
        </div>

        <Link
          to="/forgot-password"
          className="text-sm text-blue-600 hover:underline block text-right"
        >
          Forgot password?
        </Link>

        {/* Submit btn */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="text-center text-sm mt-4">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-600 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}
