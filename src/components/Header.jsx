import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import head from "../assets/joe.png";

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
};

const Header = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="w-full fixed top-0 z-50 px-6">
      {/* wrapper adds spacing above the border */}
      <div className="mt-4">
        <header className="flex flex-wrap items-center justify-between max-w-2xl mx-auto px-4 border dark:border-gray-500 rounded-lg bg-transparent">
          <Link to="/">
            <div className="flex flex-col items-center space-y-1">
              <img src={head} alt="Kay" className="w-10 h-10 rounded-full" />
              <span className=" -mt-3 mb-1 font-semibold text-gray-900 dark:text-white text-xs">
                Kay
              </span>
            </div>
          </Link>

          <nav className="flex space-x-6 text-gray-700 dark:text-gray-300">
            <a href="/demos" className="hover:text-black dark:hover:text-white">
              Demos
            </a>
            <a href="#notes" className="hover:text-black dark:hover:text-white">
              Notes
            </a>
            <a
              href="/resume"
              className="hover:text-black dark:hover:text-white"
            >
              Resume
            </a>
            <a
              href="/contact"
              className="hover:text-black dark:hover:text-white"
            >
              Contact
            </a>
            <button className=" hover:opacity-50" onClick={toggleTheme}>
              {theme === "dark" ? "🌞" : "🌙"}
            </button>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
