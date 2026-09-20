import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms — use to cascade multiple Reveal siblings. */
  delayMs?: number;
}

/**
 * Fades and slides its children up into place the first time they scroll
 * into view, then stays visible (never re-hides on scroll back up).
 * With prefers-reduced-motion it becomes a short fade with no movement
 * (see the .reveal rules in index.css).
 */
export default function Reveal({ children, className = "", delayMs = 0 }: RevealProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
