import React from "react";
import { motion } from "framer-motion";

// Animation Variants
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
      staggerChildren: 0.3,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Founders = () => {
  const founders = [
    {
      name: "Mr. Rishav",
      role: "Managing Director & Co-Founder",
      description:
        "CMD of Kulhad, a 3-year-old company in food and hospitality. Also the founder of Sandesh E Service, an Indian quick-commerce platform specializing in delivering groceries and daily essentials within minutes.",
      initial: "R",
      gradient: "from-kulhad-clay to-[#8a3c1b]",
    },
    {
      name: "Mr. Anand",
      role: "Founder",
      description:
        "Alumni of CGC Mohali with extensive experience in hospitality and services. Kulhad is his initiative to bring authentic Indian cafe culture to colleges and corporate spaces.",
      initial: "A",
      gradient: "from-zinc-700 to-zinc-900",
    },
  ];

  return (
    <section
      id="founders"
      // CHANGED: bg-kulhad-dark -> bg-transparent for Particles visibility
      className="section-padding bg-transparent relative overflow-hidden"
    >
      {/* Background Decorative Element (Subtle Glow) */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-kulhad-clay/5 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none -z-10"></div>

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
            The Visionaries
          </h2>
          <p className="text-xl text-kulhad-light/60 max-w-3xl mx-auto font-light">
            Experienced professionals building India's premier cafe chain
          </p>
        </motion.div>

        {/* Founders Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
        >
          {founders.map((founder) => (
            <motion.div
              key={founder.name}
              variants={cardVariant}
              whileHover={{
                y: -10,
                borderColor: "rgba(214, 112, 64, 0.4)",
                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)",
              }}
              className="group bg-white/5 rounded-2xl p-8 border border-white/10 transition-colors duration-300 backdrop-blur-sm"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6">
                {/* Avatar */}
                <div
                  className={`
                  w-20 h-20 rounded-full flex-shrink-0 flex items-center justify-center shadow-lg
                  bg-gradient-to-br ${founder.gradient} border border-white/10
                `}
                >
                  <span className="text-3xl font-serif font-bold text-white/90">
                    {founder.initial}
                  </span>
                </div>

                {/* Text Content */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-3xl font-bold text-white mb-2 font-serif">
                    {founder.name}
                  </h3>
                  <p className="text-kulhad-clay font-medium mb-4 text-sm tracking-wide uppercase">
                    {founder.role}
                  </p>
                  <p className="text-kulhad-light/70 leading-relaxed font-light text-sm md:text-base">
                    {founder.description}
                  </p>
                </div>
              </div>

              {/* Card Footer / Badges */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex items-center justify-center sm:justify-between text-[10px] md:text-xs uppercase tracking-[0.2em] text-kulhad-light/40 group-hover:text-kulhad-light/60 transition-colors">
                  <span>Certified</span>
                  <span className="w-1 h-1 rounded-full bg-kulhad-clay/50"></span>
                  <span>Registered</span>
                  <span className="w-1 h-1 rounded-full bg-kulhad-clay/50"></span>
                  <span>At Your Service</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Venture Badge */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: false }}
        >
          <p className="inline-block text-kulhad-light/30 text-xs font-semibold tracking-[0.3em] border-b border-kulhad-light/10 pb-2">
            A VENTURE OF CGCIANS | SINCE 2023
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Founders;
