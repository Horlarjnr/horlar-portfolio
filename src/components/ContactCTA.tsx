import { useState } from "react";
import { Check, Copy, Facebook, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Container from "./ui/Container";
import ContactForm from "./ContactForm";
import { site, socials } from "@/data/site";

const socialButtons = [
  { label: "GitHub", href: socials.github, icon: Github },
  { label: "X / Twitter", href: socials.x, icon: Twitter },
  { label: "LinkedIn", href: socials.linkedin, icon: Linkedin },
  { label: "Facebook", href: socials.facebook, icon: Facebook },
];

export default function ContactCTA() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — the email is still visible and clickable
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-white pb-20 sm:pb-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* Left: pitch + direct channel */}
          <div className="relative flex flex-col justify-between gap-8 overflow-hidden rounded-3xl bg-navy-900 p-8 text-white sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 55% at 15% 0%, rgba(47,140,255,0.22) 0%, rgba(5,11,24,0) 70%)",
              }}
            />

            <div className="relative flex flex-col gap-5">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.08] px-3.5 py-1.5 text-xs font-medium text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {site.availabilityShort}
              </span>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Clean code.
                <br />
                Fast delivery.
                <br />
                <span className="text-blue-bright">Zero fluff.</span>
              </h2>

              <p className="max-w-sm leading-relaxed text-white/60">
                Based in {site.location} · {site.role} specializing in React,
                Next.js and Supabase-backed apps. Open to freelance work,
                collaborations, and full-time opportunities.
              </p>
            </div>

            <div className="relative flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                Direct Channel
              </span>
              <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <a
                  href={socials.email}
                  className="flex min-w-0 items-center gap-2.5 text-sm font-medium text-white/85 hover:text-white"
                >
                  <Mail className="h-4 w-4 flex-none text-blue-bright" />
                  <span className="truncate">{site.email}</span>
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="flex h-8 w-8 flex-none items-center justify-center rounded-lg text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-1">
                {socialButtons.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-2 text-xs font-medium text-white/75 transition-colors hover:border-blue-bright hover:text-blue-bright"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: inquiry form */}
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
