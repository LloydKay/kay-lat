import { Link } from "react-router";
import tob from "./assets/tob.png";
import real from "./assets/house-ma.png";
import chatty from "./assets/chat.png";
import hoi from "./assets/hio.png";

const Home = () => {
  return (
    <>
      <div className=" dark:bg-black dark:text-white ">
        <div className="flex flex-col px-4 container max-w-3xl mx-auto py-10 ">
          <section className="container max-w-3xl mx-auto ">
            <div className="mt-10  " style={{ opacity: 1 }}>
              <img
                src={hoi}
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
                  I am Kay, a software engineer based in Toronto, Canada. I
                  believe great software should be powerful under the hood and
                  beautiful on the surface. Welcome to my digital playground
                  where form meets function, and every semicolon is exactly
                  where it should be ✨. Here, you will find notes, demos and
                  projects in areas I am currently exploring as I learn to build
                  better products and experiences on the web, mobile, blockchain
                  and{" "}
                  <a
                    href="https://www.servicenow.com/"
                    target="_blank"
                    className="text-green-600 hover:underline"
                  >
                    ServiceNow.
                  </a>
                </p>
              </div>
              <div className="flex items-start mt-3">
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
                    <a href="/notes/javascript-fundamentals ">
                      <span className="text-xs transition-colors hover:text-orange-500">
                        Note | {/* */}Javascript{/* */} | {/* */}Tue, 9th Jul.
                        2024
                      </span>
                      <h2 className="text-lg md:text-xl font-semibold mb-1 text-balance transition-colors text-foreground">
                        Javascript - Basic Concepts
                      </h2>
                      <p className="text-sm text-foreground/70 dark:text-gray-400 text-pretty">
                        JavaScript is a single-threaded, non-blocking,
                        asynchronous language. To understand how it handles
                        concurrent operations, it is import to understand
                        several...
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
                        Note | {/* */}Javascript{/* */} | {/* */}Tue, 9th Jul.
                        2024
                      </span>
                      <h2 className="text-lg md:text-xl font-semibold mb-1 text-balance transition-colors text-foreground">
                        Javascript - Basic Concepts
                      </h2>
                      <p className="text-sm text-foreground/70 dark:text-gray-400 text-pretty">
                        JavaScript is a single-threaded, non-blocking,
                        asynchronous language. To understand how it handles
                        concurrent operations, it is import to understand
                        several...
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                {/* Timeline / Icon Column */}
                <div className="flex flex-col items-center mr-4 relative">
                  {/* Circle Icon */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/30 dark:border-gray-500 z-10 relative backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="size-[1.125rem] text-project-pink"
                    >
                      <path
                        d="M17.31 11.25c.02.26-.07.53-.27.73L11.02 18c-1.33 1.33-2.67 1.33-4.01 0L3 13.99c-.68-.69-1.02-1.38-1-2.07h.07l15.12-.66.12-.01Z"
                        fill="currentColor"
                      />
                      <path
                        opacity=".4"
                        d="M17.04 10.64 9.69 3.29l-.87-.87a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l.87.87L3 9.98c-.64.64-.98 1.29-1 1.94h.07l15.12-.66.12-.01a.949.949 0 0 0-.27-.61Z"
                        fill="currentColor"
                      />
                      <path
                        d="M16 22.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h13c.41 0 .75.34.75.75s-.34.75-.75.75ZM19.35 14.78a.7.7 0 0 0-1 0c-.31.34-1.85 2.08-1.85 3.39 0 1.3 1.05 2.35 2.35 2.35s2.35-1.05 2.35-2.35c0-1.31-1.54-3.05-1.85-3.39Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  {/* Vertical Line */}
                  <div className="w-px md:h-[calc(100%+2rem)] h-[calc(100%+4rem)] border-l-2 border-dashed absolute top-10 left-5 -translate-x-1/2 border-l-foreground/30 dark:border-l-gray-500"></div>
                </div>

                {/* Content Column */}
                <div
                  className="pb-8 flex-grow"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div>
                    <div className="overflow-hidden rounded-xl border border-light-gray relative">
                      <div className="p-6">
                        {/* Header */}
                        <div className="flex flex-col">
                          <Link
                            className="absolute top-4 right-4 group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-light-gray bg-background shadow-sm hover:bg-background/70 hover:text-accent-foreground h-9 w-9"
                            title="Real"
                            to="/demos/real"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="group-hover:text-project-pink"
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
                          <span className="text-xs transition-colors text-foreground">
                            Project | Next JS | Mongo DB
                          </span>
                          <Link
                            className="text-lg font-semibold mb-6 transition-colors text-foreground"
                            href="/demos"
                          >
                            House MarketPlace
                          </Link>
                        </div>

                        {/* Carousel */}
                        <div className="relative w-full max-w-4xl mx-auto">
                          <div
                            className="relative w-full"
                            role="region"
                            aria-roledescription="carousel"
                          >
                            <div className="overflow-hidden">
                              <div
                                className="flex -ml-4"
                                style={{
                                  transform: "translate3d(0px, 0px, 0px)",
                                }}
                              >
                                {/* Slide 1 */}
                                <div
                                  role="group"
                                  aria-roledescription="slide"
                                  className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                                >
                                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                                    <img
                                      alt="chattr screenshot 1"
                                      decoding="async"
                                      className="object-fill absolute inset-0 h-full w-full"
                                      src={real}
                                    />
                                  </div>
                                </div>

                                {/* TODO: Add remaining slides (all same structure as above) */}
                                <div
                                  role="group"
                                  aria-roledescription="slide"
                                  className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                                >
                                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                                    <img
                                      alt="chattr screenshot 1"
                                      decoding="async"
                                      className="object-fill absolute inset-0 h-full w-full"
                                      src="https://images.pexels.com/photos/8284731/pexels-photo-8284731.jpeg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Carousel Buttons */}
                            <button
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background shadow-sm hover:bg-background/70 hover:text-accent-foreground absolute h-8 w-8 rounded-full border-project-pink top-1/2 -translate-y-1/2 left-2"
                              disabled
                              aria-label="Previous slide"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="text-project-pink"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeMiterlimit="10"
                                  strokeWidth="1.5"
                                  d="M9.57 5.93L3.5 12l6.07 6.07"
                                />
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeMiterlimit="10"
                                  strokeWidth="1.5"
                                  d="M20.5 12H3.67"
                                  opacity=".4"
                                />
                              </svg>
                              <span className="sr-only">Previous slide</span>
                            </button>

                            <button
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background shadow-sm hover:bg-background/70 hover:text-accent-foreground absolute h-8 w-8 rounded-full border-project-pink top-1/2 -translate-y-1/2 right-2"
                              aria-label="Next slide"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="text-project-pink"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeMiterlimit="10"
                                  strokeWidth="1.5"
                                  d="M14.43 5.93L20.5 12l-6.07 6.07"
                                />
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeMiterlimit="10"
                                  strokeWidth="1.5"
                                  d="M3.5 12h16.83"
                                  opacity=".4"
                                />
                              </svg>
                              <span className="sr-only">Next slide</span>
                            </button>
                          </div>
                        </div>
                        {/* End Carousel */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                {/* Timeline / Icon Column */}
                <div className="flex flex-col items-center mr-4 relative">
                  {/* Circle Icon */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/30 dark:border-gray-500 z-10 relative backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="size-[1.125rem] text-project-pink"
                    >
                      <path
                        d="M17.31 11.25c.02.26-.07.53-.27.73L11.02 18c-1.33 1.33-2.67 1.33-4.01 0L3 13.99c-.68-.69-1.02-1.38-1-2.07h.07l15.12-.66.12-.01Z"
                        fill="currentColor"
                      />
                      <path
                        opacity=".4"
                        d="M17.04 10.64 9.69 3.29l-.87-.87a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l.87.87L3 9.98c-.64.64-.98 1.29-1 1.94h.07l15.12-.66.12-.01a.949.949 0 0 0-.27-.61Z"
                        fill="currentColor"
                      />
                      <path
                        d="M16 22.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h13c.41 0 .75.34.75.75s-.34.75-.75.75ZM19.35 14.78a.7.7 0 0 0-1 0c-.31.34-1.85 2.08-1.85 3.39 0 1.3 1.05 2.35 2.35 2.35s2.35-1.05 2.35-2.35c0-1.31-1.54-3.05-1.85-3.39Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  {/* Vertical Line */}
                  <div className="w-px md:h-[calc(100%+2rem)] h-[calc(100%+4rem)] border-l-2 border-dashed absolute top-10 left-5 -translate-x-1/2 border-l-foreground/30 dark:border-l-gray-500"></div>
                </div>

                {/* Content Column */}
                <div
                  className="pb-8 flex-grow"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div>
                    <div className="overflow-hidden rounded-xl border border-light-gray relative">
                      <div className="p-6">
                        {/* Header */}
                        <div className="flex flex-col">
                          <Link
                            className="absolute top-4 right-4 group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-light-gray bg-background shadow-sm hover:bg-background/70 hover:text-accent-foreground h-9 w-9"
                            title="chattr"
                            to="/demos/real"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="group-hover:text-project-pink"
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
                          <span className="text-xs transition-colors text-foreground">
                            Project | Next JS
                          </span>
                          <Link
                            className="text-lg font-semibold mb-6 transition-colors text-foreground"
                            to="/demos/task-flow"
                          >
                            Chattr
                          </Link>
                        </div>

                        {/* Carousel */}
                        <div className="relative w-full max-w-4xl mx-auto">
                          <div
                            className="relative w-full"
                            role="region"
                            aria-roledescription="carousel"
                          >
                            <div className="overflow-hidden">
                              <div
                                className="flex -ml-4"
                                style={{
                                  transform: "translate3d(0px, 0px, 0px)",
                                }}
                              >
                                {/* Slide 1 */}
                                <div
                                  role="group"
                                  aria-roledescription="slide"
                                  className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                                >
                                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                                    <img
                                      alt="chattr screenshot 1"
                                      decoding="async"
                                      className="object-fill absolute inset-0 h-full w-full"
                                      src={chatty}
                                    />
                                  </div>
                                </div>

                                {/* TODO: Add remaining slides (all same structure as above) */}
                                <div
                                  role="group"
                                  aria-roledescription="slide"
                                  className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                                >
                                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                                    <img
                                      alt="chattr screenshot 1"
                                      decoding="async"
                                      className="object-fill absolute inset-0 h-full w-full"
                                      src="https://images.pexels.com/photos/8284731/pexels-photo-8284731.jpeg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Carousel Buttons */}
                            <button
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background shadow-sm hover:bg-background/70 hover:text-accent-foreground absolute h-8 w-8 rounded-full border-project-pink top-1/2 -translate-y-1/2 left-2"
                              disabled
                              aria-label="Previous slide"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="text-project-pink"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeMiterlimit="10"
                                  strokeWidth="1.5"
                                  d="M9.57 5.93L3.5 12l6.07 6.07"
                                />
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeMiterlimit="10"
                                  strokeWidth="1.5"
                                  d="M20.5 12H3.67"
                                  opacity=".4"
                                />
                              </svg>
                              <span className="sr-only">Previous slide</span>
                            </button>

                            <button
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background shadow-sm hover:bg-background/70 hover:text-accent-foreground absolute h-8 w-8 rounded-full border-project-pink top-1/2 -translate-y-1/2 right-2"
                              aria-label="Next slide"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="text-project-pink"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeMiterlimit="10"
                                  strokeWidth="1.5"
                                  d="M14.43 5.93L20.5 12l-6.07 6.07"
                                />
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeMiterlimit="10"
                                  strokeWidth="1.5"
                                  d="M3.5 12h16.83"
                                  opacity=".4"
                                />
                              </svg>
                              <span className="sr-only">Next slide</span>
                            </button>
                          </div>
                        </div>
                        {/* End Carousel */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                {/* Timeline / Icon Column */}
                <div className="flex flex-col items-center mr-4 relative">
                  {/* Circle Icon */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/30 dark:border-gray-500 z-10 relative backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="size-[1.125rem] text-project-pink"
                    >
                      <path
                        d="M17.31 11.25c.02.26-.07.53-.27.73L11.02 18c-1.33 1.33-2.67 1.33-4.01 0L3 13.99c-.68-.69-1.02-1.38-1-2.07h.07l15.12-.66.12-.01Z"
                        fill="currentColor"
                      />
                      <path
                        opacity=".4"
                        d="M17.04 10.64 9.69 3.29l-.87-.87a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l.87.87L3 9.98c-.64.64-.98 1.29-1 1.94h.07l15.12-.66.12-.01a.949.949 0 0 0-.27-.61Z"
                        fill="currentColor"
                      />
                      <path
                        d="M16 22.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h13c.41 0 .75.34.75.75s-.34.75-.75.75ZM19.35 14.78a.7.7 0 0 0-1 0c-.31.34-1.85 2.08-1.85 3.39 0 1.3 1.05 2.35 2.35 2.35s2.35-1.05 2.35-2.35c0-1.31-1.54-3.05-1.85-3.39Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  {/* Vertical Line */}
                  <div className="w-px md:h-[calc(100%+2rem)] h-[calc(100%+4rem)] border-l-2 border-dashed absolute top-10 left-5 -translate-x-1/2 border-l-foreground/30 dark:border-l-gray-500"></div>
                </div>

                {/* Content Column */}
                <div
                  className="pb-8 flex-grow"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div>
                    <div className="overflow-hidden rounded-xl border border-light-gray relative">
                      <div className="p-6">
                        {/* Header */}
                        <div className="flex flex-col">
                          <Link
                            className="absolute top-4 right-4 group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-light-gray bg-background shadow-sm hover:bg-background/70 hover:text-accent-foreground h-9 w-9"
                            title="chattr"
                            href="/demos/portfolio-gen"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="group-hover:text-project-pink"
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
                          <span className="text-xs transition-colors text-foreground">
                            Project | React JS
                          </span>
                          <Link
                            className="text-lg font-semibold mb-6 transition-colors text-foreground"
                            href="/demos/portfolio-gen"
                          >
                            Portfolio
                          </Link>
                        </div>

                        {/* Carousel */}
                        <div className="relative w-full max-w-4xl mx-auto">
                          <div
                            className="relative w-full"
                            role="region"
                            aria-roledescription="carousel"
                          >
                            <div className="overflow-hidden">
                              <div
                                className="flex -ml-4"
                                style={{
                                  transform: "translate3d(0px, 0px, 0px)",
                                }}
                              >
                                {/* Slide 1 */}
                                <div
                                  role="group"
                                  aria-roledescription="slide"
                                  className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                                >
                                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                                    <img
                                      alt="chattr screenshot 1"
                                      decoding="async"
                                      className="object-fill absolute inset-0 h-full w-full"
                                      src={tob}
                                    />
                                  </div>
                                </div>

                                {/* TODO: Add remaining slides (all same structure as above) */}
                                <div
                                  role="group"
                                  aria-roledescription="slide"
                                  className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                                >
                                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                                    <img
                                      alt="chattr screenshot 1"
                                      decoding="async"
                                      className="object-fill absolute inset-0 h-full w-full"
                                      src="https://images.pexels.com/photos/8284731/pexels-photo-8284731.jpeg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Carousel Buttons */}
                            <button
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background shadow-sm hover:bg-background/70 hover:text-accent-foreground absolute h-8 w-8 rounded-full border-project-pink top-1/2 -translate-y-1/2 left-2"
                              disabled
                              aria-label="Previous slide"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="text-project-pink"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeMiterlimit="10"
                                  strokeWidth="1.5"
                                  d="M9.57 5.93L3.5 12l6.07 6.07"
                                />
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeMiterlimit="10"
                                  strokeWidth="1.5"
                                  d="M20.5 12H3.67"
                                  opacity=".4"
                                />
                              </svg>
                              <span className="sr-only">Previous slide</span>
                            </button>

                            <button
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background shadow-sm hover:bg-background/70 hover:text-accent-foreground absolute h-8 w-8 rounded-full border-project-pink top-1/2 -translate-y-1/2 right-2"
                              aria-label="Next slide"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="text-project-pink"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeMiterlimit="10"
                                  strokeWidth="1.5"
                                  d="M14.43 5.93L20.5 12l-6.07 6.07"
                                />
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeMiterlimit="10"
                                  strokeWidth="1.5"
                                  d="M3.5 12h16.83"
                                  opacity=".4"
                                />
                              </svg>
                              <span className="sr-only">Next slide</span>
                            </button>
                          </div>
                        </div>
                        {/* End Carousel */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
