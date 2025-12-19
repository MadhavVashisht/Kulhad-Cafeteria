import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const lineVariant = {
  hidden: { height: 0 },
  visible: {
    height: "100%",
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

const Timeline = () => {
  const phases = [
    {
      title: "Concept",
      description:
        "The idea of bringing authentic Indian kulhad culture to modern cafe spaces was born.",
      icon: "💡",
    },
    {
      title: "Launch",
      description:
        "Established in 2023 with the first outlet, serving traditional flavors in contemporary settings.",
      icon: "🚀",
    },
    {
      title: "Expansion",
      description:
        "2.5 lakh kulhads served within 16 months, expanding to multiple locations.",
      icon: "📈",
    },
    {
      title: "Franchise Growth",
      description:
        "Launching India's first college cafe chain franchise with no royalty model.",
      icon: "🌱",
    },
  ];

  return (
    <section
      id="timeline"
      // CHANGED: bg-black/40 -> bg-transparent to show Particles
      className="section-padding bg-transparent relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-serif">
            Brewing the Story
          </h2>
          <p className="text-xl text-kulhad-light/60 max-w-3xl mx-auto">
            Our journey from a simple idea to India's premier cafe chain
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Center Line - Animated Draw */}
          <motion.div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-kulhad-muted/30"
            variants={lineVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          ></motion.div>

          <div className="space-y-12 relative">
            {phases.map((phase, index) => {
              const isEven = index % 2 === 0; // Left side

              return (
                <div
                  key={phase.title}
                  className={`relative flex items-center ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* CONTENT CONTAINER */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-kulhad-clay/50 relative group transition-colors"
                    >
                      {/* THE DOT (TIMELINE NODE) */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                          delay: 0.2 + index * 0.1,
                          type: "spring",
                        }}
                        className={`
                        hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 
                        bg-kulhad-clay rounded-full border-4 border-kulhad-dark z-10
                        ${
                          isEven
                            ? "-right-[56px] translate-x-0"
                            : "-left-[56px] translate-x-0"
                        }
                      `}
                      ></motion.div>

                      {/* Card Content */}
                      <div className={`flex items-start space-x-4`}>
                        <div className="text-3xl flex-shrink-0">
                          {phase.icon}
                        </div>
                        <div className="text-left">
                          <h3 className="text-2xl font-bold text-white mb-2 font-serif">
                            {phase.title}
                          </h3>
                          <p className="text-kulhad-light/70 leading-relaxed">
                            {phase.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
