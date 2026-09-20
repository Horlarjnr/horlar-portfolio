interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment} gap-3`}>
      <span className="flex items-center gap-2 text-sm font-medium text-blue-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-accent" />
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
        {title}{" "}
        {highlight && <span className="text-blue-accent">{highlight}</span>}
      </h2>
      {description && (
        <p className="max-w-2xl text-navy-900/60">{description}</p>
      )}
    </div>
  );
}
