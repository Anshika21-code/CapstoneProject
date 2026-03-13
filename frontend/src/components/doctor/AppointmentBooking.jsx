// frontend/src/components/doctor/AppointmentBooking.jsx
import React, { useEffect, useState } from "react";
import doctorService from "../../services/doctorService";
import appointmentService from "../../services/appointmentService";
import { useParams, useNavigate } from "react-router-dom";

export default function AppointmentBooking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [selected, setSelected] = useState("");

  const fetchDoc = async () => {
    const data = await doctorService.getDoctorById(id);
    setDoctor(data);
  };

  useEffect(() => {
    fetchDoc();
  }, [id]);

  const handleBooking = async () => {
    if (!selected) return alert("Please select a slot");

    const res = await appointmentService.bookAppointment({
      doctorId: id,
      slot: selected,
    });

    if (res) {
      alert("Appointment booked successfully!");
      navigate(`/video-call/${res._id}`);
    }
  };

  if (!doctor) return <div className="text-center py-10">Loading…</div>;

  const slots = doctor.availableSlots || [
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "04:00 PM",
  ];

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Book Appointment</h2>

      <div className="border p-4 rounded-lg bg-white shadow-sm">
        <h3 className="text-lg font-semibold">{doctor.name}</h3>
        <p className="text-gray-600">{doctor.specialization}</p>

        <div className="mt-6">
          <h4 className="font-medium mb-2">Select a Slot</h4>
          <div className="grid grid-cols-2 gap-3">
            {slots.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelected(slot)}
                className={`px-3 py-2 rounded-md border ${
                  selected === slot
                    ? "bg-blue-600 text-white"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleBooking}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Confirm Appointment
        </button>
      </div>
    </div>
  );
}
