import Link from "next/link";

const career = [
  ["2026 — atual", "Gerente de Qualidade", "Impacto Aviation", "Gestão da qualidade em ambiente aeronáutico."],
  ["2025 — 2026", "Material Logistics Manager", "SAS · Smart Airport System", "Reestruturação de suprimentos, organização física e lógica de materiais, controles sistêmicos, gestão de reparáveis e racionalização de compras."],
  ["2023 — 2024", "Gerente de Suprimentos", "Helipark", "Implantação de controles, reorganização de materiais, estruturação de fluxos de entrada e saída e melhoria da acuracidade de inventário."],
  ["2022 — 2023", "Gerente de Cadeia de Suprimentos", "Voar Aviation", "Estruturação de processos operacionais, organização de materiais e criação de rotinas de controle durante implantação de sistema."],
  ["2022", "Aeronavegabilidade", "SkyOn Aeroengineering", "Consultoria técnica em conformidade regulatória, aeronavegabilidade contínua, documentação, manuais técnicos conforme RBAC e suporte a certificações e auditorias."],
  ["2021", "Planejador de Manutenção", "PCA Airworthiness · Engenharia e Consultoria", "Regularização da documentação de aeronaves, estruturação do planejamento de manutenção/CTM e análise de AD, SB e manuais."],
  ["2020 — 2021", "Perito Judicial", "Justiça Federal do Rio de Janeiro", "Análise técnica de evidências e elaboração de laudos e pareceres em processos relacionados à engenharia aeronáutica e manutenção."],
  ["2018 — 2020", "Gerente de Engenharia", "Connect Cargo Linhas Aéreas", "Estruturação de processos técnicos e operacionais para início das operações, desenvolvimento de manuais, controles técnicos e base documental."],
  ["2012 — 2018", "Engenheiro de Planejamento", "Líder Aviation", "Planejamento técnico e acompanhamento de manutenção de aeronaves executivas, pacotes de inspeção e controle de vida útil de componentes."],
  ["2010 — 2011", "Superintendente Técnico de Engenharia", "TAM", "Gestão de engenharia e suporte técnico da frota, aeronavegabilidade contínua, segurança operacional, conformidade e auditorias ANAC/IOSA."],
  ["1999 — 2010", "Superintendente Técnico de Engenharia", "Pantanal Linhas Aéreas", "Responsabilidade pela estrutura técnica, incluindo planejamento de manutenção, engenharia, suprimentos e interface com a ANAC; implantação de processos e melhoria contínua."],
  ["1998 — 1999", "Consultor de Engenharia", "Vórtice Consultoria Aeronáutica", "Consultoria e implantação de sistemas de controle de manutenção."],
  ["1996 — 1997", "Projetista Mecânico", "Dataregis S.A.", "Desenvolvimento de projetos em AutoCAD de equipamentos para frente de caixa."],
  ["1992 — 1995", "Técnico de Planejamento", "VASP", "Controle técnico de manutenção, com foco em Boletins de Serviço."],
  ["1992", "Técnico Mecânico", "Metalúrgica Brasitalia", "Atuação técnica em processos de fabricação e redução de sobrematerial de peças forjadas."]
];

export default function Engineering() {
  return (
    <main className="site-page">
      <section className="site-page-main">
        <div className="section-kicker">EXPERIÊNCIA PROFISSIONAL</div>
        <h1>Engenharia, <em>qualidade e gestão.</em></h1>
        <p className="site-page-lead">Engenheiro Industrial Mecânico com trajetória desde 1992 em operações aeronáuticas, reunindo gestão da qualidade, engenharia, manutenção, aeronavegabilidade e Supply Chain.</p>
        <div className="site-page-grid">
          <article className="site-page-card"><small>QUALIDADE & CONFORMIDADE</small><h2>Rigor operacional</h2><p>Gestão da qualidade em ambiente aeronáutico, conformidade técnica, documentação e suporte a auditorias.</p></article>
          <article className="site-page-card"><small>ENGENHARIA & MANUTENÇÃO</small><h2>Disponibilidade e segurança</h2><p>Planejamento, controle, engenharia de manutenção e suporte técnico a operações aeronáuticas.</p></article>
          <article className="site-page-card"><small>SUPPLY CHAIN</small><h2>Materiais e suprimentos</h2><p>Gestão de estoques, compras, inventários, logística e estruturação de processos operacionais.</p></article>
          <article className="site-page-card"><small>FORMAÇÃO</small><h2>Engenharia Industrial Mecânica</h2><p>Universidade Santa Cecília · Registro profissional CREA ativo.</p></article>
        </div>
        <h2 style={{marginTop:64}}>Trajetória <em>profissional.</em></h2>
        <div className="site-page-grid">{career.map(([period, role, company, detail]) => <article className="site-page-card" key={period + company}><small>{period} · {company}</small><h2>{role}</h2><p>{detail}</p></article>)}</div>
        <Link className="back-link" href="/">← Voltar ao início</Link>
      </section>
    </main>
  );
}