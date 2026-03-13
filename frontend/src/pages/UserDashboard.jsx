// frontend/src/pages/UserDashboard.jsx
import React from "react";
import MoodTracker from "../components/user/MoodTracker";
import RecommendationCard from "../components/ai/RecommendationCard";

export default function UserDashboard() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-6">Welcome to Your Dashboard</h2>

      <MoodTracker />

      <div className="mt-10">
        <RecommendationCard
          recommendations={[
            {
              title: "Try Deep Breathing",
              description: "A simple technique to reduce stress quickly.",
            },
          ]}
        />
      </div>
    </div>
  );
}
