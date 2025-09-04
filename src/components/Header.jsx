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
    <div className="w-full fixed top-0 z-50 px-4">
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
              className="hover:opacity-70 text-lg"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "🌞" : "🌙"}
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
