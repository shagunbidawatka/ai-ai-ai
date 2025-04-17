import { promises as fs } from "fs";
import path from "path";
import { MatrixBackground } from "@/components/animations/matrix-background";
import { CategoryHeader } from "@/components/animations/category-header";
import { AnimatedCard } from "@/components/animations/animated-card";
import { AnimatedSection } from "@/components/animations/animated-section";
import { Suspense } from "react";
import type { Metadata } from "next";

// Define tool interface
interface Tool {
  id: string;
  name: string;
  description: string;
  logo: string;
  link: string;
  tags: string[];
}

// Define categories interface
interface ToolsData {
  developers: Tool[];
  creators: Tool[];
  marketing: Tool[];
  productivity: Tool[];
}

async function getAITools() {
  const filePath = path.join(process.cwd(), "data/ai-tools.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContents) as ToolsData;
}

export const metadata: Metadata = {
  title: "Best AI Tools for Creators | Art, Design, Video & Audio Generation",
  description:
    "Explore top AI tools for creators including Midjourney, DALL-E, Runway, and more to enhance your creative workflows, generate stunning visuals, and produce professional content.",
  keywords:
    "AI art tools, creative AI tools, Midjourney, DALL-E, Stable Diffusion, AI video generation, AI audio tools, content creation, design tools",
  openGraph: {
    title: "Best AI Tools for Creators | Art, Design, Video & Audio Generation",
    description:
      "Explore top AI tools for creators including Midjourney, DALL-E, Runway, and more to enhance your creative workflows, generate stunning visuals, and produce professional content.",
    type: "website",
    url: "https://aitools-hub.com/category/creators",
    images: [
      {
        url: "https://placehold.co/1200x630/16a34a/FFFFFF?text=AI+Tools+for+Creators",
        width: 1200,
        height: 630,
        alt: "Best AI Tools for Creators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AI Tools for Creators | Art, Design, Video & Audio Generation",
    description:
      "Explore top AI tools for creators including Midjourney, DALL-E, Runway, and more to enhance your creative workflows, generate stunning visuals, and produce professional content.",
    images: [
      "https://placehold.co/1200x630/16a34a/FFFFFF?text=AI+Tools+for+Creators",
    ],
  },
};

export default async function CreatorsToolsPage() {
  const toolsData = await getAITools();
  const creatorTools = toolsData.creators || [];

  return (
    <div className="relative min-h-screen">
      {/* Background Effects */}
      <Suspense fallback={null}>
        <MatrixBackground />
      </Suspense>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Animated Header */}
        <CategoryHeader
          title="Best AI Tools for Creators"
          description="Explore cutting-edge AI tools designed to amplify your creative potential, whether you're producing visual art, writing content, or designing user experiences."
          extraDescription="Our hand-picked selection of creator tools helps you break creative barriers, streamline your workflow, and bring your unique vision to life with the power of artificial intelligence."
        />

        {/* Tool Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {creatorTools.map((tool: Tool, index: number) => (
            <AnimatedCard key={tool.id} tool={tool} index={index} />
          ))}
        </div>

        {/* Animated Info Section */}
        <AnimatedSection title="How AI Empowers Creators">
          <p className="mb-3 text-gray-300">
            AI is revolutionizing the creative process in countless ways. These
            tools offer creators:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
            <li>AI-assisted design and image generation</li>
            <li>Advanced content creation and writing tools</li>
            <li>Smart editing and enhancement capabilities</li>
            <li>Personalized creative suggestions based on your style</li>
            <li>Time-saving automation for repetitive creative tasks</li>
          </ul>
          <p className="text-gray-300">
            With these AI tools in your creative arsenal, you can focus more on
            your unique vision while letting artificial intelligence handle the
            technical aspects of your projects.
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}
