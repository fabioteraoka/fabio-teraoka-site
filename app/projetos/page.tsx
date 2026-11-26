import Link from "next/link";

const projects = [
  {
    name: "QualyQuest",
    category: "QUALIDADE · SGQ",
    description: "Solução autoral voltada à gestão de não conformidades e processos do Sistema de Gestão da Qualidade.",
    demo: "https://qualyquest.onrender.com",
    source: "https://github.com/fabioteraoka/QualyQuest",
    sourceLabel: "Código-fonte no GitHub",
    status: "PUBLICADO",
  },
  {
    name: "Airworthiness Compliance",
    category: "ENGENHARIA AERONÁUTICA",
    description: "Aplicação dedicada ao acompanhamento e à inteligência de conformidade de aeronavegabilidade.",
    demo: "https://airworthinesscompliance.onrender.com",
    source: "https://github.com/fabioteraoka/Airworthiness-Compliance-",
    sourceLabel: "Código-fonte no GitHub",
    status: "PUBLICADO",
  },
  {
    name: "Design System",
    category: "TECNOLOGIA · UX/UI",
    description: "Projeto de sistema de design para organizar padrões visuais e componentes de interface.",
    demo: "https://design-system-9pu5.onrender.com",
    sourceLabel: "Repositório privado",
    status: "DEMONSTRAÇÃO",
  },
  {
    name: "Impacto Dashboard",
    category: "GESTÃO · OPERAÇÕES",
    description: "Dashboard para gestão de ordens de serviço e materiais, conectando informações operacionais em uma visão gerencial.",
    demo: "https://dashboard-impacto-soex.onrender.com",
    sourceLabel: "Repositório privado",
    status: "ACESSO A VALIDAR",
  },
  {
    name: "Painel da Vida",
    category: "PRODUTIVIDADE · AUTOMAÇÃO",
    description: "Painel pessoal para centralizar agenda, e-mails, tarefas e alertas, com integrações e automações em evolução.",
    demo: "https://painel-da-vida-git-main-fabioteraokas-projects.vercel.app/",
    source: "https://github.com/fabioteraoka/painel-da-vida",
    sourceLabel: "Código-fonte no GitHub",
    status: "EM EVOLUÇÃO",
  },
];

export default function Projects() {
  return (
    <main className="site-page">
      <header className="topbar">
        <a className="brand" href="/">
          <span className="brand-mark">FT</span>
          <span>FÁBIO TERAOKA<small>PROJECTS · ENGINEERING · KNOWLEDGE</small></span>
        </a>
        <nav><a href="/sobre">Perfil</a><a href="/engenharia">Engenharia</a><a href="/pesquisas">Pesquisas</a><a href="/receitas">Receitas</a></nav>
      </header>
      <section className="site-page-main">
        <div className="section-kicker">PORTFÓLIO / PROJETOS AUTORAIS</div>
        <h1>Projetos & <em>soluções.</em></h1>
        <p className="site-page-lead">
          Aplicações desenvolvidas por mim para transformar necessidades de qualidade,
          aeronavegabilidade, gestão operacional e organização em soluções digitais.
          Os projetos refletem a integração entre experiência de negócio, engenharia e tecnologia.
        </p>
        <div className="site-page-grid">
          {projects.map((project) => (
            <article className="site-page-card" key={project.name}>
              <small>{project.category} · {project.status}</small>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.demo} target="_blank" rel="noreferrer">Abrir aplicação ↗</a>
                {project.source ? (
                  <a href={project.source} target="_blank" rel="noreferrer">{project.sourceLabel} ↗</a>
                ) : (
                  <span>{project.sourceLabel}</span>
                )}
              </div>
            </article>
          ))}
        </div>
        <Link className="back-link" href="/">← Voltar ao início</Link>
      </section>
    </main>
  );
}
