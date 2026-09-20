import { ArrowUpRight } from "lucide-react";
import AssetImage from "./ui/AssetImage";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onOpenGallery: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenGallery }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-navy-900/[0.06] bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-blue-accent/30 hover:shadow-card-hover">
      <button
        type="button"
        onClick={() => onOpenGallery(project)}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-navy-900/[0.04] text-left"
        aria-label={`View screenshots for ${project.name}`}
      >
        <AssetImage
          src={project.image}
          alt={`${project.name} screenshot`}
          className="h-full w-full"
          imgClassName="transition-transform duration-500 group-hover:scale-105"
        />
      </button>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="flex items-center gap-1.5 text-lg font-semibold text-navy-900">
            {project.name}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.name} live site`}
                className="text-navy-900/30 transition-colors hover:text-blue-accent"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </h3>
          <p className="text-sm text-navy-900/50">{project.category}</p>
        </div>

        <p className="flex-1 text-sm leading-relaxed text-navy-900/65">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-blue-soft px-3 py-1 text-xs font-medium text-blue-accent"
            >
              {tech}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => onOpenGallery(project)}
          className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-blue-accent transition-colors hover:text-navy-900"
        >
          View Project
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
}
