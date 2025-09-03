import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";
import ha from "../assets/house-ma.png";
import tob from "../assets/tob.png";
import chatty from "../assets/chat.png";

// Reusable DemoCard component
const DemoCard = ({ title, subtitle, tech, href, imgSrc }) => {
  return (
    <div
      className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black shadow-md"
      data-aos="fade-up"
      data-aos-once="true"
    >
      <div className="p-6 flex flex-col relative">
        {/* Top-right button */}
        <Link
          className="absolute top-4 right-4 group inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 h-9 w-9"
          to={href}
          title={title}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="group-hover:text-pink-400 text-gray-700 dark:text-gray-300"
          >
            <path
              d="M21 9.75c-.41 0-.75-.34-.75-.75V3.75H15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75v6c0 .41-.34.75-.75.75ZM9 21.75H3c-.41 0-.75-.34-.75-.75v-6c0-.41.34-.75.75-.75s.75.34.75.75v5.25H9c.41 0 .75.34.75.75s-.34.75-.75.75Z"
              fill="currentColor"
            />
            <path
              d="M13.5 11.251c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l7.5-7.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-7.5 7.5c-.15.15-.34.22-.53.22ZM3 21.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l7.5-7.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-7.5 7.5c-.15.15-.34.22-.53.22Z"
              fill="currentColor"
            />
          </svg>
        </Link>

        {/* Subtitle & Title */}
        <span className="text-xs text-gray-500 dark:text-gray-400">{tech}</span>
        <Link
          href={href}
          className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-6 hover:text-demo-blue"
        >
          {title}
        </Link>
      </div>

      {/* Preview Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
        <img
          src={imgSrc}
          alt={`${title} screenshot`}
          className="object-fill w-full h-full"
        />
      </div>
    </div>
  );
};

// Main Demos section
const Demos = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true, // only animate once
      startEvent: "DOMContentLoaded", // triggers immediately
    });
  }, []);

  const projects = [
    {
      title: "Property Pulse",
      subtitle: "Real Estate App",
      tech: "Project | Next JS + MongoDB",
      href: "real",
      imgSrc: ha,
    },
    {
      title: "Chatr",
      subtitle: "Messaging",
      tech: "Project | React + Node",
      href: "task-flow",
      imgSrc: chatty,
    },
    {
      title: "PortfolioGen",
      subtitle: "Portfolio Builder",
      tech: "Project | Vite + Tailwind",
      href: "portfolio-gen",
      imgSrc: tob,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col mx-auto bg-white dark:bg-black text-gray-800 dark:text-gray-200 pb-20">
      <div className="flex flex-col px-4 container max-w-3xl mx-auto py-10 mt-20">
        <section className="h-full w-full">
          {/* Header */}
          <div className="flex gap-2 items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 z-10 relative backdrop-blur-sm bg-white/70 dark:bg-gray-800/70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="text-demo-blue size-4"
              >
                <path
                  d="m19.5 7.499-1.49 1.49-3-3 1.49-1.49c.42-.42.96-.62 1.5-.62s1.08.2 1.5.62c.83.83.83 2.17 0 3Z"
                  fill="currentColor"
                />
                <path
                  opacity=".4"
                  d="M18.01 8.988 6.5 20.498c-.83.83-2.17.83-3 0-.83-.83-.83-2.17 0-3l11.51-11.51 3 3Z"
                  fill="currentColor"
                />
                <path
                  d="m9.95 3.5.41-1.39c.04-.13 0-.27-.09-.37-.09-.1-.25-.14-.38-.1l-1.39.41-1.39-.41c-.13-.04-.27 0-.37.09-.1.1-.13.24-.09.37l.4 1.4-.41 1.39c-.04.13 0 .27.09.37.1.1.24.13.37.09l1.4-.4 1.39.41c.04.01.07.02.11.02.1 0 .19-.04.27-.11.1-.1.13-.24.09-.37l-.41-1.4ZM5.95 9.5l.41-1.39c.04-.13 0-.27-.09-.37-.1-.1-.24-.13-.37-.09l-1.4.4-1.39-.41c-.13-.04-.27 0-.37.09-.1.1-.13.24-.09.37l.4 1.4-.41 1.39c-.04.13 0 .27.09.37.1.1.24.13.37.09l1.39-.41 1.39.41c.03.01.07.01.11.01.1 0 .19-.04.27-.11.1-.1.13-.24.09-.37l-.4-1.38ZM20.95 14.5l.41-1.39c.04-.13 0-.27-.09-.37-.1-.1-.24-.13-.37-.09l-1.39.41-1.39-.41c-.13-.04-.27 0-.37.09-.1.1-.13.24-.09.37l.41 1.39-.41 1.39c-.04.13 0 .27.09.37.1.1.24.13.37.09l1.39-.41 1.39.41c.03.01.07.01.11.01.1 0 .19-.04.27-.11.1-.1.13-.24.09-.37l-.42-1.38Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-demo-blue">Demos</h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                A showcase of side projects & ideas I am currently exploring
              </p>
            </div>
          </div>

          {/* Grid of Projects */}
          <div className="grid grid-cols-1 gap-10 mt-10">
            {projects.map((project, index) => (
              <DemoCard key={index} {...project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Demos;
