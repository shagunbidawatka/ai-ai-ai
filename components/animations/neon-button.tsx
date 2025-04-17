"use client";

import React from "react";
import { motion } from "framer-motion";

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  color?: "indigo" | "cyan" | "pink";
}

export function NeonButton({
  children,
  onClick,
  className = "",
  color = "indigo",
}: NeonButtonProps) {
  const colorMap = {
    indigo: {
      bg: "bg-indigo-950",
      border: "border-indigo-500",
      text: "text-indigo-400",
      glow: "rgba(79, 70, 229, 0.6)",
    },
    cyan: {
      bg: "bg-cyan-950",
      border: "border-cyan-500",
      text: "text-cyan-400",
      glow: "rgba(6, 182, 212, 0.6)",
    },
    pink: {
      bg: "bg-pink-950",
      border: "border-pink-500",
      text: "text-pink-400",
      glow: "rgba(236, 72, 153, 0.6)",
    },
  };

  const { bg, border, text, glow } = colorMap[color];

  return (
    <motion.button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-md border-2 px-5 py-2 font-bold transition-all hover:-translate-y-0.5 ${bg} ${border} ${text} ${className}`}
      whileHover={{
        boxShadow: `0 0 12px 0 ${glow}`,
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          background: `radial-gradient(circle at center, ${glow} 0%, transparent 70%)`,
        }}
      />

      {/* Scan line effect */}
      <motion.div
        className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100"
        initial={{ top: "-100%" }}
        animate={{ top: ["120%", "-120%"] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
        style={{
          width: "100%",
          height: "40px",
          background: `linear-gradient(to bottom, transparent, ${glow}, transparent)`,
        }}
      />

      {/* Button text */}
      <span className="relative z-20">{children}</span>
    </motion.button>
  );
}
