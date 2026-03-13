// frontend/src/pages/Home.jsx
import React from "react";
import Chatbot from "../components/ai/Chatbot";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="px-6 lg:px-20 py-12">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Your Mental Wellness, Powered by AI & Professionals
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Get emotional support, talk to verified therapists, track your mood, and
          connect with an AI-powered mental health assistant.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="border px-6 py-3 rounded-md hover:bg-gray-100"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="mt-16">
        <Chatbot />
      </div>
    </div>
  );
}
