import { Award } from "lucide-react";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <div className="flex h-full flex-col gap-5 rounded-2xl border border-navy-900/[0.06] bg-white p-6 shadow-card">
      <span className="flex items-center gap-2 text-sm font-medium text-blue-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-accent" />
        Certifications
      </span>

      <ul className="flex flex-col gap-5">
        {certifications.map((cert) => (
          <li key={cert.name} className="flex gap-3">
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-blue-soft text-blue-accent">
              <Award className="h-5 w-5" />
            </span>
            <div className="flex flex-col">
              <h3 className="text-sm font-semibold text-navy-900">
                {cert.name}
              </h3>
              <p className="text-sm text-navy-900/60">{cert.organization}</p>
              <p className="mt-1 text-xs font-medium text-navy-900/40">
                {cert.date}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
