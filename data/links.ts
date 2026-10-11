import type { IconType } from "react-icons";
import {
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa6";
import { FiCode, FiCpu, FiLayers, FiLayout } from "react-icons/fi";

export type ServiceItem = {
  title: string;
  description: string;
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

export const site = {
  url: "https://seudominio.com",
};

export const featuredProject: FeaturedProject = {
  badge: "Projeto em destaque",
  title: "Marcenaria Freitas",
  description: "Landing page institucional moderna para fábrica de móveis planejados sob medida.",
  resultMetric: "Design sob medida, 100% responsivo e alta taxa de conversão",
  image: "/marcenaria-freitas.jpg",
  href: "https://marcenaria-freitas.vercel.app/",
  ctaText: "Visitar site",
  tags: ["Next.js", "Tailwind CSS", "Vercel"],
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
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jo%C3%A3o-pedro-freitas9/?isSelfProfile=true", icon: FaLinkedinIn },
  { label: "WhatsApp", href: "https://wa.me/5538997502338", icon: FaWhatsapp },
  { label: "E-mail", href: "mailto:joaopedrofreitas0901@gmail.com", icon: FaRegEnvelope },
];

export const services: ServiceItem[] = [
  {
    title: "Sites & Landing Pages",
    description: "Design moderno, carregamento rápido e foco total em conversão.",
    icon: FiLayout,
  },
  {
    title: "Sistemas Web sob Medida",
    description: "Dashboards, painéis de gestão e aplicações completas para o seu negócio.",
    icon: FiLayers,
  },
  {
    title: "Integrações & APIs",
    description: "Conexões inteligentes com WhatsApp, meios de pagamento e sistemas externos.",
    icon: FiCpu,
  },
];

export const links: LinkItem[] = [
  {
    title: "Portfólio",
    description: "Cases, stack e como eu trabalho",
    href: "https://seudominio.com",
    icon: FaGlobe,
    highlight: true,
  },
  {
    title: "Projetos",
    description: "Apps e sistemas que já entreguei",
    href: "https://seudominio.com/projetos",
    icon: FiCode,
  },
  {
    title: "GitHub",
    description: "Código aberto e experimentos",
    href: "https://github.com/JoaoPedroFreitas9",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    description: "Experiência e recomendações",
    href: "https://linkedin.com/in/joão-pedro-freitas9",
    icon: FaLinkedinIn,
  },
  {
    title: "Vamos conversar no WhatsApp",
    description: "Orçamento sem compromisso",
    href: "https://wa.me/5538997502338?text=Ol%C3%A1!%20Vi%20seu%20Instagram%20e%20quero%20um%20or%C3%A7amento.",
    icon: FaWhatsapp,
    variant: "primary",
  },
];
