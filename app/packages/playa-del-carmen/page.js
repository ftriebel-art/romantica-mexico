"use client";

import Link from "next/link";
import { useState } from "react";

export default function PlayaDelCarmenPackagePage() {
  const playaPricingTiers = {
    standard: {
      name: "Standard",
      price: "$2,299 • 5 nights",
      details: "Stay at premium all-inclusive resorts such as The Reef 28 or Mahekal Beach Resort.",
    },
    premium: {
      name: "Premium",
      price: "$2,799 • 5 nights",
      details: "Stay at elevated luxury resorts such as Hilton Playa del Carmen or Paradisus La Perla.",
    },
    elite: {
      name: "Elite",
      price: "$3,499+ • 5 nights",
      details: "Stay at world-class luxury resorts such as Rosewood Mayakoba style properties.",
    },
  };

  const [selectedPlayaTier, setSelectedPlayaTier] = useState("standard");
  const selectedPlayaTierData = playaPricingTiers[selectedPlayaTier];

  return (
    <main className="bg-black text-white min-h-screen">
      <section className="relative h-[60vh] md:h-[72vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Playa del Carmen Riviera Luxe Retreat"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-300">Riviera Maya Elegance</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide">Playa del Carmen Riviera Luxe Retreat ✨</h1>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12 shadow-xl shadow-black/30">
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            Playa del Carmen is built for travelers who love movement, style, and beachfront glamour. Spend your days
            between chic beach clubs and design-forward resorts, then step straight into the energy of Quinta Avenida.
            This itinerary delivers walkable luxury with a social rhythm that feels effortless and elevated.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-4">Imagine Your Experience</h2>
              <p className="text-gray-300 leading-relaxed">
                Start with espresso by the sea, claim your cabana at a scene-setting beach club, and drift into dusk
                with rooftop DJ sets, mezcal pairings, and late-night promenades under warm coastal lights. It feels
                polished yet playful, with concierge service quietly handling every reservation and transfer.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-4">What’s Included</h2>
              <ul className="space-y-2 text-gray-300">
                <li>✓ 5 nights at a premium beachfront resort</li>
                <li>✓ Private airport and hotel transfers</li>
                <li>✓ Daily breakfast and curated dining reservations</li>
                <li>✓ Beach club day and concierge arrangements</li>
                <li>✓ On-trip support and destination guidance</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-4">Sample Itinerary</h2>
              <div className="space-y-3 text-gray-300">
                <p><span className="text-orange-300">Day 1:</span> Arrival, welcome amenities, sunset dinner.</p>
                <p><span className="text-orange-300">Day 2:</span> Beach club relaxation and rooftop cocktails.</p>
                <p><span className="text-orange-300">Day 3:</span> Cenote excursion and local culinary experience.</p>
                <p><span className="text-orange-300">Day 4:</span> Spa treatments and private evening transfer.</p>
                <p><span className="text-orange-300">Day 5:</span> Leisure shopping and farewell dinner.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-black/40 p-6 md:p-8 text-center">
            <div className="mb-4 grid gap-3 text-left">
              {Object.keys(playaPricingTiers).map((tierKey) => {
                const tier = playaPricingTiers[tierKey];
                const isSelected = selectedPlayaTier === tierKey;

                return (
                  <button
                    key={tierKey}
                    type="button"
                    onClick={() => setSelectedPlayaTier(tierKey)}
                    className={`rounded-2xl border px-4 py-3 text-left transition-all duration-500 ${isSelected ? "border-orange-300/70 bg-orange-300/10 shadow-[0_0_0_1px_rgba(251,146,60,0.3)]" : "border-white/15 bg-black/40 hover:border-orange-300/40 hover:bg-white/5"}`}
                  >
                    <p className="text-sm uppercase tracking-[0.14em] text-gray-300">{tier.name}</p>
                    <p className="mt-1 text-lg font-medium text-white">{tier.price}</p>
                    <p className="mt-1 text-sm text-gray-300">{tier.details}</p>
                  </button>
                );
              })}
            </div>
            <p className="text-3xl md:text-4xl font-semibold text-orange-400 mb-2">{selectedPlayaTierData.price}</p>
            <p className="mb-6 text-sm text-gray-300">{selectedPlayaTierData.details}</p>
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
