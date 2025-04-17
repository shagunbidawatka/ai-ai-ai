"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedSectionProps {
  title: string;
  children: React.ReactNode;
}

export function AnimatedSection({ title, children }: AnimatedSectionProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-16 p-8 rounded-xl"
      style={{
        background:
          "linear-gradient(145deg, rgba(79, 70, 229, 0.1) 0%, rgba(17, 17, 27, 0.8) 100%)",
        border: "1px solid rgba(79, 70, 229, 0.15)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="flex items-center mb-6">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { width: "50px" },
            hidden: { width: "0px" },
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="h-[2px] bg-indigo-500 mr-4"
        />
        <motion.h2
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 20 },
          }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="text-2xl font-bold text-white"
        >
          {title}
        </motion.h2>
      </div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 },
        }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
