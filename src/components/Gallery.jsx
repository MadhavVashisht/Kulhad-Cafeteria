import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Updated with Unsplash images
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop",
      alt: "Cozy Interior",
      category: "interior",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1596920566829-d73ad80aa18e?q=80&w=1000&auto=format&fit=crop",
      alt: "Masala Chai Kulhad",
      category: "food",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop",
      alt: "Live Counter",
      category: "interior",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1000&auto=format&fit=crop",
      alt: "Fresh Cookies",
      category: "food",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop",
      alt: "Our Baristas",
      category: "team",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1626136084051-5296f6b92a2a?q=80&w=1000&auto=format&fit=crop",
      alt: "Snack Platter",
      category: "food",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1000&auto=format&fit=crop",
      alt: "Student Hangout",
      category: "interior",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop",
      alt: "Campus Event",
      category: "events",
    },
  ];

  const categories = ["All", "interior", "food", "team", "events"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <section
      id="gallery"
      // CHANGED: bg-transparent to allow Particles to show through
      className="section-padding bg-transparent relative overflow-hidden"
    >
      {/* Decorative Background Blob */}
      <div className="absolute top-0 left-1/2 w-full max-w-3xl h-full bg-kulhad-clay/5 blur-[100px] -translate-x-1/2 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-white">
            The Kulhad Experience
          </h2>
          <p className="text-xl text-kulhad-light/60 max-w-3xl mx-auto font-light">
            Where tradition meets contemporary cafe culture
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-2 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 border
                ${
                  activeCategory === category
                    ? "bg-kulhad-clay text-white border-kulhad-clay shadow-[0_0_15px_rgba(214,112,64,0.4)] scale-105"
                    : "bg-white/5 text-kulhad-light/60 border-white/10 hover:border-kulhad-clay/50 hover:text-white"
                }
              `}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Image Grid with Animation Presence */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                layout
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer border border-white/10 bg-white/5 aspect-square"
                onClick={() => setSelectedImage(image)}
              >
                {/* Actual Image */}
                <div className="w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Text Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-kulhad-clay/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 text-kulhad-clay border border-kulhad-clay/30">
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
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="text-white text-lg font-serif font-medium drop-shadow-md">
                      {image.alt}
                    </div>
                    <div className="text-kulhad-clay text-xs uppercase tracking-widest mt-2 font-semibold">
                      View Project
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Featured Quote */}
        <motion.div
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
        >
          <div className="relative p-10 bg-white/5 rounded-3xl border border-white/10 max-w-4xl mx-auto text-center overflow-hidden backdrop-blur-sm">
            {/* Background shine effect */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-kulhad-clay/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-kulhad-clay/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <span className="text-6xl text-white/10 font-serif leading-none absolute -top-4 left-1/2 transform -translate-x-1/2">
                "
              </span>
              <p className="text-2xl md:text-3xl font-serif italic text-white/90 mb-6 pt-4 leading-relaxed">
                Want a mid-day energy boost? <br />
                <span className="text-kulhad-clay">We've got Kulhad chai.</span>
              </p>
              <div className="flex items-center justify-center space-x-3 text-sm tracking-widest text-kulhad-light/50 uppercase">
                <span>#CGCJCares</span>
                <span className="w-1 h-1 rounded-full bg-kulhad-clay"></span>
                <span>Chandigarh Group of Colleges</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking content
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors p-2 z-50"
              >
                <span className="text-sm uppercase tracking-widest mr-2">
                  Close
                </span>
                <span className="text-2xl">✕</span>
              </button>

              <div className="bg-kulhad-dark border border-white/10 p-2 md:p-4 rounded-2xl shadow-2xl overflow-hidden">
                <div className="aspect-video bg-black/50 rounded-lg flex items-center justify-center relative overflow-hidden group">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="mt-6 flex justify-between items-center px-2">
                  <div>
                    <h3 className="text-white text-xl font-serif">
                      {selectedImage.alt}
                    </h3>
                    <p className="text-kulhad-light/50 text-sm capitalize">
                      {selectedImage.category}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    onClick={() => setSelectedImage(null)}
                    className="bg-kulhad-clay text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#c05f30] transition"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
