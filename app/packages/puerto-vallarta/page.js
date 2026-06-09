"use client";

import Link from "next/link";
import { useState } from "react";

export default function PuertoVallartaPackagePage() {
  const vallartaPricingTiers = {
    standard: {
      name: "Standard",
      price: "$2,399 • 5 nights",
      details: "Stay at premium all-inclusive resorts such as Fiesta Americana Puerto Vallarta or Velas Vallarta.",
    },
    premium: {
      name: "Premium",
      price: "$2,899 • 5 nights",
      details: "Stay at elevated luxury resorts such as Marriott Puerto Vallarta Resort or Villa Premiere.",
    },
    elite: {
      name: "Elite",
      price: "$3,599+ • 5 nights",
      details: "Stay at world-class luxury resorts such as Grand Velas Riviera Nayarit or One&Only Mandarina style properties.",
    },
  };

  const [selectedVallartaTier, setSelectedVallartaTier] = useState("standard");
  const selectedVallartaTierData = vallartaPricingTiers[selectedVallartaTier];

  return (
    <main className="bg-black text-white min-h-screen">
      <section className="relative h-[60vh] md:h-[72vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519046904884-53103b34b206"
          alt="Puerto Vallarta Sunset Bay Retreat"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-300">Coastal Art & Culture</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide">Puerto Vallarta Sunset Bay Retreat 🌴</h1>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12 shadow-xl shadow-black/30">
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            Puerto Vallarta offers a rare blend of artistic culture and Pacific coastline elegance. Over five nights,
            you move between gallery-lined streets, chef-driven dining, and serene bayfront relaxation. It is designed
            for travelers who want meaningful local character without sacrificing refined comfort.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-4">Imagine Your Experience</h2>
              <p className="text-gray-300 leading-relaxed">
                Spend your morning by the water, your afternoon in hidden courtyards and local studios, and your
                evenings in the romantic zone where live music, ocean breezes, and candlelit terraces set the tone.
                The experience feels both culturally alive and effortlessly coastal.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-4">What’s Included</h2>
              <ul className="space-y-2 text-gray-300">
                <li>✓ 5 nights at a luxury bayfront property</li>
                <li>✓ Private airport and hotel transfers</li>
                <li>✓ Daily breakfast and curated dinner experiences</li>
                <li>✓ Guided cultural and waterfront exploration</li>
                <li>✓ Concierge planning and in-destination support</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-4">Sample Itinerary</h2>
              <div className="space-y-3 text-gray-300">
                <p><span className="text-orange-300">Day 1:</span> Arrival, welcome drink, and bayfront dinner.</p>
                <p><span className="text-orange-300">Day 2:</span> Leisure beach day and sunset boardwalk stroll.</p>
                <p><span className="text-orange-300">Day 3:</span> Cultural district tour and chef-led tasting.</p>
                <p><span className="text-orange-300">Day 4:</span> Wellness morning and private evening transfer.</p>
                <p><span className="text-orange-300">Day 5:</span> Shopping, relaxation, and farewell dining.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-black/40 p-6 md:p-8 text-center">
            <div className="mb-4 grid gap-3 text-left">
              {Object.keys(vallartaPricingTiers).map((tierKey) => {
                const tier = vallartaPricingTiers[tierKey];
                const isSelected = selectedVallartaTier === tierKey;

                return (
                  <button
                    key={tierKey}
                    type="button"
                    onClick={() => setSelectedVallartaTier(tierKey)}
                    className={`rounded-2xl border px-4 py-3 text-left transition-all duration-500 ${isSelected ? "border-orange-300/70 bg-orange-300/10 shadow-[0_0_0_1px_rgba(251,146,60,0.3)]" : "border-white/15 bg-black/40 hover:border-orange-300/40 hover:bg-white/5"}`}
                  >
                    <p className="text-sm uppercase tracking-[0.14em] text-gray-300">{tier.name}</p>
                    <p className="mt-1 text-lg font-medium text-white">{tier.price}</p>
                    <p className="mt-1 text-sm text-gray-300">{tier.details}</p>
                  </button>
                );
              })}
            </div>
            <p className="text-3xl md:text-4xl font-semibold text-orange-400 mb-2">{selectedVallartaTierData.price}</p>
            <p className="mb-6 text-sm text-gray-300">{selectedVallartaTierData.details}</p>
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
