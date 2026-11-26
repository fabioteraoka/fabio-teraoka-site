import { PortalChrome } from "../components/PortalChrome";

const items = [
  ["Planejamento de estoques e lead time", "Estudo sobre consumo durante o prazo de reposição, estoque disponível, materiais em trânsito e ponto de pedido.", "EM REVISÃO"],
  ["Aeronavegabilidade e conformidade", "Organização de requisitos, documentação técnica, AD/SB e análise de aplicabilidade.", "A DESENVOLVER"],
  ["Engenharia integrada à logística", "Relação entre decisões técnicas, disponibilidade de materiais, custo e continuidade operacional.", "A DESENVOLVER"],
];

export default function Research() {
  return (
    <PortalChrome active="pesquisas">
      <main className="site-page portal-inner-page">
        <section className="site-page-main portal-main">
          <div className="portal-page-grid">
            <div className="portal-primary-column">
              <header className="portal-page-intro"><div className="section-kicker">CONHECIMENTO / ESTUDOS</div><h1>Estudos & <em>pesquisas.</em></h1><p className="site-page-lead">Análises e aprendizados organizados para consulta. Os temas abaixo são pautas em preparação, não artigos técnicos concluídos.</p></header>
              <div className="site-page-grid">{items.map(([title, description, status]) => <article className="site-page-card" key={title}><small>{status}</small><h2>{title}</h2><p>{description}</p></article>)}</div>
            </div>
            <aside className="portal-aside">
              <section className="portal-aside-card"><span className="profile-index">ESCOPO</span><strong className="portal-aside-stat">03</strong><h2>Linhas de pesquisa</h2><p>Temas que conectam engenharia, operação, conformidade e gestão de recursos.</p></section>
              <section className="portal-aside-card"><span className="profile-index">TEMAS CENTRAIS</span><div className="portal-aside-list"><span>Engenharia aeronáutica</span><span>Planejamento e materiais</span><span>Conformidade regulatória</span><span>Processos operacionais</span></div></section>
              <section className="portal-aside-card"><span className="profile-index">MÉTODO</span><h2>Da pergunta à evidência</h2><p>Uma pesquisa só será apresentada como concluída quando houver fontes, método, análise e limitações documentadas.</p></section>
              <section className="portal-aside-card"><span className="profile-index">NAVEGAÇÃO</span><div className="portal-aside-nav"><a href="/engenharia">Experiência profissional ↗</a><a href="/projetos">Projetos aplicados ↗</a></div></section>
            </aside>
          </div>
        </section>
      </main>
    </PortalChrome>
  );
}
