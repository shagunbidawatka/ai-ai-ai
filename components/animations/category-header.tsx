"use client";

import React from "react";
import { motion } from "framer-motion";

interface CategoryHeaderProps {
  title: string;
  description: string;
  extraDescription?: string;
}

export function CategoryHeader({
  title,
  description,
  extraDescription,
}: CategoryHeaderProps) {
  const titleWords = title.split(" ");

  return (
    <div className="mb-12">
      <motion.h1
        className="mb-6 text-4xl font-bold text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {titleWords.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.1 + 0.3,
              ease: "easeOut",
            }}
          >
            {word}
            {i < titleWords.length - 1 ? " " : ""}
          </motion.span>
        ))}
      </motion.h1>

      <motion.div
        className="w-20 h-1 bg-indigo-500 mb-6"
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      />

      <motion.p
        className="text-lg text-indigo-200 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      >
        {description}
      </motion.p>

      {extraDescription && (
        <motion.p
          className="text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        >
          {extraDescription}
        </motion.p>
      )}
    </div>
  );
}
