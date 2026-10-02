"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  BellRing,
  Clock3,
  Database,
  FileInput,
  MailCheck,
  Send,
  Tag,
  Pause,
  Play,
} from "lucide-react";
import { LEAD_TAG, PIPELINE_NAME } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    icon: FileInput,
    title: "A prospect submits a form",
    detail:
      "A visitor fills in the GoHighLevel form embedded on this website. The form submission is the trigger that starts the workflow.",
  },
  {
    icon: Database,
    title: "Contact information is captured",
    detail:
      "Name and email from the form are saved automatically — no copying and pasting into spreadsheets.",
  },
  {
    icon: Database,
    title: "Contact is added to GoHighLevel CRM",
    detail:
      "The lead appears as a contact record in the GoHighLevel CRM, ready for the team to view.",
  },
  {
    icon: Tag,
    title: "Tag assigned + opportunity created",
    detail: `The contact receives the tag "${LEAD_TAG}" and an opportunity is created in the "${PIPELINE_NAME}" at the New Lead stage.`,
  },
  {
    icon: BellRing,
    title: "Internal notification sent",
    detail:
      "The responsible person (the account owner — not the whole workspace) is notified the moment a new lead arrives.",
  },
  {
    icon: MailCheck,
    title: "Confirmation email sent",
    detail:
      "The prospect receives a registration confirmation email right away so they know their request was received.",
  },
  {
    icon: Clock3,
    title: "Wait 1 day, then follow up",
    detail:
      "After a 24-hour delay, a follow-up email is sent automatically to keep the conversation going.",
  },
];

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!playing || reduce) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % steps.length),
      3000,
    );
    return () => clearInterval(id);
  }, [playing, reduce]);

  const current = steps[active];

  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="From form submission to follow-up, automatically"
          description="This is the exact GoHighLevel workflow behind the form on this page. Click any step to see what happens."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <ol className="relative space-y-3" aria-label="Workflow steps">
            <span
              className="absolute left-[27px] top-4 bottom-4 w-px bg-line"
              aria-hidden
            />
            {steps.map((s, i) => {
              const isActive = i === active;
              const done = i < active;
              return (
                <li key={s.title}>
                  <button
                    type="button"
                    onClick={() => {
                      setActive(i);
                      setPlaying(false);
                    }}
                    aria-current={isActive ? "step" : undefined}
                    className={`relative flex w-full items-center gap-4 rounded-2xl border p-3 text-left transition-colors ${
                      isActive
                        ? "border-brand bg-card"
                        : "border-transparent hover:bg-card/60"
                    }`}
                  >
                    <span
                      className={`relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-bold ml-3 ${
                        isActive
                          ? "bg-brand text-ink"
                          : done
                            ? "bg-teal-light text-ink"
                            : "bg-card text-mist ring-1 ring-line"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <s.icon
                      className={`h-5 w-5 shrink-0 ${isActive ? "text-brand" : "text-teal-light"}`}
                      aria-hidden
                    />
                    <span
                      className={`font-medium ${isActive ? "text-white" : "text-mist/80"}`}
                    >
                      {s.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-line bg-deep p-6 shadow-2xl shadow-black/30 sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-semibold text-brand">
                  Step {active + 1} of {steps.length}
                </span>
                <button
                  type="button"
                  onClick={() => setPlaying((p) => !p)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs font-medium text-mist hover:border-teal-light"
                >
                  {playing ? (
                    <>
                      <Pause className="h-3.5 w-3.5" /> Pause
                    </>
                  ) : (
                    <>
                      <Play className="h-3.5 w-3.5" /> Auto-play
                    </>
                  )}
                </button>
              </div>
              <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-card">
                <motion.div
                  className="h-full bg-brand"
                  animate={{ width: `${((active + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-teal">
                    <current.icon className="h-7 w-7 text-white" aria-hidden />
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {current.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-mist/80">
                    {current.detail}
                  </p>
                </motion.div>
              </AnimatePresence>
              <p className="mt-8 flex items-center gap-2 border-t border-line pt-5 text-xs text-mist/60">
                <Send className="h-3.5 w-3.5" aria-hidden />
                Form Submitted → Add Tag → Create Opportunity → Internal
                Notification → Confirmation Email → Wait 1 Day → Follow-up Email
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
