"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { CONTENT, type Content, type Lang } from "./content";

const STORAGE_KEY = "lang";

type Ctx = { lang: Lang; t: Content; setLang: (l: Lang) => void };

const LanguageContext = createContext<Ctx>({ lang: "en", t: CONTENT.en, setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    const saved = fromUrl ?? localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "es") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t: CONTENT[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
