"use client";

import { BrainCircuit, KanbanSquare, MailCheck, MousePointerClick } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "@/lib/i18n";

const icons = [MousePointerClick, KanbanSquare, MailCheck, BrainCircuit];

export function Services() {
  const { t } = useLanguage();
  const services = t.services.items.map((s, i) => ({ ...s, icon: icons[i] }));
  return (
    <section className="bg-deep/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-card p-6 shadow-lg shadow-black/20 transition-transform hover:-translate-y-1 hover:border-brand/50">
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-teal text-white transition-colors group-hover:bg-brand group-hover:text-ink">
                  <s.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-mist/75">
                  {s.description}
                </p>
                <p className="mt-5 border-t border-line pt-4 text-sm font-medium text-brand">
                  {s.benefit}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
