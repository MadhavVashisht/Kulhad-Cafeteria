// src/components/OverlayMenu.jsx
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OverlayMenu = ({ isOpen, onClose, links }) => {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset overflow on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Animation Variants
  const menuVariants = {
    closed: {
      opacity: 0,
      backdropFilter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        when: "afterChildren", // Wait for links to leave before fading out
      },
    },
    open: {
      opacity: 1,
      backdropFilter: "blur(24px)",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        when: "beforeChildren", // Fade in background, then show links
      },
    },
  };

  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-[60] bg-black/95 flex flex-col"
        >
          {/* Close Button Container */}
          <div className="flex justify-end p-6">
            <motion.button
              onClick={onClose}
              whileHover={{ rotate: 90, scale: 1.1, color: "#d67040" }} // Rotate and change to clay color
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.4 }}
              className="text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <svg
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </div>

          {/* Menu Links */}
          <motion.div
            className="flex flex-col items-center justify-center flex-1 space-y-6 md:space-y-8 pb-20"
            variants={containerVariants}
          >
            {links.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={onClose}
                variants={linkVariants}
                whileHover={{ scale: 1.1, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="text-4xl md:text-6xl font-serif font-bold text-white/90 hover:text-kulhad-clay transition-colors duration-300 relative group"
              >
                {/* Hover Indicator Dot */}
                <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-3 h-3 bg-kulhad-clay rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-full group-hover:translate-x-0"></span>

                {item.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Optional Footer inside Menu */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-10 left-0 w-full text-center text-white/30 text-sm tracking-widest uppercase"
          >
            Swad Desh ki Mittee ka
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OverlayMenu;
