// frontend/src/components/common/Navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Search, User } from "lucide-react";

/**
 * Props:
 * - user: object | null
 * - onLogout: function
 */
export default function Navbar({ user = null, onLogout = () => {} }) {
  const [open, setOpen] = React.useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/features", label: "Features" },
    { to: "/chat", label: "Chat" },
    { to: "/doctors", label: "Doctors" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                M
              </div>
              <span className="font-semibold text-lg">MindCare</span>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                aria-label="Search"
                className="pl-9 pr-3 py-2 rounded-md border text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <Search className="w-4 h-4 absolute left-2 top-2.5 text-gray-400" />
            </div>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 text-sm px-3 py-2 rounded-md hover:bg-gray-50"
                >
                  <User className="w-4 h-4" />
                  <span>{user.name || "Account"}</span>
                </Link>
                <button
                  onClick={onLogout}
                  className="text-sm px-3 py-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <Link
                  to="/login"
                  className="text-sm px-3 py-2 rounded-md hover:bg-gray-50"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-sm px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block text-sm font-medium ${
                    isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-2">
              {user ? (
                <>
                  <Link to="/dashboard" onClick={() => setOpen(false)} className="block py-2">
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      onLogout();
                      setOpen(false);
                    }}
                    className="w-full text-left py-2 text-red-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setOpen(false)} className="block py-2">
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setOpen(false)}
                    className="block py-2 text-white bg-blue-600 rounded-md text-center"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
