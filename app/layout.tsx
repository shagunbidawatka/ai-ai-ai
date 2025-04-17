import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import MobileNav from "@/components/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Tools Hub | Ultimate Directory of AI Tools for Every Need",
  description:
    "Discover the best AI tools for developers, creators, marketers, and productivity. Our comprehensive directory features ChatGPT, Midjourney, GitHub Copilot, DALL-E, and 60+ top AI tools to enhance your workflow.",
  keywords:
    "AI tools, artificial intelligence tools, ChatGPT, Midjourney, DALL-E, GitHub Copilot, AI for developers, AI for creators, marketing AI tools, productivity AI tools, best AI tools, AI directory",
  openGraph: {
    title: "AI Tools Hub | Ultimate Directory of AI Tools for Every Need",
    description:
      "Discover the best AI tools for developers, creators, marketers, and productivity. Our comprehensive directory features ChatGPT, Midjourney, GitHub Copilot, DALL-E, and 60+ top AI tools to enhance your workflow.",
    type: "website",
    locale: "en_US",
    url: "https://aitools-hub.com",
    siteName: "AI Tools Hub",
    images: [
      {
        url: "https://placehold.co/1200x630/4f46e5/FFFFFF?text=AI+Tools+Hub",
        width: 1200,
        height: 630,
        alt: "AI Tools Hub - Discover the best AI tools for every need",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools Hub | Ultimate Directory of AI Tools for Every Need",
    description:
      "Discover the best AI tools for developers, creators, marketers, and productivity. Our comprehensive directory features ChatGPT, Midjourney, GitHub Copilot, DALL-E, and 60+ top AI tools to enhance your workflow.",
    images: ["https://placehold.co/1200x630/4f46e5/FFFFFF?text=AI+Tools+Hub"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://aitools-hub.com",
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico" },
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon_io/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "manifest",
        url: "/favicon_io/site.webmanifest",
      },
      {
        url: "/favicon_io/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon_io/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0f172a" />
        {/* Add Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* Monospace font for cyber effects */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.className} overflow-x-hidden bg-black text-gray-100`}
      >
        <div className="relative flex min-h-screen flex-col">
          <MobileNav />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-indigo-900/50 py-8 backdrop-blur-md">
            <div className="container mx-auto px-4 text-center text-sm text-indigo-300">
              © {new Date().getFullYear()} AI Tools Hub. All rights reserved.
            </div>
          </footer>
        </div>

        {/* Structured data for SEO */}
        <Script
          id="schema-org-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "AI Tools Hub",
              url: "https://aitools-hub.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://aitools-hub.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              description:
                "Discover the best AI tools for developers, creators, marketers, and productivity. Our comprehensive directory features ChatGPT, Midjourney, GitHub Copilot, DALL-E, and 60+ top AI tools to enhance your workflow.",
            }),
          }}
        />
      </body>
    </html>
  );
}
