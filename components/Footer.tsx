import { cta, profile } from "@/data/links";
import { isExternal, withUtm } from "@/lib/utm";

async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getYear();
  const external = isExternal(cta.href);

  return (
    <footer className="mt-12 flex flex-col items-center justify-center gap-1.5 pb-10 text-center text-xs text-muted">
      <p>
        <span>Tem um projeto em mente? </span>
        <a
          href={withUtm(cta.href, cta.noUtm)}
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
          className="font-medium text-accent underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm"
        >
          Me chama no WhatsApp
        </a>
      </p>
      <p>
        © {year} {profile.name} · Feito com Next.js
      </p>
    </footer>
  );
}
