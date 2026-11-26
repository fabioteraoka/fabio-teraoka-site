import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Perfil Profissional | Fábio Teraoka",
  description: "Trajetória profissional de Fábio Teraoka: Engenharia Aeronáutica, Supply Chain e Gestão da Qualidade.",
  openGraph: {
    title: "Fábio Teraoka | Perfil Profissional",
    description: "Engenharia com visão de gestão. Gestão com profundidade técnica.",
    type: "profile",
  },
};

const pillars = [
  {
    number: "01",
    label: "ENGENHARIA AERONÁUTICA",
    title: "Rigor técnico e visão operacional",
    text: "Experiência em engenharia, manutenção, planejamento e aeronavegabilidade. Uma base construída no ambiente regulado da aviação, em que documentação, conformidade e continuidade operacional precisam caminhar juntas.",
    tags: ["Engenharia", "Manutenção", "Aeronavegabilidade", "ANAC / RBAC"],
  },
  {
    number: "02",
    label: "SUPPLY CHAIN",
    title: "Materiais conectados à operação",
    text: "Atuação em gestão de suprimentos, logística e materiais, considerando disponibilidade, planejamento, estoques, fornecedores e o impacto das decisões sobre a operação.",
    tags: ["Suprimentos", "Logística", "Materiais", "Planejamento"],
  },
  {
    number: "03",
    label: "GESTÃO DA QUALIDADE",
    title: "Processos, conformidade e consistência",
    text: "Atuação atual na gestão da qualidade, conectando requisitos, processos e controles para fortalecer a consistência operacional e a melhoria contínua.",
    tags: ["Qualidade", "Conformidade", "Processos", "Melhoria contínua"],
  },
];

const milestones = [
  { period: "1992–1999", title: "Formação técnica e início na aviação", role: "Metalúrgica Brasitalia · VASP · Dataregis · Vórtice", text: "Experiências iniciais em mecânica, planejamento de manutenção, projetos mecânicos e consultoria de engenharia." },
  { period: "1999–2011", title: "Engenharia em companhias aéreas", role: "Pantanal Linhas Aéreas · TAM", text: "Atuação em engenharia aeronáutica e liderança técnica, incluindo a posição de Superintendente Técnico de Engenharia na Pantanal e na TAM." },
  { period: "2012–2020", title: "Planejamento e gestão de engenharia", role: "Líder Aviation · Connect Cargo", text: "Experiência em planejamento técnico de manutenção e gestão de engenharia em operações aeronáuticas." },
  { period: "2021–2024", title: "Aeronavegabilidade e Supply Chain", role: "PCA Airworthiness · SkyOn Aeroengineering · Voar Aviation · Helipark", text: "Atuação em aeronavegabilidade, planejamento de manutenção e gestão da cadeia de suprimentos." },
  { period: "2025–atual", title: "Gestão de materiais e qualidade", role: "SAS / Smart Airport Systems · Impacto Aviation", text: "Material Logistics Manager na SAS e, desde fevereiro de 2026, Gerente de Qualidade na Impacto Aviation." },
];

const competencies = [
  "Engenharia aeronáutica",
  "Gestão da qualidade",
  "Supply Chain",
  "Planejamento de manutenção",
  "Aeronavegabilidade",
  "Gestão de materiais",
  "ANAC / RBAC",
  "AD / SB",
  "CTM",
  "EAM",
  "Gestão de processos",
  "Liderança operacional",
];

export default function About() {
  return (
    <main className="site-page profile-page">
      <section className="profile-shell">
        <header className="profile-hero-card">
          <div className="profile-cover">
            <span>FÁBIO TERAOKA / PROFESSIONAL PROFILE</span>
            <span className="profile-cover-mark">FT</span>
          </div>
          <div className="profile-hero-content">
            <div className="profile-avatar" aria-label="Monograma Fábio Teraoka">FT</div>
            <div className="profile-hero-copy">
              <p className="profile-overline">ENGENHARIA · GESTÃO · AVIAÇÃO</p>
              <h1>Fábio Teraoka</h1>
              <p className="profile-headline">Engenharia com visão de gestão. Gestão com profundidade técnica.</p>
              <p className="profile-subline">Engenheiro Industrial Mecânico · Qualidade · Supply Chain · Engenharia Aeronáutica</p>
              <div className="profile-hero-actions">
                <a className="profile-action-primary" href="mailto:fteraoka@gmail.com">Contato profissional ↗</a>
                <a className="profile-action-secondary" href="https://www.linkedin.com/in/fabioteraoka/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              </div>
            </div>
            <div className="profile-current-badge">
              <span className="profile-live-dot" />
              <small>ATUAÇÃO ATUAL</small>
              <strong>Gerente de Qualidade</strong>
              <span>Impacto Aviation</span>
            </div>
          </div>
          <div className="profile-quick-stats">
            <div><strong>Desde 1992</strong><span>TRAJETÓRIA PROFISSIONAL</span></div>
            <div><strong>3 pilares</strong><span>ÁREAS COMPLEMENTARES</span></div>
            <div><strong>CREA ativo</strong><span>REGISTRO PROFISSIONAL</span></div>
          </div>
        </header>

        <div className="profile-columns">
          <div className="profile-main-column">
            <section className="profile-panel" id="sobre">
              <div className="profile-panel-heading">
                <span className="profile-index">01 / SOBRE</span>
                <h2>Uma carreira entre o conhecimento técnico e a gestão.</h2>
              </div>
              <p className="profile-body-copy">
                Sou Engenheiro Industrial Mecânico, com trajetória profissional iniciada em 1992 e
                construída principalmente no setor aeronáutico. Minha experiência reúne engenharia,
                manutenção, planejamento, aeronavegabilidade, Supply Chain e gestão da qualidade.
              </p>
              <p className="profile-body-copy">
                Ao longo dessa trajetória, transitei entre funções técnicas e posições de liderança.
                Essa combinação me permite analisar a operação de forma integrada: compreender os
                requisitos técnicos, avaliar recursos e processos e considerar os efeitos das decisões
                sobre segurança, disponibilidade, conformidade e desempenho operacional.
              </p>
              <p className="profile-body-copy">
                Meu interesse profissional está em conectar disciplinas que muitas vezes são tratadas
                separadamente — engenharia, materiais, qualidade e tecnologia — para construir processos
                mais consistentes e soluções aplicáveis à realidade da operação.
              </p>
            </section>

            <section className="profile-panel" id="atuacao">
              <div className="profile-panel-heading">
                <span className="profile-index">02 / ÁREAS DE ATUAÇÃO</span>
                <h2>Três disciplinas que se complementam.</h2>
                <p>Uma visão integrada da operação, da base técnica à gestão dos processos e recursos.</p>
              </div>
              <div className="profile-pillar-list">
                {pillars.map((pillar) => (
                  <article className="profile-pillar-row" key={pillar.number}>
                    <span className="profile-pillar-number">{pillar.number}</span>
                    <div className="profile-pillar-content">
                      <small>{pillar.label}</small>
                      <h3>{pillar.title}</h3>
                      <p>{pillar.text}</p>
                      <div className="profile-tags">
                        {pillar.tags.map((tag) => <span key={tag}>{tag}</span>)}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="profile-panel" id="experiencia">
              <div className="profile-panel-heading">
                <span className="profile-index">03 / EXPERIÊNCIA</span>
                <h2>Uma trajetória construída em diferentes frentes da aviação.</h2>
                <p>Marcos profissionais selecionados. A relação completa de empresas, cargos e períodos está na página de Engenharia.</p>
              </div>
              <div className="profile-experience-list">
                {milestones.map((item, index) => (
                  <article className="profile-experience-item" key={item.period}>
                    <div className="profile-experience-marker">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="profile-experience-content">
                      <time>{item.period}</time>
                      <h3>{item.title}</h3>
                      <strong>{item.role}</strong>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
              <Link className="profile-inline-link" href="/engenharia">Ver histórico profissional completo <span>↗</span></Link>
            </section>

            <section className="profile-panel" id="formacao">
              <div className="profile-panel-heading">
                <span className="profile-index">04 / FORMAÇÃO</span>
                <h2>Base técnica e formação em engenharia.</h2>
              </div>
              <div className="profile-education-list">
                <article className="profile-education-item">
                  <span className="profile-education-symbol">ENG</span>
                  <div><small>FORMAÇÃO SUPERIOR · 1992–1999</small><h3>Engenharia Industrial Mecânica</h3><p>Universidade Santa Cecília (Unisanta)</p></div>
                </article>
                <article className="profile-education-item">
                  <span className="profile-education-symbol">TEC</span>
                  <div><small>FORMAÇÃO TÉCNICA · 1990–1991</small><h3>Técnico em Mecânica</h3><p>ETFESP / atual IFSP</p></div>
                </article>
              </div>
            </section>

            <section className="profile-closing-panel" id="projetos">
              <div>
                <span className="profile-index">05 / CONHECIMENTO APLICADO</span>
                <h2>Experiência que se transforma em projetos, análises e soluções.</h2>
                <p>Este portal reúne projetos, estudos e experimentos desenvolvidos a partir de problemas reais e interesses técnicos.</p>
              </div>
              <Link className="profile-action-primary" href="/projetos">Explorar projetos ↗</Link>
            </section>
          </div>

          <aside className="profile-aside" aria-label="Informações complementares do perfil">
            <section className="profile-aside-card profile-aside-current">
              <span className="profile-aside-label">POSIÇÃO ATUAL</span>
              <span className="profile-live-dot" />
              <h2>Gerente de Qualidade</h2>
              <p>Impacto Aviation</p>
              <small>Desde fevereiro de 2026</small>
            </section>

            <section className="profile-aside-card">
              <span className="profile-aside-label">RESUMO PROFISSIONAL</span>
              <div className="profile-aside-fact"><strong>Desde 1992</strong><span>mais de três décadas de trajetória</span></div>
              <div className="profile-aside-fact"><strong>Engenharia</strong><span>formação superior e técnica</span></div>
              <div className="profile-aside-fact"><strong>CREA</strong><span>registro profissional ativo</span></div>
            </section>

            <section className="profile-aside-card">
              <span className="profile-aside-label">COMPETÊNCIAS E CONHECIMENTOS</span>
              <div className="profile-competency-tags">
                {competencies.map((item) => <span key={item}>{item}</span>)}
              </div>
            </section>

            <section className="profile-aside-card">
              <span className="profile-aside-label">NAVEGAR PELO PERFIL</span>
              <nav className="profile-aside-nav" aria-label="Navegação do perfil">
                <a href="#sobre">Sobre</a>
                <a href="#atuacao">Áreas de atuação</a>
                <a href="#experiencia">Experiência profissional</a>
                <a href="#formacao">Formação</a>
                <a href="#projetos">Projetos e conhecimento</a>
              </nav>
            </section>

            <section className="profile-aside-card profile-aside-contact">
              <span className="profile-aside-label">CONTATO PROFISSIONAL</span>
              <a href="mailto:fteraoka@gmail.com">fteraoka@gmail.com ↗</a>
              <a href="https://www.linkedin.com/in/fabioteraoka/" target="_blank" rel="noreferrer">Perfil no LinkedIn ↗</a>
            </section>
          </aside>
        </div>
        <Link className="back-link" href="/">← Voltar ao início</Link>
      </section>
    </main>
  );
}
