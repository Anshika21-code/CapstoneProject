// frontend/src/hooks/useAuth.js
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function useAuth() {
  return useContext(AuthContext);
}

export { useAuth };      // named export
export default useAuth;  // keep default export for existing imports
