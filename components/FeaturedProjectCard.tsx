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
    <article aria-label={title}>
      <a
        href={withUtm(href, noUtm)}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        className="group flex flex-col overflow-hidden rounded-2xl border border-accent/40 bg-card p-3.5 transition duration-150 ease-out hover:-translate-y-0.5 hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        {/* Header do Card com Badge e Seta */}
        <div className="mb-2.5 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-accent">
            <span className="size-1.5 rounded-full bg-accent" />
            {badge}
          </span>
          <span className="flex items-center gap-1 text-xs font-medium text-muted transition-colors group-hover:text-accent">
            <span>{ctaText}</span>
            <FiArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>

        {/* Print do Projeto com aspecto 16:9 */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border/80 bg-black">
          <Image
            src={image}
            alt={`Print do projeto ${title}`}
            fill
            sizes="(max-width: 480px) 100vw, 448px"
            className="object-cover object-top transition duration-300 ease-out group-hover:scale-[1.02]"
          />
        </div>

        {/* Conteúdo: Título e Descrição */}
        <div className="mt-3 flex flex-col">
          <h2 className="text-base font-semibold text-fg transition-colors group-hover:text-accent">
            {title}
          </h2>
          <p className="mt-1 text-xs leading-relaxed text-muted">{description}</p>
        </div>

        {/* Linha de Resultado em Destaque */}
        {resultMetric && (
          <div className="mt-3 flex items-center gap-2 rounded-lg border border-accent/20 bg-accent/10 px-3 py-2 text-xs font-medium text-accent">
            <FiCheckCircle aria-hidden="true" className="size-4 shrink-0 text-accent" />
            <span className="leading-snug">{resultMetric}</span>
          </div>
        )}

        {/* Tags de tecnologias */}
        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border bg-black/40 px-2 py-0.5 text-[10px] font-medium text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </a>
    </article>
  );
}
