export type LanguageCode = "en" | "es" | "fr" | "de";

export const LANGUAGE_STORAGE_KEY = "siteLanguage";
export const LANGUAGE_COOKIE_KEY = "siteLanguage";
export const SUPPORTED_LOCALES: LanguageCode[] = ["en", "es", "fr", "de"];

export const languageOptions: Array<{ code: LanguageCode; label: string; flag: string }> = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇲🇽" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

export const uiLabels: Record<LanguageCode, {
  packages: string;
  travelInfo: string;
  flights: string;
  hotels: string;
  terms: string;
  privacy: string;
  contact: string;
}> = {
  en: {
    packages: "Packages",
    travelInfo: "Travel Info",
    flights: "Flights",
    hotels: "Hotels",
    terms: "Terms",
    privacy: "Privacy",
    contact: "Contact",
  },
  es: {
    packages: "Paquetes",
    travelInfo: "Info de Viaje",
    flights: "Vuelos",
    hotels: "Hoteles",
    terms: "Términos",
    privacy: "Privacidad",
    contact: "Contacto",
  },
  fr: {
    packages: "Forfaits",
    travelInfo: "Infos Voyage",
    flights: "Vols",
    hotels: "Hôtels",
    terms: "Conditions",
    privacy: "Confidentialité",
    contact: "Contact",
  },
  de: {
    packages: "Pakete",
    travelInfo: "Reiseinfos",
    flights: "Flüge",
    hotels: "Hotels",
    terms: "AGB",
    privacy: "Datenschutz",
    contact: "Kontakt",
  },
};
