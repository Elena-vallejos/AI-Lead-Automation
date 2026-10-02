import { Eye, HeartHandshake, KanbanSquare, Repeat, Timer } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const benefits = [
  { icon: Timer, title: "Less repetitive manual work", text: "Tagging, data entry, and reminder emails happen on their own." },
  { icon: Repeat, title: "More consistent follow-up", text: "Every lead gets the same timely confirmation and follow-up." },
  { icon: Eye, title: "Better lead visibility", text: "Know instantly when a new lead arrives and who it is." },
  { icon: KanbanSquare, title: "A more organized pipeline", text: "Each opportunity sits in a clear stage from New Lead to Won." },
  { icon: HeartHandshake, title: "More time for real conversations", text: "Spend your energy talking to prospects, not chasing admin." },
];

export function Benefits() {
  return (
    <section className="bg-deep/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Benefits" title="What automation gives back to your team" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-line bg-card p-5 text-center">
                <span className="mx-auto mb-4 grid h-11 w-11 place-items-center rounded-full bg-brand/15 text-brand">
                  <b.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-semibold text-white">{b.title}</h3>
                <p className="mt-2 text-sm text-mist/70">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
