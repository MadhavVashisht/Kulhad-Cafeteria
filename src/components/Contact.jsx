import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// Environment Variables (Ensure these are set in your .env file)
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

// Animation Variants (Consistent with About section)
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // idle, sending, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation is handled by the 'required' attributes in the JSX
    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...formData,
          // Mapping fields to standard EmailJS template variables
          from_name: formData.name,
          reply_to: formData.email,
          phone_number: formData.phone,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });

      // Clear success message after 5 seconds
      setTimeout(() => setStatus(""), 5000);
    } catch (err) {
      console.error("EmailJS Error: ", err);
      setStatus("error");
    }
  };

  // Helper function to determine content rendering
  const renderContactValue = (info) => {
    if (info.type === "phone") {
      return (
        <div className="flex flex-col items-start gap-1">
          <a
            href={`tel:${info.value}`}
            className="text-lg font-medium text-white hover:text-kulhad-clay transition-colors duration-300"
            aria-label={`Call ${info.value}`}
          >
            {info.value}
          </a>
          {info.secondary && (
            <a
              href={`tel:${info.secondary}`}
              className="text-lg font-medium text-white hover:text-kulhad-clay transition-colors duration-300"
              aria-label={`Call ${info.secondary}`}
            >
              {info.secondary}
            </a>
          )}
        </div>
      );
    }

    if (info.type === "email") {
      return (
        <a
          href={`mailto:${info.value}`}
          className="text-lg font-medium text-white hover:text-kulhad-clay transition-colors duration-300 break-all"
          aria-label={`Email ${info.value}`}
        >
          {info.value}
        </a>
      );
    }

    // Default (Address)
    return <div className="text-lg font-medium text-white">{info.value}</div>;
  };

  const contactInfo = [
    {
      label: "Phone",
      value: "7667340235",
      secondary: "9162999562",
      type: "phone",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          ></path>
        </svg>
      ),
    },
    {
      label: "Email",
      value: "officialkulhad@gmail.com",
      type: "email",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      ),
    },
    {
      label: "Address",
      value: "Jhanjeri, Mohali 140307",
      type: "address",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-transparent relative overflow-hidden"
    >
      {/* Background decoration - Optional blur behind this section specifically */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-kulhad-clay/5 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-white">
            Partner With Us
          </h2>
          <p className="text-xl text-kulhad-light/60 max-w-3xl mx-auto font-light">
            Start your journey with India's first college cafe chain franchise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Information */}
          <motion.div
            className="space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-3xl font-bold text-white mb-6 font-serif">
                Get in Touch
              </h3>
              <p className="text-kulhad-light/70 leading-relaxed mb-8 font-light text-lg">
                Ready to bring the authentic taste of India to your location?
                Our team is here to guide you through every step of the
                franchise process.
              </p>
            </motion.div>

            {/* Info Cards */}
            <motion.div className="space-y-6" variants={staggerContainer}>
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  variants={fadeInUp}
                  className="flex items-start space-x-5 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-kulhad-clay group-hover:bg-kulhad-clay group-hover:text-white transition-all duration-300 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-wider text-kulhad-light/50 font-medium mb-1">
                      {info.label}
                    </div>
                    {renderContactValue(info)}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              className="pt-10 border-t border-white/10"
              variants={fadeInUp}
            >
              <h4 className="text-xl font-bold text-white mb-6 font-serif">
                Why Choose Kulhad?
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "No royalty model",
                  "Complete setup support",
                  "Chef-less operation",
                  "Proven business model",
                  "Ongoing marketing support",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-kulhad-light/70"
                  >
                    <svg
                      className="w-5 h-5 text-kulhad-clay mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10 relative shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            {/* Form Glow Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-kulhad-clay/10 blur-2xl rounded-full -mr-10 -mt-10 pointer-events-none"></div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-kulhad-light/70 mb-2 ml-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === "sending"}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-kulhad-clay/50 focus:ring-1 focus:ring-kulhad-clay/50 transition-all duration-300 disabled:opacity-50"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-kulhad-light/70 mb-2 ml-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === "sending"}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-kulhad-clay/50 focus:ring-1 focus:ring-kulhad-clay/50 transition-all duration-300 disabled:opacity-50"
                    placeholder="name@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-kulhad-light/70 mb-2 ml-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={status === "sending"}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-kulhad-clay/50 focus:ring-1 focus:ring-kulhad-clay/50 transition-all duration-300 disabled:opacity-50"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-kulhad-light/70 mb-2 ml-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  disabled={status === "sending"}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-kulhad-clay/50 focus:ring-1 focus:ring-kulhad-clay/50 transition-all duration-300 resize-none disabled:opacity-50"
                  placeholder="Tell us about your interest in the franchise..."
                ></textarea>
              </div>

              <div className="pt-4 space-y-3">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-kulhad-clay text-white py-4 rounded-xl hover:bg-[#c05f30] hover:shadow-lg hover:shadow-kulhad-clay/20 transition-all duration-300 font-medium text-lg tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "sending"
                    ? "Sending Request..."
                    : "Submit Franchise Inquiry"}
                </button>

                {/* Status Message Display */}
                {status && (
                  <p
                    className={`text-center text-sm font-medium ${
                      status === "success"
                        ? "text-green-400"
                        : status === "error"
                        ? "text-red-400"
                        : "text-kulhad-light/60"
                    }`}
                  >
                    {status === "success"
                      ? "Message Sent Successfully! We will contact you soon. ✅"
                      : status === "error"
                      ? "Something went wrong. Please try again. ❌"
                      : ""}
                  </p>
                )}
              </div>

              <p className="text-xs text-kulhad-light/40 text-center">
                By submitting this form, you agree to our privacy policy. We'll
                contact you within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
