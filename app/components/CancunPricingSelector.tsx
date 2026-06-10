"use client";

import { useState } from "react";

const cancunPricingTiers = {
  standard: {
    name: "Standard",
    price: "$2,299 • 5 nights",
    details:
      "Stay at premium all-inclusive resorts such as Hyatt Vivid or Hilton Cancun.",
  },

  premium: {
    name: "Premium",
    price: "$2,799 • 5 nights",
    details:
      "Stay at elevated luxury resorts such as Secrets The Vine or Live Aqua.",
  },

  elite: {
    name: "Elite",
    price: "$3,499+ • 5 nights",
    details:
      "Stay at world-class luxury resorts such as Atelier Playa Mujeres or Le Blanc Spa Resort.",
  },
};

export default function CancunPricingSelector() {
  const [selectedCancunTier, setSelectedCancunTier] =
    useState("standard");

  const selectedCancunTierData =
    cancunPricingTiers[selectedCancunTier];

  return (
    <div className="mt-12 rounded-3xl border border-white/10 bg-black/40 p-6 text-center md:p-8">
      <div className="mb-4 grid gap-3 text-left">
        {Object.keys(cancunPricingTiers).map((tierKey) => {
          const tier = cancunPricingTiers[tierKey];

          const isSelected =
            selectedCancunTier === tierKey;

          return (
            <button
              key={tierKey}
              type="button"
              onClick={() =>
                setSelectedCancunTier(tierKey)
              }
              className={`rounded-2xl border px-4 py-3 text-left transition-all duration-500 ${
                isSelected
                  ? "border-orange-300/70 bg-orange-300/10 shadow-[0_0_0_1px_rgba(251,146,60,0.3)]"
                  : "border-white/15 bg-black/40 hover:border-orange-300/40 hover:bg-white/5"
              }`}
            >
              <p className="text-sm uppercase tracking-[0.14em] text-gray-300">
                {tier.name}
              </p>

              <p className="mt-1 text-lg font-medium text-white">
                {tier.price}
              </p>

              <p className="mt-1 text-sm text-gray-300">
                {tier.details}
              </p>
            </button>
          );
        })}
      </div>

      <p className="mb-2 text-3xl font-semibold text-orange-400 md:text-4xl">
        {selectedCancunTierData.price}
      </p>

      <p className="mb-6 text-sm text-gray-300">
        {selectedCancunTierData.details}
      </p>

      <a
        href="https://book.stripe.com/4gM6oI3zn6519EleQIgbm01"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full md:w-auto"
      >
        <button className="w-full rounded-3xl bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 px-10 py-4 font-semibold text-black transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25">
          Reserve Your Spot
        </button>
      </a>
    </div>
  );
}