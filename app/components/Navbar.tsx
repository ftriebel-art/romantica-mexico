// app/components/Navbar.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { destinations } from "@/app/lib/destinations";

export default function Navbar() {
  const [isPackagesOpen, setIsPackagesOpen] =
    useState(false);

  const destinationList =
    Object.values(destinations);

  const [hoveredPackageSlug, setHoveredPackageSlug] =
    useState(destinationList[0]?.slug ?? "");

  const hoveredPackage =
    destinationList.find(
      (destination) =>
        destination.slug === hoveredPackageSlug
    ) ?? destinationList[0];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-light tracking-wide text-white"
        >
          Romantica Mexico
        </Link>

        <nav className="flex items-center gap-8">
          <div className="relative">
            <button
              onClick={() =>
                setIsPackagesOpen(
                  (previous) => !previous
                )
              }
              className="flex items-center gap-2 text-sm text-white transition-colors hover:text-orange-300"
            >
              Packages
              <span className="text-xs">▾</span>
            </button>

            {isPackagesOpen ? (
              <div className="absolute left-0 top-12 h-[70vh] w-[760px] overflow-hidden rounded-[2rem] border border-white/10 bg-black/95 shadow-2xl shadow-black/50">
                <div className="grid h-full grid-cols-[320px_1fr]">
                  <div className="overflow-y-auto border-r border-white/10 p-4">
                    <p className="mb-4 text-xs uppercase tracking-[0.3em] text-orange-300">
                      Explore Destinations
                    </p>

                    <div className="grid gap-2">
                      {destinationList.map(
                        (destination) => (
                          <Link
                            key={destination.slug}
                            href={`/packages/${destination.slug}`}
                            onMouseEnter={() =>
                              setHoveredPackageSlug(
                                destination.slug
                              )
                            }
                            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition-all duration-300 hover:border-orange-300/30 hover:bg-white/[0.06]"
                          >
                            <p className="font-medium text-white">
                              {destination.name}
                            </p>

                            <p className="mt-1 text-xs text-gray-400">
                              Luxury Escape
                            </p>
                          </Link>
                        )
                      )}
                    </div>
                  </div>

                  <div className="relative hidden overflow-hidden md:flex">
                    <Image
                      src={hoveredPackage.heroImage}
                      alt={hoveredPackage.name}
                      fill
                      sizes="400px"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

                    <div className="relative z-10 mt-auto p-6">
                      <p className="text-xs uppercase tracking-[0.3em] text-orange-300">
                        Featured Escape
                      </p>

                      <h3 className="mt-3 text-3xl font-light text-white">
                        {hoveredPackage.name}
                      </h3>

                      <p className="mt-4 text-sm leading-relaxed text-gray-300">
                        Luxury travel experiences curated for unforgettable moments.
                      </p>

                      <Link
                        href={`/packages/${hoveredPackage.slug}`}
                        className="mt-6 inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
                      >
                        Explore Destination
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <Link
            href="/flights"
            className="text-sm text-white transition-colors hover:text-orange-300"
          >
            Flights
          </Link>

          <Link
            href="/hotels"
            className="text-sm text-white transition-colors hover:text-orange-300"
          >
            Hotels
          </Link>

          <Link
            href="/contact"
            className="text-sm text-white transition-colors hover:text-orange-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}