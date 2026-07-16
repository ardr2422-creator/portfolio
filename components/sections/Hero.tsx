"use client";

import type { CSSProperties } from "react";
import { useLocale } from "@/components/LocaleProvider";
import Accent from "@/components/ui/Accent";
import { ArrowDown } from "@/components/ui/icons";

/** Décalage d'animation d'entrée (CSS pur, cf. .hero-enter dans globals.css). */
const enterDelay = (ms: number) => ({ "--enter-delay": `${ms}ms` }) as CSSProperties;

/** Hero plein écran : accroche typographique forte, sous-titre, invite au scroll. */
export default function Hero() {
  const { dict } = useLocale();

  return (
    <section id="top" className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden">
      {/* Halo discret — seule concession décorative, fixe et non interactive */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-20%] h-[36rem] w-[36rem] rounded-full bg-accent/[0.07] blur-[120px]"
      />

      <div className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8 sm:pb-14">
        <div className="hero-enter">
          <p className="flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] text-cream/55">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {dict.hero.eyebrow}
          </p>
        </div>

        <div className="hero-enter" style={enterDelay(120)}>
          <h1 className="mt-6 max-w-5xl text-[clamp(2.5rem,8.5vw,5.75rem)] font-medium leading-[1.02] tracking-[-0.03em]">
            <Accent text={dict.hero.title} />
          </h1>
        </div>

        <div className="hero-enter" style={enterDelay(260)}>
          <div className="mt-12 flex flex-col gap-8 sm:mt-20 sm:flex-row sm:items-end sm:justify-between">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 text-sm text-cream/60 transition-colors duration-300 hover:text-cream"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line transition-colors duration-500 ease-out-quart group-hover:border-accent group-hover:text-accent">
                <ArrowDown className="h-4 w-4 transition-transform duration-500 ease-out-quart group-hover:translate-y-0.5" />
              </span>
              {dict.hero.scrollHint}
            </a>

            <div className="sm:text-right">
              <p className="text-sm font-medium sm:text-base">{dict.hero.subtitle1}</p>
              <p className="mt-1 text-sm text-cream/55">{dict.hero.subtitle2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
