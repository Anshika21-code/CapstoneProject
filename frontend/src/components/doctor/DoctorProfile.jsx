// frontend/src/components/doctor/DoctorProfile.jsx
import React, { useEffect, useState } from "react";
import doctorService from "../../services/doctorService";
import { useParams, Link } from "react-router-dom";
import { Star, Calendar } from "lucide-react";

export default function DoctorProfile() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  const fetchDoc = async () => {
    const data = await doctorService.getDoctorById(id);
    setDoctor(data);
  };

  useEffect(() => {
    fetchDoc();
  }, [id]);

  if (!doctor) {
    return (
      <div className="text-center py-10 text-gray-500">Loading doctor...</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-6">
        <img
          src={doctor.avatar || "/default-doctor.png"}
          alt={doctor.name}
          className="w-40 h-40 object-cover rounded-lg"
        />
        <div>
          <h2 className="text-3xl font-semibold">{doctor.name}</h2>
          <p className="text-gray-600 mt-1">{doctor.specialization}</p>

          <div className="flex items-center gap-1 mt-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="text-sm">{doctor.rating || "4.5"} / 5</span>
          </div>

          <p className="mt-4 text-gray-700 leading-relaxed">
            {doctor.bio ||
              "Experienced mental health specialist providing empathetic care."}
          </p>

          <Link
            to={`/doctors/${doctor._id}/book`}
            className="mt-5 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            <Calendar className="w-4 h-4" />
            Book Appointment
          </Link>
        </div>
      </div>

      {/* Extra details */}
      <div className="mt-10">
        <h3 className="font-semibold text-lg">Qualifications</h3>
        <ul className="mt-3 list-disc ml-6 text-gray-700">
          {doctor.qualifications?.length
            ? doctor.qualifications.map((q, i) => <li key={i}>{q}</li>)
            : "Information not available"}
        </ul>
      </div>
    </div>
  );
}
