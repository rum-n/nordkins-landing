import { createContext } from "react";
import { translations } from "./translations";
import type { Language } from "./translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);
