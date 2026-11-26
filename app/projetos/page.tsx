import { PortalChrome } from "../components/PortalChrome";

const projects = [
  { name: "QualyQuest", category: "QUALIDADE · SGQ", description: "Solução autoral voltada à gestão de não conformidades e processos do Sistema de Gestão da Qualidade.", demo: "https://qualyquest.onrender.com", details: "/projetos/qualyquest", source: "https://github.com/fabioteraoka/QualyQuest", sourceLabel: "Código-fonte no GitHub", status: "PUBLICADO" },
  { name: "Airworthiness Compliance", category: "ENGENHARIA AERONÁUTICA", description: "Aplicação dedicada ao acompanhamento e à inteligência de conformidade de aeronavegabilidade.", demo: "https://airworthinesscompliance.onrender.com", source: "https://github.com/fabioteraoka/Airworthiness-Compliance-", sourceLabel: "Código-fonte no GitHub", status: "PUBLICADO" },
  { name: "Design System", category: "TECNOLOGIA · UX/UI", description: "Projeto de sistema de design para organizar padrões visuais e componentes de interface.", demo: "https://design-system-9pu5.onrender.com", sourceLabel: "Repositório privado", status: "DEMONSTRAÇÃO" },
  { name: "Impacto Dashboard", category: "GESTÃO · OPERAÇÕES", description: "Camada de consolidação e análise de ordens de serviço, materiais e serviços, com padronização de dados e relatórios executivos.", demo: "https://dashboard-impacto-soex.onrender.com", details: "/projetos/impacto-dashboard", sourceLabel: "Repositório privado", status: "ACESSO CONTROLADO" },
  { name: "Painel da Vida", category: "PRODUTIVIDADE · AUTOMAÇÃO", description: "Painel pessoal para centralizar agenda, e-mails, tarefas e alertas, com integrações e automações em evolução.", demo: "https://painel-da-vida-git-main-fabioteraokas-projects.vercel.app/", details: "/projetos/painel-da-vida", source: "https://github.com/fabioteraoka/painel-da-vida", sourceLabel: "Código-fonte no GitHub", status: "EM EVOLUÇÃO" },
];

export default function Projects() {
  return (
    <PortalChrome active="projetos">
      <main className="site-page portal-inner-page">
        <section className="site-page-main portal-main">
          <div className="portal-page-grid">
            <div className="portal-primary-column">
              <header className="portal-page-intro">
                <div className="section-kicker">PORTFÓLIO / PROJETOS AUTORAIS</div>
                <h1>Projetos & <em>soluções.</em></h1>
                <p className="site-page-lead">Aplicações desenvolvidas por mim para transformar necessidades de qualidade, aeronavegabilidade, gestão operacional e organização em soluções digitais. Os projetos refletem a integração entre experiência de negócio, engenharia e tecnologia.</p>
              </header>
              <div className="site-page-grid">
                {projects.map((project) => (
                  <article className="site-page-card" key={project.name}>
                    <small>{project.category} · {project.status}</small>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <div className="project-links">
                      {project.details ? <a className="project-link-button project-link-primary" href={project.details}>Conhecer projeto <span aria-hidden="true">↗</span></a> : null}
                      <a className={project.details ? "project-link-button" : "project-link-button project-link-primary"} href={project.demo} target="_blank" rel="noreferrer">Abrir aplicação <span aria-hidden="true">↗</span></a>
                      {project.source ? <a className="project-link-button project-link-quiet" href={project.source} target="_blank" rel="noreferrer">{project.sourceLabel} <span aria-hidden="true">↗</span></a> : <span className="project-link-note">{project.sourceLabel}</span>}
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <aside className="portal-aside">
              <section className="portal-aside-card"><span className="profile-index">VISÃO GERAL</span><strong className="portal-aside-stat">05</strong><h2>Projetos autorais</h2><p>Aplicações em diferentes estágios de publicação, demonstração e evolução.</p></section>
              <section className="portal-aside-card"><span className="profile-index">ÁREAS</span><div className="portal-aside-list"><span>Qualidade e SGQ</span><span>Aeronavegabilidade</span><span>UX / Design System</span><span>Gestão operacional</span><span>Produtividade e automação</span></div></section>
              <section className="portal-aside-card"><span className="profile-index">CRITÉRIO DE LEITURA</span><h2>Status transparente</h2><p>Os rótulos indicam a condição informada de cada projeto. Demonstração ou link público não significam, por si só, disponibilidade irrestrita ou validação operacional.</p></section>
              <section className="portal-aside-card"><span className="profile-index">NAVEGAÇÃO</span><div className="portal-aside-nav"><a href="/sobre">Perfil profissional ↗</a><a href="/engenharia">Trajetória ↗</a><a href="/pesquisas">Estudos e pesquisas ↗</a></div></section>
            </aside>
          </div>
        </section>
      </main>
    </PortalChrome>
  );
}
