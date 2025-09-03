import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);

  // Encode form data for Netlify
  const encode = (data) =>
    Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message ||
      !formData.agree
    ) {
      alert("Please fill out all required fields and agree to the policy.");
      return;
    }

    setLoading(true);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => {
        alert("Thank you! Your message has been sent.");
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          phone: "",
          message: "",
          agree: false,
        });
        setLoading(false);
      })
      .catch((error) => {
        alert("Oops! Something went wrong: " + error);
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-black">
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
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold text-gray-900 sm:text-5xl dark:text-white">
          Reach out to me
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Got any job or collaboration you think I'll be interested in?
        </p>
      </div>

      {/* Netlify-enabled form */}
      <form
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        {/* Hidden fields for Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* First name */}
          <div>
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

          {/* Last name */}
          <div>
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

          {/* Company */}
          <div className="sm:col-span-2">
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

          {/* Email */}
          <div className="sm:col-span-2">
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

          {/* Phone */}
          <div className="sm:col-span-2">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-900 dark:text-white"
            >
              Phone number (optional)
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="123-456-7890"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 outline-gray-300 dark:bg-white/5 dark:text-white"
            />
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
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

          {/* Checkbox */}
          <div className="flex gap-x-4 sm:col-span-2">
            <input
              id="agree"
              name="agree"
              type="checkbox"
              checked={formData.agree}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 dark:bg-white/5 dark:border-white/10"
            />
            <label
              htmlFor="agree"
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
            disabled={loading}
            className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-500 disabled:opacity-50"
          >
            {!loading ? "Let's talk" : "Reaching out..."}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
