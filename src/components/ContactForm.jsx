const Contact = () => {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-black">
      {/* Background gradient blob */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%,100% 61.6%,97.5% 26.9%,85.5% 0.1%,80.7% 2%,72.5% 32.5%,60.2% 62.4%,52.4% 68.1%,47.5% 58.3%,45.2% 34.5%,27.5% 76.7%,0.1% 64.9%,17.9% 100%,27.6% 76.8%,76.1% 97.7%,74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72rem] dark:opacity-20"
        />
      </div>

      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          Reach out to me
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Got any job or collaboration you think I'll be interested in?
        </p>
      </div>

      {/* Form */}
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* First name */}
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold text-gray-900 dark:text-white"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Last name */}
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Company */}
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-gray-900 dark:text-white"
            >
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10"
              />
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900 dark:text-white"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
              />
            </div>
          </div>

          {/* Phone number */}
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white outline outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-indigo-600 dark:bg-white/5 dark:outline-white/10">
                <div className="relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    className="appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 focus:outline-none sm:text-sm dark:bg-transparent dark:text-gray-400"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  {/* simple caret instead of heroicon */}
                  <svg
                    className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="123-456-7890"
                  className="block flex-1 min-w-0 py-1.5 px-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm dark:bg-transparent dark:text-white"
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-900 dark:text-white"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <input
                id="agree-to-policies"
                name="agree-to-policies"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 dark:bg-white/5 dark:border-white/10"
              />
            </div>
            <label
              htmlFor="agree-to-policies"
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              By selecting this, you agree to our{" "}
              <a
                href="#"
                className="font-semibold text-indigo-600 dark:text-indigo-400"
              >
                privacy policy
              </a>
              .
            </label>
          </div>
        </div>

        {/* Submit button */}
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400"
          >
            Let&apos;s talk
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
