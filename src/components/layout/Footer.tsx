import { Code2, Facebook, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { site, socials } from "@/data/site";

const year = new Date().getFullYear();

const footerSocials = [
  { label: "GitHub", href: socials.github, icon: Github },
  { label: "LinkedIn", href: socials.linkedin, icon: Linkedin },
  { label: "X", href: socials.x, icon: Twitter },
  { label: "Facebook", href: socials.facebook, icon: Facebook },
  { label: "Email", href: socials.email, icon: Mail },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/70">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-accent/15 text-blue-bright">
            <Code2 className="h-5 w-5" />
          </span>
          <span className="font-semibold">{site.name}</span>
        </div>

        <ul className="flex items-center gap-4">
          {footerSocials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-blue-bright hover:text-blue-bright"
              >
                <Icon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-1 text-sm sm:items-end">
          <p>
            © {year} {site.brand}. All rights reserved.
          </p>
          <p className="text-white/40">Built with passion, code and coffee.</p>
        </div>
      </div>
    </footer>
  );
}
