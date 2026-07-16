"use client";

import { useLocale } from "@/components/LocaleProvider";
import { ArrowUp, ArrowUpRight } from "@/components/ui/icons";
import { site, whatsappUrl } from "@/data/site";
import { interpolate } from "@/lib/i18n";

/** Pied de page : colonnes Menu / Contact, remonter en haut, signature. */
export default function Footer() {
  const { dict } = useLocale();
  const year = new Date().getFullYear();

  const menuLinks = [
    { href: "#work", label: dict.header.nav.work },
    { href: "#about", label: dict.header.nav.about },
    { href: "#contact", label: dict.header.nav.contact },
  ];

  const contactLinks = [
    { href: whatsappUrl(), label: dict.footer.whatsapp, external: true },
    { href: `mailto:${site.email}`, label: dict.footer.email, external: false },
  ];

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div className="grid grid-cols-2 gap-14 sm:gap-24">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-cream/55">
                {dict.footer.menuTitle}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {menuLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-cream/75 transition-colors duration-300 hover:text-cream"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-cream/55">
                {dict.footer.contactTitle}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {contactLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group inline-flex items-center gap-1.5 text-cream/75 transition-colors duration-300 hover:text-cream"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 text-cream/40 transition-transform duration-500 ease-out-quart group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href="#top"
            className="group inline-flex items-center gap-3 text-sm text-cream/60 transition-colors duration-300 hover:text-cream"
          >
            {dict.footer.backToTop}
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line transition-colors duration-500 ease-out-quart group-hover:border-accent group-hover:text-accent">
              <ArrowUp className="h-4 w-4 transition-transform duration-500 ease-out-quart group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>{interpolate(dict.footer.copyright, { year })}</p>
          <p>{dict.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
