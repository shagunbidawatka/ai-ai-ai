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
  title: "Best AI Productivity Tools | Workflow Automation & Efficiency",
  description:
    "Discover top AI productivity tools including ChatGPT, Notion AI, Claude, and more to streamline your workflow, automate tasks, and boost efficiency in your daily work.",
  keywords:
    "AI productivity tools, workflow automation, ChatGPT, Notion AI, Claude, Otter.ai, AI writing assistant, AI meeting tools, task management AI, efficiency tools",
  openGraph: {
    title: "Best AI Productivity Tools | Workflow Automation & Efficiency",
    description:
      "Discover top AI productivity tools including ChatGPT, Notion AI, Claude, and more to streamline your workflow, automate tasks, and boost efficiency in your daily work.",
    type: "website",
    url: "https://aitools-hub.com/category/productivity",
    images: [
      {
        url: "https://placehold.co/1200x630/8b5cf6/FFFFFF?text=AI+Tools+for+Productivity",
        width: 1200,
        height: 630,
        alt: "Best AI Productivity Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AI Productivity Tools | Workflow Automation & Efficiency",
    description:
      "Discover top AI productivity tools including ChatGPT, Notion AI, Claude, and more to streamline your workflow, automate tasks, and boost efficiency in your daily work.",
    images: [
      "https://placehold.co/1200x630/8b5cf6/FFFFFF?text=AI+Tools+for+Productivity",
    ],
  },
};

export default async function ProductivityToolsPage() {
  const toolsData = await getAITools();
  const productivityTools = toolsData.productivity || [];

  return (
    <div className="relative min-h-screen">
      {/* Background Effects */}
      <Suspense fallback={null}>
        <MatrixBackground />
      </Suspense>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Animated Header */}
        <CategoryHeader
          title="Best AI Productivity Tools"
          description="Transform your workflow with cutting-edge AI productivity tools designed to automate routine tasks, organize information, and help you accomplish more in less time."
          extraDescription="Our carefully selected collection of AI-powered productivity solutions will revolutionize how you work, whether you're managing personal tasks, running a business, or collaborating with a team."
        />

        {/* Tool Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {productivityTools.map((tool: Tool, index: number) => (
            <AnimatedCard key={tool.id} tool={tool} index={index} />
          ))}
        </div>

        {/* Animated Info Section */}
        <AnimatedSection title="Work Smarter with AI Productivity Tools">
          <p className="mb-3 text-gray-300">
            AI productivity tools are changing how we approach work and time
            management. These advanced solutions offer:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
            <li>Smart task management and prioritization</li>
            <li>Automated data entry and information processing</li>
            <li>Intelligent scheduling and calendar optimization</li>
            <li>Advanced note-taking and knowledge management</li>
            <li>AI-powered personal and virtual assistants</li>
          </ul>
          <p className="text-gray-300">
            By incorporating these AI productivity tools into your daily
            routine, you can eliminate time-consuming tasks, reduce mental
            burden, and focus your energy on high-value work that truly matters.
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}
