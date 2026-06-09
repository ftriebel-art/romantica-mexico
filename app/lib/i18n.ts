import de from "../../locales/de.json";
import en from "../../locales/en.json";
import es from "../../locales/es.json";
import fr from "../../locales/fr.json";
import type { LanguageCode } from "../components/languageConfig";

type Dictionary = Record<string, unknown>;

const dictionaries: Record<LanguageCode, Dictionary> = {
  en,
  es,
  fr,
  de,
};

export const SUPPORTED_LOCALES: LanguageCode[] = ["en", "es", "fr", "de"];

const getValueByPath = (dictionary: Dictionary, path: string): unknown => {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, dictionary);
};

export const resolveLocale = (pathname: string, saved?: LanguageCode | null): LanguageCode => {
  const firstSegment = pathname.split("/").filter(Boolean)[0] as LanguageCode | undefined;
  if (firstSegment && SUPPORTED_LOCALES.includes(firstSegment)) {
    return firstSegment;
  }
  if (saved && SUPPORTED_LOCALES.includes(saved)) {
    return saved;
  }
  return "en";
};

export const t = (locale: LanguageCode, path: string): string => {
  const value = getValueByPath(dictionaries[locale], path);
  return typeof value === "string" ? value : path;
};

export const tm = <T>(locale: LanguageCode, path: string): T => {
  return getValueByPath(dictionaries[locale], path) as T;
};
