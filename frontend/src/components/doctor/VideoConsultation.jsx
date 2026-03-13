// frontend/src/components/doctor/VideoConsultation.jsx
import React from "react";
import { useParams } from "react-router-dom";

export default function VideoConsultation() {
  const { appointmentId } = useParams();

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-semibold text-center">
        Video Consultation
      </h2>
      <p className="text-center text-gray-600 mt-2">
        Appointment ID: {appointmentId}
      </p>

      <div className="mt-10 border rounded-lg bg-black h-[500px] text-white flex items-center justify-center">
        <p className="text-lg opacity-70">Video Stream Placeholder</p>
      </div>

      <div className="flex justify-center mt-6">
        <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
          End Call
        </button>
      </div>
    </div>
  );
}
