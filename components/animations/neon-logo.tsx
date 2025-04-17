"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface NeonLogoProps {
  text: string;
  className?: string;
}

export function NeonLogo({ text, className = "" }: NeonLogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="/"
      className={`group relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative px-2">
        {/* Background highlight - reduced blur */}
        <motion.div
          className="absolute inset-0 rounded-lg opacity-30 bg-indigo-500"
          animate={{
            opacity: isHovered ? 0.4 : 0.25,
          }}
          transition={{
            duration: 1,
          }}
          style={{
            filter: `blur(${isHovered ? 3 : 2}px)`,
            transform: "translateZ(0)",
          }}
        />

        {/* Main text - improved clarity */}
        <motion.span
          className="relative text-2xl font-bold tracking-wider text-white z-10"
          animate={{
            textShadow: "0 0 1px #fff, 0 0 2px #4f46e5",
          }}
          transition={{
            duration: 0.3,
          }}
          style={{
            fontFamily: "'Space Mono', monospace",
            letterSpacing: "0.05em",
            WebkitTextStroke: "1px white",
            transform: isHovered ? "scale(1.03)" : "scale(1)",
            transition: "transform 0.3s ease",
          }}
        >
          {text}
        </motion.span>
      </div>

      {/* Underline effect - simplified */}
      <motion.div
        className="absolute -bottom-1 left-0 h-[2px] bg-white"
        initial={{ width: 0 }}
        animate={{
          width: isHovered ? "100%" : "70%",
        }}
        transition={{
          duration: isHovered ? 0.3 : 0.5,
          ease: "easeInOut",
        }}
        style={{
          boxShadow: isHovered
            ? "0 0 2px #fff, 0 0 4px #4f46e5"
            : "0 0 1px #fff, 0 0 2px #4f46e5",
        }}
      />
    </Link>
  );
}
