import { useState, useEffect } from "react";
import { toast } from "sonner";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out-cubic" });
  }, []);

  const encode = (data) =>
    Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      toast.error("Please fill out all required fields.");
      return;
    }

    setLoading(true);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });

      toast.success(
        "Your message has been sent! I will reach back to you shortly."
      );
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Oops! Something went wrong: " + error);
    } finally {
      setLoading(false); // ✅ reset button after request finishes
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-black h-screen">
      {/* Background shapes */}
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

      {/* Header */}
      <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-gray-900 sm:text-5xl dark:text-white">
          Reach out to me
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Got any job or collaboration you think I'll be interested in?
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div data-aos="fade-up" data-aos-delay="150">
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold text-gray-900 dark:text-white"
            >
              First name <span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              value={formData.firstName}
              onChange={handleChange}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300 dark:bg-white/5 dark:text-white"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold text-gray-900 dark:text-white"
            >
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              value={formData.lastName}
              onChange={handleChange}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300 dark:bg-white/5 dark:text-white"
            />
          </div>

          <div
            className="sm:col-span-2"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-gray-900 dark:text-white"
            >
              Company (optional)
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              value={formData.company}
              onChange={handleChange}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300 dark:bg-white/5 dark:text-white"
            />
          </div>

          <div
            className="sm:col-span-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900 dark:text-white"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300 dark:bg-white/5 dark:text-white"
            />
          </div>

          <div
            className="sm:col-span-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-900 dark:text-white"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300 dark:bg-white/5 dark:text-white"
            />
          </div>
        </div>

        <div className="mt-10" data-aos="fade-up" data-aos-delay="500">
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-500 disabled:opacity-50"
          >
            {loading && (
              <svg
                className="h-5 w-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            )}
            {loading ? "Reaching out..." : "Let's talk"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
