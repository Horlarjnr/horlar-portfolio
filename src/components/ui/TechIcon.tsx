import { TechIcon as TechIconData } from "@/data/techStack";

interface TechIconProps {
  icon: TechIconData;
  className?: string;
}

/** Solid brand mark rendered from the path data in src/data/techStack.ts. */
export default function TechIcon({ icon, className = "h-7 w-7" }: TechIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={icon.color}
      className={className}
      role="img"
      aria-label={icon.label}
    >
      <title>{icon.label}</title>
      <path d={icon.path} />
    </svg>
  );
}
