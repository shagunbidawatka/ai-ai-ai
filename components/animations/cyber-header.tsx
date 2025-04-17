"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CyberHeaderProps {
  text: string;
  className?: string;
}

export function CyberHeader({ text, className = "" }: CyberHeaderProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    // Randomly trigger glitch effect
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, Math.random() * 5000 + 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const letters = text.split("");

  return (
    <motion.h1
      className={`relative font-mono font-bold tracking-tight ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Glitch effect layers */}
      <div className="relative">
        {isGlitching && (
          <>
            <div className="absolute top-0 left-0 z-10 w-full translate-x-[-5px] text-red-500 opacity-70 blur-[0.5px]">
              {text}
            </div>
            <div className="absolute top-0 left-0 z-10 w-full translate-x-[5px] text-blue-500 opacity-70 blur-[0.5px]">
              {text}
            </div>
          </>
        )}

        {/* Main text with individual letter animations */}
        <div className="relative z-20">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.04,
                type: "spring",
              }}
              className="inline-block"
              style={{
                textShadow: "0 0 8px rgba(79, 70, 229, 0.8)",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Bottom highlight */}
      <motion.div
        className="absolute bottom-0 left-0 h-[3px] bg-indigo-500"
        animate={{ width: ["0%", "100%", "100%", "0%"] }}
        transition={{
          duration: 3,
          times: [0, 0.4, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 5,
        }}
      />
    </motion.h1>
  );
}
