"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { LEAD_TAG, PIPELINE_NAME } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    q: "What is lead automation?",
    a: "Lead automation uses software to handle repetitive steps after someone shows interest — saving their details, tagging them, notifying your team, and sending emails — so no lead is forgotten.",
  },
  {
    q: "How does GoHighLevel help manage leads?",
    a: `GoHighLevel combines forms, a CRM, sales pipelines, and workflows in one platform. Here, form submissions create a contact tagged "${LEAD_TAG}" and an opportunity in the "${PIPELINE_NAME}".`,
  },
  {
    q: "Can workflows send automated emails?",
    a: "Yes. The workflow behind this page is configured to send a confirmation email right after submission and a follow-up email one day later.",
  },
  {
    q: "Can the system be customized for my business?",
    a: "Yes. Pipeline stages, tags, email copy, delays, and notifications can all be adapted to your sales process during the discovery call.",
  },
  {
    q: "Does this website use a live integration or a demo?",
    a: "The discovery-call form is a live GoHighLevel form embed, so submissions are sent directly to GoHighLevel, where the automation workflow runs. The pipeline board and workflow animations on this page are interactive illustrations with sample data and are not connected to the CRM.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-2xl border border-line bg-deep">
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
