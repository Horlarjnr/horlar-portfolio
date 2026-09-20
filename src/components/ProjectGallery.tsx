import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, X } from "lucide-react";
import AssetImage from "./ui/AssetImage";
import { Project } from "@/data/projects";

interface ProjectGalleryProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectGallery({ project, onClose }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);

  const goPrev = () =>
    setIndex((i) => (i === 0 ? project.gallery.length - 1 : i - 1));
  const goNext = () =>
    setIndex((i) => (i === project.gallery.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/80 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} project gallery`}
      onClick={onClose}
    >
      <div
        className="flex max-h-full w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-navy-900/[0.06] px-5 py-4">
          <div>
            <h3 className="text-lg font-semibold text-navy-900">
              {project.name}
            </h3>
            <p className="text-sm text-navy-900/50">{project.category}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="flex h-9 w-9 items-center justify-center rounded-full text-navy-900/50 transition-colors hover:bg-navy-900/5 hover:text-navy-900"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="relative aspect-[16/10] w-full bg-navy-900/[0.04]">
          <AssetImage
            src={project.gallery[index]}
            alt={`${project.name} screenshot ${index + 1}`}
            className="h-full w-full"
          />

          {project.gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous screenshot"
                className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy-900 shadow-card transition-colors hover:bg-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next screenshot"
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy-900 shadow-card transition-colors hover:bg-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {project.gallery.length > 1 && (
          <div className="flex gap-2 overflow-x-auto border-b border-navy-900/[0.06] px-5 py-3">
            {project.gallery.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show screenshot ${i + 1}`}
                aria-current={i === index}
                className={`h-14 w-20 flex-none overflow-hidden rounded-lg border-2 transition-colors ${
                  i === index ? "border-blue-accent" : "border-transparent"
                }`}
              >
                <AssetImage
                  src={src}
                  alt={`${project.name} thumbnail ${i + 1}`}
                  className="h-full w-full"
                />
              </button>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
          <p className="max-w-md text-sm leading-relaxed text-navy-900/65">
            {project.description}
          </p>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-navy-900/10 px-4 py-2 text-sm font-medium text-navy-900 transition-colors hover:border-blue-accent hover:text-blue-accent"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-blue-accent px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                <ExternalLink className="h-4 w-4" />
                Live Site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
