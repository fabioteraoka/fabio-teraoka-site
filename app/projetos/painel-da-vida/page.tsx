import { PortalChrome } from "../../components/PortalChrome";

export default function Project() {
  return (
    <PortalChrome active="projetos">
      <main className="site-page portal-inner-page">
        <section className="site-page-main portal-main">
          <div className="portal-page-grid">
            <div className="portal-primary-column">
              <header className="portal-page-intro"><div className="section-kicker">PROJETO / PRODUTIVIDADE</div><h1>Painel da <em>Vida.</em></h1><p className="site-page-lead">Uma iniciativa para reunir informações e rotinas pessoais em um único painel, reduzindo a fragmentação entre agenda, e-mail e tarefas.</p></header>
              <div className="site-page-grid">
                <article className="site-page-card"><small>OBJETIVO</small><h2>Centralização</h2><p>Organizar agenda, mensagens, tarefas e alertas em uma experiência integrada.</p></article>
                <article className="site-page-card"><small>ESTÁGIO</small><h2>Em desenvolvimento</h2><p>Há uma versão implantada e uma base técnica em evolução. As integrações planejadas não devem ser interpretadas como funcionalidades concluídas.</p></article>
                <article className="site-page-card"><small>TECNOLOGIAS / ARQUITETURA</small><h2>Aplicação web</h2><p>O projeto utiliza serviços web e integrações externas. A documentação pública será ampliada após revisão do estado atual do código.</p></article>
                <article className="site-page-card"><small>PRÓXIMOS PASSOS</small><h2>Confiabilidade</h2><p>Consolidar autenticação, integrações, tratamento de erros e experiência de uso.</p></article>
              </div>
              <a className="back-link" href="/projetos">← Todos os projetos</a>
            </div>
            <aside className="portal-aside">
              <section className="portal-aside-card"><span className="profile-index">PROPÓSITO</span><h2>Um painel pessoal integrado</h2><p>Reunir informações dispersas e reduzir a alternância entre ferramentas de rotina.</p></section>
              <section className="portal-aside-card"><span className="profile-index">DOMÍNIOS</span><div className="portal-aside-list"><span>Agenda e calendário</span><span>E-mail</span><span>Tarefas</span><span>Alertas e automações</span></div></section>
              <section className="portal-aside-card"><span className="profile-index">STATUS</span><h2>Em evolução</h2><p>Esta página diferencia o que está implantado do que ainda é planejamento. Não compartilhe credenciais ou dados pessoais em demonstrações públicas.</p></section>
              <section className="portal-aside-card"><span className="profile-index">NAVEGAÇÃO</span><div className="portal-aside-nav"><a href="/projetos">Outros projetos ↗</a><a href="/ideias">Ideias e experimentos ↗</a></div></section>
            </aside>
          </div>
        </section>
      </main>
    </PortalChrome>
  );
}
