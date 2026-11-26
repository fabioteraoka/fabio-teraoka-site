import Link from "next/link";

const pillars = [
  {
    number: "01",
    label: "ENGENHARIA AERONÁUTICA",
    title: "Rigor técnico e visão operacional",
    text: "Experiência em engenharia, manutenção, planejamento e aeronavegabilidade. Uma base construída no ambiente regulado da aviação, em que documentação, conformidade e continuidade operacional precisam caminhar juntas.",
  },
  {
    number: "02",
    label: "SUPPLY CHAIN",
    title: "Materiais conectados à operação",
    text: "Atuação em gestão de suprimentos, logística e materiais, considerando disponibilidade, planejamento, estoques, fornecedores e o impacto das decisões sobre a operação.",
  },
  {
    number: "03",
    label: "GESTÃO DA QUALIDADE",
    title: "Processos, conformidade e consistência",
    text: "Atuação atual na gestão da qualidade, conectando requisitos, processos e controles para fortalecer a consistência operacional e a melhoria contínua.",
  },
];

const milestones = [
  { period: "1992", title: "Início da trajetória", role: "Metalúrgica Brasitalia · VASP", text: "Primeiras experiências profissionais em mecânica e planejamento." },
  { period: "1999–2011", title: "Engenharia aeronáutica", role: "Pantanal Linhas Aéreas · TAM", text: "Atuação em engenharia, incluindo a posição de Superintendente Técnico de Engenharia na Pantanal." },
  { period: "2012–2020", title: "Engenharia e gestão", role: "Líder Aviation · Connect Cargo", text: "Experiências em planejamento e gestão de engenharia." },
  { period: "2021–2024", title: "Aeronavegabilidade e Supply Chain", role: "PCA Airworthiness · SkyOn Aeroengineering · Voar Aviation · Helipark", text: "Atuação em aeronavegabilidade, planejamento de manutenção e gestão da cadeia de suprimentos." },
  { period: "2025–2026", title: "Gestão de materiais e qualidade", role: "SAS / Smart Airport Systems · Impacto Aviation", text: "Material Logistics Manager na SAS, seguido da posição atual de Gerente de Qualidade na Impacto Aviation." },
];

export default function About() {
  return (
    <main className="site-page">
      <section className="site-page-main">
        <div className="section-kicker">PERFIL PROFISSIONAL <span className="kicker-rule" /></div>
        <p className="profile-overline">FÁBIO TERAOKA · ENGENHARIA · GESTÃO · AVIAÇÃO</p>
        <h1>Engenharia com visão de gestão.<br /><em>Gestão com profundidade técnica.</em></h1>
        <p className="profile-intro">
          Engenheiro Industrial Mecânico, com trajetória profissional iniciada em 1992 e construída
          principalmente no setor aeronáutico. Minha experiência reúne engenharia, manutenção,
          planejamento, aeronavegabilidade, Supply Chain e gestão da qualidade.
        </p>
        <p className="profile-intro profile-intro-secondary">
          Ao longo dessa trajetória, transitei entre funções técnicas e posições de liderança.
          Essa combinação me permite analisar a operação de forma integrada: compreender os requisitos
          técnicos, avaliar recursos e processos e considerar os efeitos das decisões sobre segurança,
          disponibilidade, conformidade e desempenho operacional.
        </p>

        <div className="profile-facts">
          <div><strong>1992</strong><span>INÍCIO DA TRAJETÓRIA</span></div>
          <div><strong>3</strong><span>PILARES DE ATUAÇÃO</span></div>
          <div><strong>CREA</strong><span>REGISTRO PROFISSIONAL ATIVO</span></div>
        </div>

        <section className="profile-section">
          <div className="profile-section-heading">
            <span className="profile-index">01 / POSICIONAMENTO</span>
            <h2>Três disciplinas que se complementam.</h2>
            <p>Minha atuação profissional está na interseção entre conhecimento técnico, gestão de recursos e qualidade dos processos.</p>
          </div>
          <div className="profile-pillar-grid">
            {pillars.map((pillar) => (
              <article className="profile-pillar" key={pillar.number}>
                <span className="profile-pillar-number">{pillar.number}</span>
                <small>{pillar.label}</small>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="profile-section">
          <div className="profile-section-heading">
            <span className="profile-index">02 / TRAJETÓRIA</span>
            <h2>Uma carreira construída em diferentes frentes da aviação.</h2>
            <p>Marcos selecionados da trajetória. A linha do tempo completa, com as experiências e funções identificadas, está na seção de Engenharia.</p>
          </div>
          <div className="profile-milestones">
            {milestones.map((item) => (
              <article className="profile-milestone" key={item.period}>
                <span className="profile-period">{item.period}</span>
                <div>
                  <h3>{item.title}</h3>
                  <strong>{item.role}</strong>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <Link className="text-link profile-more-link" href="/engenharia">Ver trajetória profissional completa ↗</Link>
        </section>

        <section className="profile-section profile-current">
          <div className="profile-section-heading">
            <span className="profile-index">03 / ATUAÇÃO ATUAL</span>
            <h2>Qualidade como responsabilidade de gestão.</h2>
          </div>
          <div className="profile-current-copy">
            <p>
              Atualmente, sou <strong>Gerente de Qualidade na Impacto Aviation</strong>. Antes dessa
              posição, atuei como <strong>Material Logistics Manager na SAS / Smart Airport Systems</strong>,
              ampliando a experiência em gestão de materiais e logística.
            </p>
            <p>
              A combinação dessas experiências reforça uma perspectiva de gestão que não trata
              qualidade, engenharia e cadeia de suprimentos como áreas isoladas, mas como partes
              interdependentes de uma operação.
            </p>
          </div>
        </section>

        <section className="profile-section">
          <div className="profile-section-heading">
            <span className="profile-index">04 / FORMAÇÃO</span>
            <h2>Base técnica e formação em engenharia.</h2>
          </div>
          <div className="profile-education-grid">
            <article className="profile-education">
              <small>FORMAÇÃO SUPERIOR</small>
              <h3>Engenharia Industrial Mecânica</h3>
              <p>Universidade Santa Cecília (Unisanta) · 1992–1999</p>
            </article>
            <article className="profile-education">
              <small>FORMAÇÃO TÉCNICA</small>
              <h3>Técnico em Mecânica</h3>
              <p>ETFESP / atual IFSP · 1990–1991</p>
            </article>
          </div>
        </section>

        <section className="profile-closing">
          <span className="profile-index">ENGENHARIA · GESTÃO · CONHECIMENTO APLICADO</span>
          <p>Interesse em transformar conhecimento técnico e experiência operacional em <em>processos melhores, decisões mais consistentes e soluções úteis.</em></p>
          <Link className="button-primary" href="/projetos">Explorar projetos e aplicações ↗</Link>
        </section>
        <Link className="back-link" href="/">← Voltar ao início</Link>
      </section>
    </main>
  );
}
