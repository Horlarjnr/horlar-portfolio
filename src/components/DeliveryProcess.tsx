import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { processPhases } from "@/data/process";

export default function DeliveryProcess() {
  return (
    <section className="bg-blue-soft/40 py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="My Process"
          title="How I"
          highlight="Deliver"
          description="A straightforward path from idea to a live, working product — the same process behind EventEase, Study Circle, and TaskFlow."
        />

        {/* Desktop: horizontal rail with alternating elevation */}
        <div className="relative hidden lg:grid lg:grid-cols-5 lg:gap-6">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-transparent via-blue-accent/40 to-transparent"
          />
          {processPhases.map((phase, i) => (
            <div
              key={phase.index}
              className={`relative flex flex-col items-start gap-4 ${
                i % 2 === 1 ? "lg:mt-10" : ""
              }`}
            >
              <span className="relative z-10 flex h-12 w-12 flex-none items-center justify-center rounded-full border-2 border-blue-accent bg-white font-mono text-sm font-bold text-blue-accent">
                {phase.index}
              </span>

              <div className="flex w-full flex-col gap-3 rounded-2xl border border-navy-900/[0.06] bg-white p-5 shadow-card">
                <div>
                  <h3 className="text-base font-semibold text-navy-900">
                    {phase.title}
                  </h3>
                  <p className="text-xs font-medium text-blue-accent">
                    {phase.subtitle}
                  </p>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {phase.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-xs leading-relaxed text-navy-900/60"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-navy-900/30" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile / tablet: vertical stack with a large watermark index */}
        <ol className="flex flex-col gap-5 lg:hidden">
          {processPhases.map((phase) => (
            <li
              key={phase.index}
              className="relative overflow-hidden rounded-2xl border border-navy-900/[0.06] bg-white p-5 shadow-card"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-4 font-mono text-6xl font-bold text-navy-900/[0.04]"
              >
                {phase.index}
              </span>
              <div className="relative flex flex-col gap-3">
                <div>
                  <h3 className="text-base font-semibold text-navy-900">
                    {phase.title}
                  </h3>
                  <p className="text-xs font-medium text-blue-accent">
                    {phase.subtitle}
                  </p>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {phase.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm leading-relaxed text-navy-900/60"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-navy-900/30" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
