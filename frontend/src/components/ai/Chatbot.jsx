// frontend/src/components/ai/Chatbot.jsx
import React, { useState } from "react";
import aiService from "../../services/aiService";
import { Send } from "lucide-react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi there! How can I support you today? " },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const res = await aiService.sendMessage(input);

    const botMsg = {
      from: "bot",
      text: res?.reply || "I'm here for you. Tell me more.",
    };

    setMessages((prev) => [...prev, botMsg]);
    setInput("");
  };

  return (
    <div className="max-w-lg mx-auto border rounded-xl bg-white shadow-sm flex flex-col h-[550px]">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-xl text-lg font-semibold">
        AI Support Chatbot
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[80%] p-3 rounded-lg ${
              msg.from === "user"
                ? "ml-auto bg-blue-100 text-right"
                : "bg-gray-100"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-t flex gap-3">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 border px-3 py-2 rounded-md"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button
          onClick={sendMessage}
          className="px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-1"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
