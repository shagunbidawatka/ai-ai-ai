"use client";

import Link from "next/link";
import { ArrowRight, Code, Paintbrush, Megaphone, Zap } from "lucide-react";
import { ParticlesBackground } from "@/components/animations/particles-background";
import { MatrixBackground } from "@/components/animations/matrix-background";
import { GlowingText } from "@/components/animations/glowing-text";
import { CyberpunkCard } from "@/components/animations/cyberpunk-card";
import { CyberHeader } from "@/components/animations/cyber-header";
import { NeonButton } from "@/components/animations/neon-button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Backgrounds - both particle and matrix for futuristic effect */}
      <MatrixBackground />
      <ParticlesBackground />

      {/* Hero Section */}
      <div className="relative isolate px-4 sm:px-6 pt-10 sm:pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <CyberHeader
              text="Discover the Best AI Tools"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white"
            />
            <GlowingText
              texts={[
                "Work smarter with AI",
                "Create faster with AI",
                "Achieve more with AI",
                "Transform your workflow",
              ]}
              className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-indigo-300"
              interval={3000}
            />
            <div className="mt-8 sm:mt-10 flex items-center justify-center gap-x-6">
              <NeonButton color="indigo">
                <Link
                  href="/ai-tools"
                  className="inline-flex items-center gap-2 text-sm sm:text-base"
                >
                  Explore All AI Tools
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </NeonButton>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <motion.div
        className="bg-gray-900/30 backdrop-blur-sm py-12 sm:py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <CyberHeader
            text="Browse by Category"
            className="text-2xl sm:text-3xl text-center mb-8 sm:mb-12 text-white"
          />

          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* Developers Category */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CyberpunkCard className="h-full">
                <Link
                  href="/category/developers"
                  className="flex flex-col h-full"
                >
                  <div className="h-12 w-12 rounded-full bg-blue-900 flex items-center justify-center text-blue-400 mb-4">
                    <Code className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                    For Developers
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-4">
                    AI tools for coding, development, and software engineering.
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline mt-auto">
                    View Tools
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </CyberpunkCard>
            </motion.div>

            {/* Creators Category */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CyberpunkCard className="h-full">
                <Link
                  href="/category/creators"
                  className="flex flex-col h-full"
                >
                  <div className="h-12 w-12 rounded-full bg-green-900 flex items-center justify-center text-green-400 mb-4">
                    <Paintbrush className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                    For Creators
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-4">
                    AI tools for art, design, video, and content creation.
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline mt-auto">
                    View Tools
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </CyberpunkCard>
            </motion.div>

            {/* Marketing Category */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CyberpunkCard className="h-full">
                <Link
                  href="/category/marketing"
                  className="flex flex-col h-full"
                >
                  <div className="h-12 w-12 rounded-full bg-red-900 flex items-center justify-center text-red-400 mb-4">
                    <Megaphone className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                    For Marketing
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-4">
                    AI tools for copywriting, SEO, and marketing campaigns.
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline mt-auto">
                    View Tools
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </CyberpunkCard>
            </motion.div>

            {/* Productivity Category */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CyberpunkCard className="h-full">
                <Link
                  href="/category/productivity"
                  className="flex flex-col h-full"
                >
                  <div className="h-12 w-12 rounded-full bg-purple-900 flex items-center justify-center text-purple-400 mb-4">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                    For Productivity
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-4">
                    AI tools for workflow automation, organization, and
                    efficiency.
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline mt-auto">
                    View Tools
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </CyberpunkCard>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* SEO Content Section */}
      <div className="py-12 sm:py-16 container mx-auto px-4 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto">
          <CyberHeader
            text="Why Use AI Tools?"
            className="text-2xl sm:text-3xl mb-4 sm:mb-6 text-white"
          />
          <motion.p
            className="mb-4 text-sm sm:text-base text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Artificial Intelligence tools are transforming how we work, create,
            and communicate. By harnessing the power of AI, you can automate
            repetitive tasks, unlock new creative possibilities, and
            significantly enhance your productivity.
          </motion.p>

          <CyberHeader
            text="Benefits of Using AI Tools"
            className="text-lg sm:text-xl mt-6 sm:mt-8 mb-3 sm:mb-4 text-white"
          />
          <motion.ul
            className="list-disc pl-6 mb-6 space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <li>Save time by automating repetitive tasks</li>
            <li>Enhance creativity with AI-generated content and ideas</li>
            <li>Improve efficiency in your daily workflow</li>
            <li>
              Access advanced capabilities without specialized technical
              knowledge
            </li>
            <li>Scale your efforts beyond what would be manually possible</li>
          </motion.ul>

          <CyberHeader
            text="How to Choose the Right AI Tools"
            className="text-lg sm:text-xl mt-6 sm:mt-8 mb-3 sm:mb-4 text-white"
          />
          <motion.p
            className="mb-4 text-sm sm:text-base text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            With hundreds of AI tools available today, finding the right ones
            for your specific needs can be challenging. At AI Tools Hub,
            we&apos;ve curated the best tools and organized them by category to
            help you discover the perfect solutions for your workflow.
          </motion.p>

          <motion.div
            className="mt-6 sm:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <NeonButton color="cyan">
              <Link
                href="/ai-tools"
                className="inline-flex items-center gap-2 text-sm sm:text-base"
              >
                Explore All AI Tools
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </NeonButton>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
