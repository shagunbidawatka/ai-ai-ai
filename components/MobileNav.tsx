"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { NeonLogo } from "@/components/animations/neon-logo";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <header className="border-b border-indigo-900/50 backdrop-blur-md z-50 sticky top-0">
      <nav className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="mr-4">
            <NeonLogo text="AI Tools Hub" className="py-2" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden rounded-md p-2 text-gray-300 hover:bg-indigo-900/20 hover:text-indigo-400 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/news"
            className="text-sm font-medium text-gray-300 hover:text-indigo-400 transition-colors"
          >
            News
          </Link>
          <Link
            href="/category/developers"
            className="text-sm font-medium text-gray-300 hover:text-indigo-400 transition-colors"
          >
            Developers
          </Link>
          <Link
            href="/category/creators"
            className="text-sm font-medium text-gray-300 hover:text-indigo-400 transition-colors"
          >
            Creators
          </Link>
          <Link
            href="/category/marketing"
            className="text-sm font-medium text-gray-300 hover:text-indigo-400 transition-colors"
          >
            Marketing
          </Link>
          <Link
            href="/category/productivity"
            className="text-sm font-medium text-gray-300 hover:text-indigo-400 transition-colors"
          >
            Productivity
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } border-t border-indigo-900/50 backdrop-blur-md`}
      >
        <div className="flex flex-col space-y-4 px-4 py-6">
          <Link
            href="/news"
            className="text-base font-medium text-gray-300 hover:text-indigo-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            News
          </Link>
          <Link
            href="/category/developers"
            className="text-base font-medium text-gray-300 hover:text-indigo-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Developers
          </Link>
          <Link
            href="/category/creators"
            className="text-base font-medium text-gray-300 hover:text-indigo-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Creators
          </Link>
          <Link
            href="/category/marketing"
            className="text-base font-medium text-gray-300 hover:text-indigo-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Marketing
          </Link>
          <Link
            href="/category/productivity"
            className="text-base font-medium text-gray-300 hover:text-indigo-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Productivity
          </Link>
        </div>
      </div>
    </header>
  );
}
