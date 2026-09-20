import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { site } from "@/data/site";

const projectTypes = ["Web App", "Landing Page", "Dashboard"] as const;

type Status = "idle" | "sending" | "success" | "error";

// Messages are delivered to your inbox by Web3Forms. The access key lives in
// a .env file (VITE_WEB3FORMS_KEY=...) so it isn't hard-coded here.
const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const accessKey = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState<(typeof projectTypes)[number]>(
    "Web App"
  );
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  // Hidden "trap" field: real visitors never see it, spam bots fill it in.
  const [trap, setTrap] = useState("");

  // Fallback used only when no access key is configured yet.
  const openEmailApp = () => {
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    if (trap) {
      // A bot filled the hidden field: pretend it worked, send nothing.
      setStatus("success");
      return;
    }

    if (!accessKey) {
      openEmailApp();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New portfolio inquiry from ${name} — ${projectType}`,
          from_name: `${site.brand} portfolio`,
          name,
          email,
          project_type: projectType,
          message,
        }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setProjectType("Web App");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-navy-900/[0.06] bg-white p-6 shadow-card sm:p-8"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-widest text-navy-900/40">
          Project Inquiry
        </span>
        <span className="rounded-full bg-blue-soft px-3 py-1 font-mono text-[11px] text-blue-accent">
          new_message()
        </span>
      </div>

      {/* honeypot: hidden from people, visible to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Leave this field empty
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={trap}
            onChange={(e) => setTrap(e.target.value)}
          />
        </label>
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
        disabled={status === "sending"}
        className="mt-1 flex items-center justify-center gap-2 rounded-full bg-navy-900 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {status === "sending" ? (
          <>
            Sending…
            <Loader2 className="h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4" />
          </>
        )}
      </button>

      <div role="status" aria-live="polite">
        {status === "success" && (
          <p className="flex items-start gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none" />
            Thanks! Your message has been sent. I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
            Sorry, your message couldn&apos;t be sent. Please try again, or email me at{" "}
            <a href={`mailto:${site.email}`} className="font-semibold underline">
              {site.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
