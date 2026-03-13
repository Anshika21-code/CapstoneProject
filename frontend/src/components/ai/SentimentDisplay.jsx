// frontend/src/components/ai/SentimentDisplay.jsx
import React from "react";

export default function SentimentDisplay({ sentiment }) {
  const colors = {
    positive: "bg-green-100 text-green-700",
    neutral: "bg-gray-100 text-gray-700",
    negative: "bg-red-100 text-red-700",
  };

  const messages = {
    positive: "You're feeling positive today! Keep the energy. 💚",
    neutral: "You seem balanced. Let's explore further. 😊",
    negative: "You're going through something tough. I'm here to help. 🤍",
  };

  const emoji = {
    positive: "😊",
    neutral: "😐",
    negative: "😟",
  };

  if (!sentiment)
    return (
      <p className="text-gray-500 text-center">No sentiment data yet.</p>
    );

  return (
    <div className="border rounded-lg p-5 bg-white shadow-sm max-w-md mx-auto">
      <div
        className={`p-4 rounded-md text-center text-lg font-semibold ${colors[sentiment]}`}
      >
        Sentiment: <span className="capitalize">{sentiment}</span> {emoji[sentiment]}
      </div>

      <p className="mt-4 text-gray-700 text-center">{messages[sentiment]}</p>
    </div>
  );
}
