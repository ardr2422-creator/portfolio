"use client";

import { useLocale } from "@/components/LocaleProvider";
import LanguageSwitch from "@/components/ui/LanguageSwitch";

/** Barre haute posée sur le hero : identité à gauche, ancres + langue à droite. */
export default function Header() {
  const { dict } = useLocale();

  const nav = [
    { href: "#work", label: dict.header.nav.work },
    { href: "#about", label: dict.header.nav.about },
    { href: "#contact", label: dict.header.nav.contact },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-6 sm:px-8">
        <a href="#top" className="leading-tight">
          <span className="block text-base font-medium">{dict.header.name}</span>
          <span className="block text-xs text-cream/55">{dict.header.role}</span>
        </a>

        <div className="flex items-center gap-4 sm:gap-8">
          <nav className="hidden items-center gap-7 sm:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-cream/70 transition-colors duration-300 hover:text-cream"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <LanguageSwitch />
        </div>
      </div>
    </header>
  );
}
