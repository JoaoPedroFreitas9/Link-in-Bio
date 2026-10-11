import type { ServiceItem } from "@/data/links";

export function ServicesSection({ items }: { items: ServiceItem[] }) {
  return (
    <section aria-label="O que eu faço" className="flex flex-col gap-3">
      {/* Separador e título sutil da seção */}
      <div className="flex items-center gap-3 px-1">
        <span className="h-px flex-1 bg-border/60" />
        <h2 className="text-[11px] font-semibold uppercase tracking-wider text-muted">
          O que eu faço
        </h2>
        <span className="h-px flex-1 bg-border/60" />
      </div>

      {/* 3 cards de serviços com ícones e descrições objetivas */}
      <div className="grid grid-cols-1 gap-2.5">
        {items.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="group flex items-start gap-3.5 rounded-xl border border-border/70 bg-card p-3 transition duration-150 ease-out hover:-translate-y-px hover:border-accent/60"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent transition-colors group-hover:bg-accent/25">
              <Icon className="size-4" aria-hidden="true" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="text-sm font-semibold tracking-tight text-fg">
                {title}
              </span>
              <p className="mt-0.5 text-xs leading-relaxed text-muted">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
