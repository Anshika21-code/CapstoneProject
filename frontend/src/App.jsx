// frontend/src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./routes";
import AuthProvider from "./context/AuthContext";
import ChatProvider from "./context/ChatContext";
import ThemeProvider from "./context/ThemeContext";
import NotificationProvider from "./context/NotificationContext";

// Common UI
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ChatProvider>
          <NotificationProvider>
            <BrowserRouter>
              <Navbar />
              <div className="min-h-screen pt-20">
                <RoutesList />
              </div>
              <Footer />
            </BrowserRouter>
          </NotificationProvider>
        </ChatProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
