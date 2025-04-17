import { promises as fs } from "fs";
import path from "path";
import { MatrixBackground } from "@/components/animations/matrix-background";
import { CategoryHeader } from "@/components/animations/category-header";
import { AnimatedCard } from "@/components/animations/animated-card";
import { AnimatedSection } from "@/components/animations/animated-section";
import { Suspense } from "react";

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

// Metadata has been moved to layout.tsx

export default async function DevelopersToolsPage() {
  const toolsData = await getAITools();
  const developerTools = toolsData.developers || [];

  return (
    <div className="relative min-h-screen">
      {/* Background Effects */}
      <Suspense fallback={null}>
        <MatrixBackground />
      </Suspense>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Animated Header */}
        <CategoryHeader
          title="Best AI Tools for Developers"
          description="Accelerate your development workflow with these powerful AI coding assistants, code completion tools, and development aids."
          extraDescription="From intelligent code suggestions to automated testing and debugging, these AI tools help developers write better code faster while maintaining high quality standards."
        />

        {/* Tool Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {developerTools.map((tool: Tool, index: number) => (
            <AnimatedCard key={tool.id} tool={tool} index={index} />
          ))}
        </div>

        {/* Animated Info Section */}
        <AnimatedSection title="How AI Powers Modern Development">
          <p className="mb-3 text-gray-300">
            AI is transforming software development in several key ways:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
            <li>Advanced code completion and generation</li>
            <li>Automated bug detection and fixing</li>
            <li>Natural language to code translation</li>
            <li>Intelligent code refactoring suggestions</li>
            <li>Documentation automation and improvement</li>
          </ul>
          <p className="text-gray-300">
            These AI-powered tools enable developers to focus on solving complex
            problems while letting artificial intelligence handle repetitive
            coding tasks, leading to significant productivity gains and higher
            quality software.
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}
