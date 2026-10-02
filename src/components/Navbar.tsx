"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/site";
import { Logo } from "./Logo";
import { ButtonLink } from "./Button";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/lib/i18n";

export function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open
          ? "border-b border-line/60 bg-ink/90 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Main navigation"
      >
        <Logo />
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-mist/80 transition-colors hover:text-white"
              >
                {t.nav.links[i]}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <ButtonLink href="#book" className="px-5 py-2.5">
            {t.nav.cta}
          </ButtonLink>
        </div>
        <div className="flex items-center gap-2 md:hidden">
        <LanguageToggle />
        <button
          type="button"
          className="rounded-lg p-2 text-white md:hidden"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-line/60 px-4 pb-6 md:hidden">
          <ul className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-mist hover:bg-card"
                >
                  {t.nav.links[i]}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink
            href="#book"
            className="w-full"
            onClick={() => setOpen(false)}
          >
            {t.nav.cta}
          </ButtonLink>
        </div>
      )}
    </header>
  );
}
