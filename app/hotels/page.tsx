import Link from "next/link";

export default function Hotels() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-black py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
            Luxury Stays 🏨
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-300">
            Discover premium accommodations in paradise
          </p>
        </div>
      </section>

      {/* Cancun Resorts */}
      <section className="bg-black py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-10 text-center">Cancun Resorts</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {/* Hotel 1 */}
            <div className="group">
              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                  alt="Grand Palladium"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-2xl font-light mb-2">Grand Palladium</h3>
              <p className="text-gray-400 mb-4">
                All-inclusive beachfront resort with world-class amenities, spa, and water sports.
              </p>
              <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 text-black font-semibold rounded-3xl px-8 py-4 transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25">
                  View Hotel
                </button>
              </a>
            </div>

            {/* Hotel 2 */}
            <div className="group">
              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                  alt="Riviera Maya Resort"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-2xl font-light mb-2">Riviera Maya Resort</h3>
              <p className="text-gray-400 mb-4">
                Luxury oceanfront property with multiple pools, gourmet dining, and entertainment.
              </p>
              <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 text-black font-semibold rounded-3xl px-8 py-4 transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25">
                  View Hotel
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tulum Boutique Hotels */}
      <section className="bg-neutral-900 py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-10 text-center">Tulum Boutique Hotels</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {/* Hotel 1 */}
            <div className="group">
              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src="https://images.unsplash.com/photo-1506929562872-bb421503ef21"
                  alt="Casa Ceniza"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-2xl font-light mb-2">Casa Ceniza</h3>
              <p className="text-gray-400 mb-4">
                Intimate eco-luxury boutique with jungle views, spa treatments, and farm-to-table dining.
              </p>
              <a href="https://www.expedia.com" target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 text-black font-semibold rounded-3xl px-8 py-4 transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25">
                  View Hotel
                </button>
              </a>
            </div>

            {/* Hotel 2 */}
            <div className="group">
              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src="https://images.unsplash.com/photo-1506929562872-bb421503ef21"
                  alt="Tulum Beach Retreat"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-2xl font-light mb-2">Tulum Beach Retreat</h3>
              <p className="text-gray-400 mb-4">
                Beachfront boutique hotel with private beach access, yoga classes, and sustainable luxury.
              </p>
              <a href="https://www.expedia.com" target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 text-black font-semibold rounded-3xl px-8 py-4 transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25">
                  View Hotel
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Isla de Mujeres Retreats */}
      <section className="bg-black py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-10 text-center">Isla de Mujeres Retreats</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            {/* Hotel 1 */}
            <div className="group">
              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src="https://images.unsplash.com/photo-1519046904884-53103b34b206"
                  alt="Island Paradise Resort"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-2xl font-light mb-2">Island Paradise</h3>
              <p className="text-gray-400 mb-4">
                All-inclusive tropical escape with snorkeling, diving, and sunset views.
              </p>
              <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 text-black font-semibold rounded-3xl px-8 py-4 transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25">
                  View Hotel
                </button>
              </a>
            </div>

            {/* Hotel 2 */}
            <div className="group">
              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src="https://images.unsplash.com/photo-1519046904884-53103b34b206"
                  alt="Caribbean Luxury"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-2xl font-light mb-2">Caribbean Luxury</h3>
              <p className="text-gray-400 mb-4">
                Premium beachfront boutique with fine dining, water sports, and spa services.
              </p>
              <a href="https://www.expedia.com" target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 text-black font-semibold rounded-3xl px-8 py-4 transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25">
                  View Hotel
                </button>
              </a>
            </div>

            {/* Hotel 3 */}
            <div className="group">
              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src="https://images.unsplash.com/photo-1519046904884-53103b34b206"
                  alt="Beachfront Boutique"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-2xl font-light mb-2">Beachfront Boutique</h3>
              <p className="text-gray-400 mb-4">
                Intimate resort with eco-friendly practices, wellness programs, and adventure activities.
              </p>
              <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 text-black font-semibold rounded-3xl px-8 py-4 transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25">
                  View Hotel
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="bg-neutral-950 py-6 px-6 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto text-center">
          <Link href="/">
            <button className="text-orange-400 hover:text-orange-300 transition">
              ← Back to Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
