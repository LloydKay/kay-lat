import { Link } from "react-router";

const NotesPage = () => {
  return (
    <div className="flex min-h-screen flex-col dark:bg-black dark:text-white">
      <div className="container flex max-w-[53.75rem] flex-col py-8 px-4 my-20 mx-auto">
        <section className="h-full w-full">
          {/* Header */}
          <div className="flex gap-2 items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/30 dark:border-gray-500 z-10 relative backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="text-note-orange size-4"
              >
                <path
                  opacity=".4"
                  d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M18.5 9.25h-2c-1.52 0-2.75-1.23-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM10 17.751c-.19 0-.38-.07-.53-.22l-2-2a.755.755 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.47 1.47 1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM14 17.751c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l1.47-1.47-1.47-1.47a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>

            <div className="flex-1">
              <h1 className="text-4xl font-bold text-note-orange">Notes</h1>
              <p className="text-foreground text-sm md:text-base">
                My notes on subjects I am currently studying or interesting
                finds
              </p>
            </div>
          </div>

          {/* Notes List */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-10">
            {/* Note 1 */}
            <Link to="/notes/javascript-fundamentals">
              <div className="text-foreground hover:text-note-orange cursor-pointer">
                <span className="text-xs">Javascript | Tue, 9th Jul. 2024</span>
                <h2 className="text-lg font-bold mb-1 text-balance">
                  Javascript - Basic Concepts
                </h2>
                <p className="text-sm text-foreground/70 dark:text-gray-400 text-pretty">
                  JavaScript is a single-threaded, non-blocking, asynchronous
                  language. To understand how it handles concurrent operations,
                  it is import to understand several...
                </p>
              </div>
            </Link>

            {/* Note 2 */}
            <Link to="/notes/react-performance-optimization-techniques">
              <div className="text-foreground hover:text-note-orange cursor-pointer">
                <span className="text-xs">React | Sat, 10th Aug. 2024</span>
                <h2 className="text-lg font-bold mb-1 text-balance">
                  React Performance Optimization Techniques
                </h2>
                <p className="text-sm text-foreground/70 dark:text-gray-400 text-pretty">
                  Some performance optimization techniques that can be used in
                  React applications. Most of these techniques are not specific
                  to React or any frontend libraries or framework...
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NotesPage;
