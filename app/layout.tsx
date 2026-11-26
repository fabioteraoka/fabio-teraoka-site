import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fábio Teraoka | Projects — Engenharia, Tecnologia e Conhecimento",
  description: "Projetos, experiências e conhecimento aplicado em engenharia, aviação e tecnologia.",
  openGraph: { title: "Fábio Teraoka | Projects", description: "Ideias transformadas em soluções.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
