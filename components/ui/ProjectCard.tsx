"use client";

import Image from "next/image";
import { useLocale } from "@/components/LocaleProvider";
import { ArrowUpRight } from "@/components/ui/icons";
import type { Project } from "@/data/projects";

/**
 * Carte projet (format « Selected Work ») : titre / contexte client, année —
 * description / techs, flèche, puis screenshot dans un cadre navigateur.
 * Toute la carte est cliquable si le projet a une URL live.
 */
export default function ProjectCard({ project }: { project: Project }) {
  const { locale, dict } = useLocale();

  const displayUrl = project.url?.replace(/^https?:\/\//, "");

  const content = (
    <>
      <div className="flex items-start justify-between gap-5 px-6 pt-7 sm:px-10 sm:pt-10">
        <div className="min-w-0">
          <h3 className="text-2xl font-medium tracking-tight sm:text-[1.75rem]">
            {project.name}
          </h3>
          <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-cream/65 sm:text-[15px]">
            <span className="font-medium text-cream/90">
              {project.client[locale]}, {project.year}
            </span>
            {" — "}
            {project.tagline[locale]}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-line px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-cream/55"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {project.url ? (
          <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-cream/80 transition-colors duration-500 ease-out-quart group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-quart group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        ) : (
          <span className="mt-1 shrink-0 rounded-full border border-line px-3.5 py-1.5 text-[11px] uppercase tracking-[0.15em] text-cream/55">
            {dict.work.comingSoon}
          </span>
        )}
      </div>

      {/* Screenshot dans un cadre navigateur, fondu dans le bas de la carte */}
      <div className="mt-8 px-4 sm:mt-10 sm:px-8">
        <div className="overflow-hidden rounded-t-xl border border-b-0 border-line bg-ink-soft">
          <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-cream/20" />
            <span className="h-2 w-2 rounded-full bg-cream/20" />
            <span className="h-2 w-2 rounded-full bg-cream/20" />
            {displayUrl && (
              <span className="ml-3 truncate text-[11px] text-cream/55">{displayUrl}</span>
            )}
          </div>
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.name} — ${project.client[locale]}`}
              width={1420}
              height={900}
              sizes="(max-width: 640px) 92vw, (max-width: 1152px) 88vw, 1024px"
              className="w-full transition-transform duration-700 ease-out-quart group-hover:scale-[1.015]"
            />
          ) : (
            /* Placeholder propre : jamais de build cassé pour un asset manquant */
            <div className="flex aspect-[1420/900] items-center justify-center">
              <span className="accent-em text-2xl text-cream/40">
                {dict.work.imagePlaceholder}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );

  const cardClass =
    "group block overflow-hidden rounded-3xl border border-line bg-white/[0.02] transition-colors duration-500 ease-out-quart hover:border-cream/25";

  return project.url ? (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className={cardClass}>
      {content}
    </a>
  ) : (
    <div className={cardClass}>{content}</div>
  );
}
