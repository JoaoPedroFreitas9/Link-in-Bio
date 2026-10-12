import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile, site } from "@/data/links";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});


const title = `${profile.name} - ${profile.headline}`;
const description = profile.headline;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: "/",
    siteName: profile.name,
    title,
    description,
    images: [{ url: profile.avatar, width: 400, height: 400, alt: profile.name }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [profile.avatar],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
