// frontend/src/components/chat/MessageInput.jsx
import React, { useState } from "react";

export default function MessageInput({ room, socket }) {
  const [text, setText] = useState("");

  const sendMessage = () => {
    if (!text.trim()) return;

    socket.emit("sendMessage", { room, text });
    setText("");
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-1 border px-3 py-2 rounded-md focus:ring focus:ring-blue-200 outline-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <button
        onClick={sendMessage}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Send
      </button>
    </div>
  );
}
