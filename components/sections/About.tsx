"use client";

import { useLocale } from "@/components/LocaleProvider";
import Accent from "@/components/ui/Accent";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

/** Section volontairement courte et discrète : qui je suis, comment je travaille. */
export default function About() {
  const { dict } = useLocale();

  return (
    <section id="about" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <SectionLabel>{dict.about.label}</SectionLabel>
        </Reveal>

        <div className="mt-10 max-w-3xl sm:mt-14">
          <Reveal delay={100}>
            <h2 className="text-3xl font-medium tracking-tight sm:text-5xl">
              <Accent text={dict.about.title} />
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-lg leading-relaxed text-cream/80 sm:text-2xl sm:leading-normal">
              {dict.about.body}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-5 text-sm leading-relaxed text-cream/55 sm:text-base">
              {dict.about.detail}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
