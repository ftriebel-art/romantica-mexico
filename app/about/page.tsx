export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.35em] text-orange-400 mb-4">
          About Us
        </p>
        <h1 className="text-4xl md:text-5xl font-light mb-8">
          Personalized luxury travel begins with a trusted guide.
        </h1>

        <section className="space-y-8 text-gray-300">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Who we are</h2>
            <p className="leading-relaxed text-lg">
              Romantica Mexico is a boutique travel curator dedicated to crafting unforgettable journeys through Mexico’s most desirable destinations. We combine local expertise with elevated service so every stay feels private, effortless, and beautifully tailored.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Our mission</h2>
            <p className="leading-relaxed text-lg">
              Our mission is to design seamless luxury travel experiences that exceed expectations at every moment. From arrival to departure, we manage every detail with care, leaving you free to savor the sun, culture, and refined comforts.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Why we specialize in Mexico</h2>
            <p className="leading-relaxed text-lg">
              Mexico offers an unmatched combination of dramatic coastlines, rich culture, and world-class hospitality. We specialize here because we know the rhythm of each region, the best hidden retreats, and the trusted local partners who deliver truly exceptional service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Concierge-style positioning</h2>
            <p className="leading-relaxed text-lg">
              Think of us as your personal concierge for Mexico’s most refined escapes. We listen to your preferences, anticipate your needs, and create a journey that feels intimate, luxurious, and effortless from first contact to final farewell.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
