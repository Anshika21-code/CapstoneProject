 // frontend/src/components/chat/ChatRoom.jsx
import React, { useEffect, useState, useRef } from "react";
import { useChat } from "../../hooks/useChat";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

export default function ChatRoom() {
  const { room, messages, joinRoom, socket } = useChat();
  const [loading, setLoading] = useState(true);
  const containerRef = useRef();

  // Auto scroll on message update
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  // Join selected room
  useEffect(() => {
    if (!room) return;
    joinRoom(room);
    setLoading(false);
  }, [room]);

  if (!room) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-400">
        Select a room to start chatting.
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full border rounded-lg bg-white">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">Room: {room}</h3>
      </div>

      {/* Messages */}
      <div
        ref={containerRef}
        className="flex-1 overflow-y-auto px-4 py-3 bg-gray-50"
      >
        {loading ? (
          <p className="text-center text-gray-500 py-4">Loading messages...</p>
        ) : (
          <MessageList messages={messages} />
        )}
      </div>

      {/* Input */}
      <div className="border-t p-3">
        <MessageInput room={room} socket={socket} />
      </div>
    </div>
  );
}
