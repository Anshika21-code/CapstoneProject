// frontend/src/components/ai/RecommendationCard.jsx
import React from "react";

export default function RecommendationCard({ recommendations = [] }) {
  if (recommendations.length === 0)
    return (
      <p className="text-gray-500 text-center">
        No recommendations available.
      </p>
    );

  return (
    <div className="space-y-4 max-w-xl mx-auto">
      {recommendations.map((rec, i) => (
        <div
          key={i}
          className="border rounded-lg bg-white p-5 shadow-sm hover:shadow-md transition"
        >
          <h3 className="text-lg font-semibold">{rec.title}</h3>
          <p className="text-gray-700 mt-2">{rec.description}</p>

          {rec.resources && (
            <ul className="list-disc ml-6 mt-3 text-sm text-blue-600">
              {rec.resources.map((r, idx) => (
                <li key={idx}>{r}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
