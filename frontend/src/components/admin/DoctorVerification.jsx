// frontend/src/components/admin/DoctorVerification.jsx
import React, { useEffect, useState } from "react";
import doctorService from "../../services/doctorService";
import { CheckCircle, XCircle } from "lucide-react";

export default function DoctorVerification() {
  const [pendingDocs, setPendingDocs] = useState([]);

  const fetchPending = async () => {
    const data = await doctorService.getPendingDoctors();
    setPendingDocs(data || []);
  };

  const verifyDoctor = async (id, status) => {
    await doctorService.verifyDoctor(id, status);
    fetchPending();
  };

  useEffect(() => {
    fetchPending();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Doctor Verification</h2>

      {pendingDocs.length === 0 ? (
        <p className="text-gray-500">No pending doctor applications.</p>
      ) : (
        <div className="grid gap-6">
          {pendingDocs.map((doc) => (
            <div
              key={doc._id}
              className="p-5 bg-white border rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-semibold">{doc.name}</h3>
              <p className="text-sm text-gray-600">{doc.email}</p>
              <p className="text-sm text-gray-600 mt-2">
                Specialization: {doc.specialization}
              </p>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => verifyDoctor(doc._id, "approved")}
                  className="px-4 py-2 bg-green-600 text-white rounded-md flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  Approve
                </button>

                <button
                  onClick={() => verifyDoctor(doc._id, "rejected")}
                  className="px-4 py-2 bg-red-600 text-white rounded-md flex items-center gap-2"
                >
                  <XCircle className="w-4 h-4" />
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
