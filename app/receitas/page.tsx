import { PortalChrome } from "../components/PortalChrome";

const items = [
  ["Iogurte grego caseiro", "Processo de fermentação e dessoragem a partir de leite e iogurte natural.", "PROCESSO CONHECIDO"],
  ["Cinnamon roll proteico", "Formulação discutida com iogurte grego e whey; execução e resultado precisam ser confirmados.", "RECEITA A VALIDAR"],
  ["Picolé tipo Magnum", "Desenvolvimento de base e cobertura; proporções finais precisam de revisão.", "RECEITA A VALIDAR"],
];

export default function Recipes() {
  return (
    <PortalChrome active="receitas">
      <main className="site-page portal-inner-page">
        <section className="site-page-main portal-main">
          <div className="portal-page-grid">
            <div className="portal-primary-column">
              <header className="portal-page-intro"><div className="section-kicker">EXPERIMENTOS / COZINHA</div><h1>Cozinha & <em>receitas.</em></h1><p className="site-page-lead">Um caderno de formulações e preparos. Cada ficha terá ingredientes em gramas, rendimento, processo e status de teste. Não classificamos como aprovada uma receita cuja execução não foi confirmada.</p></header>
              <div className="site-page-grid">{items.map(([title, description, status]) => <article className="site-page-card" key={title}><small>{status}</small><h2>{title}</h2><p>{description}</p></article>)}</div>
            </div>
            <aside className="portal-aside">
              <section className="portal-aside-card"><span className="profile-index">CADERNO</span><strong className="portal-aside-stat">03</strong><h2>Preparos registrados</h2><p>Formulações e processos em diferentes estágios de documentação e teste.</p></section>
              <section className="portal-aside-card"><span className="profile-index">FICHA TÉCNICA</span><div className="portal-aside-list"><span>Ingredientes em gramas</span><span>Rendimento final</span><span>Etapas e tempos</span><span>Conservação</span><span>Status de validação</span></div></section>
              <section className="portal-aside-card"><span className="profile-index">VALIDAÇÃO</span><h2>Teste antes de aprovar</h2><p>Uma formulação discutida ou estimada não será tratada como receita testada. Resultado, rendimento e ajustes precisam ser confirmados.</p></section>
              <section className="portal-aside-card"><span className="profile-index">NAVEGAÇÃO</span><div className="portal-aside-nav"><a href="/ideias">Ideias e experimentos ↗</a><a href="/pesquisas">Estudos e métodos ↗</a></div></section>
            </aside>
          </div>
        </section>
      </main>
    </PortalChrome>
  );
}
