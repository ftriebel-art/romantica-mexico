"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  LANGUAGE_STORAGE_KEY,
  languageOptions,
  type LanguageCode,
  uiLabels,
} from "./languageConfig";

type PackageDestination = {
  slug: string;
  name: string;
  image: string;
  description: string;
  badge?: {
    text: string;
    className: string;
  };
};

export default function Navbar() {
  const packageDestinations: PackageDestination[] = [
    {
      slug: "cancun",
      name: "Cancun",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      description: "Iconic beachfront luxury with world-class resorts",
      badge: {
        text: "Popular",
        className:
          "rounded-full border border-orange-300/30 bg-orange-300/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-orange-200",
      },
    },
    {
      slug: "tulum",
      name: "Tulum",
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
      description: "Eco-luxury retreats surrounded by jungle and sea",
      badge: {
        text: "Trending",
        className:
          "rounded-full border border-teal-300/30 bg-teal-300/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-teal-200",
      },
    },
    {
      slug: "isla-de-mujeres",
      name: "Isla de Mujeres",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
      description: "Tranquil island escape with crystal-clear waters",
    },
    {
      slug: "playa-del-carmen",
      name: "Playa del Carmen",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      description: "Vibrant beach town elegance with refined coastal dining",
    },
    {
      slug: "ixtapa",
      name: "Ixtapa",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      description: "Golden Pacific sunsets paired with laid-back sophistication",
    },
    {
      slug: "cabo",
      name: "Cabo",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
      description: "Dramatic desert-meets-ocean escapes and private villa luxury",
    },
    {
      slug: "puerto-vallarta",
      name: "Puerto Vallarta",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
      description: "Romantic bayfront charm with curated boutique stays",
    },
    {
      slug: "cozumel",
      name: "Cozumel",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
      description: "Island serenity with premium diving and turquoise coves",
    },
  ];

  const packagesTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const travelInfoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [openPackages, setOpenPackages] = useState(false);
  const [openTravelInfo, setOpenTravelInfo] = useState(false);
  const [hoveredPackageSlug, setHoveredPackageSlug] = useState("cancun");
  const [language, setLanguage] = useState<LanguageCode>(() => {
    if (typeof window === "undefined") {
      return "en";
    }
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as LanguageCode | null;
    return savedLanguage ?? "en";
  });

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value as LanguageCode;

    document.body.classList.add("language-switching");
    setLanguage(selectedLanguage);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, selectedLanguage);
    document.documentElement.lang = selectedLanguage;
    window.dispatchEvent(new CustomEvent("languagechange", { detail: selectedLanguage }));

    window.setTimeout(() => {
      document.body.classList.remove("language-switching");
    }, 280);
  };

  const labels = uiLabels[language];

  const navItemClass = "font-medium text-gray-200 hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 transition cursor-pointer pb-1";
  const dropdownPanelBase = "mt-2 w-full rounded-2xl border border-white/10 bg-black/90 p-3 shadow-xl shadow-black/40 backdrop-blur-sm transition-all duration-300 ease-out md:absolute md:left-0 md:top-full md:mt-3 md:min-w-[250px] md:w-auto";
  const dropdownItemClass = "block rounded-xl px-3 py-2 text-sm text-gray-200 border-t border-white/10 first:border-t-0 hover:bg-white/10 hover:text-orange-300 transition";
  const packagesPanelBase = "mt-2 w-full rounded-[1.65rem] border border-white/20 bg-black/40 p-4 shadow-[0_26px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04),0_0_36px_rgba(251,146,60,0.2)] backdrop-blur-2xl transition-all duration-500 ease-out md:absolute md:left-0 md:top-full md:mt-4 md:w-[780px] md:p-6";
  const isDesktop = () => typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches;
  const hoveredPackage = packageDestinations.find((destination) => destination.slug === hoveredPackageSlug) ?? packageDestinations[0];

  const clearTimer = (timerRef: { current: ReturnType<typeof setTimeout> | null }) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const openPackagesMenu = () => {
    if (!isDesktop()) return;
    clearTimer(packagesTimerRef);
    packagesTimerRef.current = setTimeout(() => {
      setOpenPackages(true);
      setHoveredPackageSlug("cancun");
      setOpenTravelInfo(false);
    }, 150);
  };

  const closePackagesMenu = () => {
    if (!isDesktop()) return;
    clearTimer(packagesTimerRef);
    packagesTimerRef.current = setTimeout(() => {
      setOpenPackages(false);
    }, 150);
  };

  const openTravelInfoMenu = () => {
    if (!isDesktop()) return;
    clearTimer(travelInfoTimerRef);
    travelInfoTimerRef.current = setTimeout(() => {
      setOpenTravelInfo(true);
      setOpenPackages(false);
    }, 150);
  };

  const closeTravelInfoMenu = () => {
    if (!isDesktop()) return;
    clearTimer(travelInfoTimerRef);
    travelInfoTimerRef.current = setTimeout(() => {
      setOpenTravelInfo(false);
    }, 150);
  };

  const closeMenus = () => {
    setOpenPackages(false);
    setOpenTravelInfo(false);
  };

  useEffect(() => {
    return () => {
      clearTimer(packagesTimerRef);
      clearTimer(travelInfoTimerRef);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-sm border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/">
          <div className="text-2xl font-semibold tracking-wide cursor-pointer hover:text-orange-500 transition">
            Romantica Mexico
          </div>
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-5 md:gap-8">
          <div
            className="relative w-full md:w-auto"
            onMouseEnter={openPackagesMenu}
            onMouseLeave={closePackagesMenu}
          >
            <div className="inline-flex items-center gap-2 pb-1">
              <Link href="/packages" className={navItemClass}>
                <span className="inline-flex items-center gap-1">
                  {labels.packages}
                  <span className="text-[10px] text-gray-400">↘</span>
                </span>
              </Link>
              <button
                type="button"
                aria-label="Open packages menu"
                onClick={() => {
                  setOpenPackages((value) => !value);
                  setHoveredPackageSlug("cancun");
                  setOpenTravelInfo(false);
                }}
                className="text-xs text-gray-400 hover:text-orange-300 transition"
              >
                ▾
              </button>
            </div>
            <div
              className={`${packagesPanelBase} ${openPackages ? "opacity-100 translate-y-0 scale-100 pointer-events-auto max-h-[760px]" : "opacity-0 -translate-y-3 scale-[0.985] pointer-events-none max-h-0 overflow-hidden md:max-h-[760px]"}`}
            >
              <div className="md:grid md:grid-cols-[1fr_1.08fr] md:gap-6 md:items-stretch">
                <div className="md:pr-3 md:border-r md:border-white/15">
                  <p className="px-4 pb-3 text-xs uppercase tracking-[0.24em] text-orange-200/90">Explore Destinations</p>
                  {packageDestinations.map((destination) => (
                    <Link
                      key={destination.slug}
                      href={`/packages/${destination.slug}`}
                      onClick={closeMenus}
                      onMouseEnter={() => setHoveredPackageSlug(destination.slug)}
                      onFocus={() => setHoveredPackageSlug(destination.slug)}
                      className={`group block rounded-2xl px-4 py-4 text-base text-gray-100 border-t border-white/10 first:border-t-0 transition-all duration-500 ${hoveredPackageSlug === destination.slug ? "translate-x-1.5 bg-white/10 text-orange-200 shadow-[inset_0_0_0_1px_rgba(251,146,60,0.25)]" : "hover:translate-x-1 hover:bg-white/6 hover:text-orange-100"}`}
                    >
                      <span className="inline-flex items-center gap-2.5">
                        {destination.name}
                        {destination.badge ? <span className={destination.badge.className}>{destination.badge.text}</span> : null}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="hidden md:block rounded-2xl border border-white/15 bg-white/[0.05] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      key={hoveredPackage.slug}
                      src={hoveredPackage.image}
                      alt={`${hoveredPackage.name} preview`}
                      className="preview-shift h-52 w-full object-cover transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="text-sm uppercase tracking-[0.18em] text-orange-200/90">Featured Escape</p>
                      <p className="mt-1 text-xl font-medium text-white">{hoveredPackage.name}</p>
                    </div>
                  </div>
                  <p className="mt-4 px-1 text-sm text-gray-200 leading-relaxed">{hoveredPackage.description}</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative w-full md:w-auto"
            onMouseEnter={openTravelInfoMenu}
            onMouseLeave={closeTravelInfoMenu}
          >
            <button
              type="button"
              onClick={() => {
                setOpenTravelInfo((value) => !value);
                setOpenPackages(false);
              }}
              className={`${navItemClass} inline-flex items-center gap-2`}
            >
              {labels.travelInfo}
              <span className="text-xs text-gray-400">▾</span>
            </button>
            <div
              className={`${dropdownPanelBase} ${openTravelInfo ? "opacity-100 translate-y-0 pointer-events-auto max-h-44" : "opacity-0 -translate-y-2 pointer-events-none max-h-0 overflow-hidden md:max-h-44"}`}
            >
              <Link href="/flights" onClick={closeMenus} className={dropdownItemClass}>{labels.flights}</Link>
              <Link href="/hotels" onClick={closeMenus} className={dropdownItemClass}>{labels.hotels}</Link>
            </div>
          </div>
          <Link href="/terms">
            <div className="text-sm font-medium text-gray-400 hover:text-orange-400 border-b-2 border-transparent hover:border-orange-400 transition cursor-pointer pb-1">
              {labels.terms}
            </div>
          </Link>
          <Link href="/privacy">
            <div className="text-sm font-medium text-gray-400 hover:text-orange-400 border-b-2 border-transparent hover:border-orange-400 transition cursor-pointer pb-1">
              {labels.privacy}
            </div>
          </Link>
          <Link href="/contact">
            <div className="text-sm font-medium text-gray-200 hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 transition cursor-pointer pb-1">
              {labels.contact}
            </div>
          </Link>

          <div className="relative">
            <select
              value={language}
              onChange={handleLanguageChange}
              className="appearance-none rounded-full border border-white/15 bg-black/50 px-4 py-2 text-sm text-gray-200 outline-none transition hover:border-orange-400 focus:border-orange-400"
              aria-label="Language selector"
            >
              {languageOptions.map((option) => (
                <option key={option.code} value={option.code}>
                  {`${option.flag} ${option.label}`}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
