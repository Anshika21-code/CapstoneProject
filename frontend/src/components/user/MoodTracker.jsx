// frontend/src/components/user/MoodTracker.jsx
import React, { useState, useEffect } from "react";
import userService from "../../services/userService";

export default function MoodTracker() {
  const [mood, setMood] = useState("");
  const [logs, setLogs] = useState([]);

  const fetchLogs = async () => {
    const data = await userService.getMoodLogs();
    setLogs(data || []);
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!mood) return alert("Select a mood!");

  await userService.logMood(mood);

  setMood("");
  fetchLogs();
};

  const moods = ["Happy", "Neutral", "Sad", "Stressed", "Angry", "Anxious"];

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 bg-white/60 backdrop-blur-lg border border-white/40 rounded-xl shadow-xl">
      <h2 className="text-2xl font-semibold">Mood Tracker</h2>

      <form onSubmit={handleSubmit} className="mt-4 flex gap-3 items-center">
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="border px-3 py-2 rounded-md"
        >
          <option value="">Select your mood...</option>
          {moods.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Log Mood
        </button>
      </form>

      <div className="mt-8">
  <h3 className="text-lg font-semibold mb-4">Mood History</h3>

  {logs.length === 0 && (
    <p className="text-gray-500 text-sm">No mood entries yet.</p>
  )}

  <div className="space-y-3">
    {logs.map((item) => (
      <div
        key={item._id}
        className="flex items-center justify-between bg-white/70 backdrop-blur-md border border-white/40 rounded-lg px-4 py-3 shadow-sm hover:shadow-lg transition"
      >
        <div className="flex items-center gap-3">

          <span className="text-xl">
            {item.mood === "Happy" && "😊"}
            {item.mood === "Neutral" && "😐"}
            {item.mood === "Sad" && "😢"}
            {item.mood === "Stressed" && "😰"}
            {item.mood === "Angry" && "😠"}
            {item.mood === "Anxious" && "😟"}
          </span>

          <span className="font-medium">{item.mood}</span>

        </div>

        <span className="text-sm text-gray-500">
          {new Date(item.createdAt).toLocaleDateString()}
        </span>
      </div>
    ))}
  </div>
</div>
    </div>
  );
}
