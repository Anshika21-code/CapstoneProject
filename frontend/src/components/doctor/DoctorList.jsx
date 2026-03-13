// frontend/src/components/doctor/DoctorList.jsx
import React, { useEffect, useState } from "react";
import doctorService from "../../services/doctorService";
import { Link } from "react-router-dom";
import { Star, Search } from "lucide-react";

export default function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");

  const fetchDoctors = async () => {
    const data = await doctorService.getAllDoctors();
    setDoctors(data || []);
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const filtered = doctors.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Find a Specialist</h2>

      {/* Search */}
      <div className="flex items-center border px-3 py-2 rounded-md mb-6 w-full sm:w-80">
        <Search className="w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search doctors…"
          className="ml-2 flex-1 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Doctors */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((doc) => (
          <Link
            key={doc._id}
            to={`/doctors/${doc._id}`}
            className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md"
          >
            <img
              src={doc.avatar || "/default-doctor.png"}
              className="w-full h-40 object-cover rounded-md"
              alt={doc.name}
            />

            <h3 className="text-lg font-semibold mt-3">{doc.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{doc.specialization}</p>

            <div className="flex items-center gap-1 mt-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-sm">{doc.rating || "4.5"}</span>
            </div>

            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              View Profile
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
