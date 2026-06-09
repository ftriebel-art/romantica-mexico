"use client";

import Link from "next/link";
import { useState } from "react";

export default function Flights() {
  const [origin, setOrigin] = useState("LAX");
  const [destination, setDestination] = useState("CUN");
  const [date, setDate] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const encodedOrigin = encodeURIComponent(origin.trim() || "LAX");
    const encodedDestination = encodeURIComponent(destination.trim() || "CUN");
    const dateSegment = date ? `+on+${encodeURIComponent(date)}` : "";
    const query = `flights+from+${encodedOrigin}+to+${encodedDestination}${dateSegment}`;
    const url = `https://www.google.com/travel/flights?q=${query}`;
    window.open(url, "_blank");
  };

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-black py-14 md:py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
            Find Your Flights ✈️
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-300 mb-8">
            Find the most seamless routes to your destination with real-time pricing and flexible options.
          </p>

          {/* Search Form */}
          <div className="max-w-4xl mx-auto rounded-[2rem] border border-white/10 bg-black/40 p-6 md:p-8 backdrop-blur-lg shadow-xl shadow-black/30">
            <form
              onSubmit={handleSearch}
              className="text-left space-y-6"
            >
              <div className="grid gap-5 md:gap-6 md:grid-cols-3">
                <label className="flex flex-col text-gray-300">
                <span className="mb-2 text-sm uppercase tracking-[0.2em] text-gray-400">Origin</span>
                <input
                  value={origin}
                  onChange={(event) => setOrigin(event.target.value)}
                  className="rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-orange-500"
                  placeholder="Enter airport code (e.g., LAX)"
                />
                </label>

                <label className="flex flex-col text-gray-300">
                <span className="mb-2 text-sm uppercase tracking-[0.2em] text-gray-400">Destination</span>
                <input
                  value={destination}
                  onChange={(event) => setDestination(event.target.value)}
                  className="rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-orange-500"
                  placeholder="Enter airport code (e.g., LAX)"
                />
                </label>

                <label className="flex flex-col text-gray-300">
                <span className="mb-2 text-sm uppercase tracking-[0.2em] text-gray-400">Date</span>
                <input
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  className="rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-orange-500"
                />
                </label>
              </div>

              <p className="text-sm text-gray-400">
                Tip: All destinations fly into Cancun (CUN)
              </p>

              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 text-black font-semibold rounded-3xl px-8 py-4 transition-all duration-500 ease-out transform hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25"
                >
                  Search Flights
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 pb-6 md:pb-10">
        <div className="max-w-4xl mx-auto rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10 text-center shadow-lg shadow-black/25">
          <h2 className="text-2xl md:text-4xl font-light tracking-wide text-white mb-6">
            Let Us Handle Your Flights
          </h2>
          <button className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 text-black font-semibold rounded-3xl px-10 py-4 transition-all duration-500 ease-out transform hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25">
            Request Flight Booking Assistance
          </button>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-black px-6 pb-8 md:pb-12">
        <div className="max-w-4xl mx-auto rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10 text-center shadow-lg shadow-black/25">
          <h2 className="text-2xl md:text-4xl font-light tracking-wide text-white mb-6">
            Pair Your Flight with a Curated Experience
          </h2>
          <Link href="/packages" className="inline-block">
            <button className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 text-black font-semibold rounded-3xl px-10 py-4 transition-all duration-500 ease-out transform hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25">
              View Packages
            </button>
          </Link>
        </div>
      </section>

      {/* Flights Section */}
      <section className="bg-black py-14 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-12">
            {/* Cancun */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-xl p-8 h-64 flex flex-col justify-between hover:shadow-2xl transition duration-500">
                <div>
                  <h2 className="text-3xl font-light mb-3">Cancun</h2>
                  <p className="text-blue-100">
                    White sand beaches and turquoise waters await. Fly into Cancun International Airport (CUN).
                  </p>
                </div>
                <a href="https://www.google.com/travel/flights?q=flights+to+Cancun" target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 text-black font-semibold rounded-3xl px-8 py-4 transition-all duration-500 ease-out transform hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25">
                    Search Flights
                  </button>
                </a>
              </div>
            </div>

            {/* Tulum */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-xl p-8 h-64 flex flex-col justify-between hover:shadow-2xl transition duration-500">
                <div>
                  <h2 className="text-3xl font-light mb-3">Tulum</h2>
                  <p className="text-blue-100">
                    Eco-luxury jungle escapes. Fly into Cancun Airport (CUN), then transfer to Tulum.
                  </p>
                </div>
                <a href="https://www.google.com/travel/flights?q=flights+to+Cancun+Airport" target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 text-black font-semibold rounded-3xl px-8 py-4 transition-all duration-500 ease-out transform hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25">
                    Search Flights
                  </button>
                </a>
              </div>
            </div>

            {/* Isla de Mujeres */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-xl p-8 h-64 flex flex-col justify-between hover:shadow-2xl transition duration-500">
                <div>
                  <h2 className="text-3xl font-light mb-3">Isla de Mujeres</h2>
                  <p className="text-blue-100">
                    Tropical island paradise. Fly into Cancun Airport (CUN), then ferry to the island.
                  </p>
                </div>
                <a href="https://www.google.com/travel/flights?q=flights+to+Cancun+Airport" target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 text-black font-semibold rounded-3xl px-8 py-4 transition-all duration-500 ease-out transform hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25">
                    Search Flights
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="bg-neutral-950 py-6 px-6 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto text-center">
          <Link href="/">
            <button className="text-blue-400 hover:text-blue-300 transition">
              ← Back to Home
            </button>
          </Link>
        </div>
      </section>

      <Link
        href="/packages"
        className="md:hidden fixed bottom-4 left-4 right-4 z-50 rounded-3xl bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 px-8 py-4 text-center text-black font-semibold shadow-xl shadow-black/40"
      >
        View Packages
      </Link>
    </main>
  );
}
