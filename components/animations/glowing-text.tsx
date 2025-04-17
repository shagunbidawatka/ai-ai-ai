"use client";

import React from "react";
import { motion } from "framer-motion";
import TextTransition, { presets } from "react-text-transition";

interface GlowingTextProps {
  texts: string[];
  className?: string;
  interval?: number;
}

export function GlowingText({
  texts,
  className = "",
  interval = 3000,
}: GlowingTextProps) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <motion.div
      className={`text-center font-bold ${className}`}
      animate={{
        textShadow: [
          "0 0 5px rgba(79, 70, 229, 0.8)",
          "0 0 15px rgba(79, 70, 229, 0.6)",
          "0 0 25px rgba(79, 70, 229, 0.4)",
          "0 0 15px rgba(79, 70, 229, 0.6)",
          "0 0 5px rgba(79, 70, 229, 0.8)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <TextTransition springConfig={presets.gentle}>
        {texts[index]}
      </TextTransition>
    </motion.div>
  );
}
