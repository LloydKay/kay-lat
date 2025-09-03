import { useEffect } from "react";
import { Link } from "react-router";
import tob from "./assets/tob.png";
import real from "./assets/house-ma.png";
import chatty from "./assets/chat.png";
import hoi from "./assets/hio.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 800, // animation duration
      easing: "ease-in-out",
      once: true, // run only once
    });
  }, []);

  return (
    <div className="dark:bg-black dark:text-white">
      <div className="flex flex-col px-4 container max-w-3xl mx-auto py-10">
        <section className="container max-w-3xl mx-auto">
          <div className="mt-10" style={{ opacity: 1 }}>
            {/* Profile Image */}
            <img
              src={hoi}
              className="h-38 w-36 rounded-full"
              alt="Hello"
              loading="eager"
              data-aos="fade-down"
            />

            {/* Intro Text */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h1 className="block text-2xl md:text-3xl font-bold my-2 text-balance">
                Hey, good to see you here!
              </h1>
              <p className="block text-pretty dark:text-gray-400 leading-relaxed">
                I am Kay, a software engineer based in Toronto, Canada. I
                believe great software should be powerful under the hood and
                beautiful on the surface. Welcome to my digital playground where
                form meets function, and every semicolon is exactly where it
                should be ✨. Here, you will find notes, demos and projects in
                areas I am currently exploring as I learn to build better
                products and experiences on the web, mobile, blockchain and{" "}
                <a
                  href="https://www.servicenow.com/"
                  target="_blank"
                  className="text-green-600 hover:underline"
                >
                  ServiceNow.
                </a>
              </p>
            </div>

            {/* Timeline / Notes Section */}
            {[
              {
                title: "Javascript - Basic Concepts",
                subtitle: "Note | Javascript | Tue, 9th Jul. 2024",
                link: "/notes/javascript-fundamentals",
                description:
                  "JavaScript is a single-threaded, non-blocking, asynchronous language. To understand how it handles concurrent operations, it is import to understand several...",
                iconColor: "text-note-orange",
              },
              {
                title: "Javascript - Basic Concepts",
                subtitle: "Note | Javascript | Tue, 9th Jul. 2024",
                link: "/notes/javascript-fundamentals",
                description:
                  "JavaScript is a single-threaded, non-blocking, asynchronous language. To understand how it handles concurrent operations, it is import to understand several...",
                iconColor: "text-note-orange",
              },
            ].map((note, idx) => (
              <div
                className="mt-6 flex items-start"
                key={idx}
                data-aos="fade-up"
                data-aos-delay={300 + idx * 100}
              >
                <div className="flex flex-col items-center mr-4 relative">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border border-foreground/30 dark:border-gray-500 z-10 relative backdrop-blur-sm`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`size-[1.125rem] ${note.iconColor}`}
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
                    <a href={note.link}>
                      <span className="text-xs transition-colors text-foreground">
                        {note.subtitle}
                      </span>
                      <h2 className="text-lg md:text-xl font-semibold mb-1 text-balance transition-colors text-foreground">
                        {note.title}
                      </h2>
                      <p className="text-sm text-foreground/70 dark:text-gray-400 text-pretty">
                        {note.description}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Projects / Carousel Section */}
            {[
              {
                title: "House MarketPlace",
                tech: "Next JS | Mongo DB",
                link: "/demos/real",
                images: [
                  real,
                  "https://images.pexels.com/photos/8284731/pexels-photo-8284731.jpeg",
                ],
              },
              {
                title: "Chattr",
                tech: "Next JS",
                link: "/demos/task-flow",
                images: [
                  chatty,
                  "https://images.pexels.com/photos/8284731/pexels-photo-8284731.jpeg",
                ],
              },
              {
                title: "Portfolio",
                tech: "React JS",
                link: "/demos/portfolio-gen",
                images: [
                  tob,
                  "https://images.pexels.com/photos/8284731/pexels-photo-8284731.jpeg",
                ],
              },
            ].map((project, idx) => (
              <div
                className="flex items-start"
                key={idx}
                data-aos="fade-up"
                data-aos-delay={400 + idx * 100}
              >
                <div className="flex flex-col items-center mr-4 relative">
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
                  <div className="w-px md:h-[calc(100%+2rem)] h-[calc(100%+4rem)] border-l-2 border-dashed absolute top-10 left-5 -translate-x-1/2 border-l-foreground/30 dark:border-l-gray-500" />
                </div>
                <div className="pb-8 flex-grow">
                  <div className="overflow-hidden rounded-xl border border-light-gray relative">
                    <div className="p-6">
                      <div className="flex flex-col">
                        <Link
                          className="absolute top-4 right-4 group ..."
                          title={project.title}
                          to={project.link}
                        >
                          {/* SVG icon */}
                        </Link>
                        <span className="text-xs transition-colors text-foreground">{`Project | ${project.tech}`}</span>
                        <Link
                          className="text-lg font-semibold mb-6 transition-colors text-foreground"
                          to={project.link}
                        >
                          {project.title}
                        </Link>
                      </div>

                      <div className="relative w-full max-w-4xl mx-auto">
                        <div
                          className="relative w-full"
                          role="region"
                          aria-roledescription="carousel"
                        >
                          <div className="overflow-hidden">
                            <div className="flex -ml-4">
                              {project.images.map((img, i) => (
                                <div
                                  key={i}
                                  role="group"
                                  aria-roledescription="slide"
                                  className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                                >
                                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                                    <img
                                      alt={`${project.title} screenshot ${
                                        i + 1
                                      }`}
                                      decoding="async"
                                      className="object-fill absolute inset-0 h-full w-full"
                                      src={img}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
