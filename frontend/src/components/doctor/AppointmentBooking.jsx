// frontend/src/components/doctor/AppointmentBooking.jsx
import React, { useEffect, useState } from "react";
import doctorService from "../../services/doctorService";
// ❌ removed appointmentService (not ready yet)
import { useParams, useNavigate } from "react-router-dom";

export default function AppointmentBooking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [selected, setSelected] = useState("");

  const fetchDoc = async () => {
  // 🔥 TEMP MOCK DATA
  setDoctor({
    name: "Dr. John Doe",
    specialization: "Psychologist",
    availableSlots: [
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "04:00 PM",
    ],
  });
};

  useEffect(() => {
    if (id) fetchDoc();
  }, [id]);

  const handleBooking = async () => {
    if (!selected) return alert("Please select a slot");

    // ✅ TEMP MOCK (since backend not ready)
    alert(`Appointment booked with ${doctor.name} at ${selected}`);

    // redirect to video (fake id for now)
    navigate(`/video/${id}`);
  };

  if (!doctor)
    return <div className="text-center py-10">Loading...</div>;

  const slots = doctor.availableSlots || [
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "04:00 PM",
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Book Appointment
      </h2>

      <div className="bg-white/70 backdrop-blur-lg border border-white/40 shadow-xl rounded-xl p-6">
        
        {/* Doctor Info */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">{doctor.name}</h3>
          <p className="text-gray-500">{doctor.specialization}</p>
        </div>

        {/* Slots */}
        <div>
          <h4 className="font-medium mb-3 text-gray-700">
            Select a Time Slot
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {slots.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelected(slot)}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  selected === slot
                    ? "bg-blue-600 text-white scale-105"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleBooking}
          className="mt-8 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-medium hover:scale-105 transition"
        >
          Confirm Appointment
        </button>
      </div>
    </div>
  );
}
