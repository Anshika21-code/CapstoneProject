// frontend/src/components/chat/MessageList.jsx
import React from "react";

export default function MessageList({ messages }) {
  return (
    <div className="space-y-3">
      {messages.map((msg) => (
        <div
          key={msg._id || Math.random()}
          className={`p-3 rounded-lg max-w-xs ${
            msg.isSelf
              ? "ml-auto bg-blue-600 text-white"
              : "bg-gray-200 text-gray-900"
          }`}
        >
          <p className="text-sm">{msg.text}</p>
          <span className="text-[10px] opacity-70">
            {new Date(msg.timestamp).toLocaleTimeString()}
          </span>
        </div>
      ))}
    </div>
  );
}
