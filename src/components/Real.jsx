import React, { useState } from "react";
import { Link } from "react-router";
import ho from "../assets/house-ma.png";
import real1 from "../assets/real1.png";
import real2 from "../assets/real2.png";

const screenshots = [
  "https://images.pexels.com/photos/27522902/pexels-photo-27522902.jpeg",
  real1,
  real2,
  ho,
];

const features = [
  "Realtime house marketplace Pusher Js",
  "Google Authentication with NextAuth",
  "Send & receive messages about listings ",
  "New message previews & unread message counts",
  "Loading states",
  "Next Js route handlers",
];

const Real = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="dark:bg-black dark:text-white pb-20">
      <div className="flex flex-col gap-8 px-4 lg:px-0 max-w-3xl mx-auto py-12">
        {/* Back button */}
        <div className="mb-4 mt-20">
          <a
            href="/demos"
            className="inline-flex items-center gap-2 text-demo-blue font-medium text-sm px-3 py-2 border border-light-gray rounded-md hover:bg-background/70 hover:text-accent-foreground transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.43 10.81L3.87 8.25l2.56-2.56M7.13 18.31h8c2.76 0 5-2.24 5-5s-2.24-5-5-5h-11"
                opacity=".4"
              />
            </svg>
            Back
          </a>
        </div>

        {/* Project metadata */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-2 text-sm text-note-orange">
            <span>Next JS</span>
            <span className="text-light-gray">|</span>
            <span>Mongo DB</span>
            <span className="text-light-gray">|</span>
            <span>Pusher JS</span>
            <span className="text-light-gray">|</span>
            <span>TailwindCSS</span>
          </div>

          <h1 className="text-4xl font-bold text-demo-blue">
            House Marketplace
          </h1>
          <p className="text-foreground">
            This project implements realtime messaging/chat with friends using
            Google Authentication, Upstash Redis database and Pusher JS. Send
            requests to friends with email and chat away!
          </p>

          <div className="flex flex-wrap gap-4 mt-3">
            {/* Visit Live Site */}
            <Link
              to="https://prop-pulse-seven.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-light-gray bg-background shadow-sm hover:bg-background/70 hover:text-accent-foreground h-9 px-4 py-2"
            >
              Visit Live Site
            </Link>

            {/* View Source */}
            <a
              href="https://github.com/bushcode/realtime-chat.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-light-gray bg-background shadow-sm hover:bg-background/70 hover:text-accent-foreground h-9 px-4 py-2"
            >
              View Source
            </a>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative w-full aspect-video overflow-hidden rounded-xl">
          <img
            src={screenshots[current]}
            alt={`Chattr screenshot ${current + 1}`}
            className="w-full h-full object-cover rounded-xl transition-all duration-500"
          />

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/50 text-white rounded-full hover:bg-black/70"
          >
            &#8592;
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/50 text-white rounded-full hover:bg-black/70"
          >
            &#8594;
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full ${
                  current === i ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-demo-blue">
            Key Features
          </h2>
          <ul className="list-disc list-inside space-y-2 text-foreground dark:text-white">
            {features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Real;
