"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();
  return (
    <div
      role="group"
      aria-label={t.nav.switchTo}
      className={`inline-flex items-center gap-1 rounded-full border border-line bg-deep/80 p-1 text-xs font-semibold ${className}`}
    >
      <Languages className="ml-1.5 h-4 w-4 text-teal-light" aria-hidden />
      {(["en", "es"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            lang === l ? "bg-brand text-ink" : "text-mist hover:text-white"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
