import type { ServiceItem } from "@/data/links";

export function ServicesSection({ items }: { items: ServiceItem[] }) {
  return (
    <section
      aria-labelledby="services-title"
      className="rounded-xl border border-border bg-card px-4 py-4"
    >
      <h2 id="services-title" className="text-sm font-semibold text-fg">
        O que eu faço
      </h2>
      <ul className="mt-3 flex flex-col gap-3">
        {items.map(({ title, description, icon: Icon }) => (
          <li key={title} className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex size-8 shrink-0 items-center justify-center rounded-md bg-accent/15 text-accent"
            >
              <Icon className="size-4" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-medium text-fg">{title}</p>
              <p className="truncate text-sm text-muted">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
