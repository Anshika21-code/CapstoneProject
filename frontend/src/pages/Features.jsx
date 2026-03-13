// frontend/src/pages/Features.jsx
import React from "react";
import { MessageSquare, Users, Brain, Book } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI Chatbot Support",
      description:
        "Get instant emotional assistance from our AI-powered counselor.",
    },
    {
      icon: Users,
      title: "Talk to Therapists",
      description:
        "Book appointments with verified mental health professionals.",
    },
    {
      icon: Book,
      title: "Mental Health Blogs",
      description:
        "Learn from expert-written articles on stress, anxiety & more.",
    },
    {
      icon: MessageSquare,
      title: "Anonymous Chat Rooms",
      description:
        "Share your thoughts with a safe, moderated community.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-8 text-center">Platform Features</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 border rounded-lg bg-white hover:shadow-md transition"
          >
            <f.icon className="w-8 h-8 text-blue-600" />

            <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
            <p className="text-gray-600 mt-2">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
