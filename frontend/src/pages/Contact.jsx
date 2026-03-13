// frontend/src/pages/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>

      <form className="space-y-5">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border px-4 py-2 rounded-md"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border px-4 py-2 rounded-md"
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="w-full border px-4 py-2 rounded-md"
        ></textarea>

        <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
}
