import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";

export default function Education() {
  return (
    <div
      id="education"
      className="flex h-full scroll-mt-24 flex-col gap-5 rounded-2xl border border-navy-900/[0.06] bg-white p-6 shadow-card"
    >
      <span className="flex items-center gap-2 text-sm font-medium text-blue-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-accent" />
        Education
      </span>

      <ul className="flex flex-col gap-5">
        {education.map((entry) => (
          <li key={entry.degree} className="flex gap-3">
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-blue-soft text-blue-accent">
              <GraduationCap className="h-5 w-5" />
            </span>
            <div className="flex flex-col">
              <h3 className="text-sm font-semibold text-navy-900">
                {entry.degree}
              </h3>
              <p className="text-sm text-navy-900/60">{entry.institution}</p>
              <p className="mt-1 text-xs font-medium text-navy-900/40">
                {entry.date}
              </p>
              {entry.detail && (
                <p className="mt-2 text-sm leading-relaxed text-navy-900/60">
                  {entry.detail}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
