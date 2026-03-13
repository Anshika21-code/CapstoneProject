// frontend/src/context/NotificationContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const NotificationContext = createContext();

export default function NotificationProvider({ children }) {
  const [message, setMessage] = useState(null);
  const [type, setType] = useState("info");

  const notify = (msg, t = "info") => {
    setMessage(msg);
    setType(t);

    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}

      {message && (
        <div
          className={`fixed bottom-5 right-5 px-5 py-3 rounded-md text-white shadow-lg transition
          ${
            type === "success"
              ? "bg-green-600"
              : type === "error"
              ? "bg-red-600"
              : "bg-blue-600"
          }`}
        >
          {message}
        </div>
      )}
    </NotificationContext.Provider>
  );
}
