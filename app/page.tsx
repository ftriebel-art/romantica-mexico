export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily: "sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          marginBottom: "1rem",
        }}
      >
        Romantica Mexico
      </h1>

      <p
        style={{
          fontSize: "1.25rem",
          opacity: 0.8,
        }}
      >
        Luxury travel experiences in Cancun, Cabo, and Tulum.
      </p>
    </main>
  );
}