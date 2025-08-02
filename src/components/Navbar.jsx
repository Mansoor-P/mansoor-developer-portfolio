import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiCodeAiLine } from "react-icons/ri";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "../components/ThemeToggle";

const navLinks = [
  // { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();

  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "system");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const apply = (t) => {
      if (t === "dark") root.classList.add("dark");
      else if (t === "light") root.classList.remove("dark");
      else {
        root.classList.toggle("dark", window.matchMedia("(prefers-color-scheme: dark)").matches);
      }
    };
    apply(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="sticky top-5 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div
              className="text-blue-600 dark:text-blue-400 font-bold text-6xl cursor-pointer"
              style={{ fontFamily: "'Courier New', Courier, monospace" }}
            >
              <RiCodeAiLine />
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xl font-semibold hover:text-blue-500 transition ${
                  location.pathname === link.path
                    ? "text-blue-500 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Theme toggle */}
          <div className="hidden md:flex items-center">
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700 transition"
            >
              {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 dark:bg-zinc-900 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-zinc-700">
          <div
            className="text-blue-600 dark:text-blue-400 font-bold text-5xl"
            style={{ fontFamily: "'Courier New', Courier, monospace" }}
          >
            <RiCodeAiLine />
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700 transition"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col mt-6 space-y-4 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg font-semibold px-3 py-2 rounded hover:text-blue-500 hover:bg-gray-200 dark:hover:bg-zinc-700 transition ${
                location.pathname === link.path
                  ? "text-blue-500 dark:text-blue-400 bg-gray-200 dark:bg-zinc-700"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile theme toggle */}
        <div className="flex justify-center py-6">
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
        />
      )}
    </nav>
  );
}
