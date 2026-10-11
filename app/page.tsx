import { LinkCard } from "@/components/LinkCard";
import { Profile } from "@/components/Profile";
import { SocialRow } from "@/components/SocialRow";
import { links, profile, socials } from "@/data/links";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[480px] flex-col gap-8 px-4 py-10">
      <Profile {...profile} />
      <SocialRow items={socials} />
      <ul className="flex flex-col gap-3" aria-label="Links">
        {links.map((link) => (
          <li key={link.href}>
            <LinkCard {...link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
