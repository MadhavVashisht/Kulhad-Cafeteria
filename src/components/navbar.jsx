// src/components/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OverlayMenu from "./OverlayMenu";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);

  const lastScrollY = useRef(0);
  const timerID = useRef(null);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Founders", href: "#founders" },
    { label: "Journey", href: "#timeline" },
    { label: "Franchise", href: "#franchise" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  // 1. Logic to force navbar visible when at the very top (Hero Section)
  useEffect(() => {
    const homeSection = document.querySelector("#home");

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (homeSection) observer.observe(homeSection);

    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  // 2. Logic to hide on scroll down, show on scroll up, auto-hide on stop
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show if at the top (forceVisible)
      if (forceVisible) {
        setVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Hide if scrolling down more than 50px
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setVisible(false);
        if (timerID.current) clearTimeout(timerID.current);
      } else {
        // Show if scrolling up
        setVisible(true);

        // Auto-hide after 3 seconds of inactivity (if not at top)
        if (timerID.current) clearTimeout(timerID.current);
        timerID.current = setTimeout(() => {
          setVisible(false);
        }, 3000);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerID.current) clearTimeout(timerID.current);
    };
  }, [forceVisible]);

  // Framer Motion Variants
  const navbarVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
    },
    hidden: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        animate={visible ? "visible" : "hidden"}
        initial="visible"
        className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
      >
        {/* Left: Logo */}
        <motion.div
          className="flex items-center z-50 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo(0, 0)}
        >
          <img
            src={logo}
            alt="Kulhad Cafeteria Logo"
            className="h-10 w-auto sm:h-12"
          />
          <span className="ml-3 text-lg sm:text-xl font-serif font-semibold text-white hidden sm:block tracking-wide">
            Kulhad Cafeteria
          </span>
        </motion.div>

        {/* Center: Menu Button (Absolute centered) */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <motion.button
            className="text-white hover:text-kulhad-clay transition-colors p-2 focus:outline-none group"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Custom Hamburger Icon */}
            <div className="flex flex-col gap-1.5 items-center justify-center w-12 h-12 bg-white/5 rounded-full hover:bg-white/10 transition-colors backdrop-blur-md border border-white/5 shadow-lg">
              <span className="block w-5 h-0.5 bg-current transition-all group-hover:w-6"></span>
              <span className="block w-5 h-0.5 bg-current transition-all"></span>
              <span className="block w-5 h-0.5 bg-current transition-all group-hover:w-6"></span>
            </div>
          </motion.button>
        </div>

        {/* Right: CTA Button */}
        <div className="hidden sm:block">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, backgroundColor: "#c05f30" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-kulhad-clay text-white px-6 py-2.5 rounded-full transition-colors duration-300 font-medium shadow-lg shadow-kulhad-clay/20"
          >
            Reach Out
          </motion.a>
        </div>

        {/* Mobile-only CTA */}
        <div className="sm:hidden">
          <motion.a
            href="#contact"
            className="text-kulhad-clay font-semibold text-sm bg-white/5 px-4 py-2 rounded-full"
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.a>
        </div>
      </motion.nav>

      {/* Assuming OverlayMenu has its own AnimatePresence or internal animations */}
      <OverlayMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={navItems}
      />
    </>
  );
};

export default Navbar;
