import type { ReactNode } from "react";

const styles = {
  primary:
    "bg-brand text-ink hover:bg-brand-dark shadow-lg shadow-brand/20",
  secondary:
    "border border-teal-light/40 text-white hover:border-teal-light hover:bg-teal/30",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
