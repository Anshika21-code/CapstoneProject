// frontend/src/context/ChatContext.jsx
import React, { createContext, useEffect, useState } from "react";
import io from "socket.io-client";

export const ChatContext = createContext();

export default function ChatProvider({ children }) {
  const [socket, setSocket] = useState(null);
  const [activeRoom, setActiveRoom] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const s = io(process.env.REACT_APP_SOCKET_URL, {
      transports: ["websocket"],
    });

    setSocket(s);

    s.on("receive-message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => s.disconnect();
  }, []);

  const joinRoom = (roomId) => {
    if (!socket) return;
    setActiveRoom(roomId);
    socket.emit("join-room", roomId);
    setMessages([]);
  };

  const sendMessage = (roomId, text) => {
    socket.emit("send-message", { roomId, text });
  };

  return (
    <ChatContext.Provider
      value={{
        socket,
        activeRoom,
        messages,
        joinRoom,
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
