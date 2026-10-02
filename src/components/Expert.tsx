import Image from "next/image";
import { BookOpen } from "lucide-react";
import { Reveal } from "./Reveal";

const books = [
  {
    src: "/images/book-7-critical-principles.jpeg",
    title: "The 7 Critical Principles of Effective Digital Marketing",
    author: "Kasim Aslam",
    w: 360,
    h: 555,
  },
  {
    src: "/images/book-you-vs-google.png",
    title: "You vs Google: The Very Unauthorized Guide to Google Ads",
    author: "Patience Hurlburt-Lawton, John Moran & Kasim Aslam",
    w: 578,
    h: 700,
  },
];

export function Expert() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="relative mx-auto max-w-sm">
            <div
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand/50 to-teal-light/30 blur-xl"
              aria-hidden
            />
            <Image
              src="/images/kasim-aslam.png"
              alt="Portrait of Kasim Aslam"
              width={563}
              height={563}
              className="relative rounded-[2rem] border border-line"
              priority={false}
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            Featured expert
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Kasim Aslam
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-mist/80">
            Digital marketing entrepreneur, founder of Solutions 8, and author
            focused on helping businesses grow with smarter marketing systems.
            This project uses his workshops as the sample entrepreneur brief for
            our lead-automation funnel.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {books.map((b) => (
              <figure
                key={b.title}
                className="flex flex-col items-center rounded-2xl border border-line bg-deep p-5 text-center"
              >
                <div className="flex h-56 items-center justify-center">
                  <Image
                    src={b.src}
                    alt={`Book cover: ${b.title}`}
                    width={b.w}
                    height={b.h}
                    className="max-h-56 w-auto rounded-md object-contain shadow-xl shadow-black/40"
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="flex items-start justify-center gap-1.5 text-sm font-semibold text-white">
                    <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                    {b.title}
                  </p>
                  <p className="mt-1 text-xs text-mist/60">{b.author}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
