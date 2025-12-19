import React from "react";
import { motion } from "framer-motion";
import hero from '../assets/hero.jpg';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Floating animation for cards (up and down)
const floatAnimation = (delay = 0) => ({
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    },
  },
});

// Rotating animation for the background ring
const rotateAnimation = {
  animate: {
    rotate: 360,
    transition: {
      duration: 25,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-12 section-padding flex items-center bg-transparent relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT COLUMN - Content (Kept mostly same, just slight spacing tweaks) */}
          <motion.div
            className="space-y-8 order-2 md:order-1"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block bg-kulhad-clay/20 text-kulhad-clay px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-kulhad-clay/20 shadow-[0_0_15px_rgba(214,112,64,0.3)]">
                No Royalty Model • Cafe Franchise
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                India's First College
                <span className="text-kulhad-clay block mt-2"> Cafe Chain</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl text-kulhad-light/80 leading-relaxed max-w-lg"
              variants={fadeInUp}
            >
              <span className="font-serif italic text-white">
                "Swad Desh ki Mittee ka"
              </span>{" "}
              — Experience the authentic taste of India in every kulhad. A space
              to relax, connect, and enjoy the simple pleasures of life.
            </motion.p>

            <motion.div className="space-y-4" variants={fadeInUp}>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-kulhad-clay rounded-full shadow-[0_0_10px_rgba(214,112,64,0.8)]"></div>
                <p className="text-lg text-kulhad-light/90">
                  2.5 lakh kulhads served within 16 months
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-kulhad-clay rounded-full shadow-[0_0_10px_rgba(214,112,64,0.8)]"></div>
                <p className="text-lg text-kulhad-light/90">
                  Chef-less model • Quickest ROI • 0% wastage
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={fadeInUp}
            >
              <motion.a
                href="#franchise"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-kulhad-clay text-white px-8 py-4 rounded-full hover:bg-[#c05f30] transition-colors duration-300 text-lg font-medium text-center shadow-lg shadow-kulhad-clay/20"
              >
                Explore Franchise
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/20 text-white px-8 py-4 rounded-full transition-colors duration-300 text-lg font-medium text-center backdrop-blur-sm"
              >
                Our Story
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Visual (Totally Revamped) */}
          <div className="relative order-1 md:order-2 perspective-1000">
            {/* 1. Rotating Decorative Ring (Potter's Wheel Vibe) */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-kulhad-clay/20 rounded-full border-dashed z-0"
              variants={rotateAnimation}
              animate="animate"
            ></motion.div>

            {/* 2. Main Image Container */}
            <motion.div
              className="relative z-10 w-full max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Main Image Frame */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/5 bg-gray-800 aspect-[4/5] group">
                <img
                  src={hero}
                  alt="Authentic Kulhad Chai"
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Gradient Overlay for text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40"></div>
              </div>

              {/* 3. Floating Card 1: Authentic Taste Badge (Top Right) */}
              <motion.div
                className="absolute -top-6 -right-6 md:-right-10 bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
                variants={floatAnimation(0)}
                animate="animate"
              >
                <div className="w-10 h-10 bg-kulhad-clay rounded-full flex items-center justify-center text-white text-lg shadow-lg shadow-kulhad-clay/40">
                  🌱
                </div>
                <div>
                  <p className="text-white font-bold text-sm">100% Organic</p>
                  <p className="text-kulhad-light/60 text-xs">
                    Authentic Taste
                  </p>
                </div>
              </motion.div>

              {/* 4. Floating Card 2: Rating Card (Bottom Left) */}
              <motion.div
                className="absolute -bottom-8 -left-4 md:-left-8 bg-white/10 backdrop-blur-xl border border-white/10 p-4 pr-6 rounded-2xl shadow-xl flex items-center gap-4 z-20"
                variants={floatAnimation(1.5)} // Delayed float for natural feel
                animate="animate"
              >
                <div className="text-center">
                  <p className="text-2xl font-bold text-white leading-none">
                    4.9
                  </p>
                  <div className="flex text-yellow-400 text-xs mt-1">★★★★★</div>
                </div>
                <div className="h-8 w-[1px] bg-white/20"></div>
                <div>
                  <p className="text-xs text-kulhad-light/80 uppercase tracking-wider">
                    Trusted by
                  </p>
                  <p className="text-white font-semibold text-sm">
                    Students & Corporates
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* 5. Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-kulhad-clay/20 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
