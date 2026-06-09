export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.35em] text-orange-400 mb-4">Terms</p>
        <h1 className="text-4xl md:text-5xl font-light mb-6">Terms of Service</h1>
        <p className="text-gray-400 leading-relaxed text-lg">
          These terms outline the use of our travel planning and booking resources. We are committed to delivering a seamless experience while maintaining clarity around our services and responsibilities.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <p>
            By using Romantica Mexico, you agree to comply with our booking policies, payment processing terms, and any partner requirements associated with the experiences we curate.
          </p>
          <p>
            All travel arrangements are subject to availability and specific supplier terms. We recommend reviewing any itinerary details carefully before confirming a reservation.
          </p>
        </div>
      </div>
    </main>
  );
}
