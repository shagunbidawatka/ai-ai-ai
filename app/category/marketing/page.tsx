import { promises as fs } from "fs";
import path from "path";
import { CategoryHeader } from "@/components/animations/category-header";
import { AnimatedCard } from "@/components/animations/animated-card";
import { AnimatedSection } from "@/components/animations/animated-section";
import { Suspense } from "react";
import { ParticlesBackground } from "@/components/animations/particles-background";

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

export default async function MarketingToolsPage() {
  const toolsData = await getAITools();
  const marketingTools = toolsData.marketing || [];

  return (
    <div className="relative min-h-screen">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Animated Header */}
        <CategoryHeader
          title="Best AI Tools for Marketing"
          description="Transform your marketing strategy with these cutting-edge AI tools designed to enhance content creation, audience targeting, and campaign optimization."
          extraDescription="From intelligent copywriting to data-driven analytics, these AI marketing assistants help you create more effective campaigns and reach your target audience with precision."
        />

        {/* Tool Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {marketingTools.map((tool: Tool, index: number) => (
            <AnimatedCard key={tool.id} tool={tool} index={index} />
          ))}
        </div>

        {/* Animated Info Section */}
        <AnimatedSection title="How AI is Revolutionizing Marketing">
          <p className="mb-3 text-gray-300">
            AI marketing tools are changing the game in several important ways:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
            <li>Data-driven audience segmentation and targeting</li>
            <li>Automated content creation and personalization</li>
            <li>Predictive analytics for campaign performance</li>
            <li>Natural language processing for better copywriting</li>
            <li>Visual content generation and optimization</li>
          </ul>
          <p className="text-gray-300">
            By leveraging these AI-powered marketing tools, businesses can
            create more personalized customer experiences, optimize their
            marketing spend, and achieve better ROI on their campaigns through
            data-driven decision making.
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}
