import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-mist/70">
            Helping businesses capture leads, organize their CRM, and automate
            follow-ups with GoHighLevel and AI.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <h3 className="mb-4 text-sm font-semibold text-white">Navigation</h3>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={`/${l.href}`} className="text-mist/70 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#book" className="text-mist/70 hover:text-white">
                Book a Discovery Call
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">Contact</h3>
          <ul className="space-y-3 text-sm text-mist/70">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand" aria-hidden /> [your-email@example.com]
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand" aria-hidden /> [Your phone number]
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand" aria-hidden /> [Your business address]
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-mist/60 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} {BRAND}. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
