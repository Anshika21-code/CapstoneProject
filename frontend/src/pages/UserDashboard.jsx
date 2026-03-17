// frontend/src/pages/UserDashboard.jsx
import React, { useState, useEffect } from "react";
import MoodTracker from "../components/user/MoodTracker";
import RecommendationCard from "../components/ai/RecommendationCard";
import MoodAnalytics from "../components/user/MoodAnalytics";
import userService from "../services/userService";

export default function UserDashboard() {
  const [logs, setLogs] = useState([]);

  const fetchLogs = async () => {
    try {
      const profile = await userService.getProfile();
      setLogs(profile.moodHistory || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">

  {/* background gradient */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 blur-3xl opacity-40"></div>

{/* main container */}
<div className="max-w-7xl mx-auto px-6 py-12">

      {/* Header */}
<div className="mb-12">
  <h2 className="text-4xl font-bold text-gray-800">Dashboard</h2>
  <p className="text-gray-500 mt-2">
    Track your mood and improve your mental wellness
  </p>
</div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">

  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition duration-300">
    <p className="text-sm opacity-80">Total Mood Logs</p>
    <p className="text-3xl font-bold mt-2">{logs.length}</p>
  </div>

  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition duration-300">
    <p className="text-sm opacity-80">Last Mood</p>
    <p className="text-3xl font-bold mt-2">
      {logs.length ? logs[logs.length - 1].mood : "N/A"}
    </p>
  </div>

  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition duration-300">
    <p className="text-sm opacity-80">Mood Entries</p>
    <p className="text-3xl font-bold mt-2">{logs.length}</p>
  </div>

</div>

      {/* Mood Tracker */}
      <div className="mt-4">
  <MoodTracker refreshLogs={fetchLogs} />
</div>

      {/* Mood Analytics */}
      <MoodAnalytics logs={logs} />

      {/* Recommendation */}
      <div className="mt-10">
        <RecommendationCard
          recommendations={[
            {
              title: "Try Deep Breathing",
              description:
                "A simple technique to reduce stress quickly.",
            },
          ]}
        />
      </div>

    </div>
  </div>
  );
}
