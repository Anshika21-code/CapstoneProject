// frontend/src/components/admin/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import adminService from "../../services/adminService";
import { Users, UserCheck, FileText, MessageSquare } from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    doctors: 0,
    blogs: 0,
    chats: 0,
  });

  const fetchStats = async () => {
    const data = await adminService.getStats();
    if (data) setStats(data);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const cards = [
    {
      icon: Users,
      label: "Total Users",
      value: stats.users,
      color: "bg-blue-600",
    },
    {
      icon: UserCheck,
      label: "Total Doctors",
      value: stats.doctors,
      color: "bg-green-600",
    },
    {
      icon: FileText,
      label: "Blogs Published",
      value: stats.blogs,
      color: "bg-purple-600",
    },
    {
      icon: MessageSquare,
      label: "Total Chat Messages",
      value: stats.chats,
      color: "bg-yellow-600",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold mb-6">Admin Dashboard</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="p-6 bg-white border rounded-lg shadow-sm hover:shadow-md"
          >
            <div
              className={`w-12 h-12 rounded-md flex items-center justify-center text-white ${card.color}`}
            >
              <card.icon className="w-6 h-6" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">{card.value}</h3>
            <p className="text-gray-600">{card.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
