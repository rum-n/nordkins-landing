import { useState, useEffect } from "react";
import { translations } from "./translations";
import type { Language } from "./translations";

const detectLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();
  const germanSpeaking = ["de", "de-de", "de-at", "de-ch"];

  // Check if browser language starts with any German locale
  const isGerman = germanSpeaking.some((lang) =>
    browserLang.startsWith(lang.split("-")[0])
  );

  return isGerman ? "de" : "en";
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(() => detectLanguage());

  useEffect(() => {
    const detectedLang = detectLanguage();
    setLanguage(detectedLang);
  }, []);

  const t = translations[language];

  return { language, setLanguage, t };
};
