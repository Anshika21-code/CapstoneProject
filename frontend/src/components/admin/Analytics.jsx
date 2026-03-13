// frontend/src/components/admin/Analytics.jsx
import React from "react";

export default function Analytics() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Platform Analytics</h2>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="border rounded-lg bg-white p-6 h-64 flex items-center justify-center text-gray-500">
          User Growth Chart (placeholder)
        </div>

        <div className="border rounded-lg bg-white p-6 h-64 flex items-center justify-center text-gray-500">
          Chat Activity Chart (placeholder)
        </div>

        <div className="border rounded-lg bg-white p-6 h-64 flex items-center justify-center text-gray-500">
          Doctor Engagement Chart (placeholder)
        </div>

        <div className="border rounded-lg bg-white p-6 h-64 flex items-center justify-center text-gray-500">
          Blog Reading Graph (placeholder)
        </div>
      </div>
    </div>
  );
}
