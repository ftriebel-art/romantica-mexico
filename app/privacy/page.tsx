export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.35em] text-orange-400 mb-4">Privacy</p>
        <h1 className="text-4xl md:text-5xl font-light mb-6">Privacy Policy</h1>
        <p className="text-gray-400 leading-relaxed text-lg">
          We respect your privacy and handle any personal information with care. This policy describes how we collect and use information when you interact with our site and contact us.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <p>
            Information submitted through our contact form is used solely to respond to your inquiry and improve our service offering. We do not sell or share your personal data with third parties for marketing purposes.
          </p>
          <p>
            For any questions about privacy or data handling, reach out to us via the contact page or email hello@romantica.travel.
          </p>
        </div>
      </div>
    </main>
  );
}
