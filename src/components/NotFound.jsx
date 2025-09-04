import React, { useEffect } from "react";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const NotFound = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true, // run only once
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="grid place-items-center min-h-screen bg-background relative dark:bg-black">
      <div className="container max-w-[53.75rem] flex flex-col items-center gap-8">
        {/* 404 Numbers */}
        <div className="flex gap-4 w-full justify-center items-center">
          {["4", "0", "4"].map((num, index) => (
            <div
              key={index}
              className="w-24 h-32 relative overflow-hidden"
              data-aos="fade-down"
              data-aos-delay={index * 200} // stagger animation
            >
              <div className="absolute inset-0 flex items-center justify-center text-9xl font-bold text-foreground dark:text-gray-200">
                {num}
              </div>
            </div>
          ))}
        </div>

        {/* Message */}
        <div
          className="flex flex-col items-center gap-4 text-center"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <h1 className="text-2xl font-bold text-foreground dark:text-white">
            Page Not Found
          </h1>
          <p className="text-foreground/70 dark:text-gray-400 text-center">
            Oops... this page is lost in cyberspace 🚀.
          </p>

          <Link
            to="/"
            className="mt-4 px-6 py-3 rounded-xl border border-light-gray text-foreground dark:text-white hover:bg-demo-blue transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
