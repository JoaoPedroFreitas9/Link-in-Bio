import Image from "next/image";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";
import type { FeaturedProject } from "@/data/links";
import { isExternal, withUtm } from "@/lib/utm";

export function FeaturedProjectCard({
  badge = "Projeto em destaque",
  title,
  description,
  resultMetric,
  image,
  href,
  ctaText = "Ver projeto",
  tags,
  noUtm = false,
}: FeaturedProject) {
  const external = isExternal(href);

  return (
    <a
      href={withUtm(href, noUtm)}
      aria-label={`${badge}: ${title} — ${ctaText}`}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className="group relative overflow-hidden block rounded-2xl border border-accent/40 bg-card p-3.5 transition duration-150 ease-out hover:-translate-y-px hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      {/* Spotlight Glow de Topo */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 h-24 w-3/4 rounded-full bg-accent/15 blur-2xl transition-all duration-300 group-hover:bg-accent/25"
      />
      {/* Feixe de luz na borda superior (Border Beam Spotlight) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 h-[2px] w-3/5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-90 transition-all duration-300 group-hover:w-4/5 group-hover:opacity-100"
      />
      <span className="mb-3 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-accent">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
          {badge}
        </span>
        <span
          aria-hidden="true"
          className="flex items-center gap-1 text-sm font-medium text-muted transition-colors group-hover:text-accent"
        >
          {ctaText}
          <FiArrowUpRight className="size-4 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </span>

      <span className="relative block aspect-[16/7] w-full overflow-hidden rounded-xl border border-border bg-black">
        <Image
          src={image}
          alt={`Print do topo do site ${title}`}
          fill
          sizes="(max-width: 480px) calc(100vw - 60px), 420px"
          className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.02]"
        />
      </span>

      <span className="mt-3 block text-base font-semibold text-fg">{title}</span>
      <span className="mt-1 block text-sm leading-relaxed text-muted">{description}</span>

      {resultMetric && (
        <span className="mt-3 flex items-start gap-2 rounded-lg border border-accent/20 bg-accent/10 px-3 py-2 text-sm font-medium text-accent">
          <FiCheckCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          <span className="leading-snug">{resultMetric}</span>
        </span>
      )}

      {tags && tags.length > 0 && (
        <span className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border px-2 py-0.5 text-xs font-medium text-muted"
            >
              {tag}
            </span>
          ))}
        </span>
      )}
    </a>
  );
}
