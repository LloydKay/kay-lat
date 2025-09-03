// src/pages/Resume.jsx
import React from "react";

const Resume = () => {
  return (
    <div className="min-h-screen dark:bg-black text-neutral-100 px-6 md:px-20 py-12 font-sans">
      <div className="mt-10 max-w-6xl mx-auto dark:bg-neutral-950 rounded-xl shadow-lg p-8 md:p-12">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:justify-between md:items-start border-b border-neutral-700 pb-6 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Kay AJIBOLA</h1>
            <h2 className="text-lg text-neutral-400">Software Engineer</h2>
            <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm text-neutral-300">
              <span>kehiajibola@gmail.com</span>
              <span>kajibola@netlify.app</span>
              <span>linkedin.com/in/kajibola</span>
              <span>github.com/lloydkay</span>
            </div>
          </div>
          <button className="mt-4 md:mt-0 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-sm rounded-lg flex items-center gap-2">
            Download PDF
          </button>
        </header>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-10">
            {/* Profile */}
            <section>
              <h3 className="text-xl font-semibold mb-2">Profile</h3>
              <p className="text-sm leading-relaxed text-neutral-300">
                Innovative Full-Stack Engineer with 3+ years of expertise in
                JavaScript, TypeScript, and Python. Proven track record of
                architecting high-performance applications using React, Next.js,
                and Node.js. Specializes in crafting scalable, accessible
                solutions that blend functionality with intuitive interfaces...
              </p>
            </section>

            {/* Work Experience */}
            <section>
              <h3 className="text-xl font-semibold mb-4">Work Experience</h3>

              <div className="mb-6">
                <h4 className="font-bold">
                  Fullstack Engineer @{" "}
                  <span className="text-blue-400">Bell </span>
                </h4>
                <p className="text-sm italic text-neutral-400">
                  Dec 2023 — May 2025 | Toronto, Canada (Remote)
                </p>
                <p className="text-xs text-neutral-500 mb-2">
                  Typescript | Node JS | React JS | MUI | Jest | Cypress |
                  Firebase
                </p>
                <ul className="list-disc list-inside text-sm space-y-1 text-neutral-300">
                  <li>
                    Implemented key features for GM Live and Energy Live
                    platforms, including screen sharing and 2-way video...
                  </li>
                  <li>
                    Built responsive pages and flows for the BiDi Charger claims
                    module...
                  </li>
                  <li>
                    Wrote robust unit and E2E test cases with Jest, Cypress,
                    Playwright...
                  </li>
                </ul>
              </div>

              {/* You can repeat more jobs here */}
            </section>
          </div>

          {/* Right Column */}
          <aside className="space-y-8">
            {/* Skills */}
            <section>
              <h3 className="text-xl font-semibold mb-2">Skills</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold">Programming Languages</p>
                  <p className="text-neutral-300">
                    JavaScript, Typescript, Solidity, Golang, HTML, CSS/SCSS
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Libraries & Frameworks</p>
                  <p className="text-neutral-300">
                    Node JS, Nest JS, React, Next JS, Angular 2+, React Native,
                    Redux, Tanstack Query, GraphQL, Express, Jest, Cypress
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Tools & Platforms</p>
                  <p className="text-neutral-300">
                    AWS, Firebase, GCP, DigitalOcean, Vercel, Docker
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Databases</p>
                  <p className="text-neutral-300">
                    PostgreSQL, MongoDB, DynamoDB, Firestore, Redis
                  </p>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <p className="font-bold">Conestoga College</p>
                  <p className="text-neutral-300">
                    MSc, Business Information Systems
                  </p>
                  <p className="text-neutral-400 italic">
                    Kitchener, ON | Dec 2023
                  </p>
                </li>
                <li>
                  <p className="font-bold">OAU</p>
                  <p className="text-neutral-300">BSc, Mechanical Eng</p>
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Resume;
