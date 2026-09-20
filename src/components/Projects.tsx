import { useState } from "react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import ProjectCard from "./ProjectCard";
import ProjectGallery from "./ProjectGallery";
import { Project, projects } from "@/data/projects";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <Container className="flex flex-col gap-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="My Projects"
              title="Featured"
              highlight="Projects"
              description="Real-world applications built with modern technologies to solve actual problems and create value."
            />
            <a
              href={`https://github.com/Horlarjnr`}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-blue-accent hover:text-navy-900"
            >
              View All Projects →
            </a>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delayMs={i * 100}>
              <ProjectCard project={project} onOpenGallery={setActive} />
            </Reveal>
          ))}
        </div>
      </Container>

      {active && (
        <ProjectGallery project={active} onClose={() => setActive(null)} />
      )}
    </section>
  );
}
