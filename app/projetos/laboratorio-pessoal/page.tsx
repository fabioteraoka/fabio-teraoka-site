import { PortalChrome } from "../../components/PortalChrome";

export default function Project() {
  return (
    <PortalChrome active="projetos">
      <main className="site-page portal-inner-page">
        <section className="site-page-main portal-main">
          <div className="portal-page-grid">
            <div className="portal-primary-column">
              <header className="portal-page-intro"><div className="section-kicker">PROJETO / PUBLICAÇÃO DIGITAL</div><h1>Fábio Teraoka <em>Projects.</em></h1><p className="site-page-lead">Um espaço digital para apresentar experiência profissional, projetos, pesquisas e experimentos selecionados.</p></header>
              <div className="site-page-grid">
                <article className="site-page-card"><small>STACK</small><h2>Next.js · React · TypeScript</h2><p>Interface construída com componentes React, estilos responsivos e animações com Framer Motion.</p></article>
                <article className="site-page-card"><small>ESTÁGIO</small><h2>Publicado · em evolução</h2><p>O site está hospedado na Vercel e seu código-fonte é mantido em repositório GitHub público.</p></article>
              </div>
              <a className="back-link" href="/projetos">← Todos os projetos</a>
            </div>
            <aside className="portal-aside">
              <section className="portal-aside-card"><span className="profile-index">SOBRE O PORTAL</span><h2>Laboratório profissional</h2><p>Um ambiente editorial para conectar trajetória, aplicações, pesquisas e conhecimento prático.</p></section>
              <section className="portal-aside-card"><span className="profile-index">SEÇÕES</span><div className="portal-aside-list"><span>Perfil e experiência</span><span>Projetos autorais</span><span>Estudos e pesquisas</span><span>Receitas e experimentos</span></div></section>
              <section className="portal-aside-card"><span className="profile-index">NAVEGAÇÃO</span><div className="portal-aside-nav"><a href="/sobre">Perfil profissional ↗</a><a href="/engenharia">Engenharia ↗</a><a href="/projetos">Todos os projetos ↗</a></div></section>
            </aside>
          </div>
        </section>
      </main>
    </PortalChrome>
  );
}
