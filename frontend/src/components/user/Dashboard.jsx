// frontend/src/components/user/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Smile, MessageCircle, User, Notebook } from "lucide-react";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-semibold">
        Hello, {user?.name || "User"} 👋
      </h2>
      <p className="text-gray-600 mt-2">
        Welcome back! Here are your quick actions.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <Link
          to="/mood-tracker"
          className="p-6 bg-blue-50 border rounded-lg text-center hover:bg-blue-100 transition"
        >
          <Smile className="w-8 h-8 mx-auto text-blue-600" />
          <h4 className="mt-3 font-semibold">Mood Tracker</h4>
          <p className="text-sm text-gray-600">
            Track and log your mood daily.
          </p>
        </Link>

        <Link
          to="/chat"
          className="p-6 bg-green-50 border rounded-lg text-center hover:bg-green-100 transition"
        >
          <MessageCircle className="w-8 h-8 mx-auto text-green-600" />
          <h4 className="mt-3 font-semibold">Anonymous Chat</h4>
          <p className="text-sm text-gray-600">
            Talk freely with supportive peers.
          </p>
        </Link>

        <Link
          to="/doctors"
          className="p-6 bg-yellow-50 border rounded-lg text-center hover:bg-yellow-100 transition"
        >
          <User className="w-8 h-8 mx-auto text-yellow-600" />
          <h4 className="mt-3 font-semibold">Find Doctors</h4>
          <p className="text-sm text-gray-600">
            Book consultations with experts.
          </p>
        </Link>

        <Link
          to="/blog"
          className="p-6 bg-purple-50 border rounded-lg text-center hover:bg-purple-100 transition"
        >
          <Notebook className="w-8 h-8 mx-auto text-purple-600" />
          <h4 className="mt-3 font-semibold">Wellness Blog</h4>
          <p className="text-sm text-gray-600">
            Read mental health articles & tips.
          </p>
        </Link>
      </div>
    </div>
  );
}
