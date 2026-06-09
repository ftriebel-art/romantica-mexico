```tsx
export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-7xl font-light">
          Romantica Mexico
        </h1>

        <p className="mt-6 text-xl text-gray-300">
          Luxury travel experiences across Mexico.
        </p>

        <div className="mt-10">
          <a
            href="/packages"
            className="rounded-full bg-white text-black px-8 py-4 font-semibold"
          >
            Explore Destinations
          </a>
        </div>
      </div>
    </main>
  );
}
```
