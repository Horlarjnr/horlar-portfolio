import SectionHeading from "./ui/SectionHeading";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <div className="flex h-full flex-col gap-6 rounded-2xl border border-navy-900/[0.06] bg-white p-6 shadow-card sm:p-8">
      <SectionHeading
        eyebrow="My Skills"
        title="Technical"
        highlight="Skills"
        description="Technologies and tools I work with."
      />

      <div className="flex flex-col gap-6">
        {skillCategories.map((category) => (
          <div key={category.title} className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-navy-900/50">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="group flex items-center gap-2 rounded-full border border-navy-900/[0.08] bg-white px-3.5 py-2 text-sm text-navy-900/80 transition-colors hover:border-blue-accent/40"
                  title={`${skill.name} — ${skill.proficiency}`}
                >
                  <span
                    className="h-2 w-2 flex-none rounded-full"
                    style={{ backgroundColor: skill.color }}
                    aria-hidden
                  />
                  <span className="font-medium">{skill.name}</span>
                  <span className="hidden text-xs text-navy-900/40 sm:inline">
                    · {skill.proficiency}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
