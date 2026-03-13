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

    await userService.addMoodLog({ mood });
    setMood("");
    fetchLogs();
  };

  const moods = ["Happy", "Neutral", "Sad", "Stressed", "Angry", "Anxious"];

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
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

      <div className="mt-6">
        <h3 className="font-semibold text-lg">Mood History</h3>
        <ul className="mt-3 space-y-2">
          {logs.map((item) => (
            <li
              key={item._id}
              className="border px-3 py-2 rounded-md flex justify-between"
            >
              <span>{item.mood}</span>
              <span className="text-gray-500 text-sm">
                {new Date(item.createdAt).toLocaleDateString()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
