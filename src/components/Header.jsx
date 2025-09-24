import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import head from "../assets/joe.png";
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS styles

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
  const [menuOpen, setMenuOpen] = useState(false);
  const aosInitialized = useRef(false);

  useEffect(() => {
    if (!aosInitialized.current) {
      AOS.init({ duration: 800, once: true }); // animate only once
      aosInitialized.current = true;
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className="w-full fixed top-0 z-50 px-4 backdrop-blur-xl">
      <div className="mt-4">
        <header
          className="flex items-center justify-between max-w-2xl mx-auto px-4 py-2 border dark:border-gray-500 rounded-lg bg-transparent"
          data-aos="fade-in"
        >
          {/* Logo */}
          <Link to="/" data-aos="fade-right" data-aos-delay="300">
            <div className="flex flex-col items-center space-y-1">
              <img src={head} alt="Kay" className="size-6 rounded-full" />
              <span className="font-semibold text-gray-900 dark:text-white text-xs hidden md:block">
                Kay
              </span>
            </div>
          </Link>

          {/* Right side: nav + theme + hamburger */}
          <div
            className="flex items-center space-x-4"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6 text-gray-700 dark:text-gray-300">
              <a
                href="/demos"
                className="hover:text-black dark:hover:text-white"
              >
                Demos
              </a>
              <a
                href="/notes"
                className="hover:text-black dark:hover:text-white"
              >
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
            </nav>

            {/* Theme button */}
            <button
              className="flex items-center justify-center hover:opacity-70 w-8 h-8 rounded-full"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                // Sun (yellow)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-yellow-600"
                  fill="currentColor"
                >
                  <path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
                  <path d="M12 22.96c-.55 0-1-.41-1-.96v-.08c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04Zm7.14-2.82c-.26 0-.51-.1-.71-.29l-.13-.13a.996.996 0 1 1 1.41-1.41l.13.13a.996.996 0 0 1-.7 1.7Zm-14.28 0c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l.13-.13a.996.996 0 1 1 1.41 1.41l-.13.13c-.19.19-.45.29-.7.29ZM22 13h-.08c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1ZM2.08 13H2c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1Zm16.93-7.01c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l.13-.13a.996.996 0 1 1 1.41 1.41l-.13.13c-.19.19-.44.29-.7.29Zm-14.02 0c-.26 0-.51-.1-.71-.29l-.13-.14a.996.996 0 1 1 1.41-1.41l.13.13c.39.39.39 1.02 0 1.41-.19.2-.45.3-.7.3ZM12 3.04c-.55 0-1-.41-1-.96V2c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04Z" />
                </svg>
              ) : (
                // Moon (gray)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-gray-600"
                  fill="currentColor"
                >
                  <path d="M21.75 15.5a9.75 9.75 0 0 1-12.87-12.9 1 1 0 0 0-1.36-1.2A11.75 11.75 0 1 0 23 16.85a1 1 0 0 0-1.25-1.35Z" />
                </svg>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              className="flex md:hidden p-2 text-gray-800 dark:text-gray-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </header>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 space-y-3">
            <a
              href="/demos"
              className="block hover:text-black dark:hover:text-white"
            >
              Demos
            </a>
            <a
              href="/notes"
              className="block hover:text-black dark:hover:text-white"
            >
              Notes
            </a>
            <a
              href="/resume"
              className="block hover:text-black dark:hover:text-white"
            >
              Resume
            </a>
            <a
              href="/contact"
              className="block hover:text-black dark:hover:text-white"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
