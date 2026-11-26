import Link from "next/link";

export default function About() {
  return (
    <main className="site-page">
      <section className="site-page-main">
        <div className="section-kicker">SOBRE</div>
        <h1>Engenharia, qualidade<br/><em>e transformação operacional.</em></h1>
        <p className="site-page-lead">Sou Engenheiro Industrial Mecânico, com trajetória profissional iniciada em 1992 e construída principalmente no setor aeronáutico. Minha experiência combina engenharia, manutenção, aeronavegabilidade, gestão da qualidade e Supply Chain.</p>
        <p className="site-page-lead">Ao longo da carreira, atuei em posições técnicas e de liderança, da manutenção e planejamento à superintendência de engenharia e à gestão de suprimentos. Essa vivência permite conectar requisitos técnicos, processos, materiais, pessoas e sistemas, considerando seus impactos sobre segurança, disponibilidade, custo e continuidade operacional.</p>
        <p className="site-page-lead">Atualmente, atuo como Gerente de Qualidade na Impacto Aviation. Mantenho também o interesse em tecnologia aplicada, desenvolvimento de sistemas e automação como ferramentas para estruturar processos e resolver problemas reais.</p>
        <div className="site-page-grid">
          <article className="site-page-card"><small>ENGENHARIA</small><h2>Base técnica aeronáutica</h2><p>Manutenção, planejamento, engenharia, aeronavegabilidade e conformidade regulatória.</p></article>
          <article className="site-page-card"><small>SUPPLY CHAIN</small><h2>Gestão de operações</h2><p>Suprimentos, compras, materiais, estoques, inventários e melhoria de processos.</p></article>
          <article className="site-page-card"><small>QUALIDADE</small><h2>Controle e confiabilidade</h2><p>Gestão da qualidade e integração de requisitos técnicos e operacionais.</p></article>
          <article className="site-page-card"><small>FORMAÇÃO</small><h2>Engenharia Industrial Mecânica</h2><p>Universidade Santa Cecília · Técnico em Mecânica pelo IFSP/ETFESP.</p></article>
        </div>
        <Link className="back-link" href="/">← Voltar ao início</Link>
      </section>
    </main>
  );
}