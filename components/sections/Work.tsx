"use client";

import { useLocale } from "@/components/LocaleProvider";
import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";

/** Liste des projets — l'ordre et le contenu se gèrent dans data/projects.ts. */
export default function Work() {
  const { dict } = useLocale();

  return (
    <section id="work" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        {/* Titre de section pour lecteurs d'écran (hiérarchie h1 → h2 → h3) */}
        <h2 className="sr-only">{dict.work.label}</h2>
        <Reveal>
          <SectionLabel>{dict.work.label}</SectionLabel>
        </Reveal>

        <div className="mt-10 flex flex-col gap-6 sm:mt-14 sm:gap-10">
          {projects.map((project) => (
            <Reveal key={project.slug}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
