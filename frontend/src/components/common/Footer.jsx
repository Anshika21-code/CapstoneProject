// frontend/src/components/common/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold">MindCare</h4>
          <p className="text-sm text-gray-600 mt-2">
            AI-powered, private mental health support — anonymous chat, expert consultations,
            and personalized resources.
          </p>
          <p className="text-xs text-gray-500 mt-4">© {new Date().getFullYear()} MindCare</p>
        </div>

        <div className="flex flex-col">
          <h5 className="font-medium">Explore</h5>
          <nav className="mt-3 space-y-2 text-sm">
            <Link to="/features" className="block hover:underline">Features</Link>
            <Link to="/chat" className="block hover:underline">Chat</Link>
            <Link to="/doctors" className="block hover:underline">Doctors</Link>
            <Link to="/blog" className="block hover:underline">Blog</Link>
          </nav>
        </div>

        <div>
          <h5 className="font-medium">Stay in touch</h5>
          <p className="text-sm text-gray-600 mt-2">Get occasional product updates and mental health tips.</p>
          <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              aria-label="Email for newsletter"
              type="email"
              placeholder="you@example.com"
              className="px-3 py-2 rounded-md border w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button className="px-3 py-2 bg-blue-600 text-white rounded-md text-sm">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 text-xs text-gray-500 flex flex-col md:flex-row justify-between">
          <span>Privacy · Terms · Contact</span>
          <span className="mt-2 md:mt-0">Built with ♥ for mental wellness</span>
        </div>
      </div>
    </footer>
  );
}
