import { FiChevronRight } from "react-icons/fi";
import type { LinkItem } from "@/data/links";
import { isExternal, withUtm } from "@/lib/utm";

const base =
  "group relative overflow-hidden flex items-center gap-4 rounded-xl border p-3 pr-4 transition duration-150 ease-out hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const styles = {
  default: {
    card: "bg-card text-fg hover:border-accent",
    icon: "bg-accent/20 text-accent",
    description: "text-muted",
    chevron: "text-muted group-hover:text-accent",
  },
  primary: {
    card: "border-accent bg-accent text-on-accent shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_28px_rgba(56,189,248,0.45)] hover:brightness-105",
    icon: "bg-on-accent/15 text-on-accent",
    description: "text-on-accent/75",
    chevron: "text-on-accent",
  },
};

export function LinkCard({
  title,
  description,
  href,
  icon: Icon,
  highlight = false,
  variant = "default",
  noUtm = false,
}: LinkItem) {
  const s = styles[variant];
  const border = variant === "default" ? (highlight ? "border-accent" : "border-border") : "";
  const external = isExternal(href);

  return (
    <a
      href={withUtm(href, noUtm)}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`${base} ${border} ${s.card}`}
    >
      {variant === "primary" && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <span className="animate-shimmer absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/85 to-transparent blur-[1px]" />
        </span>
      )}
      <span
        aria-hidden="true"
        className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${s.icon}`}
      >
        <Icon className="size-5" />
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="truncate font-medium">{title}</span>
        {description && (
          <span className={`truncate text-sm ${s.description}`}>{description}</span>
        )}
      </span>
      <FiChevronRight
        aria-hidden="true"
        className={`size-5 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 ${s.chevron}`}
      />
    </a>
  );
}
