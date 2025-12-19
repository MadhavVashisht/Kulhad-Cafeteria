import React from "react";
import { motion } from "framer-motion";
import about from "../assets/about.jpg";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const About = () => {
  return (
    <section
      id="about"
      // CHANGED: bg-kulhad-dark -> bg-transparent to let Particles show through
      // Added relative and z-10 to ensure content sits above particles
      className="section-padding bg-transparent relative overflow-hidden"
    >
      {/* Optional: Very subtle dark overlay to ensure text readability over particles */}
      {/* <div className="absolute inset-0 bg-kulhad-dark/30 pointer-events-none -z-10"></div> */}

      {/* Decorative Blur Splash */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-kulhad-clay/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // "once: false" allows animation to replay (In and Out effect)
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-white">
            More Than Just a Cafe
          </h2>
          <p className="text-xl text-kulhad-light/60 max-w-3xl mx-auto font-light">
            A friendship hub where great food, drinks, and company come together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content & Stats */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div className="space-y-6" variants={fadeInUp}>
              <h3 className="text-3xl font-bold text-kulhad-clay font-serif">
                The Kulhad Vision
              </h3>
              <p className="text-lg text-kulhad-light/80 leading-relaxed font-light">
                Kulhad is an initiative by CGCians, established in 2023 as
                India's first college cafe chain concept. We operate in
                colleges, universities, and corporate offices — creating spaces
                that blend authentic Indian flavors with modern cafe culture.
              </p>
              <p className="text-lg text-kulhad-light/80 leading-relaxed font-light">
                We source local, organic ingredients and prepare everything with
                care and craft. Our mission is to deliver the authentic taste of
                India in every kulhad, building communities around shared
                experiences.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              variants={staggerContainer}
            >
              {[
                { value: "50-60%", label: "Average Gross Profit" },
                { value: "8-10", label: "Months ROI" },
                { value: "100%", label: "Natural Tea" },
                { value: "0%", label: "Wastage Model" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(214, 112, 64, 0.5)",
                  }}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 transition-colors duration-300 backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold text-kulhad-clay mb-1 font-serif">
                    {stat.value}
                  </div>
                  <p className="text-sm font-medium text-kulhad-light/60 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Image with Decorative Elements */}
          <motion.div
            className="relative mt-8 lg:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            {/* Decorative Offset Border - Animated */}
            <motion.div
              initial={{ opacity: 0, x: 0, y: 0 }}
              whileInView={{ opacity: 1, x: 16, y: 16 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute inset-0 border-2 border-kulhad-clay/30 rounded-2xl hidden md:block"
            ></motion.div>

            {/* Main Image Wrapper */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-800 aspect-[4/3] group">
              <img
                src={about}
                alt="Kulhad Cafe Interior"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Floating Quote Badge - Animated Pop-in */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              className="absolute -bottom-6 -right-4 md:-right-8 bg-kulhad-clay text-white p-6 rounded-tr-2xl rounded-bl-2xl rounded-tl-lg rounded-br-lg shadow-xl max-w-[280px] z-20"
            >
              <div className="text-4xl text-white/40 absolute -top-2 left-2 font-serif">
                "
              </div>
              <p className="text-lg font-serif italic relative z-10 pl-2">
                Your friendship hub since 2023
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
