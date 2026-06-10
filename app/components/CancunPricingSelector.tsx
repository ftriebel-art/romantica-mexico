"use client";

import { useState } from "react";

const cancunPricingTiers = {
  standard: {
    name: "Standard",
    price: "$2,299",
    details:
      "Stay at premium all-inclusive resorts with curated dining and concierge support.",
  },

  premium: {
    name: "Premium",
    price: "$3,499",
    details:
      "Oceanfront suites, upgraded experiences, luxury dining, and elevated concierge access.",
  },

  elite: {
    name: "Elite",
    price: "$5,999",
    details:
      "Ultra-luxury private experiences, premium suites, VIP transfers, and fully customized planning.",
  },
};

type CancunTier = keyof typeof cancunPricingTiers;

export default function CancunPricingSelector() {
  const [selectedCancunTier, setSelectedCancunTier] =
    useState<CancunTier>("standard");

  const selectedCancunTierData =
    cancunPricingTiers[selectedCancunTier];

  return (
    <section className="mt-12">
      <div className="flex flex-wrap gap-3">
        {(Object.keys(cancunPricingTiers) as CancunTier[]).map((tier) => (
          <button
            key={tier}
            onClick={() => setSelectedCancunTier(tier)}
            className={`rounded-full px-5 py-2 text-sm transition-all duration-300 ${
              selectedCancunTier === tier
                ? "bg-orange-400 text-black"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {cancunPricingTiers[tier].name}
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-3xl border border-white/10 bg-black/40 p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-orange-300">
          {selectedCancunTierData.name}
        </p>

        <h3 className="mt-3 text-4xl font-light">
          {selectedCancunTierData.price}
        </h3>

        <p className="mt-4 max-w-2xl text-gray-300">
          {selectedCancunTierData.details}
        </p>

        <button className="mt-6 rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 px-8 py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.02]">
          Reserve Experience
        </button>
      </div>
    </section>
  );
}