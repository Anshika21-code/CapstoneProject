// frontend/src/pages/DoctorDashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function DoctorDashboard() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "View Appointments",
      desc: "Check and manage your appointments",
      path: "/appointments/123",
      color: "bg-blue-500",
    },
    {
      title: "Patient Chats",
      desc: "Communicate with patients",
      path: "/chat",
      color: "bg-green-500",
    },
    {
      title: "Doctor Profile",
      desc: "Update your profile details",
      path: "/doctor/profile",
      color: "bg-purple-500",
    },
    {
      title: "Video Consultation",
      desc: "Start video sessions",
      path: "/video",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Doctor Dashboard</h1>
        <p className="text-gray-500 mt-2">
          Manage your work efficiently
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => {
  if (card.title === "View Appointments") {
    navigate("/appointments/123");
  } else {
    navigate(card.path);
  }
}}
            className={`${card.color} text-white p-6 rounded-xl shadow-lg cursor-pointer transform hover:scale-105 transition`}
          >
            <h2 className="text-2xl font-bold">{card.title}</h2>
            <p className="mt-2 opacity-90">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}