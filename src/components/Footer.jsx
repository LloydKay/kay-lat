import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="py-8 text-center bg-white dark:bg-black text-gray-500 dark:text-gray-300 sticky bottom-0 z-50 ">
        <div className="flex justify-center items-center gap-2 flex-wrap">
          © {new Date().getFullYear()} Kay
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "red" }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "yellow" }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
            <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
            <line x1="9.7" y1="17" x2="14.3" y2="17" />
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
