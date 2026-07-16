import type { ReactNode } from "react";

/** Étiquette de section : point accent + libellé en petites capitales espacées. */
export default function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] text-cream/55">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      {children}
    </p>
  );
}
