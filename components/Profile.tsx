import Image from "next/image";
import type { Profile as ProfileData } from "@/data/links";

export function Profile({
  name,
  handle,
  headline,
  avatar,
  available = false,
  availableText = "Disponível para novos projetos",
}: ProfileData) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={avatar}
        alt={`Foto de ${name}`}
        width={96}
        height={96}
        preload
        className="size-24 rounded-full object-cover ring-2 ring-accent ring-offset-4 ring-offset-bg"
      />
      <h1 className="mt-5 text-2xl font-semibold tracking-tight text-fg">{name}</h1>
      <p className="mt-1 font-mono text-sm text-accent">{handle}</p>
      <p className="mt-2.5 max-w-[34ch] text-sm leading-relaxed text-muted">{headline}</p>

      {available && (
        <div className="mt-3.5 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <span>{availableText}</span>
        </div>
      )}
    </header>
  );
}
