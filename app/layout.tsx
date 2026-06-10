import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Romantica Mexico | Luxury Travel Experiences",

  description:
    "Curated luxury travel experiences across Mexico's most exclusive destinations including Cancun, Tulum, Cabo, and Isla Mujeres.",

  keywords: [
    "luxury Mexico travel",
    "Cancun luxury resorts",
    "Tulum vacations",
    "Mexico travel concierge",
    "all inclusive luxury travel",
  ],

  openGraph: {
    title: "Romantica Mexico",
    description:
      "Luxury travel experiences designed for unforgettable escapes.",
    url: "https://romanticamexico.com",
    siteName: "Romantica Mexico",

    images: [
      {
        url:
          "https://images.unsplash.com/photo-1519046904884-53103b34b206",
        width: 1200,
        height: 630,
        alt: "Luxury Mexico travel",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Romantica Mexico",
    description:
      "Curated luxury travel experiences across Mexico.",
    images: [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
