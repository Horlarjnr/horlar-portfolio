import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/data/site";

const projectTypes = ["Web App", "Landing Page", "Dashboard"] as const;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState<(typeof projectTypes)[number]>(
    "Web App"
  );
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = `Project inquiry from ${name || "your site"} — ${projectType}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${projectType}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-full flex-col gap-5 rounded-3xl border border-navy-900/[0.06] bg-white p-6 shadow-card sm:p-8"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-widest text-navy-900/40">
          Project Inquiry
        </span>
        <span className="rounded-full bg-blue-soft px-3 py-1 font-mono text-[11px] text-blue-accent">
          new_message()
        </span>
      </div>

      <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-wide text-navy-900/40">
        Your Name
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Ada Lovelace"
          className="rounded-xl border border-navy-900/10 bg-navy-900/[0.02] px-4 py-3 text-sm font-normal normal-case text-navy-900 placeholder:text-navy-900/30 focus:border-blue-accent focus:outline-none"
        />
      </label>

      <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-wide text-navy-900/40">
        Email Address
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e.g. ada@studio.com"
          className="rounded-xl border border-navy-900/10 bg-navy-900/[0.02] px-4 py-3 text-sm font-normal normal-case text-navy-900 placeholder:text-navy-900/30 focus:border-blue-accent focus:outline-none"
        />
      </label>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-navy-900/40">
          Project Type
        </span>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setProjectType(type)}
              aria-pressed={projectType === type}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                projectType === type
                  ? "border-navy-900 bg-navy-900 text-white"
                  : "border-navy-900/10 bg-navy-900/[0.02] text-navy-900/60 hover:border-navy-900/25"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <label className="flex flex-1 flex-col gap-2 text-xs font-semibold uppercase tracking-wide text-navy-900/40">
        Project Details
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your goals, stack preferences, and target timeline…"
          rows={4}
          className="min-h-[120px] flex-1 resize-none rounded-xl border border-navy-900/10 bg-navy-900/[0.02] px-4 py-3 text-sm font-normal normal-case text-navy-900 placeholder:text-navy-900/30 focus:border-blue-accent focus:outline-none"
        />
      </label>

      <button
        type="submit"
        className="mt-1 flex items-center justify-center gap-2 rounded-full bg-navy-900 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
      >
        Send Message
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
