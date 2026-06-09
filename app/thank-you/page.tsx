import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-6 py-12">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide mb-6">
          You&apos;re Booked! 🌴
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-300 mb-12 leading-relaxed">
          We&apos;ve received your reservation. Our team will contact you shortly with your itinerary.
        </p>
        <Link href="/">
          <button className="text-sm md:text-base text-gray-400 hover:text-gray-300 transition-colors duration-300">
            ← Return to Home
          </button>
        </Link>
      </div>
    </main>
  );
}
