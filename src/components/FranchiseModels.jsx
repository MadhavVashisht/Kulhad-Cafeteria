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
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

const FranchiseModels = () => {
  const models = [
    {
      name: "Standard Setup",
      investment: "₹5,89,999",
      tax: "+ Taxes",
      space: "80-100 sq. ft (Min)",
      features: [
        "All equipment included",
        "Chef-less model",
        "No royalty",
        "FSSAI registration",
        "POS system",
        "2-year license",
      ],
      borderColor: "border-white/10",
    },
    {
      name: "Premium Setup",
      investment: "₹6,50,000",
      tax: "+ Taxes",
      space: "150-200 sq. ft (Rec)",
      features: [
        "All Standard features",
        "Extended equipment",
        "Enhanced branding",
        "Priority support",
        "Marketing boost",
        "Custom layout",
      ],
      borderColor: "border-kulhad-clay",
      popular: true,
    },
    {
      name: "Custom Setup",
      investment: "Custom Quote",
      tax: "",
      space: "200+ sq. ft",
      features: [
        "Fully customized",
        "Bulk discounts",
        "Multi-location",
        "Exclusive territory",
        "Direct mentorship",
        "Co-branding options",
      ],
      borderColor: "border-white/10",
    },
  ];

  return (
    <section
      id="franchise"
      // CHANGED: bg-kulhad-dark -> bg-transparent to allow Particles to show
      className="section-padding bg-transparent relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-kulhad-clay/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-white">
            Franchise Opportunities
          </h2>
          <p className="text-xl text-kulhad-light/60 max-w-3xl mx-auto font-light">
            Join India's first college cafe chain with our no-royalty model
          </p>
        </motion.div>

        {/* Key Highlights (Stats Bar) */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
        >
          {[
            { label: "NO ROYALTY", value: "0%" },
            { label: "Average Profit", value: "50-60%" },
            { label: "ROI Timeline", value: "8-10 Months" },
            { label: "Setup Cost", value: "Lowest in India" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariant}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-kulhad-clay/30 transition-colors"
            >
              <div className="text-3xl font-bold text-kulhad-clay font-serif mb-2">
                {item.value}
              </div>
              <div className="text-kulhad-light/60 text-sm uppercase tracking-wider font-medium">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Models Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerContainer}
        >
          {models.map((model) => (
            <motion.div
              key={model.name}
              variants={cardVariant}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`
                group bg-white/5 backdrop-blur-md rounded-2xl p-8 border relative 
                transition-colors duration-300
                ${model.borderColor} 
                ${
                  model.popular
                    ? "shadow-lg shadow-kulhad-clay/10 bg-white/[0.07]"
                    : ""
                }
              `}
            >
              {model.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-kulhad-clay text-white px-6 py-1.5 rounded-full text-sm font-medium shadow-lg tracking-wide">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-xl font-medium text-kulhad-light/80 mb-6 uppercase tracking-widest text-center">
                {model.name}
              </h3>

              <div className="space-y-8">
                {/* Price Section */}
                <div className="text-center pb-8 border-b border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-white font-serif mb-1">
                    {model.investment}
                  </div>
                  {model.tax && (
                    <div className="text-kulhad-light/50 text-sm font-light">
                      {model.tax}
                    </div>
                  )}
                  <div className="mt-4 inline-block bg-white/5 px-4 py-1 rounded-full text-kulhad-clay text-sm font-medium">
                    Space: {model.space}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {model.features.map((feature) => (
                    <div key={feature} className="flex items-start space-x-3">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-kulhad-clay rounded-full shadow-[0_0_8px_rgba(214,112,64,0.6)]"></div>
                      <span className="text-kulhad-light/70 font-light leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    block w-full py-4 rounded-xl text-center font-medium transition-colors duration-300
                    ${
                      model.popular
                        ? "bg-kulhad-clay text-white hover:bg-[#c05f30] shadow-lg shadow-kulhad-clay/20"
                        : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                    }
                  `}
                >
                  Enquire Now
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info / Footer */}
        <motion.div
          className="mt-16 p-8 md:p-10 bg-white/5 rounded-3xl border border-white/10 relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-kulhad-clay/10 to-transparent opacity-50"></div>

          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h4 className="text-2xl font-bold text-white mb-6 font-serif">
                What You Get
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Complete kitchen setup",
                  "Franchise kit with branding",
                  "Staff training & management",
                  "Digital marketing support",
                  "POS & inventory system",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-kulhad-light/70"
                  >
                    <svg
                      className="w-5 h-5 text-kulhad-clay mr-3"
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
            </div>

            <div className="md:border-l md:border-white/10 md:pl-12">
              <h4 className="text-2xl font-bold text-white mb-6 font-serif">
                Requirements
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Ground floor location",
                  "High footfall area",
                  "Water connection",
                  "3-phase electricity",
                  "Main road facing (Preferred)",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-kulhad-light/70"
                  >
                    <svg
                      className="w-5 h-5 text-kulhad-clay mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FranchiseModels;
