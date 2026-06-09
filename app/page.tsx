```tsx
"use client";

import Link from "next/link";

const destinations = [
  {
    name: "Cancun",
    href: "/packages/cancun",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description:
      "Iconic beachfront luxury with curated all-inclusive comfort and effortless concierge planning.",
  },
  {
    name: "Tulum",
    href: "/packages/tulum",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
    description:
      "Eco-luxury retreats blending wellness, design-forward stays, and serene coastal ambiance.",
  },
  {
    name: "Isla de Mujeres",
    href: "/packages/isla-de-mujeres",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    description:
      "A tranquil island escape with private-style moments, refined service, and turquoise waters.",
  },
  {
    name: "Playa del Carmen",
    href: "/packages/playa-del-carmen",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description:
      "Riviera energy paired with polished beach clubs, boutique elegance, and social luxury.",
  },
  {
    name: "Ixtapa",
    href: "/packages/ixtapa",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    description:
      "Understated Pacific sophistication with calm beachfront privacy and elevated quiet luxury.",
  },
  {
    name: "Cabo",
    href: "/packages/cabo",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    description:
      "Dramatic desert-meets-sea scenery, high-design resorts, and world-class coastal experiences.",
  },
  {
    name: "Puerto Vallarta",
    href: "/packages/puerto-vallarta",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    description:
      "Artful bayfront charm with cultural depth, gourmet dining, and curated seaside comfort.",
  },
  {
    name: "Cozumel",
    href: "/packages/cozumel",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    description:
      "Island reef luxury for travelers seeking marine beauty, relaxation, and concierge support.",
  },
] as const;

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-5xl px-6">
          <p className="uppercase tracking-[0.35em] text-orange-300 text-sm mb-5">
            Luxury Mexico Travel
          </p>

          <h1 className="text-5xl md:text-7xl font-light leading-tight">
            Escape to Mexico’s Most Exclusive Destinations
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Curated luxury travel experiences designed for unforgettable moments.
          </p>

          <a
            href="#destinations"
            className="mt-10 inline-flex rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 px-10 py-4 text-black font-semibold transition hover:scale-105"
          >
            Explore Experiences
          </a>
        </div>
      </section>

      <section
        id="destinations"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-orange-300 text-sm">
            Destinations
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-light">
            Explore Our Destinations
          </h2>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            Discover curated luxury experiences across Mexico’s most sought-after escapes.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {destinations.map((destination) => (
            <article
              key={destination.href}
              className="rounded-3xl overflow-hidden border border-white/10 bg-neutral-950"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-light">
                  {destination.name}
                </h3>

                <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                  {destination.description}
                </p>

                <Link
                  href={destination.href}
                  className="mt-6 inline-flex w-full justify-center rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 px-6 py-3 text-black font-semibold transition hover:scale-[1.02]"
                >
                  View Experience
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
```
