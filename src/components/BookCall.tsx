"use client";

import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import { CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { GHL_FORM_ID, GHL_FORM_NAME } from "@/lib/site";
import { Reveal } from "./Reveal";
import { useLanguage } from "@/lib/i18n";

export function BookCall() {
  const { t } = useLanguage();
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="book" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal/15 to-transparent" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            {t.book.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.book.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-mist/80">
            {t.book.description}
          </p>
          <ul className="mt-8 space-y-3">
            {t.book.expectations.map((e) => (
              <li key={e} className="flex items-start gap-3 text-mist">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-light" aria-hidden />
                {e}
              </li>
            ))}
          </ul>
          <p className="mt-8 flex items-start gap-3 rounded-2xl border border-line bg-deep p-4 text-sm text-mist/70">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
            <span>
              {t.book.privacy}{" "}
              <Link href="/privacy" className="text-brand underline-offset-2 hover:underline">
                {t.book.privacyLink}
              </Link>
              .
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-2 shadow-2xl shadow-black/40">
            {!loaded && (
              <div className="absolute inset-0 grid place-items-center bg-white text-slate-500">
                <span className="flex items-center gap-2 text-sm">
                  <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                  {t.book.loading}
                </span>
              </div>
            )}
            <iframe
              src={`https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`}
              style={{ width: "100%", minHeight: 620, border: "none", borderRadius: 0 }}
              id={`inline-${GHL_FORM_ID}`}
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name={GHL_FORM_NAME}
              data-height="undefined"
              data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
              data-form-id={GHL_FORM_ID}
              data-cookie-consent="true"
              data-cookie-consent-provider="auto"
              title={GHL_FORM_NAME}
              onLoad={() => setLoaded(true)}
            />
          </div>
          <Script
            src="https://link.msgsndr.com/js/form_embed.js"
            strategy="afterInteractive"
          />
        </Reveal>
      </div>
    </section>
  );
}
