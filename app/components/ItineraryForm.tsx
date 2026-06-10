// components/ItineraryForm.tsx

"use client";

import { useState } from "react";

export default function ItineraryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitting(true);
    setSubmitted(false);

    console.log("Custom itinerary request:", {
      name,
      email,
      destination,
    });

    window.setTimeout(() => {
      setName("");
      setEmail("");
      setDestination("");
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 grid gap-4 text-left md:grid-cols-2"
    >
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

      <label className="space-y-2 md:col-span-2">
        <span className="text-sm text-gray-300">
          Destination Interest
        </span>

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
          ) : (
            "Request Custom Itinerary"
          )}
        </button>
      </div>

      <p className="text-center text-sm text-gray-400 md:col-span-2">
        We respect your privacy. No spam.
        Concierge response within 24 hours.
      </p>

      {submitted ? (
        <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-4 text-center text-green-200 md:col-span-2">
          Your concierge request has been received
        </div>
      ) : null}
    </form>
  );
}