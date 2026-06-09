export type DestinationSlug =
  | "cancun"
  | "tulum"
  | "isla-de-mujeres"
  | "playa-del-carmen"
  | "ixtapa"
  | "cabo"
  | "puerto-vallarta"
  | "cozumel";

export type DestinationConfig = {
  slug: DestinationSlug;
  name: string;
  heroTag: string;
  heroTitle: string;
  heroImage: string;
  overview: string;
  startingPrice: string;
  reserveUrl: string;
  bookingQuery: string;
  hotels: Array<{
    name: string;
    description: string;
  }>;
  recommendations: Array<{
    title: string;
    description: string;
  }>;
  tripadvisorThingsUrl: string;
  tripadvisorHotelsUrl: string;
  fallbackExperiences: Array<{
    title: string;
    summary: string;
    bookingUrl: string;
  }>;
};

const bookingAffiliateId = process.env.NEXT_PUBLIC_BOOKING_AFFILIATE_ID ?? "0";

export const buildBookingAffiliateUrl = (query: string) => {
  const params = new URLSearchParams({
    ss: query,
    aid: bookingAffiliateId,
    label: "romantica_destination_hotel",
  });

  return `https://www.booking.com/searchresults.html?${params.toString()}`;
};

export const destinationCatalog: Record<DestinationSlug, DestinationConfig> = {
  cancun: {
    slug: "cancun",
    name: "Cancun",
    heroTag: "All-Inclusive Luxury",
    heroTitle: "Cancun All-Inclusive Escape",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    overview:
      "Iconic Caribbean beachfront, elevated service, and seamless concierge planning for a five-night premium escape.",
    startingPrice: "$2,299 • 5 nights",
    reserveUrl: "https://book.stripe.com/4gM6oI3zn6519EleQIgbm01",
    bookingQuery: "Cancun luxury resorts",
    hotels: [
      {
        name: "Atelier Playa Mujeres",
        description: "Adults-focused all-inclusive luxury with modern suites and curated dining.",
      },
      {
        name: "Le Blanc Spa Resort Cancun",
        description: "High-touch service, beachfront serenity, and polished culinary programming.",
      },
      {
        name: "Secrets The Vine Cancun",
        description: "Contemporary oceanfront resort with premium amenities and central access.",
      },
    ],
    recommendations: [
      {
        title: "Sunset Catamaran Charter",
        description: "Private or semi-private sail with premium drinks and Caribbean views.",
      },
      {
        title: "Isla Mujeres Day Escape",
        description: "Fast-boat transfer, beach club stop, and calm turquoise-water time.",
      },
      {
        title: "Chef-Led Riviera Dinner",
        description: "Reserve a tasting-menu experience with oceanfront seating.",
      },
    ],
    tripadvisorThingsUrl: "https://www.tripadvisor.com/Attractions-g150807-Activities-Cancun_Yucatan_Peninsula.html",
    tripadvisorHotelsUrl: "https://www.tripadvisor.com/Hotels-g150807-Cancun_Yucatan_Peninsula-Hotels.html",
    fallbackExperiences: [
      {
        title: "Cancun Snorkel and Reef Tour",
        summary: "Half-day reef excursion with round-trip transfer options.",
        bookingUrl: "https://www.tripadvisor.com/Attractions-g150807-Activities-Cancun_Yucatan_Peninsula.html",
      },
      {
        title: "Private Cancun Yacht Cruise",
        summary: "Coastal cruise with snorkeling stops and concierge upgrades.",
        bookingUrl: "https://www.tripadvisor.com/Attractions-g150807-Activities-Cancun_Yucatan_Peninsula.html",
      },
    ],
  },
  tulum: {
    slug: "tulum",
    name: "Tulum",
    heroTag: "Eco-Luxury Retreat",
    heroTitle: "Tulum Eco-Luxury Retreat",
    heroImage: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
    overview:
      "Design-forward jungle-meets-sea stays with wellness-led days, cenote adventures, and curated dining.",
    startingPrice: "$2,499 • 5 nights",
    reserveUrl: "https://buy.stripe.com/14A5kE1rf1OL6s9bEwgbm02",
    bookingQuery: "Tulum luxury hotels",
    hotels: [
      { name: "Conrad Tulum Riviera Maya", description: "Expansive beachfront luxury with elevated dining and spa." },
      { name: "Be Tulum", description: "Boutique oceanfront suites with signature bohemian-luxury design." },
      { name: "Azulik Tulum", description: "Wellness-first adults retreat immersed in jungle architecture." },
    ],
    recommendations: [
      { title: "Private Cenote Circuit", description: "Skip-crowd access with private guide and flexible pacing." },
      { title: "Tulum Ruins at Sunrise", description: "Early private visit for cooler weather and quieter views." },
      { title: "Beach Club Culinary Day", description: "Chef-curated lunch and premium loungers by the sea." },
    ],
    tripadvisorThingsUrl: "https://www.tripadvisor.com/Attractions-g150813-Activities-Tulum_Yucatan_Peninsula.html",
    tripadvisorHotelsUrl: "https://www.tripadvisor.com/Hotels-g150813-Tulum_Yucatan_Peninsula-Hotels.html",
    fallbackExperiences: [
      {
        title: "Tulum Ruins and Cenote Combo",
        summary: "Popular full-day guided circuit with transportation options.",
        bookingUrl: "https://www.tripadvisor.com/Attractions-g150813-Activities-Tulum_Yucatan_Peninsula.html",
      },
      {
        title: "Sian Kaan Biosphere Boat Tour",
        summary: "Nature-focused excursion with lagoon and wildlife highlights.",
        bookingUrl: "https://www.tripadvisor.com/Attractions-g150813-Activities-Tulum_Yucatan_Peninsula.html",
      },
    ],
  },
  "isla-de-mujeres": {
    slug: "isla-de-mujeres",
    name: "Isla de Mujeres",
    heroTag: "Private Island Escape",
    heroTitle: "Isla de Mujeres Private Island Experience",
    heroImage: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    overview:
      "A tranquil island experience with yacht-ready marinas, clear-water beaches, and high-touch concierge support.",
    startingPrice: "$2,199 • 5 nights",
    reserveUrl: "https://buy.stripe.com/bJe00k7PD9hd2bTbEwgbm03",
    bookingQuery: "Isla Mujeres luxury hotels",
    hotels: [
      { name: "Impression Isla Mujeres by Secrets", description: "All-suite island resort with personalized service and ocean views." },
      { name: "Zoetry Villa Rolandi", description: "Boutique luxury ambiance with marina access and refined dining." },
      { name: "Privilege Aluxes", description: "Central beachfront comfort with private-style service options." },
    ],
    recommendations: [
      { title: "Sunset Yacht Circuit", description: "Private charter around the island and North Beach coastline." },
      { title: "MUSA Underwater Museum", description: "Snorkel or dive to view submerged sculpture installations." },
      { title: "Playa Norte Golden Hour", description: "Reserved beachfront setup for sunset lounging." },
    ],
    tripadvisorThingsUrl: "https://www.tripadvisor.com/Attractions-g150810-Activities-Isla_Mujeres_Yucatan_Peninsula.html",
    tripadvisorHotelsUrl: "https://www.tripadvisor.com/Hotels-g150810-Isla_Mujeres_Yucatan_Peninsula-Hotels.html",
    fallbackExperiences: [
      {
        title: "Isla Mujeres Catamaran Day Trip",
        summary: "Snorkeling, beach time, and onboard service packages.",
        bookingUrl: "https://www.tripadvisor.com/Attractions-g150810-Activities-Isla_Mujeres_Yucatan_Peninsula.html",
      },
      {
        title: "Garrafon Reef Adventure",
        summary: "Classic island excursion with reef access and activity bundles.",
        bookingUrl: "https://www.tripadvisor.com/Attractions-g150810-Activities-Isla_Mujeres_Yucatan_Peninsula.html",
      },
    ],
  },
  "playa-del-carmen": {
    slug: "playa-del-carmen",
    name: "Playa del Carmen",
    heroTag: "Riviera Maya Elegance",
    heroTitle: "Playa del Carmen Riviera Luxe Retreat",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    overview:
      "Beach-club energy meets polished hospitality, ideal for travelers wanting social luxury with concierge convenience.",
    startingPrice: "$2,299 • 5 nights",
    reserveUrl: "https://example.com/stripe-placeholder",
    bookingQuery: "Playa del Carmen luxury hotels",
    hotels: [
      { name: "Rosewood Mayakoba", description: "Ultra-luxury Riviera enclave with private lagoon-style suites." },
      { name: "Hilton Playa del Carmen", description: "Adults-only all-inclusive with central beach access." },
      { name: "Mahekal Beach Resort", description: "Boutique coastal setting steps from Quinta Avenida." },
    ],
    recommendations: [
      { title: "Fifth Avenue After Dark", description: "Concierge dinner routing and lounge reservations." },
      { title: "Cenote Swim Escape", description: "Private transport and guided access to select cenotes." },
      { title: "Beach Club Cabana Day", description: "Premium front-row setup with food and beverage service." },
    ],
    tripadvisorThingsUrl: "https://www.tripadvisor.com/Attractions-g150812-Activities-Playa_del_Carmen_Yucatan_Peninsula.html",
    tripadvisorHotelsUrl: "https://www.tripadvisor.com/Hotels-g150812-Playa_del_Carmen_Yucatan_Peninsula-Hotels.html",
    fallbackExperiences: [
      {
        title: "Riviera Maya Cenote and Snorkel Tour",
        summary: "Half-day adventure with transfer-ready pickup options.",
        bookingUrl: "https://www.tripadvisor.com/Attractions-g150812-Activities-Playa_del_Carmen_Yucatan_Peninsula.html",
      },
      {
        title: "Playa del Carmen Catamaran Cruise",
        summary: "Social sailing experience with reef stops and bar service.",
        bookingUrl: "https://www.tripadvisor.com/Attractions-g150812-Activities-Playa_del_Carmen_Yucatan_Peninsula.html",
      },
    ],
  },
  ixtapa: {
    slug: "ixtapa",
    name: "Ixtapa",
    heroTag: "Pacific Coast Luxury",
    heroTitle: "Ixtapa Pacific Signature Escape",
    heroImage: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    overview:
      "Quiet Pacific sophistication with private-feeling beaches, resort calm, and discreet personalized planning.",
    startingPrice: "$2,199 • 5 nights",
    reserveUrl: "https://example.com/stripe-placeholder",
    bookingQuery: "Ixtapa luxury resorts",
    hotels: [
      { name: "Cala de Mar Resort & Spa", description: "Cliffside suites with plunge pools and panoramic Pacific views." },
      { name: "Barcelo Ixtapa", description: "Upscale all-inclusive with central beachfront positioning." },
      { name: "Azul Ixtapa Grand", description: "Modern oceanfront resort with expansive leisure amenities." },
    ],
    recommendations: [
      { title: "Zihuatanejo Cultural Walk", description: "Local market and old-town exploration with private guide." },
      { title: "Pacific Sunset Sailing", description: "Low-density evening cruise with premium beverage options." },
      { title: "Resort Spa Recovery Day", description: "Signature wellness circuit and couples treatments." },
    ],
    tripadvisorThingsUrl: "https://www.tripadvisor.com/Attractions-g153373-Activities-Ixtapa_Pacific_Coast.html",
    tripadvisorHotelsUrl: "https://www.tripadvisor.com/Hotels-g153373-Ixtapa_Pacific_Coast-Hotels.html",
    fallbackExperiences: [
      {
        title: "Ixtapa Island and Snorkel Day",
        summary: "Popular coastal day trip with marine activities.",
        bookingUrl: "https://www.tripadvisor.com/Attractions-g153373-Activities-Ixtapa_Pacific_Coast.html",
      },
      {
        title: "Pacific Fishing Charter",
        summary: "Private or small-group charter options by season.",
        bookingUrl: "https://www.tripadvisor.com/Attractions-g153373-Activities-Ixtapa_Pacific_Coast.html",
      },
    ],
  },
  cabo: {
    slug: "cabo",
    name: "Cabo",
    heroTag: "Desert Meets Sea",
    heroTitle: "Cabo Private Coastline Experience",
    heroImage: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    overview:
      "Cinematic desert-meets-ocean luxury with private cruises, architectural resorts, and elevated service.",
    startingPrice: "$2,699 • 5 nights",
    reserveUrl: "https://example.com/stripe-placeholder",
    bookingQuery: "Los Cabos luxury resorts",
    hotels: [
      { name: "Waldorf Astoria Los Cabos Pedregal", description: "Legendary cliffside luxury with private plunge pools." },
      { name: "One&Only Palmilla", description: "Refined Baja icon known for intimate service and design." },
      { name: "Marquis Los Cabos", description: "Adults-only all-inclusive with dramatic Sea of Cortez views." },
    ],
    recommendations: [
      { title: "El Arco Private Cruise", description: "Golden-hour route around iconic Cabo rock formations." },
      { title: "Farm-to-Table Baja Dinner", description: "Chef-led dining in the San Jose del Cabo corridor." },
      { title: "Desert ATV + Beach Contrast Day", description: "Curated adventure with private transfer logistics." },
    ],
    tripadvisorThingsUrl: "https://www.tripadvisor.com/Attractions-g152515-Activities-Cabo_San_Lucas_Los_Cabos_Baja_California.html",
    tripadvisorHotelsUrl: "https://www.tripadvisor.com/Hotels-g152515-Cabo_San_Lucas_Los_Cabos_Baja_California-Hotels.html",
    fallbackExperiences: [
      {
        title: "Cabo Arch and Snorkel Cruise",
        summary: "Top-rated Baja marine route with activity options.",
        bookingUrl: "https://www.tripadvisor.com/Attractions-g152515-Activities-Cabo_San_Lucas_Los_Cabos_Baja_California.html",
      },
      {
        title: "Sunset Luxury Sailing in Cabo",
        summary: "Premium evening catamaran with open bar packages.",
        bookingUrl: "https://www.tripadvisor.com/Attractions-g152515-Activities-Cabo_San_Lucas_Los_Cabos_Baja_California.html",
      },
    ],
  },
  "puerto-vallarta": {
    slug: "puerto-vallarta",
    name: "Puerto Vallarta",
    heroTag: "Coastal Art & Culture",
    heroTitle: "Puerto Vallarta Sunset Bay Retreat",
    heroImage: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    overview:
      "Bayfront luxury with cultural depth, romantic-zone ambiance, and curated concierge-led city + sea experiences.",
    startingPrice: "$2,399 • 5 nights",
    reserveUrl: "https://example.com/stripe-placeholder",
    bookingQuery: "Puerto Vallarta luxury hotels",
    hotels: [
      { name: "Grand Velas Riviera Nayarit", description: "High-touch all-inclusive luxury with oceanfront suites." },
      { name: "Hotel Mousai", description: "Design-forward adults-oriented resort with panoramic views." },
      { name: "Villa Premiere", description: "Boutique beach luxury near the Malecon and old town." },
    ],
    recommendations: [
      { title: "Malecon Sunset Circuit", description: "Guided art-and-culture walk with dinner closeout." },
      { title: "Banderas Bay Yacht Day", description: "Private charter to hidden beaches and snorkeling points." },
      { title: "Romantic Zone Gastronomy", description: "Table strategy for top spots and chef tasting menus." },
    ],
    tripadvisorThingsUrl: "https://www.tripadvisor.com/Attractions-g150793-Activities-Puerto_Vallarta.html",
    tripadvisorHotelsUrl: "https://www.tripadvisor.com/Hotels-g150793-Puerto_Vallarta-Hotels.html",
    fallbackExperiences: [
      {
        title: "Vallarta Bay Boat and Snorkel Tour",
        summary: "Classic bay route with beach and marine activity stops.",
        bookingUrl: "https://www.tripadvisor.com/Attractions-g150793-Activities-Puerto_Vallarta.html",
      },
      {
        title: "Sierra Madre Cultural Excursion",
        summary: "Mountain villages and local-craft route with transport.",
        bookingUrl: "https://www.tripadvisor.com/Attractions-g150793-Activities-Puerto_Vallarta.html",
      },
    ],
  },
  cozumel: {
    slug: "cozumel",
    name: "Cozumel",
    heroTag: "Island Reef Luxury",
    heroTitle: "Cozumel Coral Coast Escape",
    heroImage: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    overview:
      "A reef-rich island stay blending marine adventure, calm beachfront downtime, and premium concierge pacing.",
    startingPrice: "$1,899 • 5 nights",
    reserveUrl: "https://example.com/stripe-placeholder",
    bookingQuery: "Cozumel luxury resorts",
    hotels: [
      { name: "InterContinental Presidente Cozumel", description: "Top-tier dive-friendly luxury with private beach coves." },
      { name: "The Westin Cozumel", description: "Modern oceanfront stay with sunset-facing rooms and services." },
      { name: "Cozumel Palace", description: "All-inclusive comfort with central access to marine excursions." },
    ],
    recommendations: [
      { title: "Palancar Reef Excursion", description: "Premium snorkeling or dive outing with transfer support." },
      { title: "El Cielo Sandbar Day", description: "Iconic shallow-water stop with private-boat upgrade options." },
      { title: "San Miguel Sunset Dinner", description: "Curated waterfront table reservations and transport planning." },
    ],
    tripadvisorThingsUrl: "https://www.tripadvisor.com/Attractions-g150809-Activities-Cozumel_Yucatan_Peninsula.html",
    tripadvisorHotelsUrl: "https://www.tripadvisor.com/Hotels-g150809-Cozumel_Yucatan_Peninsula-Hotels.html",
    fallbackExperiences: [
      {
        title: "Cozumel Reef Snorkel Adventure",
        summary: "Popular marine route with reef and shallow-water stops.",
        bookingUrl: "https://www.tripadvisor.com/Attractions-g150809-Activities-Cozumel_Yucatan_Peninsula.html",
      },
      {
        title: "Cozumel Jeep + Beach Tour",
        summary: "Island exploration combo with cultural and beach pauses.",
        bookingUrl: "https://www.tripadvisor.com/Attractions-g150809-Activities-Cozumel_Yucatan_Peninsula.html",
      },
    ],
  },
};
