"use client";

import Link from "next/link";

const destinations = [
  {
    name: "Cancun",
    href: "/packages/cancun",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "Iconic beachfront luxury with curated all-inclusive comfort and effortless concierge planning.",
  },
  {
    name: "Tulum",
    href: "/packages/tulum",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
    description: "Eco-luxury retreats blending wellness, design-forward stays, and serene coastal ambiance.",
  },
  {
    name: "Isla de Mujeres",
    href: "/packages/isla-de-mujeres",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    description: "A tranquil island escape with private-style moments, refined service, and turquoise waters.",
  },
  {
    name: "Playa del Carmen",
    href: "/packages/playa-del-carmen",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "Riviera energy paired with polished beach clubs, boutique elegance, and social luxury.",
  },
  {
    name: "Ixtapa",
    href: "/packages/ixtapa",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    description: "Understated Pacific sophistication with calm beachfront privacy and elevated quiet luxury.",
  },
  {
    name: "Cabo",
    href: "/packages/cabo",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    description: "Dramatic desert-meets-sea scenery, high-design resorts, and world-class coastal experiences.",
  },
  {
    name: "Puerto Vallarta",
    href: "/packages/puerto-vallarta",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    description: "Artful bayfront charm with cultural depth, gourmet dining, and curated seaside comfort.",
  },
  {
    name: "Cozumel",
    href: "/packages/cozumel",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    description: "Island reef luxury for travelers seeking marine beauty, relaxation, and concierge support.",
  },
] as const;

export default function Packages() {
  return (
    <main className="bg-black text-white px-6 py-14 md:px-10 md:py-20">
      <section className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-orange-300">Destinations</p>
          <h1 className="mt-4 text-4xl font-light md:text-6xl">Explore Our Destinations</h1>
          <p className="mt-4 text-base text-gray-300 md:text-lg">
            Curated experiences across Mexico&apos;s most sought-after escapes, designed with effortless luxury in every detail.
          </p>
        </div>

        <div className="mt-12 grid gap-7 md:mt-14 md:grid-cols-2 xl:grid-cols-4">
          {destinations.map((destination) => (
            <article
              key={destination.href}
              className="group rounded-[1.6rem] border border-white/10 bg-gradient-to-b from-slate-900/85 via-slate-950/85 to-black/90 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_56px_rgba(0,0,0,0.5)]"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={destination.image}
                  alt={`${destination.name} destination`}
                  className="h-44 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <h2 className="mt-5 text-2xl font-light">{destination.name}</h2>
              <p className="mt-3 min-h-[72px] text-sm leading-relaxed text-gray-300">{destination.description}</p>
              <Link
                href={destination.href}
                className="mt-5 inline-flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 px-6 py-3 text-sm font-semibold text-black transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25"
              >
                View Experience
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}