// frontend/src/components/chat/RoomList.jsx
import React from "react";
import { useChat } from "../../hooks/useChat";

export default function RoomList() {
  const { rooms, setRoom, room } = useChat();

  return (
    <div className="h-full border rounded-lg bg-white overflow-y-auto">
      <h3 className="p-4 font-semibold border-b">Chat Rooms</h3>

      <div className="p-3 space-y-2">
        {rooms.map((r) => (
          <button
            key={r}
            onClick={() => setRoom(r)}
            className={`w-full text-left px-4 py-2 rounded-md border ${
              room === r
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100 bg-gray-50"
            }`}
          >
            {r}
          </button>
        ))}
      </div>
    </div>
  );
}
