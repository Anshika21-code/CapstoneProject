// frontend/src/hooks/useSocket.js
import { useEffect, useState } from "react";
import io from "socket.io-client";

export default function useSocket() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const s = io(process.env.REACT_APP_SOCKET_URL, {
      transports: ["websocket"],
    });
    setSocket(s);

    return () => s.disconnect();
  }, []);

  return socket;
}
