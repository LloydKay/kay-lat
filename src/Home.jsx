import React from "react";

const Home = () => {
  return (
    <>
      <div className=" bg-white dark:bg-black dark:text-white h-screen ">
        <p className="text-red-600">HGome</p>
        <div
          className="mt-10 md:mt-24  max-w-3xl mx-auto "
          style={{ opacity: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            className="h-38 w-36 rounded-full"
            alt="Hello"
            loading="eager"
            style={{ transform: "none" }}
          />
          <div>
            <h1
              className="block text-2xl md:text-3xl font-bold my-2 text-balance"
              style={{ opacity: 1, transform: "none" }}
            >
              Hey, good to see you here!
            </h1>
            <p
              className="block text-pretty dark:text-gray-400 leading-relaxed"
              style={{ opacity: 1, transform: "none" }}
            >
              I am Kay, a software engineer based in Toronto, Canada. I believe
              great software should be powerful under the hood and beautiful on
              the surface. Welcome to my digital playground where form meets
              function, and every semicolon is exactly where it should be ✨.
              Here, you will find notes, demos and projects in areas I am
              currently exploring as I learn to build better products and
              experiences on the web, mobile, blockchain and{" "}
              <a
                href="https://www.servicenow.com/"
                target="_blank"
                className="text-green-600 hover:underline"
              >
                ServiceNow.
              </a>
            </p>
          </div>
          <div className="flex items-start">
            <div className="flex flex-col items-center mr-4 relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/30 dark:border-gray-500 z-10 relative backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="size-[1.125rem] text-note-orange"
                >
                  <path
                    opacity=".4"
                    d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M18.5 9.25h-2c-1.52 0-2.75-1.23-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM10 17.751c-.19 0-.38-.07-.53-.22l-2-2a.755.755 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.47 1.47 1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM14 17.751c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l1.47-1.47-1.47-1.47a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="w-px md:h-[calc(100%+2rem)] h-[calc(100%+4rem)] border-l-2 border-dashed absolute top-10 left-5 -translate-x-1/2 border-l-foreground/30 dark:border-l-gray-500" />
            </div>
            <div
              className="pb-8 flex-grow"
              style={{ opacity: 1, transform: "none" }}
            >
              <div>
                <a href="/notes/javascript-fundamentals">
                  <span className="text-xs transition-colors text-foreground">
                    Note | {/* */}Javascript{/* */} | {/* */}Tue, 9th Jul. 2024
                  </span>
                  <h2 className="text-lg md:text-xl font-semibold mb-1 text-balance transition-colors text-foreground">
                    Javascript - Basic Concepts
                  </h2>
                  <p className="text-sm text-foreground/70 dark:text-gray-400 text-pretty">
                    JavaScript is a single-threaded, non-blocking, asynchronous
                    language. To understand how it handles concurrent
                    operations, it is import to understand several...
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex flex-col items-center mr-4 relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/30 dark:border-gray-500 z-10 relative backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="size-[1.125rem] text-note-orange"
                >
                  <path
                    opacity=".4"
                    d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M18.5 9.25h-2c-1.52 0-2.75-1.23-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM10 17.751c-.19 0-.38-.07-.53-.22l-2-2a.755.755 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.47 1.47 1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM14 17.751c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l1.47-1.47-1.47-1.47a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="w-px md:h-[calc(100%+2rem)] h-[calc(100%+4rem)] border-l-2 border-dashed absolute top-10 left-5 -translate-x-1/2 border-l-foreground/30 dark:border-l-gray-500" />
            </div>
            <div
              className="pb-8 flex-grow"
              style={{ opacity: 1, transform: "none" }}
            >
              <div>
                <a href="/notes/javascript-fundamentals">
                  <span className="text-xs transition-colors text-foreground">
                    Note | {/* */}Javascript{/* */} | {/* */}Tue, 9th Jul. 2024
                  </span>
                  <h2 className="text-lg md:text-xl font-semibold mb-1 text-balance transition-colors text-foreground">
                    Javascript - Basic Concepts
                  </h2>
                  <p className="text-sm text-foreground/70 dark:text-gray-400 text-pretty">
                    JavaScript is a single-threaded, non-blocking, asynchronous
                    language. To understand how it handles concurrent
                    operations, it is import to understand several...
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
