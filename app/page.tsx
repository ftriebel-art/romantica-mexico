// app/page.tsx

import Image from "next/image";
import Link from "next/link";

import ItineraryForm from "./components/ItineraryForm";
import { destinations } from "@/app/lib/destinations";

const trustPoints = [
  "Concierge planning within 24 hours",
  "Custom luxury itinerary",
  "End-to-end support",
] as const;

const testimonials = [
  {
    quote:
      "Best trip we have ever taken. Every detail felt private and effortless.",
    author: "Sarah L., Los Angeles",
  },
  {
    quote:
      "From planning to departure, we felt completely taken care of.",
    author: "Emily S., Miami",
  },
] as const;

const featuredDestination = destinations.cancun;

export default function HomePage() {
  return (
    <main className="space-y-14 bg-black text-white md:space-y-20">
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden text-center">
        <div
          className="hero-bg-zoom absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=2000&q=80')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/75" />

        <div className="hero-fade-in relative z-10 max-w-5xl px-6 py-12 md:py-16">
          <h1 className="mb-5 text-4xl font-light tracking-wide md:text-6xl lg:text-7xl">
            Escape to Mexico&apos;s Most Exclusive Destinations
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-lg font-light text-gray-200 md:text-xl lg:text-2xl">
            Curated luxury travel experiences designed for unforgettable
            moments.
          </p>

          <a
            href="#destinations"
            className="inline-block rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 px-10 py-4 font-semibold text-black transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25"
          >
            Explore Experiences
          </a>

          <div className="mt-10 grid gap-3 rounded-[1.4rem] border border-white/15 bg-black/45 p-3 text-left md:grid-cols-3 md:gap-4 md:p-4">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
              >
                <p className="text-sm text-gray-100 md:text-[15px]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="destinations" className="px-6">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-300">
              Destinations
            </p>

            <h2 className="mt-3 text-3xl font-light md:text-4xl">
              Choose Your Escape
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {Object.values(destinations).map((item) => (
              <article
                key={item.slug}
                className="group rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-slate-900/85 via-slate-950/85 to-black/90 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_56px_rgba(0,0,0,0.5)]"
              >
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={item.heroImage}
                    alt={`${item.name} destination`}
                    width={800}
                    height={500}
                    className="h-48 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                <h3 className="mt-4 text-2xl font-light">
                  {item.name}
                </h3>

                <p className="mt-2 min-h-[72px] text-sm leading-relaxed text-gray-300">
                  {item.description}
                </p>

                <p className="mt-3 text-lg font-medium text-orange-300">
                  Luxury Escape
                </p>

                <Link
                  href={`/packages/${item.slug}`}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 px-6 py-3 text-sm font-semibold text-black transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25"
                >
                  View Experience
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]">
          <div className="grid md:grid-cols-[1.2fr_1fr]">
            <div className="relative min-h-[260px] md:min-h-[340px]">
              <Image
                src={featuredDestination.heroImage}
                alt={featuredDestination.title}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/20" />
            </div>

            <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
              <p className="text-sm uppercase tracking-[0.3em] text-orange-300">
                Featured Experience
              </p>

              <h2 className="mt-3 text-3xl font-light md:text-4xl">
                {featuredDestination.title}
              </h2>

              <p className="mt-4 leading-relaxed text-gray-300">
                {featuredDestination.intro}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-gray-200">
                {featuredDestination.included
                  .slice(0, 3)
                  .map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
              </ul>

              <p className="mt-6 text-3xl font-semibold text-orange-400">
                From $2,299
              </p>

              <Link
                href={`/packages/${featuredDestination.slug}`}
                className="mt-5 inline-flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 px-8 py-4 text-sm font-semibold text-black transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25"
              >
                Explore Destination
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-orange-300">
              Client Stories
            </p>

            <h2 className="mt-3 text-3xl font-light md:text-4xl">
              Trusted by Luxury Travelers
            </h2>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {testimonials.map((item) => (
              <article
                key={item.author}
                className="rounded-2xl border border-white/10 bg-black/45 p-5"
              >
                <p className="text-base italic leading-relaxed text-gray-200">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <p className="mt-3 text-sm text-gray-400">
                  — {item.author}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-orange-300/30 bg-gradient-to-br from-orange-500/10 via-black to-black p-7 shadow-[0_20px_50px_rgba(0,0,0,0.35)] md:p-10">
          <p className="text-center text-sm uppercase tracking-[0.32em] text-orange-300">
            Custom Itinerary
          </p>

          <h2 className="mt-3 text-center text-3xl font-light md:text-5xl">
            Plan Your Private Escape
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-300">
            Share your preferences and receive a bespoke luxury itinerary
            from our concierge team.
          </p>

          <div className="mt-8">
            <ItineraryForm />
          </div>
        </div>
      </section>
    </main>
  );
}