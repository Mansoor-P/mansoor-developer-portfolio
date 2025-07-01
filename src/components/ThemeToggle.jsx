import { useState, useEffect, useRef } from "react";
import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

export default function ThemeToggle({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const themes = [
    { name: "Light", value: "light", icon: <SunIcon className="h-5 w-5" /> },
    { name: "Dark", value: "dark", icon: <MoonIcon className="h-5 w-5" /> },
    {
      name: "System",
      value: "system",
      icon: <ComputerDesktopIcon className="h-5 w-5" />,
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentIcon = {
    light: <SunIcon className="h-5 w-5" />,
    dark: <MoonIcon className="h-5 w-5" />,
    system: <ComputerDesktopIcon className="h-5 w-5" />,
  }[theme];

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-2 rounded bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700 transition"
        title="Change Theme"
      >
        {currentIcon}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-zinc-800 shadow-lg rounded-md z-50">
          {themes.map((t) => (
            <button
              key={t.value}
              onClick={() => {
                setTheme(t.value);
                setIsOpen(false);
              }}
              className={`flex items-center w-full gap-2 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-700 transition
              ${theme === t.value ? "text-blue-500 font-semibold" : "text-gray-700 dark:text-gray-200"}`}
            >
              {t.icon}
              {t.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
