import { promises as fs } from "fs";
import path from "path";
import { Tag, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

export default async function AIToolsPage() {
  const toolsData = await getAITools();

  // Categories are now directly in the JSON structure
  const categories = {
    developers: toolsData.developers || [],
    creators: toolsData.creators || [],
    marketing: toolsData.marketing || [],
    productivity: toolsData.productivity || [],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">AI Tools Directory</h1>

      <Tabs defaultValue="developers" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="developers">For Developers</TabsTrigger>
          <TabsTrigger value="creators">For Creators</TabsTrigger>
          <TabsTrigger value="marketing">For Marketing</TabsTrigger>
          <TabsTrigger value="productivity">For Productivity</TabsTrigger>
        </TabsList>

        {Object.entries(categories).map(([category, categoryTools]) => (
          <TabsContent key={category} value={category}>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoryTools.map((tool: Tool) => (
                <div
                  key={tool.id}
                  className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="mb-4 aspect-video overflow-hidden rounded-md">
                    <img
                      src={tool.logo}
                      alt={`${tool.name} logo`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <h2 className="mb-2 text-xl font-semibold">{tool.name}</h2>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {tool.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {tool.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                      >
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Visit Website
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
