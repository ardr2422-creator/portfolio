"use client";

import { useState, type FormEvent } from "react";
import { useLocale } from "@/components/LocaleProvider";
import Accent from "@/components/ui/Accent";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowUpRight, WhatsAppIcon } from "@/components/ui/icons";
import { site, whatsappUrl } from "@/data/site";

/**
 * Endpoint de formulaire optionnel (Formspree, Web3Forms, etc.).
 * → Défini via la variable d'env NEXT_PUBLIC_CONTACT_FORM_ENDPOINT sur Vercel.
 * Sans endpoint, le formulaire reste fonctionnel : il ouvre le client email
 * du visiteur avec le message pré-rempli (fallback mailto, zéro backend).
 */
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

type FormStatus = "idle" | "sending" | "sent" | "error" | "mailto";

/** Section « discovery call » : CTA WhatsApp + formulaire simple. */
export default function Contact() {
  const { dict } = useLocale();
  const [status, setStatus] = useState<FormStatus>("idle");
  const f = dict.contact.form;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    if (FORM_ENDPOINT) {
      setStatus("sending");
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        form.reset();
        setStatus("sent");
      } catch {
        setStatus("error");
      }
    } else {
      const subject = encodeURIComponent(`${f.mailtoSubject} — ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("mailto");
    }
  }

  const statusText: Record<FormStatus, string> = {
    idle: "",
    sending: f.sending,
    sent: f.sent,
    error: f.error,
    mailto: f.mailto,
  };

  const inputClass =
    "w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-base text-cream placeholder:text-cream/30 transition-colors duration-300 focus:border-accent focus:outline-none";
  const labelClass = "mb-2 block text-[11px] uppercase tracking-[0.2em] text-cream/55";

  return (
    <section id="contact" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <SectionLabel>{dict.contact.label}</SectionLabel>
        </Reveal>

        <div className="mt-10 grid gap-14 sm:mt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          {/* Invitation + CTA WhatsApp */}
          <div>
            <Reveal delay={80}>
              <h2 className="text-4xl font-medium tracking-tight sm:text-6xl">
                <Accent text={dict.contact.title} />
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-cream/65 sm:text-lg">
                {dict.contact.body}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-col items-start gap-6">
                <a
                  href={whatsappUrl(dict.contact.whatsappPrefill)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-accent py-2 pl-6 pr-2 text-ink transition-transform duration-500 ease-out-quart hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="text-sm font-medium sm:text-base">
                    {dict.contact.whatsappCta}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/10 transition-transform duration-500 ease-out-quart group-hover:-translate-y-px group-hover:translate-x-0.5">
                    <WhatsAppIcon className="h-4 w-4" />
                  </span>
                </a>
                <p className="text-sm text-cream/55">
                  {dict.contact.emailLabel}{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="text-cream underline-offset-4 transition-colors hover:text-accent hover:underline"
                  >
                    {site.email}
                  </a>
                </p>
              </div>
            </Reveal>
          </div>

          {/* Formulaire simple : nom, email, message */}
          <Reveal delay={200}>
            <form onSubmit={handleSubmit}>
              <p className="text-[11px] uppercase tracking-[0.25em] text-cream/55">
                {dict.contact.formTitle}
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    {f.name}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder={f.namePlaceholder}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    {f.email}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={f.emailPlaceholder}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="contact-message" className={labelClass}>
                  {f.message}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder={f.messagePlaceholder}
                  className={`${inputClass} resize-y`}
                />
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-5">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex cursor-pointer items-center gap-3 rounded-full border border-cream/25 py-2 pl-6 pr-2 text-sm font-medium transition-colors duration-500 ease-out-quart hover:border-cream hover:bg-cream hover:text-ink active:scale-[0.98] disabled:cursor-wait disabled:opacity-50"
                >
                  {status === "sending" ? f.sending : f.submit}
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors duration-500 group-hover:bg-ink/10">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-quart group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </button>
                <p
                  aria-live="polite"
                  className={`text-sm ${status === "error" ? "text-accent" : "text-cream/65"}`}
                >
                  {statusText[status]}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
