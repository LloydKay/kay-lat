import React from "react";

const screenshots = [
  "https://images.pexels.com/photos/27522902/pexels-photo-27522902.jpeg",
  "https://source.unsplash.com/random/800x450?chat,2",
  "https://source.unsplash.com/random/800x450?chat,3",
  "https://source.unsplash.com/random/800x450?chat,4",
  "https://source.unsplash.com/random/800x450?chat,5",
  "https://source.unsplash.com/random/800x450?chat,6",
  "https://source.unsplash.com/random/800x450?chat,7",
];

const features = [
  "Realtime messaging with Pusher Js",
  "Google Authentication with NextAuth",
  "Send & manage friend requests by email",
  "New message previews & unread message counts",
  "Loading states",
  "Next Js route handlers",
];

const Real = () => {
  return (
    <div className="dark:bg-black dark:text-white">
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
            <span>Upstash Redis</span>
            <span className="text-light-gray">|</span>
            <span>Pusher JS</span>
            <span className="text-light-gray">|</span>
            <span>TailwindCSS</span>
          </div>

          <h1 className="text-4xl font-bold text-demo-blue">Chattr</h1>
          <p className="text-foreground">
            This project implements realtime messaging/chat with friends using
            Google Authentication, Upstash Redis database and Pusher JS. Send
            requests to friends with email and chat away!
          </p>

          <div className="flex flex-wrap gap-4 mt-3">
            {/* Visit Live Site */}
            <a
              href="https://realtime-chat-topaz.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-light-gray bg-background shadow-sm hover:bg-background/70 hover:text-accent-foreground h-9 px-4 py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                />
                <g opacity=".4">
                  <path
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 3h1a28.424 28.424 0 000 18H8M15 3a28.424 28.424 0 010 18"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16v-1a28.424 28.424 0 0018 0v1M3 9a28.424 28.424 0 0118 0"
                  />
                </g>
              </svg>
              Visit Live Site
            </a>

            {/* View Source */}
            <a
              href="https://github.com/bushcode/realtime-chat.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-light-gray bg-background shadow-sm hover:bg-background/70 hover:text-accent-foreground h-9 px-4 py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5.25 22a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g
                  opacity=".4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 15V8M5.129 15a4.058 4.058 0 0 1 3.94-3.04l3.43.01c2.62.01 4.85-1.67 5.67-4.01" />
                </g>
              </svg>
              View Source
            </a>
          </div>
        </div>

        {/* Carousel */}
        <div className="w-full aspect-video overflow-hidden rounded-xl">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {screenshots.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Chattr screenshot ${i + 1}`}
                className="snap-start w-full flex-shrink-0 object-cover rounded-lg"
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
