import type { IconType } from "react-icons";
import {
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa6";
import { FiCode } from "react-icons/fi";

export type Profile = {
  name: string;
  handle: string;
  headline: string;
  avatar: string;
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

export const site = {
  url: "https://seudominio.com",
};

export const profile: Profile = {
  name: "Seu Nome",
  handle: "@seuuser",
  headline: "Full Stack Developer · React, Next.js, TypeScript, NestJS",
  avatar: "/avatar.jpg",
};

export const socials: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/seuuser", icon: FaInstagram },
  { label: "GitHub", href: "https://github.com/seuuser", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/seuuser", icon: FaLinkedinIn },
  { label: "WhatsApp", href: "https://wa.me/5500000000000", icon: FaWhatsapp },
  { label: "E-mail", href: "mailto:voce@seudominio.com", icon: FaRegEnvelope },
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
    href: "https://github.com/seuuser",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    description: "Experiência e recomendações",
    href: "https://linkedin.com/in/seuuser",
    icon: FaLinkedinIn,
  },
  {
    title: "Vamos conversar no WhatsApp",
    description: "Orçamento sem compromisso",
    href: "https://wa.me/5500000000000?text=Ol%C3%A1!%20Vi%20seu%20Instagram%20e%20quero%20um%20or%C3%A7amento.",
    icon: FaWhatsapp,
    variant: "primary",
  },
];
