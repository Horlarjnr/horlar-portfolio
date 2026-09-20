import { Download } from "lucide-react";
import Container from "./ui/Container";
import AssetImage from "./ui/AssetImage";
import TechIcon from "./ui/TechIcon";
import { site } from "@/data/site";
import { techStack } from "@/data/techStack";

/** Page colour around the card. The corner notch is painted in this colour,
 *  so the section background is solid this colour at the notch height. */
const PAGE_BG = "#EAF1FB";

/** Quarter-circle "inverted corner" used to round the notch's convex corners. */
const cornerMask = {
  background: `radial-gradient(circle at 0 100%, transparent calc(var(--r) - 0.5px), ${PAGE_BG} var(--r))`,
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-28"
      style={{
        background: `linear-gradient(180deg, ${PAGE_BG} 0, ${PAGE_BG} 340px, #FFFFFF 100%)`,
      }}
    >
      {/* faint accent dots on the light page, as in the reference */}
      <span
        aria-hidden
        className="absolute right-[3.5%] top-[7.5rem] hidden h-1.5 w-1.5 rounded-full bg-blue-accent/70 md:block"
      />
      <span
        aria-hidden
        className="absolute left-[2.5%] top-[62%] hidden h-1 w-1 rounded-full bg-blue-accent/50 md:block"
      />

      <Container>
        {/* --nw/--nh: size of the notch cut into the top-right corner; --r: its corner radius */}
        <div
          className="relative overflow-hidden rounded-[2rem] rounded-tr-none shadow-2xl sm:rounded-[2.5rem] sm:rounded-tr-none [--nh:2.25rem] [--nw:5.5rem] [--r:1rem] sm:[--nh:3.5rem] sm:[--nw:11rem] sm:[--r:1.4rem]"
          style={{
            background:
              "linear-gradient(115deg, #050E1F 0%, #061630 45%, #0B2B55 80%, #103A70 100%)",
          }}
        >
          {/* ── notch in the top-right corner (curved on every corner) ── */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 z-20 h-[var(--nh)] w-[var(--nw)] rounded-bl-[var(--r)]"
            style={{ background: PAGE_BG }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 z-20 h-[var(--r)] w-[var(--r)]"
            style={{ right: "var(--nw)", ...cornerMask }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 z-20 h-[var(--r)] w-[var(--r)]"
            style={{ top: "var(--nh)", ...cornerMask }}
          />

          <div className="relative lg:min-h-[35rem]">
            {/* ───────── Left: intro ───────── */}
            {/* container-type lets the heading size itself to the column width */}
            <div className="relative z-10 flex flex-col items-start gap-6 p-5 sm:p-8 lg:min-h-[35rem] lg:w-[48%] lg:p-10 [container-type:inline-size]">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/70">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-accent/25">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-bright" />
                </span>
                {site.role}
                <span className="text-white/30">—</span>
              </span>

              <div className="flex flex-col gap-3">
                <h1 className="whitespace-nowrap font-extrabold leading-[1.05] text-white [font-size:clamp(1.75rem,10.5cqw,3.5rem)]">
                  Hi, I&apos;m <span className="text-blue-bright">{site.name}</span>
                </h1>
                <p className="font-bold leading-[1.15] text-white [font-size:clamp(1.15rem,5cqw,2rem)] [text-wrap:balance]">
                  {site.headline}
                </p>
              </div>

              <p className="max-w-[34rem] text-[0.95rem] leading-relaxed text-white/60">
                {site.statement}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-blue-bright"
                >
                  View My Projects <span aria-hidden>→</span>
                </a>
                <a
                  href={site.cvPath}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-blue-bright hover:text-blue-bright"
                >
                  Download CV <Download className="h-4 w-4" />
                </a>
              </div>

              {/* tech stack strip, pinned to the bottom of the card */}
              <ul
                aria-label="Tech stack"
                className="mt-auto flex w-full max-w-[34rem] items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4"
              >
                {techStack.map((icon) => (
                  <li key={icon.label} className="flex">
                    <TechIcon icon={icon} className="h-6 w-6 sm:h-7 sm:w-7" />
                  </li>
                ))}
              </ul>
            </div>

            {/* ───────── Right: portrait composition ─────────
                Sizes are % of this box's width and everything is anchored to
                the bottom edge, so the portrait bleeds off the bottom of the
                card like the reference. */}
            <div className="relative h-[20rem] sm:h-[28rem] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[52%]">
              {/* soft blue light across the right side of the card */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(70% 65% at 55% 42%, rgba(46,120,214,0.42) 0%, rgba(46,120,214,0) 72%)",
                }}
              />

              {/* layered translucent shapes behind the panel */}
              <div
                aria-hidden
                className="absolute left-[1%] top-[4%] h-[34%] w-[42%] rounded-[2rem] bg-[#12345F]/40"
              />
              <div
                aria-hidden
                className="absolute left-[1%] bottom-[6%] h-[52%] w-[14%] rounded-[1.5rem] bg-[#2B67B3]/30"
              />

              {/* glow under the panel */}
              <div
                aria-hidden
                className="absolute bottom-0 left-[12%] h-[38%] w-[58%] rounded-full bg-[#6EA8FF]/35 blur-3xl"
              />

              {/* light panel: chamfered top-left, rounded top-right, cut off by the card bottom */}
              <div
                aria-hidden
                className="absolute bottom-0 left-1/2 h-[92%] w-[86%] -translate-x-1/2 rounded-tr-[2.25rem] sm:left-[10%] sm:aspect-[4/5] sm:h-[88%] sm:w-auto sm:max-w-[54%] sm:translate-x-0 xl:max-w-[64%] bg-gradient-to-b from-[#DCE9FF] via-[#B4CDF7] to-[#86ADEB] [clip-path:polygon(0_18%,42%_1.5%,50%_0,100%_0,100%_100%,0_100%)]"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(65% 40% at 45% 22%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 70%)",
                  }}
                />
              </div>

              {/* portrait: a bit wider than the panel so the shoulders overlap its edges */}
              <div className="absolute bottom-0 left-1/2 h-full w-[92%] -translate-x-1/2 sm:left-[6%] sm:aspect-[4/5] sm:h-[92%] sm:w-auto sm:max-w-[58%] sm:translate-x-0 xl:max-w-[68%]">
                {/* the panel's lower-right "tail", peeking out beside the shoulder */}
                <div
                  aria-hidden
                  className="absolute -right-[5%] bottom-[3.5%] hidden h-[46%] w-[14%] sm:block rounded-b-[1rem] bg-gradient-to-b from-[#5C93E6] to-[#8DB8F7] shadow-[0_0_24px_4px_rgba(110,170,255,0.45)]"
                />
                <AssetImage
                  src="/assets/profile/profile-main.jpg"
                  alt={`Portrait of ${site.name}`}
                  className="h-full w-full"
                  imgClassName="object-top sm:object-bottom"
                />
              </div>

              {/* code card: to the right of the subject, overlapping only the panel edge */}
              <div className="absolute right-[3%] top-[19%] z-10 hidden w-[36%] min-w-[14.5rem] rounded-2xl border border-[#7DB0FF]/30 bg-[#0A1B38]/95 px-4 py-4 font-mono text-[10px] leading-[1.9] text-white/75 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] backdrop-blur sm:block xl:py-5 xl:text-[10.5px]">
                <div className="mb-3 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#EF6461]" />
                  <span className="h-2 w-2 rounded-full bg-[#3ECF8E]" />
                  <span className="h-2 w-2 rounded-full bg-[#3DB8FF]" />
                  <span className="ml-3 text-white/45">profile.ts</span>
                </div>
                <pre className="whitespace-pre font-mono">
                  <span className="text-[#7DB8FF]">const developer</span> = {"{"}
                  {"\n"}
                  {"  "}name: <span className="text-[#7FE0A6]">&quot;{site.name}&quot;</span>,{"\n"}
                  {"  "}role: <span className="text-[#7FE0A6]">&quot;{site.role}&quot;</span>,{"\n"}
                  {"  "}stack: [<span className="text-[#7FE0A6]">&quot;React&quot;</span>,{" "}
                  <span className="text-[#7FE0A6]">&quot;Next.js&quot;</span>],{"\n"}
                  {"  "}focus: <span className="text-[#7FE0A6]">&quot;real solutions&quot;</span>,{"\n"}
                  {"};"}
                </pre>
                <p className="mt-2 text-[#7DB8FF]">&gt;_</p>
              </div>

              {/* handwritten flourish: left-aligned stack with a rising underline */}
              <div
                aria-hidden
                className="absolute bottom-[6%] right-[2%] z-10 hidden select-none text-[#3B8CF0] sm:block"
              >
                <p className="font-script text-[1.45rem] font-semibold leading-[1.1] xl:text-[1.8rem]">
                  <span className="block">Build.</span>
                  <span className="block pl-1.5">Create.</span>
                  <span className="block pl-3">Improve.</span>
                </p>
                <svg viewBox="0 0 150 14" className="ml-3 mt-1 h-3.5 w-24 xl:w-28" fill="none">
                  <path
                    d="M2 12 C 40 8, 100 4, 148 2"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
