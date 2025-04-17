"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface CyberpunkCardProps {
  children: React.ReactNode;
  className?: string;
}

export function CyberpunkCard({
  children,
  className = "",
}: CyberpunkCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    setMousePosition({ x, y });
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl border border-indigo-500/20 bg-gray-900/60 p-6 backdrop-blur-sm ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        rotateY: isHovered ? mousePosition.x * 10 : 0,
        rotateX: isHovered ? mousePosition.y * -10 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glowing border effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0"
        animate={{
          boxShadow: isHovered
            ? [
                "0 0 0 2px rgba(79, 70, 229, 0.3)",
                "0 0 0 4px rgba(79, 70, 229, 0.2)",
                "0 0 0 6px rgba(79, 70, 229, 0.1)",
              ]
            : "none",
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
      />

      {/* Card content */}
      <div className="relative" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>

      {/* Corner accents */}
      {[
        "top-0 left-0 h-[2px] w-8",
        "top-0 right-0 h-[2px] w-8",
        "bottom-0 left-0 h-[2px] w-8",
        "bottom-0 right-0 h-[2px] w-8",
        "top-0 left-0 h-8 w-[2px]",
        "top-0 right-0 h-8 w-[2px]",
        "bottom-0 left-0 h-8 w-[2px]",
        "bottom-0 right-0 h-8 w-[2px]",
      ].map((className, i) => (
        <motion.div
          key={i}
          className={`absolute bg-indigo-500 ${className}`}
          animate={{
            opacity: isHovered ? [0.5, 1, 0.5] : 0.5,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.1,
          }}
        />
      ))}
    </motion.div>
  );
}
