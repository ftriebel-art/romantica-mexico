import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import CancunPricingSelector from "@/app/components/CancunPricingSelector";

type DestinationPageProps = {
  destination: {
    slug: string;
    name: string;
    title: string;
    description: string;
    heroImage: string;
    intro: string;
    included: string[];
    itinerary: string[];
  };
};

export function generateDestinationMetadata(
  destination: DestinationPageProps["destination"]
): Metadata {
  return {
    title: `${destination.name} Luxury Escape | Romantica Mexico`,

    description: destination.description,

    openGraph: {
      title: `${destination.name} Luxury Escape | Romantica Mexico`,

      description: destination.description,

      images: [
        {
          url: destination.heroImage,
          width: 1200,
          height: 630,
          alt: destination.name,
        },
      ],
    },
  };
}

export default function DestinationPage({
  destination,
}: DestinationPageProps) {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative h-[60vh] overflow-hidden md:h-[72vh]">
        <Image
          src={destination.heroImage}
          alt={destination.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-300">
              All-Inclusive Luxury
            </p>

            <h1 className="text-4xl font-light tracking-wide md:text-6xl lg:text-7xl">
              {destination.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/30 md:p-12">
          <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
            {destination.intro}
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h2 className="mb-4 text-2xl font-light md:text-3xl">
                What’s Included
              </h2>

              <ul className="space-y-2 text-gray-300">
                {destination.included.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-light md:text-3xl">
                Sample Itinerary
              </h2>

              <div className="space-y-3 text-gray-300">
                {destination.itinerary.map((day, index) => (
                  <p key={day}>
                    <span className="text-orange-300">
                      Day {index + 1}:
                    </span>{" "}
                    {day}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <CancunPricingSelector />

          <div className="mt-8 text-center">
            <Link
              href="/packages"
              className="text-sm text-gray-400 transition-colors hover:text-gray-300"
            >
              ← Return to Packages
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}