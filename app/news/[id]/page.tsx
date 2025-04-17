import { promises as fs } from "fs";
import path from "path";
import { Suspense } from "react";
import { ParticlesBackground } from "@/components/animations/particles-background";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";

// Define news article interface
interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  sourceUrl: string;
  sourceName: string;
  publishedDate: string;
  category: string[];
}

async function getNewsArticles() {
  const filePath = path.join(process.cwd(), "data/ai-news.json");
  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileContents) as NewsArticle[];
  } catch (error) {
    console.error("Error loading news data:", error);
    return [];
  }
}

async function getNewsArticle(id: string) {
  // In a real implementation, this would fetch from an API or database
  // For now, we'll use a local JSON file as a placeholder
  const newsArticles = await getNewsArticles();
  return newsArticles.find((article) => article.id === id) || null;
}

// Generate static params for all news articles
export async function generateStaticParams() {
  const articles = await getNewsArticles();

  return articles.map((article) => ({
    id: article.id,
  }));
}

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const article = await getNewsArticle(params.id);

  if (!article) {
    return {
      title: "Article Not Found | AI Tools Hub",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: `${article.title} | AI News | AI Tools Hub`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      url: `https://aitools-hub.com/news/${article.id}`,
      images: [
        {
          url: article.imageUrl,
          width: 800,
          height: 450,
          alt: article.title,
        },
      ],
      publishedTime: article.publishedDate,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: [article.imageUrl],
    },
  };
}

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(dateString).toLocaleString("en-US", options);
}

// This is a direct redirect to external news sources
export default async function NewsArticlePage({
  params,
}: {
  params: { id: string };
}) {
  // Redirect to the main news page - we're now linking directly to news sources
  redirect("/news");
}
