import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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
      delayChildren: 0.1,
    },
  },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      // CHANGED: Added /90 opacity and backdrop-blur so Particles show through
      className="bg-kulhad-dark/90 backdrop-blur-md border-t border-white/10 relative overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-kulhad-clay/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Replays animation if you scroll up/down
          variants={staggerContainer}
        >
          {/* 1. Brand Section */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            <div className="flex items-center space-x-3">
              <motion.div
                className="bg-white/5 p-2 rounded-full border border-white/5"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={logo}
                  alt="Kulhad Cafeteria Logo"
                  className="h-10 w-auto"
                />
              </motion.div>
              <span className="text-xl font-serif font-bold text-white tracking-wide">
                Kulhad Cafeteria
              </span>
            </div>
            <div className="space-y-4">
              <p className="text-kulhad-light/60 text-sm leading-relaxed max-w-xs">
                India's first college cafe chain. Serving authentic Indian
                flavors since 2023.
              </p>
              <p className="font-serif italic text-kulhad-clay text-lg">
                "Swad Desh ki Mittee ka"
              </p>
            </div>
          </motion.div>

          {/* 2. Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-bold text-white mb-6 font-serif">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Franchise", "Gallery", "Contact"].map(
                (item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5 }} // Subtle slide on hover
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-kulhad-light/60 hover:text-kulhad-clay transition-colors duration-300 flex items-center group w-fit"
                    >
                      <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 opacity-0 group-hover:opacity-100 text-kulhad-clay mr-0 group-hover:mr-1">
                        •
                      </span>
                      {item}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* 3. Franchise Info */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-bold text-white mb-6 font-serif">
              Franchise Info
            </h4>
            <ul className="space-y-3">
              {[
                "No Royalty Model",
                "8-10 Months ROI",
                "Chef-less Operation",
                "Complete Setup Support",
                "FSSAI Registration",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-sm text-kulhad-light/60"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-kulhad-clay/70 mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 4. Contact Us */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-bold text-white mb-6 font-serif">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm text-kulhad-light/60">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-kulhad-clay mr-3 mt-0.5 flex-shrink-0"
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
                <p>Jhanjeri, Mohali 140307</p>
              </div>

              <div className="flex items-center">
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <a
                  href="mailto:officialkulhad@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  officialkulhad@gmail.com
                </a>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-kulhad-clay mr-3 mt-0.5 flex-shrink-0"
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
                <div className="flex flex-col space-y-1">
                  <a
                    href="tel:7667340235"
                    className="hover:text-white transition-colors"
                  >
                    7667340235
                  </a>
                  <a
                    href="tel:9162999562"
                    className="hover:text-white transition-colors"
                  >
                    9162999562
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/10 flex flex-col items-center text-center space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: false }}
        >
          <p className="text-kulhad-light/40 text-sm">
            © {currentYear} Kulhad Cafeteria. A Venture of CGCians. All rights
            reserved.
          </p>

          <div className="flex items-center space-x-2 text-sm text-kulhad-light/40">
            <span>Made with</span>
            <motion.span
              className="text-red-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              ❤️
            </motion.span>
            <span>by</span>
            <a
              href="https://www.amadhav.com"
              target="_blank"
              referrerPolicy="no-referrer"
              className="text-kulhad-clay hover:text-white hover:underline transition-all font-medium"
            >
              Madhav Vashisht
            </a>
          </div>

          <p className="text-kulhad-light/20 text-[10px] tracking-wider uppercase max-w-2xl">
            This website is for franchise proposal purposes. All information is
            based on the official franchise document.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
