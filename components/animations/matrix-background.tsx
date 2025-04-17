"use client";

import React, { useEffect, useRef } from "react";

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Matrix effect variables
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height);
    }

    // Character set
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";

    // Draw the matrix rain
    const draw = () => {
      // Add semi-transparent black rectangle to create fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text color and font
      ctx.fillStyle = "#0f0"; // Bright green
      ctx.font = `${fontSize}px monospace`;

      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        // Choose a random character
        const text = chars[Math.floor(Math.random() * chars.length)];

        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Make some characters brighter (looks like glowing)
        if (Math.random() > 0.975) {
          ctx.fillStyle = "#fff"; // White for glow effect
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          ctx.fillStyle = "#0f0"; // Back to green
        }

        // Reset drop when it reaches bottom or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i]++;
      }
    };

    // Animation loop
    const interval = setInterval(draw, 35);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-20"
      style={{ filter: "blur(0.5px)" }}
    />
  );
}
