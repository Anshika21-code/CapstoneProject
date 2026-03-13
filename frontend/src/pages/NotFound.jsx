// frontend/src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="text-gray-600 mt-4">Page not found</p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}
