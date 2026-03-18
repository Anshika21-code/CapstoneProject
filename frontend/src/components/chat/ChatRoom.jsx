 // frontend/src/components/chat/ChatRoom.jsx
import React, { useState } from "react";

export default function ChatRoom({ patient }) {
  const [messages, setMessages] = useState([
    { text: "Hello Doctor!", sender: "patient" },
    { text: "Hi, how can I help you?", sender: "doctor" },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMsg = { text: input, sender: "doctor" };
    setMessages([...messages, newMsg]);
    setInput("");
  };

  if (!patient) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        Select a patient to start chatting.
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[400px]">
      
      {/* Header */}
      <div className="p-3 border-b font-semibold">
        Chat with {patient.name}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 bg-gray-50 space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-md w-fit ${
              msg.sender === "doctor"
                ? "bg-blue-100 ml-auto"
                : "bg-green-100"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-t flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border px-3 py-2 rounded-md"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 rounded-md hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
