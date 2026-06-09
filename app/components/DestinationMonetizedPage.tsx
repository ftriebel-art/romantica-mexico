"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  buildBookingAffiliateUrl,
  destinationCatalog,
  type DestinationSlug,
} from "@/app/lib/destinationCatalog";

type ExperienceItem = {
  title: string;
  summary: string;
  bookingUrl: string;
  source: "viator" | "tripadvisor";
};

type ExperiencesResponse = {
  source: "viator" | "tripadvisor";
  experiences: ExperienceItem[];
};

type DestinationMonetizedPageProps = {
  slug: DestinationSlug;
};

export default function DestinationMonetizedPage({ slug }: DestinationMonetizedPageProps) {
  const destination = destinationCatalog[slug];
  const [experiences, setExperiences] = useState<ExperienceItem[]>(
    destination.fallbackExperiences.map((item) => ({ ...item, source: "tripadvisor" })),
  );
  const [experienceSource, setExperienceSource] = useState<"viator" | "tripadvisor">("tripadvisor");
  const [loadingExperiences, setLoadingExperiences] = useState(true);

  useEffect(() => {
    let active = true;

    const fetchExperiences = async () => {
      try {
        const response = await fetch(`/api/experiences?slug=${slug}`, { cache: "no-store" });
        if (!response.ok) {
          throw new Error("Failed to fetch experiences");
        }

        const payload = (await response.json()) as ExperiencesResponse;

        if (!active) return;

        if (Array.isArray(payload.experiences) && payload.experiences.length > 0) {
          setExperiences(payload.experiences);
          setExperienceSource(payload.source);
        }
      } catch {
        if (!active) return;
        setExperiences(destination.fallbackExperiences.map((item) => ({ ...item, source: "tripadvisor" })));
        setExperienceSource("tripadvisor");
      } finally {
        if (active) {
          setLoadingExperiences(false);
        }
      }
    };

    fetchExperiences();

    return () => {
      active = false;
    };
  }, [destination.fallbackExperiences, slug]);

  const bookingUrl = useMemo(
    () => buildBookingAffiliateUrl(destination.bookingQuery),
    [destination.bookingQuery],
  );

  return (
    <main className="bg-black text-white min-h-screen">
      <section className="relative h-[54vh] md:h-[66vh] overflow-hidden">
        <img src={destination.heroImage} alt={destination.heroTitle} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-300">{destination.heroTag}</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide">{destination.heroTitle}</h1>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl space-y-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-10 shadow-xl shadow-black/30">
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-black/40 p-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-orange-300">Overview</p>
              <p className="mt-3 text-lg leading-relaxed text-gray-200">{destination.overview}</p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Starting Price</p>
              <p className="mt-1 text-3xl font-semibold text-orange-300">{destination.startingPrice}</p>
              <a
                href={destination.reserveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-3xl bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 px-7 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25"
              >
                Reserve Your Spot
              </a>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-black/45 p-6">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-2xl font-light">Hotels</h2>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-orange-300/40 px-4 py-1.5 text-xs uppercase tracking-[0.16em] text-orange-200 transition hover:bg-orange-300/10"
                >
                  Booking.com
                </a>
              </div>

              <ul className="mt-5 space-y-3">
                {destination.hotels.map((hotel) => (
                  <li key={hotel.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-base font-medium text-white">{hotel.name}</p>
                    <p className="mt-1 text-sm text-gray-300">{hotel.description}</p>
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm text-orange-300 transition hover:text-orange-200"
                    >
                      Check rates on Booking.com
                    </a>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-white/10 bg-black/45 p-6">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-2xl font-light">Excursions</h2>
                <span className="text-xs uppercase tracking-[0.16em] text-gray-400">
                  {loadingExperiences ? "Loading" : experienceSource === "viator" ? "Powered by Viator" : "Tripadvisor fallback"}
                </span>
              </div>

              <ul className="mt-5 space-y-3">
                {experiences.map((experience) => (
                  <li key={experience.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-base font-medium text-white">{experience.title}</p>
                    <p className="mt-1 text-sm text-gray-300">{experience.summary}</p>
                    <a
                      href={experience.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm text-orange-300 transition hover:text-orange-200"
                    >
                      {experience.source === "viator" ? "Book on Viator" : "View on Tripadvisor"}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <article className="rounded-3xl border border-white/10 bg-black/45 p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-light">Local Recommendations</h2>
              <div className="flex gap-2">
                <a
                  href={destination.tripadvisorThingsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 px-4 py-1.5 text-xs uppercase tracking-[0.14em] text-gray-200 transition hover:border-orange-300/40 hover:text-orange-200"
                >
                  Things to do
                </a>
                <a
                  href={destination.tripadvisorHotelsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 px-4 py-1.5 text-xs uppercase tracking-[0.14em] text-gray-200 transition hover:border-orange-300/40 hover:text-orange-200"
                >
                  Hotels on Tripadvisor
                </a>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {destination.recommendations.map((recommendation) => (
                <div key={recommendation.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-base font-medium text-white">{recommendation.title}</p>
                  <p className="mt-1 text-sm text-gray-300">{recommendation.description}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="text-center">
            <Link href="/packages" className="text-sm text-gray-400 transition-colors hover:text-gray-300">
              ← Return to Packages
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
