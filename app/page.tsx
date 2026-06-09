"use client";

import Link from "next/link";
import { useState } from "react";

const destinations = [
  {
    name: "Cancun",
    href: "/packages/cancun",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    tagline: "Iconic beachfront luxury and effortless all-inclusive elegance.",
    startingPrice: "From $2,299",
  },
  {
    name: "Tulum",
    href: "/packages/tulum",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
    tagline: "Eco-luxury retreats with wellness-first, design-forward stays.",
    startingPrice: "From $2,499",
  },
  {
    name: "Isla de Mujeres",
    href: "/packages/isla-de-mujeres",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    tagline: "Private island calm with turquoise waters and refined service.",
    startingPrice: "From $2,199",
  },
] as const;

const trustPoints = [
  "Concierge planning within 24 hours",
  "Custom luxury itinerary",
  "End-to-end support",
] as const;

const testimonials = [
  {
    quote: "Best trip we have ever taken. Every detail felt private and effortless.",
    author: "Sarah L., Los Angeles",
  },
  {
    quote: "From planning to departure, we felt completely taken care of.",
    author: "Emily S., Miami",
  },
] as const;

export default function HomePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitted(false);

    console.log("Custom itinerary request:", { name, email, destination });

    window.setTimeout(() => {
      setName("");
      setEmail("");
      setDestination("");
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <main className="bg-black text-white space-y-14 md:space-y-20">
      <section className="relative min-h-[85vh] overflow-hidden flex items-center justify-center text-center">
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
        <div className="hero-fade-in relative z-10 px-6 max-w-5xl py-12 md:py-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide mb-5">
            Escape to Mexico&apos;s Most Exclusive Destinations
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-200 mb-8 max-w-3xl mx-auto">
            Curated luxury travel experiences designed for unforgettable moments.
          </p>
          <a href="#destinations" className="inline-block bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 text-black font-semibold rounded-full px-10 py-4 transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25">
            Explore Experiences
          </a>

          <div className="mt-10 grid gap-3 rounded-[1.4rem] border border-white/15 bg-black/45 p-3 text-left md:grid-cols-3 md:gap-4 md:p-4">
            {trustPoints.map((point) => (
              <div key={point} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <p className="text-sm md:text-[15px] text-gray-100">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="destinations" className="px-6">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Destinations</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-light">Choose Your Escape</h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {destinations.map((item) => (
              <article
                key={item.href}
                className="group rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-slate-900/85 via-slate-950/85 to-black/90 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_56px_rgba(0,0,0,0.5)]"
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={`${item.name} destination`}
                    className="h-40 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="mt-4 text-2xl font-light">{item.name}</h3>
                <p className="mt-2 text-sm text-gray-300 min-h-[44px]">{item.tagline}</p>
                <p className="mt-3 text-lg font-medium text-orange-300">{item.startingPrice}</p>
                <Link
                  href={item.href}
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
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                alt="Cancun featured experience"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/20" />
            </div>

            <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
              <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Featured Experience</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-light">Cancun All-Inclusive Escape</h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Iconic beachfront luxury with concierge-level planning and seamless service from arrival to departure.
                Perfect for travelers who want premium comfort without decision fatigue.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-gray-200">
                <li>✓ 5-star beachfront resort with ocean views</li>
                <li>✓ Private airport transfer and priority concierge support</li>
                <li>✓ Gourmet dining and curated ocean experiences</li>
              </ul>

              <p className="mt-6 text-3xl font-semibold text-orange-400">From $2,299</p>
              <a
                href="https://book.stripe.com/4gM6oI3zn6519EleQIgbm01"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 px-8 py-4 text-sm font-semibold text-black transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25"
              >
                Reserve Your Spot
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-orange-300">Client Stories</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-light">Trusted by Luxury Travelers</h2>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {testimonials.map((item) => (
              <article key={item.author} className="rounded-2xl border border-white/10 bg-black/45 p-5">
                <p className="text-base text-gray-200 italic leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-3 text-sm text-gray-400">- {item.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-orange-300/30 bg-gradient-to-br from-orange-500/10 via-black to-black p-7 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
          <p className="text-sm uppercase tracking-[0.32em] text-orange-300 text-center">Custom Itinerary</p>
          <h2 className="mt-3 text-center text-3xl md:text-5xl font-light">Plan Your Private Escape</h2>
          <p className="mt-4 text-center text-gray-300 max-w-2xl mx-auto">
            Share your preferences and receive a bespoke luxury itinerary from our concierge team.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4 text-left md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm text-gray-300">Name</span>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                className="w-full rounded-3xl border border-neutral-700 bg-black/70 px-4 py-3 text-white placeholder:text-gray-500 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm text-gray-300">Email</span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-3xl border border-neutral-700 bg-black/70 px-4 py-3 text-white placeholder:text-gray-500 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
              />
            </label>

            <label className="md:col-span-2 space-y-2">
              <span className="text-sm text-gray-300">Destination Interest</span>
              <input
                type="text"
                name="destination"
                value={destination}
                onChange={(event) => setDestination(event.target.value)}
                placeholder="Cancun, Tulum, Isla de Mujeres"
                className="w-full rounded-3xl border border-neutral-700 bg-black/70 px-4 py-3 text-white placeholder:text-gray-500 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
              />
            </label>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={submitting}
                className="btn-gold w-full rounded-3xl px-8 py-4 font-semibold disabled:cursor-not-allowed disabled:opacity-80"
              >
                {submitting ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                    Sending request...
                  </span>
                ) : "Request Custom Itinerary"}
              </button>
            </div>

            <p className="md:col-span-2 text-center text-sm text-gray-400">
              We respect your privacy. No spam. Concierge response within 24 hours.
            </p>

            {submitted ? (
              <div className="md:col-span-2 rounded-3xl border border-green-500/20 bg-green-500/10 p-4 text-center text-green-200">
                Your concierge request has been received
              </div>
            ) : null}
          </form>
        </div>
      </section>
    </main>
  );
}
