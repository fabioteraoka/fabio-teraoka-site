import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fábio Teraoka | Engenharia, Aviação e Gestão",
  description: "Experiência em engenharia, aeronavegabilidade, manutenção e gestão de materiais no setor aeronáutico.",
  openGraph: { title: "Fábio Teraoka", description: "Precisão técnica. Visão de negócio. Experiência em aviação.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
