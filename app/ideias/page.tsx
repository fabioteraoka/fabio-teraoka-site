import { PortalChrome } from "../components/PortalChrome";

export default function Ideas() {
  return (
    <PortalChrome active="ideias">
      <main className="site-page portal-inner-page">
        <section className="site-page-main portal-main">
          <div className="portal-page-grid">
            <div className="portal-primary-column">
              <header className="portal-page-intro"><div className="section-kicker">EXPLORAÇÃO / PRÓXIMOS PASSOS</div><h1>Ideias & <em>experimentos.</em></h1><p className="site-page-lead">Espaço para hipóteses, conceitos e iniciativas em estágio inicial. Só serão promovidos a projetos quando houver escopo, evidências e evolução concreta.</p></header>
              <div className="site-page-grid">
                <article className="site-page-card"><small>CRITÉRIO DE ENTRADA</small><h2>Problema claro</h2><p>Registrar qual necessidade motivou a ideia e para quem ela gera valor.</p></article>
                <article className="site-page-card"><small>CRITÉRIO DE EVOLUÇÃO</small><h2>Evidência</h2><p>Documentar protótipos, testes, resultados e limitações antes de anunciar entregas.</p></article>
              </div>
            </div>
            <aside className="portal-aside">
              <section className="portal-aside-card"><span className="profile-index">LABORATÓRIO</span><strong className="portal-aside-stat">02</strong><h2>Critérios de maturidade</h2><p>Uma ideia não é apresentada como solução apenas por parecer promissora.</p></section>
              <section className="portal-aside-card"><span className="profile-index">ETAPAS</span><div className="portal-aside-list"><span>Hipótese e problema</span><span>Escopo e público</span><span>Protótipo ou experimento</span><span>Teste e evidências</span><span>Decisão de continuidade</span></div></section>
              <section className="portal-aside-card"><span className="profile-index">PRINCÍPIO</span><h2>Transparência de estágio</h2><p>Separar intenção, experimento, protótipo e projeto validado evita criar expectativas que a evidência ainda não sustenta.</p></section>
              <section className="portal-aside-card"><span className="profile-index">NAVEGAÇÃO</span><div className="portal-aside-nav"><a href="/projetos">Projetos em desenvolvimento ↗</a><a href="/pesquisas">Pesquisas e referências ↗</a></div></section>
            </aside>
          </div>
        </section>
      </main>
    </PortalChrome>
  );
}
