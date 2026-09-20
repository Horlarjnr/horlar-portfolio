import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { contactDetails } from "@/data/site";

const iconMap: Record<string, typeof MapPin> = {
  Location: MapPin,
  Email: Mail,
  "Phone / WhatsApp": Phone,
  GitHub: Github,
  LinkedIn: Linkedin,
  X: Twitter,
  Facebook: Facebook,
};

export default function ContactInfo() {
  return (
    <div className="flex h-full flex-col gap-5 rounded-2xl border border-navy-900/[0.06] bg-white p-6 shadow-card">
      <span className="flex items-center gap-2 text-sm font-medium text-blue-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-accent" />
        Let&apos;s Connect
      </span>

      <ul className="flex flex-col gap-4">
        {contactDetails.map(({ label, value, href }) => {
          const Icon = iconMap[label] ?? Mail;
          const content = (
            <>
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-blue-soft text-blue-accent">
                <Icon className="h-4 w-4" />
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="text-xs font-medium uppercase tracking-wide text-navy-900/40">
                  {label}
                </span>
                <span className="truncate text-sm font-medium text-navy-900">
                  {value}
                </span>
              </span>
            </>
          );

          return (
            <li key={label}>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-3 rounded-xl transition-colors hover:bg-blue-soft/60"
                >
                  {content}
                </a>
              ) : (
                <div className="flex items-center gap-3">{content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
