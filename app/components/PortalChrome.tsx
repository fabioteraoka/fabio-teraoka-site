import type { ReactNode } from "react";
import Link from "next/link";

const navigation = [
  { href: "/sobre", label: "Perfil", key: "sobre" },
  { href: "/engenharia", label: "Engenharia", key: "engenharia" },
  { href: "/projetos", label: "Projetos", key: "projetos" },
  { href: "/pesquisas", label: "Pesquisas", key: "pesquisas" },
  { href: "/receitas", label: "Receitas", key: "receitas" },
  { href: "/ideias", label: "Ideias", key: "ideias" },
];

export function PortalChrome({ children, active }: { children: ReactNode; active: string }) {
  return (
    <>
      <header className="topbar portal-topbar">
        <Link className="brand" href="/">
          <span className="brand-mark">FT</span>
          <span>FÁBIO TERAOKA<small>PROJECTS · ENGINEERING · KNOWLEDGE</small></span>
        </Link>
        <nav aria-label="Navegação principal">
          {navigation.map((item) => (
            <Link key={item.key} href={item.href} className={active === item.key ? "is-active" : undefined} aria-current={active === item.key ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
          <a className="nav-contact" href="mailto:fteraoka@gmail.com">Contato ↗</a>
        </nav>
      </header>
      {children}
      <footer className="portal-footer">
        <Link className="brand" href="/">
          <span className="brand-mark">FT</span>
          <span>FÁBIO TERAOKA<small>PROJECTS · ENGINEERING · KNOWLEDGE</small></span>
        </Link>
        <span>© 2026 FÁBIO TERAOKA</span>
        <div><a href="mailto:fteraoka@gmail.com">E-mail</a><a href="https://www.linkedin.com/in/fabioteraoka/" target="_blank" rel="noreferrer">LinkedIn ↗</a><Link href="/">Início ↑</Link></div>
      </footer>
    </>
  );
}
