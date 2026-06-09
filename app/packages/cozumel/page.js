"use client";

import Link from "next/link";
import { useState } from "react";

export default function CozumelPackagePage() {
  const cozumelPricingTiers = {
    standard: {
      name: "Standard",
      price: "$1,899 • 5 nights",
      details: "Stay at premium all-inclusive resorts such as The Westin Cozumel or Cozumel Palace.",
    },
    premium: {
      name: "Premium",
      price: "$2,399 • 5 nights",
      details: "Stay at elevated luxury resorts such as InterContinental Presidente or Secrets Aura style suites.",
    },
    elite: {
      name: "Elite",
      price: "$3,099+ • 5 nights",
      details: "Stay at world-class luxury resorts such as private all-suite island retreats with premium concierge service.",
    },
  };

  const [selectedCozumelTier, setSelectedCozumelTier] = useState("standard");
  const selectedCozumelTierData = cozumelPricingTiers[selectedCozumelTier];

  return (
    <main className="bg-black text-white min-h-screen">
      <section className="relative h-[60vh] md:h-[72vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519046904884-53103b34b206"
          alt="Cozumel Coral Coast Escape"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-300">Island Reef Luxury</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide">Cozumel Coral Coast Escape 🐚</h1>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12 shadow-xl shadow-black/30">
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            Cozumel is an island escape shaped by reefs, clear visibility, and a deep connection to the sea. This
            five-night stay is crafted for guests who want diving and marine adventure paired with elevated comfort,
            quiet beaches, and an intentionally unhurried island rhythm.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-4">Imagine Your Experience</h2>
              <p className="text-gray-300 leading-relaxed">
                Start your day with reef-bound waters in electric shades of blue, surface to long seaside lunches, and
                finish with golden-hour calm from your terrace as boats return to harbor. It is immersive, restorative,
                and perfect for travelers who feel most alive near the water.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-4">What’s Included</h2>
              <ul className="space-y-2 text-gray-300">
                <li>✓ 5 nights at an upscale island beachfront resort</li>
                <li>✓ Airport and ferry transfer coordination</li>
                <li>✓ Daily breakfast and select premium dining</li>
                <li>✓ Reef or snorkeling excursion</li>
                <li>✓ Dedicated concierge recommendations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-4">Sample Itinerary</h2>
              <div className="space-y-3 text-gray-300">
                <p><span className="text-orange-300">Day 1:</span> Arrival and welcome island dinner.</p>
                <p><span className="text-orange-300">Day 2:</span> Beachfront relaxation and spa session.</p>
                <p><span className="text-orange-300">Day 3:</span> Reef adventure and curated lunch outing.</p>
                <p><span className="text-orange-300">Day 4:</span> Wellness morning and private leisure time.</p>
                <p><span className="text-orange-300">Day 5:</span> Free day, shopping, and farewell dinner.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-black/40 p-6 md:p-8 text-center">
            <div className="mb-4 grid gap-3 text-left">
              {Object.keys(cozumelPricingTiers).map((tierKey) => {
                const tier = cozumelPricingTiers[tierKey];
                const isSelected = selectedCozumelTier === tierKey;

                return (
                  <button
                    key={tierKey}
                    type="button"
                    onClick={() => setSelectedCozumelTier(tierKey)}
                    className={`rounded-2xl border px-4 py-3 text-left transition-all duration-500 ${isSelected ? "border-orange-300/70 bg-orange-300/10 shadow-[0_0_0_1px_rgba(251,146,60,0.3)]" : "border-white/15 bg-black/40 hover:border-orange-300/40 hover:bg-white/5"}`}
                  >
                    <p className="text-sm uppercase tracking-[0.14em] text-gray-300">{tier.name}</p>
                    <p className="mt-1 text-lg font-medium text-white">{tier.price}</p>
                    <p className="mt-1 text-sm text-gray-300">{tier.details}</p>
                  </button>
                );
              })}
            </div>
            <p className="text-3xl md:text-4xl font-semibold text-orange-400 mb-2">{selectedCozumelTierData.price}</p>
            <p className="mb-6 text-sm text-gray-300">{selectedCozumelTierData.details}</p>
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
