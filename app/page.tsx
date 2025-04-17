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
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-mono font-bold tracking-tight">
              <span>Discover the Best</span>{" "}
              <span className="whitespace-nowrap">AI</span> <span>Tools</span>
            </div>
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
              <CyberpunkCard className="h-full group overflow-hidden border-2 border-blue-900/50 hover:border-blue-500/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <Link
                  href="/category/developers"
                  className="flex flex-col h-full"
                >
                  <div className="p-6 flex-1">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center shadow-lg mb-5 transform group-hover:scale-110 transition-transform duration-300">
                      <Code className="h-7 w-7 text-blue-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                      For Developers
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                      AI tools for coding, development, and software
                      engineering. Boost your productivity and code quality.
                    </p>
                  </div>
                  <div className="mt-auto px-6 py-4 border-t border-blue-900/30 bg-blue-900/10 group-hover:bg-blue-900/20 transition-colors">
                    <span className="inline-flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300">
                      View Tools
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </CyberpunkCard>
            </motion.div>

            {/* Creators Category */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CyberpunkCard className="h-full group overflow-hidden border-2 border-green-900/50 hover:border-green-500/70 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                <Link
                  href="/category/creators"
                  className="flex flex-col h-full"
                >
                  <div className="p-6 flex-1">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-green-900 to-green-700 flex items-center justify-center shadow-lg mb-5 transform group-hover:scale-110 transition-transform duration-300">
                      <Paintbrush className="h-7 w-7 text-green-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">
                      For Creators
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                      AI tools for art, design, video, and content creation.
                      Amplify your creative potential.
                    </p>
                  </div>
                  <div className="mt-auto px-6 py-4 border-t border-green-900/30 bg-green-900/10 group-hover:bg-green-900/20 transition-colors">
                    <span className="inline-flex items-center text-sm font-medium text-green-400 group-hover:text-green-300">
                      View Tools
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </CyberpunkCard>
            </motion.div>

            {/* Marketing Category */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CyberpunkCard className="h-full group overflow-hidden border-2 border-red-900/50 hover:border-red-500/70 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
                <Link
                  href="/category/marketing"
                  className="flex flex-col h-full"
                >
                  <div className="p-6 flex-1">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-red-900 to-red-700 flex items-center justify-center shadow-lg mb-5 transform group-hover:scale-110 transition-transform duration-300">
                      <Megaphone className="h-7 w-7 text-red-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors">
                      For Marketing
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                      AI tools for copywriting, SEO, and marketing campaigns.
                      Elevate your marketing strategies.
                    </p>
                  </div>
                  <div className="mt-auto px-6 py-4 border-t border-red-900/30 bg-red-900/10 group-hover:bg-red-900/20 transition-colors">
                    <span className="inline-flex items-center text-sm font-medium text-red-400 group-hover:text-red-300">
                      View Tools
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </CyberpunkCard>
            </motion.div>

            {/* Productivity Category */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CyberpunkCard className="h-full group overflow-hidden border-2 border-purple-900/50 hover:border-purple-500/70 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <Link
                  href="/category/productivity"
                  className="flex flex-col h-full"
                >
                  <div className="p-6 flex-1">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-900 to-purple-700 flex items-center justify-center shadow-lg mb-5 transform group-hover:scale-110 transition-transform duration-300">
                      <Zap className="h-7 w-7 text-purple-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                      For Productivity
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                      AI tools for workflow automation, organization, and
                      efficiency. Streamline your daily tasks.
                    </p>
                  </div>
                  <div className="mt-auto px-6 py-4 border-t border-purple-900/30 bg-purple-900/10 group-hover:bg-purple-900/20 transition-colors">
                    <span className="inline-flex items-center text-sm font-medium text-purple-400 group-hover:text-purple-300">
                      View Tools
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
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
