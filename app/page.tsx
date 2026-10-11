import { FeaturedProjectCard } from "@/components/FeaturedProjectCard";
import { LinkCard } from "@/components/LinkCard";
import { Profile } from "@/components/Profile";
import { ServicesSection } from "@/components/ServicesSection";
import { SocialRow } from "@/components/SocialRow";
import { featuredProject, links, profile, services, socials } from "@/data/links";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[480px] flex-col gap-7 px-4 py-10">
      <Profile {...profile} />
      <SocialRow items={socials} />

      {services && services.length > 0 && (
        <ServicesSection items={services} />
      )}

      <ul className="flex flex-col gap-3" aria-label="Links">
        {links.map((link) => (
          <li key={link.href}>
            <LinkCard {...link} />
          </li>
        ))}
      </ul>

      {featuredProject && (
        <section aria-label="Projeto em destaque">
          <FeaturedProjectCard {...featuredProject} />
        </section>
      )}
    </main>
  );
}
