import Link from "next/link";
import ItineraryForm from "./components/ItineraryForm";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <section
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-300">
            Romantica Mexico
          </p>

          <h1 className="font-display text-5xl font-light leading-tight md:text-7xl">
            Escape to Mexico&apos;s Most Exclusive Destinations
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200 md:text-xl">
            Curated luxury travel experiences designed for unforgettable
            moments.
          </p>

          <div className="mt-10">
            <Link
              href="/packages/cancun"
              className="rounded-full bg-amber-400 px-8 py-4 text-sm font-medium text-black transition hover:bg-amber-300"
            >
              Explore Experiences
            </Link>
          </div>

          <div className="mt-16 grid gap-4 rounded-3xl border border-white/10 bg-black/30 p-6 backdrop-blur md:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-4">
              Concierge planning within 24 hours
            </div>

            <div className="rounded-2xl bg-white/5 p-4">
              Custom luxury itinerary
            </div>

            <div className="rounded-2xl bg-white/5 p-4">
              End-to-end support
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
            Destinations
          </p>

          <h2 className="mt-4 font-display text-5xl font-light">
            Choose Your Escape
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Link
            href="/packages/cancun"
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:bg-white/10"
          >
            <div
              className="h-80 bg-cover bg-center transition duration-500 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1552074284-5e88ef1aef18?q=80&w=1200')",
              }}
            />

            <div className="p-8">
              <h3 className="font-display text-3xl">Cancun</h3>

              <p className="mt-4 text-gray-300">
                Ultra-luxury beachfront resorts, yacht experiences, and private
                concierge travel.
              </p>
            </div>
          </Link>

          <Link
            href="/packages/tulum"
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:bg-white/10"
          >
            <div
              className="h-80 bg-cover bg-center transition duration-500 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1510097467424-192d713fd8b2?q=80&w=1200')",
              }}
            />

            <div className="p-8">
              <h3 className="font-display text-3xl">Tulum</h3>

              <p className="mt-4 text-gray-300">
                Wellness retreats, jungle villas, beach clubs, and elevated
                coastal luxury.
              </p>
            </div>
          </Link>

          <Link
            href="/packages/cabo"
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:bg-white/10"
          >
            <div
              className="h-80 bg-cover bg-center transition duration-500 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200')",
              }}
            />

            <div className="p-8">
              <h3 className="font-display text-3xl">Cabo</h3>

              <p className="mt-4 text-gray-300">
                Oceanfront villas, fine dining, desert luxury, and private
                excursions.
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
            Personalized Planning
          </p>

          <h2 className="mt-4 font-display text-5xl font-light">
            Plan Your Private Escape
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-300">
            Share your preferences and receive a bespoke luxury itinerary from
            our concierge team.
          </p>

          <div className="mt-10">
            <ItineraryForm />
          </div>
        </div>
      </section>
    </main>
  );
}