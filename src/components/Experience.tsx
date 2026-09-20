import SectionHeading from "./ui/SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <div
      id="experience"
      className="flex h-full scroll-mt-24 flex-col gap-6 rounded-2xl border border-navy-900/[0.06] bg-white p-6 shadow-card sm:p-8"
    >
      <SectionHeading eyebrow="My Journey" title="Work" highlight="Experience" />

      <ol className="relative flex flex-col gap-8 border-l border-navy-900/[0.08] pl-6">
        {experience.map((entry) => (
          <li key={`${entry.role}-${entry.organization}`} className="relative">
            <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full border-2 border-white bg-blue-accent shadow-[0_0_0_3px_rgba(47,140,255,0.15)]" />
            <p className="text-xs font-medium uppercase tracking-wide text-blue-accent">
              {entry.date}
            </p>
            <h3 className="mt-1 text-base font-semibold text-navy-900">
              {entry.role}{" "}
              <span className="font-normal text-navy-900/50">
                — {entry.organization}
              </span>
            </h3>
            <ul className="mt-2 flex flex-col gap-1.5 text-sm text-navy-900/65">
              {entry.points.map((point) => (
                <li key={point} className="flex gap-2 leading-relaxed">
                  <span className="mt-2 h-1 w-1 flex-none rounded-full bg-navy-900/30" />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
