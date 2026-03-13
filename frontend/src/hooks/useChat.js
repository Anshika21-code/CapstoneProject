// frontend/src/hooks/useChat.js
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

function useChat() {
  return useContext(ChatContext);
}

export { useChat };      // named export
export default useChat;  // keep default export
