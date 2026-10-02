"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { ButtonLink } from "./Button";
import { WorkflowVisual } from "./WorkflowVisual";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-grid pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-teal/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-40 h-[360px] w-[360px] rounded-full bg-brand/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-light/30 bg-teal/20 px-4 py-1.5 text-sm font-medium text-teal-light">
            <Sparkles className="h-4 w-4 text-brand" aria-hidden />
            GoHighLevel + AI workflow automation
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Turn More Leads Into Customers With{" "}
            <span className="text-brand">AI Automation</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist/80">
            Capture leads, automate follow-ups, and manage your sales pipeline
            in one streamlined system.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#book">
              Book a Discovery Call <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary">
              Explore Our Process
            </ButtonLink>
          </div>
        </motion.div>
        <WorkflowVisual />
      </div>
    </section>
  );
}
