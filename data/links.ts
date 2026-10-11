import type { IconType } from "react-icons";
import {
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaNodeJs,
  FaReact,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa6";
import { FiCpu, FiLayers, FiLayout } from "react-icons/fi";
import {
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export type TechItem = {
  name: string;
  icon: IconType;
};

export type Profile = {
  name: string;
  handle: string;
  headline: string;
  avatar: string;
  available?: boolean;
  availableText?: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export type LinkItem = {
  title: string;
  description?: string;
  href: string;
  icon: IconType;
  highlight?: boolean;
  variant?: "default" | "primary";
  noUtm?: boolean;
};

export type FeaturedProject = {
  badge?: string;
  title: string;
  description: string;
  resultMetric: string;
  image: string;
  href: string;
  ctaText?: string;
  tags?: string[];
  noUtm?: boolean;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: IconType;
};

export const site = {
  url: "https://seudominio.com",
};

export const profile: Profile = {
  name: "João Pedro Freitas",
  handle: "@joaopedroz7",
  headline: "Full Stack Developer",
  avatar: "/avatar-joao.jpg",
  available: true,
  availableText: "Disponível para novos projetos",
};

export const socials: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/joaopedroz7", icon: FaInstagram },
  { label: "GitHub", href: "https://github.com/JoaoPedroFreitas9", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jo%C3%A3o-pedro-freitas9/", icon: FaLinkedinIn },
  { label: "WhatsApp", href: "https://wa.me/5538997502338", icon: FaWhatsapp },
  { label: "E-mail", href: "mailto:joaopedrofreitas0901@gmail.com", icon: FaRegEnvelope },
];

export const cta: LinkItem = {
  title: "Vamos conversar no WhatsApp",
  description: "Orçamento sem compromisso",
  href: "https://wa.me/5538997502338?text=Ol%C3%A1!%20Vi%20seu%20Instagram%20e%20quero%20um%20or%C3%A7amento.",
  icon: FaWhatsapp,
  variant: "primary",
};

export const featuredProject: FeaturedProject = {
  badge: "Projeto em destaque",
  title: "Marcenaria Freitas",
  description: "Landing page institucional para uma marcenaria de móveis planejados.",
  resultMetric: "Visual premium, carregamento rápido, pronto para converter",
  image: "/marcenaria-freitas-top.jpg",
  href: "https://marcenaria-freitas.vercel.app/",
  ctaText: "Visitar site",
  tags: ["Next.js", "Tailwind CSS", "Vercel"],
};

export const services: ServiceItem[] = [
  {
    title: "Sites e landing pages",
    description: "Rápidos, responsivos e prontos para o Google",
    icon: FiLayout,
  },
  {
    title: "Sistemas web sob medida",
    description: "Painéis, dashboards e ferramentas internas",
    icon: FiLayers,
  },
  {
    title: "Integrações e APIs",
    description: "WhatsApp, pagamentos e sistemas externos",
    icon: FiCpu,
  },
];

export const links: LinkItem[] = [
  {
    title: "Portfólio e projetos",
    description: "Cases, apps e sistemas que já entreguei",
    href: "https://seudominio.com",
    icon: FaGlobe,
  },
];

export const techStack: TechItem[] = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: FaNodeJs },
  { name: "NestJS", icon: SiNestjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: FaDocker },
  { name: "Git", icon: FaGitAlt },
];
