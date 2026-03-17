import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function MoodAnalytics({ logs = [] }) {
  // ✅ Correct moods (same as MoodTracker)
  const moods = ["Happy", "Neutral", "Sad", "Stressed", "Angry", "Anxious"];

  // ✅ Count moods dynamically
  const moodCounts = moods.map(
    (mood) => logs.filter((log) => log.mood === mood).length
  );

  // ✅ Chart Data
  const data = {
    labels: moods,
    datasets: [
      {
        label: "Mood Frequency",
        data: moodCounts,
        borderRadius: 8,
        backgroundColor: [
          "#34d399", // Happy
          "#60a5fa", // Neutral
          "#f87171", // Sad
          "#fbbf24", // Stressed
          "#a78bfa", // Angry
          "#fb7185", // Anxious
        ],
      },
    ],
  };

  // ✅ Chart Options (clean UI)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          font: { size: 14 },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
        grid: {
          color: "#e5e7eb",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bg-white/60 backdrop-blur-lg border border-white/40 shadow-lg rounded-xl p-6 mt-10">
      <h3 className="text-lg font-semibold mb-4">Mood Analytics</h3>
      <Bar data={data} options={options} />
    </div>
  );
}