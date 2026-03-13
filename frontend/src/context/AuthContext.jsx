// frontend/src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import authService from "../services/authService";
import userService from "../services/userService";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user if token exists
  const loadUser = async () => {
    try {
      const profile = await userService.getProfile();
      setUser(profile);
    } catch (error) {
      setUser(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) loadUser();
    else setLoading(false);
  }, []);

  // Login
  const login = async (email, password) => {
    const res = await authService.login(email, password);
    await loadUser();
    return res;
  };

  // Register
  const register = async (data) => {
    const res = await authService.register(data);
    return res;
  };

  // Logout
  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
