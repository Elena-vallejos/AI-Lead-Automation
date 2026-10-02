"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";

export function PrivacyContent() {
  const { t } = useLanguage();
  const p = t.privacy;
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <div className="mb-10 flex items-center justify-between gap-4">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-brand hover:underline">
          <ArrowLeft className="h-4 w-4" aria-hidden /> {p.back}
        </Link>
        <LanguageToggle />
      </div>
      <h1 className="text-4xl font-bold text-white">{p.title}</h1>
      <p className="mt-2 text-sm text-mist/60">{p.note}</p>
      <div className="mt-10 space-y-6 leading-relaxed text-mist/80">
        {p.sections.map((s) => (
          <section key={s.h}>
            <h2 className="mb-2 text-xl font-semibold text-white">{s.h}</h2>
            <p>{s.p}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
