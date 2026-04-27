import { useEffect, useState } from "react";
import { translations } from "./translations";
import type { Language } from "./translations";

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>("de");

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];

  return { language, setLanguage, t };
};
