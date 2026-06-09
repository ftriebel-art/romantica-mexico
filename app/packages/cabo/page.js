"use client";

import Link from "next/link";
import { useState } from "react";

export default function CaboPackagePage() {
  const caboPricingTiers = {
    standard: {
      name: "Standard",
      price: "$2,699 • 5 nights",
      details: "Stay at premium all-inclusive resorts such as Hyatt Ziva Los Cabos or Riu Palace Cabo San Lucas.",
    },
    premium: {
      name: "Premium",
      price: "$3,199 • 5 nights",
      details: "Stay at elevated luxury resorts such as Secrets Puerto Los Cabos or Marquis Los Cabos.",
    },
    elite: {
      name: "Elite",
      price: "$3,899+ • 5 nights",
      details: "Stay at world-class luxury resorts such as Waldorf Astoria Los Cabos Pedregal or One&Only Palmilla.",
    },
  };

  const [selectedCaboTier, setSelectedCaboTier] = useState("standard");
  const selectedCaboTierData = caboPricingTiers[selectedCaboTier];

  return (
    <main className="bg-black text-white min-h-screen">
      <section className="relative h-[60vh] md:h-[72vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519046904884-53103b34b206"
          alt="Cabo Private Coastline Experience"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-300">Desert Meets Sea</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide">Cabo Private Coastline Experience 🌊</h1>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12 shadow-xl shadow-black/30">
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            Cabo is pure contrast in its most luxurious form, where desert cliffs plunge into sapphire water. This
            five-night experience is designed around dramatic scenery, private access, and high-design hospitality,
            giving you a bolder, cinematic version of a coastal luxury escape.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-4">Imagine Your Experience</h2>
              <p className="text-gray-300 leading-relaxed">
                Imagine breakfast above the Sea of Cortez, an afternoon yacht line skimming past rocky arches, and
                sunset dinners carved into the desert hillside with firelight and ocean wind. The atmosphere is
                dramatic, sensual, and unapologetically premium from start to finish.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-4">What’s Included</h2>
              <ul className="space-y-2 text-gray-300">
                <li>✓ 5 nights at a luxury oceanfront resort</li>
                <li>✓ Private airport transfers and welcome service</li>
                <li>✓ Daily breakfast and premium dinner reservations</li>
                <li>✓ Private yacht or coastal cruise experience</li>
                <li>✓ Dedicated concierge support throughout</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-4">Sample Itinerary</h2>
              <div className="space-y-3 text-gray-300">
                <p><span className="text-orange-300">Day 1:</span> Arrival and oceanfront welcome dinner.</p>
                <p><span className="text-orange-300">Day 2:</span> Beach club day and marina sunset walk.</p>
                <p><span className="text-orange-300">Day 3:</span> Private cruise and waterfront tasting lunch.</p>
                <p><span className="text-orange-300">Day 4:</span> Spa and wellness reset, evening rooftop dining.</p>
                <p><span className="text-orange-300">Day 5:</span> Leisure, shopping, and farewell experience.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-black/40 p-6 md:p-8 text-center">
            <div className="mb-4 grid gap-3 text-left">
              {Object.keys(caboPricingTiers).map((tierKey) => {
                const tier = caboPricingTiers[tierKey];
                const isSelected = selectedCaboTier === tierKey;

                return (
                  <button
                    key={tierKey}
                    type="button"
                    onClick={() => setSelectedCaboTier(tierKey)}
                    className={`rounded-2xl border px-4 py-3 text-left transition-all duration-500 ${isSelected ? "border-orange-300/70 bg-orange-300/10 shadow-[0_0_0_1px_rgba(251,146,60,0.3)]" : "border-white/15 bg-black/40 hover:border-orange-300/40 hover:bg-white/5"}`}
                  >
                    <p className="text-sm uppercase tracking-[0.14em] text-gray-300">{tier.name}</p>
                    <p className="mt-1 text-lg font-medium text-white">{tier.price}</p>
                    <p className="mt-1 text-sm text-gray-300">{tier.details}</p>
                  </button>
                );
              })}
            </div>
            <p className="text-3xl md:text-4xl font-semibold text-orange-400 mb-2">{selectedCaboTierData.price}</p>
            <p className="mb-6 text-sm text-gray-300">{selectedCaboTierData.details}</p>
            <a href="https://example.com/stripe-placeholder" target="_blank" rel="noopener noreferrer" className="inline-block w-full md:w-auto">
              <button className="w-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 text-black font-semibold rounded-3xl px-10 py-4 transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25">
                Reserve Your Spot
              </button>
            </a>
          </div>

          <div className="mt-8 text-center">
            <Link href="/packages" className="text-sm text-gray-400 hover:text-gray-300 transition-colors">← Return to Packages</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
