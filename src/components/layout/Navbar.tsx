import { useEffect, useState } from "react";
import { Code2, Download, Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-6">
      <div className="container-page">
        <nav
          className={`flex h-14 items-center justify-between gap-3 rounded-full border border-blue-accent/25 bg-navy-900/90 px-4 backdrop-blur-md transition-shadow duration-300 sm:px-5 ${
            scrolled ? "shadow-glow" : "shadow-[0_0_0_1px_rgba(47,140,255,0.08)]"
          }`}
        >
          {/* Brand */}
          <a
            href="#home"
            className="flex flex-none items-center gap-2 text-base font-bold text-white"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-accent/30 bg-blue-accent/10 text-blue-bright">
              <Code2 className="h-4 w-4" />
            </span>
            <span className="whitespace-nowrap">
              Horlar<span className="text-blue-bright">.dev</span>
            </span>
          </a>

          {/* Centered links */}
          <ul className="hidden flex-1 items-center justify-center gap-7 md:flex">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-white" : "text-white/50 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-blue-bright transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right: availability badge + CV + mobile toggle */}
          <div className="flex flex-none items-center gap-2.5">
            <span className="hidden items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.08] px-3.5 py-1.5 text-xs font-medium text-emerald-300 lg:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {site.availabilityShort}
            </span>

            <a
              href={site.cvPath}
              download
              aria-label="Download CV"
              className="hidden h-9 w-9 flex-none items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-blue-bright hover:text-blue-bright md:inline-flex"
              title="Download CV"
            >
              <Download className="h-4 w-4" />
            </a>

            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden rounded-2xl border border-blue-accent/20 bg-navy-900/95 backdrop-blur-md transition-[max-height,margin,opacity] duration-300 md:hidden ${
            open ? "mt-2 max-h-96 opacity-100" : "mt-0 max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1 p-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex items-center justify-between gap-2 px-3 pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {site.availabilityShort}
              </span>
            </li>
            <li className="pt-2">
              <a
                href={site.cvPath}
                download
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-white hover:border-blue-bright hover:text-blue-bright"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
