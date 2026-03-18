// frontend/src/pages/ChatPage.jsx
import React, { useState } from "react";
import ChatRoom from "../components/chat/ChatRoom";

export default function ChatPage() {
  // 🔥 mock patient list (temporary)
  const patients = [
    { id: "1", name: "John Doe" },
    { id: "2", name: "Jane Smith" },
    { id: "3", name: "Alex Johnson" },
  ];

  const [selectedPatient, setSelectedPatient] = useState(patients[0]);

  return (
    <div className="flex max-w-6xl mx-auto py-6 px-4 gap-6">
      
      {/* Sidebar */}
      <div className="w-1/3 bg-white shadow rounded-lg p-4">
        <h3 className="font-semibold text-lg mb-4">Patients</h3>

        <div className="space-y-2">
          {patients.map((p) => (
            <div
              key={p.id}
              onClick={() => setSelectedPatient(p)}
              className={`p-3 rounded-md cursor-pointer ${
                selectedPatient.id === p.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {p.name}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-white shadow rounded-lg p-4">
        <h3 className="font-semibold text-lg mb-4">
          Chat with {selectedPatient.name}
        </h3>

        {/* Pass selected patient to chat */}
        <ChatRoom patient={selectedPatient} />
      </div>
    </div>
  );
}
