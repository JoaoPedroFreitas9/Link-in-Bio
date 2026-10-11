import type { SocialLink } from "@/data/links";
import { isExternal, withUtm } from "@/lib/utm";

export function SocialRow({ items }: { items: SocialLink[] }) {
  return (
    <nav aria-label="Redes sociais">
      <ul className="flex flex-wrap items-center justify-center gap-3">
        {items.map(({ label, href, icon: Icon }) => {
          const external = isExternal(href);
          return (
            <li key={label}>
              <a
                href={withUtm(href)}
                aria-label={label}
                title={label}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                className="flex size-11 items-center justify-center rounded-lg border border-border bg-card text-fg transition duration-150 ease-out hover:-translate-y-px hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                <Icon aria-hidden="true" className="size-5" />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
