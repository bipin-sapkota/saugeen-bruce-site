const toneClasses: Record<"default" | "surface" | "muted", string> = {
  default: "bg-transparent border border-transparent shadow-none",
  surface: "surface shadow-[0_18px_45px_rgba(18,33,27,0.12)]",
  muted: "surface-soft border border-border shadow-none",
};

const densityClasses: Record<"default" | "compact", string> = {
  default: "py-14 sm:py-18 lg:py-20",
  compact: "py-10 sm:py-12",
};

export function Section({
  title,
  eyebrow,
  description,
  children,
  className = "",
  tone = "default",
  divider = false,
  density = "default",
}: {
  title?: string;
  eyebrow?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  tone?: "default" | "surface" | "muted";
  divider?: boolean;
  density?: "default" | "compact";
}) {
  const dividerClasses = divider ? "border-t border-border pt-10" : "";
  return (
    <section
      className={`relative w-full px-6 sm:px-10 ${densityClasses[density]} ${toneClasses[tone]} ${dividerClasses} ${className}`}
    >
      <div className="space-y-5 sm:space-y-6">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.35em] text-muted">{eyebrow}</p>
        )}
        {title && <h2 className="type-h2 text-[var(--text)]">{title}</h2>}
        {description && <p className="type-body text-muted">{description}</p>}
      </div>
      {children && (
        <div className="space-y-6 pt-10 lg:pt-12">{children}</div>
      )}
    </section>
  );
}
