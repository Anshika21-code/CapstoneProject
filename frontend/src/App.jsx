// frontend/src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./routes";
import AuthProvider from "./context/AuthContext";
import ChatProvider from "./context/ChatContext";
import ThemeProvider from "./context/ThemeContext";
import NotificationProvider from "./context/NotificationContext";
import { useAuth } from "./hooks/useAuth";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

function AppContent() {
  const { user, logout } = useAuth();

  return (
    <BrowserRouter>
      <Navbar user={user} onLogout={logout} />

      <div className="min-h-screen">
        <RoutesList />
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ChatProvider>
          <NotificationProvider>
            <AppContent />
          </NotificationProvider>
        </ChatProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
