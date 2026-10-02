"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  const { t } = useLanguage();
  const faqs = t.faq.items;
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} />
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="rounded-2xl border border-line bg-deep">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-white"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    {f.q}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-brand transition-transform ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 leading-relaxed text-mist/80">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
