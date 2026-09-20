import SectionHeading from "./ui/SectionHeading";
import { site } from "@/data/site";

export default function About() {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeading
        eyebrow="About Me"
        title={site.aboutHeading.line1}
        highlight={site.aboutHeading.line2}
      />

      <div className="flex flex-col gap-4 text-navy-900/70">
        {site.aboutParagraphs.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <blockquote className="rounded-2xl border border-blue-accent/15 bg-blue-soft px-6 py-5 text-navy-900/80">
        <p className="leading-relaxed">&ldquo;{site.statement}&rdquo;</p>
      </blockquote>
    </div>
  );
}
