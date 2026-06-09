"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  LANGUAGE_STORAGE_KEY,
  type LanguageCode,
  uiLabels,
} from "./languageConfig";

export default function Footer() {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    if (typeof window === "undefined") {
      return "en";
    }
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as LanguageCode | null;
    return savedLanguage ?? "en";
  });

  useEffect(() => {
    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<LanguageCode>;
      if (customEvent.detail) {
        setLanguage(customEvent.detail);
      }
    };

    window.addEventListener("languagechange", handleLanguageChange as EventListener);
    return () => {
      window.removeEventListener("languagechange", handleLanguageChange as EventListener);
    };
  }, []);

  const labels = uiLabels[language];

  return (
    <footer className="bg-black border-t border-neutral-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm font-light">
          © {new Date().getFullYear()} Romantica Mexico
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <Link href="/terms" className="hover:text-orange-400 transition">
            {labels.terms}
          </Link>
          <Link href="/privacy" className="hover:text-orange-400 transition">
            {labels.privacy}
          </Link>
          <Link href="/contact" className="hover:text-orange-400 transition">
            {labels.contact}
          </Link>
        </div>
      </div>
    </footer>
  );
}
