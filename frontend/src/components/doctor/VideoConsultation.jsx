// frontend/src/components/doctor/VideoConsultation.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function VideoConsultation() {
  const { id } = useParams(); // ✅ matches route /video/:id
  const navigate = useNavigate();

  const handleEndCall = () => {
    navigate("/doctors"); // go back to dashboard
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      
      {/* Header */}
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Video Consultation
      </h2>

      <p className="text-center text-gray-500 mt-2">
        Appointment ID: {id || "N/A"}
      </p>

      {/* Video Box */}
      <div className="mt-8 border rounded-xl bg-black h-[500px] text-white flex items-center justify-center shadow-lg">
        <p className="text-lg opacity-70">Video Stream Placeholder</p>
      </div>

      {/* Controls */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleEndCall}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          End Call
        </button>
      </div>
    </div>
  );
}