"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tag, ArrowRight } from "lucide-react";

interface Tool {
  id: string;
  name: string;
  description: string;
  logo: string;
  link: string;
  tags: string[];
}

interface AnimatedCardProps {
  tool: Tool;
  index: number;
}

export function AnimatedCard({ tool, index }: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-shadow hover:shadow-xl"
      style={{
        background: "rgba(17, 17, 27, 0.7)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(79, 70, 229, 0.2)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent"
        style={{
          width: "200%",
          left: "-50%",
        }}
        animate={isHovered ? { left: "100%" } : { left: "-100%" }}
        transition={
          isHovered ? { duration: 1.5, ease: "easeInOut" } : { duration: 0 }
        }
      />

      {/* Logo container with animation */}
      <motion.div
        className="mb-4 aspect-video overflow-hidden rounded-md bg-black/30"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={tool.logo}
          alt={`${tool.name} logo`}
          className="h-full w-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Tool title with animation */}
      <motion.h2
        className="mb-2 text-xl font-semibold text-white"
        initial={{ y: 0 }}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        {tool.name}
      </motion.h2>

      {/* Description */}
      <p className="mb-4 text-sm text-gray-300">{tool.description}</p>

      {/* Tags with animation */}
      <div className="mb-4 flex flex-wrap gap-2">
        {tool.tags.map((tag: string) => (
          <motion.span
            key={tag}
            className="inline-flex items-center gap-1 rounded-full bg-indigo-950/60 px-2.5 py-0.5 text-xs font-medium text-indigo-300 border border-indigo-800/30"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(79, 70, 229, 0.3)",
            }}
            transition={{ duration: 0.2 }}
          >
            <Tag className="h-3 w-3" />
            {tag}
          </motion.span>
        ))}
      </div>

      {/* Visit website link with animation */}
      <motion.a
        href={tool.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300 group"
        whileHover={{ x: 3 }}
        transition={{ duration: 0.2 }}
      >
        Visit Website
        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="ml-1 h-4 w-4 transition-transform" />
        </motion.div>
      </motion.a>
    </motion.div>
  );
}
