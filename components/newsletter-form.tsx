"use client";

import { useState, useCallback } from "react";

export function NewsletterForm({ context = "website" }: { context?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleClick = useCallback(
    async (e: React.MouseEvent) => {
      // Aggressively prevent any default behavior
      e.preventDefault();
      e.stopPropagation();

      if (!email || status === "loading") return;

      setStatus("loading");

      // Get current date in a readable format
      const date = new Date().toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      // SheetDB API URL (Replace with your real key)
      const sheetDBUrl = "https://sheetdb.io/api/v1/jvsavsjetzery";

      // Payload to send to SheetDB
      const payload = {
        data: [
          {
            email,
            context: context || "website", // Default to "website" if context is empty
            date,
          },
        ],
      };

      try {
        // Send request directly to SheetDB
        const response = await fetch(sheetDBUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (response.ok) {
          setStatus("success");
          setMessage(data.message || "Thank you for subscribing!");
          setEmail(""); // Clear the email field
        } else {
          setStatus("error");
          setMessage(data.message || "Something went wrong. Please try again.");
        }
      } catch (error) {
        setStatus("error");
        setMessage("An error occurred. Please try again later.");
        console.error("Subscription error:", error);
      }
    },
    [email, status, context]
  );

  // Handle input changes with useCallback
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );

  return (
    <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-gray-800 rounded-xl p-4 sm:p-8">
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">
        Never Miss an AI Update
      </h3>
      <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
        Subscribe to our newsletter to receive daily or weekly AI news digests
        directly to your inbox.
      </p>
      {/* Use a basic div structure with no form semantics */}
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Your email address"
          className="flex-grow px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
          value={email}
          onChange={handleInputChange}
          disabled={status === "loading"}
          // This will prevent Enter key from submitting any parent forms
          onKeyDown={(e) => {
            if (e.key === "Enter") e.preventDefault();
          }}
        />
        <button
          type="button"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition-colors text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
          disabled={status === "loading"}
          onClick={handleClick}
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
      {status === "success" && (
        <p className="text-sm text-green-400 mt-3 sm:mt-4">{message}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400 mt-3 sm:mt-4">{message}</p>
      )}
      <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}
