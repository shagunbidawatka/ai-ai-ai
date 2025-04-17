import { Suspense } from "react";
import { ParticlesBackground } from "@/components/animations/particles-background";
import { CategoryHeader } from "@/components/animations/category-header";
import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterForm } from "@/components/newsletter-form";

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

// Define the API response structure
interface NewsApiArticle {
  title: string;
  description: string | null;
  content: string | null;
  urlToImage: string | null;
  url: string;
  source: {
    name: string | null;
  };
  publishedAt: string;
}

interface NewsApiResponse {
  articles: NewsApiArticle[];
}

async function getLatestNews(): Promise<NewsArticle[]> {
  // Real-time news API fetch with error handling
  try {
    // Replace with your actual news API endpoint
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=artificial+intelligence&sortBy=publishedAt&apiKey=9a3605d18c1343d6b30b3fc37c59d9ef",
      { next: { revalidate: 3600 } } // Revalidate every hour
    );

    if (!response.ok) {
      throw new Error(`News API error: ${response.status}`);
    }

    const data: NewsApiResponse = await response.json();

    // Transform the API response to match our NewsArticle interface
    return data.articles
      .map((article: NewsApiArticle, index: number) => ({
        id: `news-${index + 1}`,
        title: article.title,
        summary: article.description || "No description available",
        content: article.content || "Full content not available",
        imageUrl:
          article.urlToImage ||
          "https://placehold.co/800x450/3b82f6/FFFFFF?text=AI+News",
        sourceUrl: article.url,
        sourceName: article.source.name || "Unknown Source",
        publishedDate: article.publishedAt,
        category: ["AI News"], // Default category, would be better with categorization
      }))
      .slice(0, 10); // Limit to 10 articles
  } catch (error) {
    console.error("Error fetching news:", error);
    // Return empty array or fallback data
    return [];
  }
}

export const metadata: Metadata = {
  title: "Latest AI News & Updates | AI Tools Hub",
  description:
    "Stay updated with the latest artificial intelligence news, tool releases, and breakthroughs. Daily coverage of AI innovations from around the world.",
  keywords:
    "AI news, artificial intelligence updates, latest AI tools, AI breakthroughs, AI industry news, daily AI updates",
  openGraph: {
    title: "Latest AI News & Updates | AI Tools Hub",
    description:
      "Stay updated with the latest artificial intelligence news, tool releases, and breakthroughs. Daily coverage of AI innovations from around the world.",
    type: "website",
    url: "https://aitools-hub.com/news",
    images: [
      {
        url: "https://placehold.co/1200x630/3b82f6/FFFFFF?text=AI+News+%26+Updates",
        width: 1200,
        height: 630,
        alt: "Latest AI News & Updates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest AI News & Updates | AI Tools Hub",
    description:
      "Stay updated with the latest artificial intelligence news, tool releases, and breakthroughs. Daily coverage of AI innovations from around the world.",
    images: [
      "https://placehold.co/1200x630/3b82f6/FFFFFF?text=AI+News+%26+Updates",
    ],
  },
};

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

export default async function AINewsPage() {
  const newsArticles = await getLatestNews();

  return (
    <div className="relative min-h-screen">
      {/* Background Effects */}
      <Suspense fallback={null}>
        <ParticlesBackground />
      </Suspense>

      <div className="container mx-auto px-4 py-10 sm:py-16 relative z-10">
        {/* Animated Header */}
        <CategoryHeader
          title="Latest AI News & Updates"
          description="Stay informed with the most recent developments in the AI world. From breakthrough research to new tool releases and industry trends."
          extraDescription="Our real-time news feed brings you timely updates on everything that matters in artificial intelligence, helping you stay ahead of the curve."
        />

        {/* News Feed */}
        <div className="mt-8 sm:mt-12 space-y-8 sm:space-y-12">
          {newsArticles.length > 0 ? (
            newsArticles.map((article) => (
              <article
                key={article.id}
                className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-700 hover:shadow-lg hover:shadow-purple-900/20"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-48 sm:h-64">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6 md:w-2/3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                      <div className="flex flex-wrap gap-2">
                        {article.category.map((cat) => (
                          <span
                            key={cat}
                            className="px-3 py-1 text-xs rounded-full bg-purple-900/50 text-purple-200"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      <time className="text-sm text-gray-400">
                        {formatDate(article.publishedDate)}
                      </time>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white line-clamp-2">
                      <a
                        href={article.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition-colors"
                      >
                        {article.title}
                      </a>
                    </h2>
                    <p className="text-sm sm:text-base text-gray-300 mb-4 line-clamp-3">
                      {article.summary}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between mt-auto">
                      <a
                        href={article.sourceUrl}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm sm:text-base"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read full article
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                      <div className="text-sm text-gray-400">
                        Source:{" "}
                        <a
                          href={article.sourceUrl}
                          className="hover:text-purple-400 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {article.sourceName}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="text-center py-8 sm:py-12">
              <h3 className="text-lg sm:text-xl text-gray-300 mb-3 sm:mb-4">
                No news articles available at the moment
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                Please check back soon for the latest AI updates!
              </p>
            </div>
          )}
        </div>
        <NewsletterForm />
        {/* Newsletter Signup */}
        {/* <div className="mt-10 sm:mt-16 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-gray-800 rounded-xl p-4 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">
            Never Miss an AI Update
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
            Subscribe to our newsletter to receive daily or weekly AI news
            digests directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition-colors text-sm sm:text-base"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div> */}
      </div>
    </div>
  );
}
