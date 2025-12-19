import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// 1. Static SVG Assets
const icons = {
  leaf: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-full h-full drop-shadow-lg"
    >
      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" />
    </svg>
  ),
  kulhad: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-full h-full drop-shadow-lg"
    >
      <path d="M4 4L6 20H18L20 4H4Z" />
      <path
        d="M2 4H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  steam: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-full h-full drop-shadow-md"
    >
      <path
        d="M8 3C8 3 6 5 6 8C6 11 10 11 10 14C10 17 8 19 8 19M16 3C16 3 14 5 14 8C14 11 18 11 18 14C18 17 16 19 16 19M12 5C12 5 10 7 10 10C10 13 14 13 14 16C14 19 12 21 12 21"
        strokeLinecap="round"
      />
    </svg>
  ),
  cookie: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-full h-full drop-shadow-lg"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="8" cy="8" r="1.5" className="text-black/30" />
      <circle cx="16" cy="14" r="1.5" className="text-black/30" />
      <circle cx="10" cy="16" r="1.5" className="text-black/30" />
      <circle cx="15" cy="8" r="1.5" className="text-black/30" />
    </svg>
  ),
};

const iconKeys = Object.keys(icons);

const Particles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate 25 floating items
    const newParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      icon: iconKeys[Math.floor(Math.random() * iconKeys.length)],

      // Starting positions
      left: Math.random() * 100,

      // Animation parameters
      duration: 15 + Math.random() * 20, // Speed of float
      delay: -(Math.random() * 30), // Negative delay makes them appear "already moving" on load
      sway: 20 + Math.random() * 50, // How much it moves left/right

      // Visuals
      size: 30 + Math.random() * 40,
      opacity: 0.15 + Math.random() * 0.25,

      // Theme colors
      colorClass: Math.random() > 0.6 ? "text-kulhad-clay" : "text-white/20",
    }));

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute ${p.colorClass}`}
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            filter: "blur(0.5px)",
          }}
          initial={{
            y: "110vh",
            opacity: 0,
            x: 0,
            rotate: 0,
          }}
          animate={{
            y: "-20vh", // Float up off screen
            opacity: [0, p.opacity, p.opacity, 0], // Fade in, stay visible, fade out
            x: [0, p.sway, -p.sway, 0], // Sway side to side (Sine wave effect)
            rotate: 360, // Full rotation
          }}
          transition={{
            // Vertical movement
            y: {
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay, // Negative delay to start mid-animation
            },
            // Rotation
            rotate: {
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            },
            // Swaying motion (independent timing for organic feel)
            x: {
              duration: p.duration / 2, // Sway faster than the rise
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: p.delay,
            },
            // Opacity handling
            opacity: {
              duration: p.duration,
              repeat: Infinity,
              times: [0, 0.1, 0.9, 1], // Fade in first 10%, Fade out last 10%
              delay: p.delay,
            },
          }}
        >
          {icons[p.icon]}
        </motion.div>
      ))}
    </div>
  );
};

export default Particles;
