"use client";

import { useState } from "react";

export default function ContactPage() {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!message.trim()) return;

    const mailtoLink = `mailto:hello@romantica.travel?subject=Romantica Travel Inquiry&body=${encodeURIComponent(
      message,
    )}`;

    window.location.href = mailtoLink;
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-orange-400 mb-4">
          Contact
        </p>
        <h1 className="text-4xl md:text-5xl font-light mb-6">
          Let’s design your next luxury escape.
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Email us directly at <a href="mailto:hello@romantica.travel" className="text-orange-400 hover:text-orange-300 transition">hello@romantica.travel</a> or send a brief message below.
        </p>

        <div className="rounded-3xl border border-neutral-800 bg-slate-950/80 p-8 shadow-xl shadow-black/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="message" className="block text-sm text-gray-300 mb-2">
                Short message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={5}
                className="w-full rounded-3xl border border-neutral-800 bg-black/80 px-4 py-4 text-white placeholder:text-gray-500 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                placeholder="Share your travel interests, timeline, and any special requests."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 text-black font-semibold rounded-3xl px-8 py-4 transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25"
            >
              Send message
            </button>
            {sent ? (
              <p className="text-sm text-green-400">Your message is ready in your email app.</p>
            ) : null}
          </form>
        </div>
      </div>
    </main>
  );
}
