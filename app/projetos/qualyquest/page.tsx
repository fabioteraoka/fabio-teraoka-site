import { PortalChrome } from "../../components/PortalChrome";

const screenshots = [
  { title: "Painel executivo", detail: "Visão consolidada para acompanhamento do SGQ.", src: "https://raw.githubusercontent.com/fabioteraoka/QualyQuest/main/docs/screenshots/dashboard_overview.png" },
  { title: "Gestão de não conformidades", detail: "Registro e acompanhamento de RNC, análise de causa e planos de ação.", src: "https://raw.githubusercontent.com/fabioteraoka/QualyQuest/main/docs/screenshots/relatorio_rnc.png" },
  { title: "Controle documental", detail: "Consulta de documentos controlados e revisões.", src: "https://raw.githubusercontent.com/fabioteraoka/QualyQuest/main/docs/screenshots/controle_documental.png" },
  { title: "Competências e treinamentos", detail: "Acompanhamento de qualificações, matriz de treinamento e vencimentos.", src: "https://raw.githubusercontent.com/fabioteraoka/QualyQuest/main/docs/screenshots/treinamentos_qualificacoes.png" },
];

export const metadata = {
  title: "QualyQuest — Projeto | Fábio Teraoka",
  description: "Plataforma integrada para gestão da qualidade aeronáutica, auditorias, não conformidades, controle documental e competências técnicas.",
};

export default function QualyQuestProject() {
  return (
    <PortalChrome active="projetos">
      <main className="site-page portal-inner-page project-detail-page">
        <section className="site-page-main portal-main">
          <div className="portal-page-grid">
            <div className="portal-primary-column">
              <header className="portal-page-intro project-detail-intro">
                <div className="section-kicker">PORTFÓLIO / PROJETO AUTORAL / QUALIDADE</div>
                <p className="project-detail-eyebrow">SGQ · MRO · AUDITORIAS</p>
                <h1>QualyQuest <em>SGQ & Rooster MRO.</em></h1>
                <p className="site-page-lead">Uma plataforma web que conecta processos de garantia da qualidade, gestão de não conformidades, auditorias, controle documental e competências técnicas em um ambiente integrado.</p>
                <div className="project-detail-actions">
                  <a className="project-detail-primary" href="https://qualyquest.onrender.com" target="_blank" rel="noreferrer">Abrir demonstração ↗</a>
                  <a className="project-detail-secondary" href="https://github.com/fabioteraoka/QualyQuest" target="_blank" rel="noreferrer">Ver código-fonte ↗</a>
                </div>
              </header>

              <section className="project-detail-section">
                <div className="section-kicker">01 / CONTEXTO E OBJETIVO</div>
                <h2>Qualidade conectada à operação.</h2>
                <p>O projeto foi concebido para reduzir a fragmentação entre registros de qualidade, evidências, documentos técnicos, treinamentos e preparação para auditorias. Em vez de tratar cada controle como uma planilha isolada, a proposta é relacionar informações e tornar rastreáveis as decisões tomadas ao longo dos processos.</p>
                <div className="project-detail-callout"><strong>Princípio central</strong><span>Rastreabilidade antes de automação: o sistema deve indicar a origem das informações, explicitar lacunas e manter a validação humana nas decisões de conformidade.</span></div>
              </section>

              <section className="project-detail-section">
                <div className="section-kicker">02 / MÓDULOS E CAPACIDADES</div>
                <h2>Uma visão integrada do SGQ e MRO.</h2>
                <div className="project-capability-grid">
                  <article><span>01</span><h3>Não conformidades</h3><p>Fluxo de RNC com classificação de risco, análise de causa, planos de ação e verificação de eficácia.</p></article>
                  <article><span>02</span><h3>Auditorias</h3><p>Base institucional de requisitos, importação de checklists e pré-auditoria com comparação contextual.</p></article>
                  <article><span>03</span><h3>Controle documental</h3><p>Gestão de publicações, revisões e consulta da revisão aplicável à data de uma Ordem de Serviço.</p></article>
                  <article><span>04</span><h3>Competências técnicas</h3><p>Registros de colaboradores, licenças, autorizações, treinamentos, matrizes e vencimentos.</p></article>
                  <article><span>05</span><h3>Metrologia</h3><p>Controle de instrumentos, calibrações e sinalização de itens vencidos ou em quarentena.</p></article>
                  <article><span>06</span><h3>Indicadores e relatórios</h3><p>Dashboards gerenciais e geração de apresentações PowerPoint para comunicação dos resultados.</p></article>
                </div>
              </section>

              <section className="project-detail-section">
                <div className="section-kicker">03 / DIFERENCIAIS DE CONCEPÇÃO</div>
                <h2>Automação com limites explícitos.</h2>
                <ul className="project-detail-list">
                  <li><strong>Reutilização controlada de requisitos:</strong> compara itens de auditoria com uma base institucional, sem presumir equivalência quando escopo, norma ou evidências divergem.</li>
                  <li><strong>Preservação de histórico:</strong> mantém redações originais, versões e snapshots para apoiar rastreabilidade.</li>
                  <li><strong>Validação humana:</strong> respostas institucionais e incorporações à base dependem de aprovação de perfil autorizado.</li>
                  <li><strong>Tratamento explícito de lacunas:</strong> ausência de evidência ou regra de validade não é convertida automaticamente em conformidade.</li>
                </ul>
              </section>

              <section className="project-detail-section">
                <div className="section-kicker">04 / ARQUITETURA E TECNOLOGIA</div>
                <h2>Aplicação web com serviços integrados.</h2>
                <p>A documentação técnica do repositório descreve uma aplicação React com Vite, servidor Node.js/Express e persistência em Google Cloud Firestore. O projeto também utiliza bibliotecas específicas para gráficos, leitura de documentos, geração de relatórios e apresentações.</p>
                <div className="project-tech-tags">
                  {["React 19", "TypeScript", "Vite", "Node.js", "Express", "Firebase / Firestore", "Google Gemini (opcional)", "Recharts", "PptxGenJS"].map((item) => <span key={item}>{item}</span>)}
                </div>
                <p className="project-detail-footnote">Algumas integrações dependem de credenciais e configuração externa, conforme descrito no README do repositório. A presença de uma integração no código não significa que ela esteja habilitada no ambiente de demonstração.</p>
              </section>

              <section className="project-detail-section">
                <div className="section-kicker">05 / VISÃO DA APLICAÇÃO</div>
                <h2>Telas do projeto.</h2>
                <p>Capturas disponibilizadas no repositório do QualyQuest.</p>
                <div className="project-screenshot-grid">
                  {screenshots.map((shot) => (
                    <figure key={shot.title}>
                      <img src={shot.src} alt={shot.title} loading="lazy" />
                      <figcaption><strong>{shot.title}</strong><span>{shot.detail}</span></figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="project-detail-section project-detail-author">
                <div className="section-kicker">06 / AUTORIA</div>
                <h2>Da necessidade operacional à solução digital.</h2>
                <p>Projeto autoral desenvolvido por Fábio Teraoka, reunindo experiência em engenharia aeronáutica, gestão da qualidade e processos operacionais com desenvolvimento de aplicações digitais.</p>
                <div className="project-detail-actions">
                  <a className="project-detail-primary" href="https://qualyquest.onrender.com" target="_blank" rel="noreferrer">Explorar aplicação ↗</a>
                  <a className="project-detail-secondary" href="/projetos">Voltar aos projetos</a>
                </div>
              </section>
            </div>

            <aside className="portal-aside project-detail-aside">
              <section className="portal-aside-card"><span className="profile-index">FICHA DO PROJETO</span><strong className="project-aside-status">PROJETO AUTORAL</strong><h2>QualyQuest SGQ & Rooster MRO</h2><p>Plataforma web para processos de qualidade aeronáutica, auditorias e gestão de competências.</p></section>
              <section className="portal-aside-card"><span className="profile-index">ESCOPO FUNCIONAL</span><div className="portal-aside-list"><span>Gestão de RNC</span><span>Auditorias e requisitos</span><span>Controle documental</span><span>Treinamentos e qualificações</span><span>Metrologia</span><span>Dashboards e relatórios</span></div></section>
              <section className="portal-aside-card"><span className="profile-index">STACK PRINCIPAL</span><div className="project-tech-tags project-tech-tags-aside">{["React", "TypeScript", "Vite", "Node / Express", "Firestore"].map((item) => <span key={item}>{item}</span>)}</div></section>
              <section className="portal-aside-card"><span className="profile-index">LINKS</span><div className="portal-aside-nav"><a href="https://qualyquest.onrender.com" target="_blank" rel="noreferrer">Demonstração ↗</a><a href="https://github.com/fabioteraoka/QualyQuest" target="_blank" rel="noreferrer">Repositório GitHub ↗</a><a href="/projetos">Todos os projetos ↗</a></div></section>
              <p className="project-aside-note">A disponibilidade da demonstração e de recursos conectados depende do ambiente publicado e de suas configurações.</p>
            </aside>
          </div>
        </section>
      </main>
    </PortalChrome>
  );
}
