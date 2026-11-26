import { PortalChrome } from "../../components/PortalChrome";

const groups = [
  {
    number: "01",
    title: "Agenda unificada",
    description:
      "Consolidação de compromissos pessoais e profissionais, com filtros por contexto e identificação de conflitos de horário entre agendas conectadas.",
  },
  {
    number: "02",
    title: "Tarefas e prioridades",
    description:
      "Cadastro e acompanhamento de tarefas em um espaço próprio, com prioridade e vínculo operacional a mensagens que exigem acompanhamento.",
  },
  {
    number: "03",
    title: "Contas e boletos",
    description:
      "Controle de vencimentos e status de pagamento, com possibilidade de registrar contas manualmente e copiar códigos PIX ou linhas digitáveis quando disponíveis.",
  },
  {
    number: "04",
    title: "Triagem de e-mails",
    description:
      "Classificação de mensagens por necessidade de resposta ou acompanhamento, com conversão em tarefas e prevenção de vínculos duplicados.",
  },
  {
    number: "05",
    title: "Monitoramento de preços",
    description:
      "Cadastro de produtos por URL, definição de preço-alvo, histórico e verificação agendada, sujeita à disponibilidade e às regras dos sites monitorados.",
  },
  {
    number: "06",
    title: "Visão consolidada",
    description:
      "Painel com indicadores de agenda, tarefas, contas e alertas para reduzir a alternância entre ferramentas e apoiar o planejamento diário.",
  },
];

const screenshots = [
  {
    title: "Agenda e conflitos",
    detail:
      "Visão de compromissos pessoais e profissionais e sinalização de sobreposição de horários.",
  },
  {
    title: "Contas e e-mails",
    detail:
      "Acompanhamento de vencimentos e triagem de mensagens prioritárias.",
  },
  {
    title: "Monitor de preços",
    detail:
      "Produtos acompanhados, preço-alvo e sinalização de oportunidade.",
  },
];

export const metadata = {
  title: "Painel da Vida — Projeto | Fábio Teraoka",
  description:
    "Estudo de caso de uma aplicação pessoal para integrar agenda, tarefas, contas, e-mails prioritários e monitoramento de preços.",
};

export default function PainelDaVidaProject() {
  return (
    <PortalChrome active="projetos">
      <main className="site-page portal-inner-page project-detail-page">
        <section className="site-page-main portal-main">
          <div className="portal-page-grid">
            <div className="portal-primary-column">
              <header className="portal-page-intro project-detail-intro">
                <div className="section-kicker">PORTFÓLIO / PROJETO AUTORAL / PRODUTIVIDADE</div>
                <p className="project-detail-eyebrow">ORGANIZAÇÃO PESSOAL · AUTOMAÇÃO · INTEGRAÇÕES</p>
                <h1>Painel da <em>Vida.</em></h1>
                <p className="site-page-lead">
                  Um centro de comando pessoal para reunir compromissos, tarefas, contas,
                  mensagens prioritárias e alertas de preço em uma única experiência. A proposta
                  é transformar informações dispersas em uma visão diária mais clara, sem
                  depender de um único provedor para as funções essenciais.
                </p>
                <div className="project-detail-actions">
                  <a className="project-detail-primary" href="https://painel-da-vida-git-main-fabioteraokas-projects.vercel.app/" target="_blank" rel="noreferrer">
                    Acessar aplicação ↗
                  </a>
                  <a className="project-detail-secondary" href="https://github.com/fabioteraoka/painel-da-vida" target="_blank" rel="noreferrer">
                    Repositório GitHub ↗
                  </a>
                  <a className="project-detail-secondary" href="/projetos">
                    Voltar aos projetos
                  </a>
                </div>
              </header>

              <section className="project-detail-section">
                <div className="section-kicker">01 / CONTEXTO E OBJETIVO</div>
                <h2>Menos alternância. Mais visão do conjunto.</h2>
                <p>
                  Agenda, caixa de entrada, tarefas, contas e pesquisas de preço normalmente
                  ficam distribuídas em serviços diferentes. Essa fragmentação aumenta o custo de
                  acompanhar pendências e dificulta perceber conflitos ou prioridades em tempo.
                  O Painel da Vida organiza esses domínios em uma camada única de consulta e
                  operação, preservando a separação entre contextos pessoais e profissionais.
                </p>
                <div className="project-detail-callout">
                  <strong>Princípio de produto</strong>
                  <span>
                    Consolidar a visualização sem exigir que todos os dados tenham a mesma origem:
                    funções essenciais permanecem disponíveis no próprio sistema, enquanto
                    integrações externas são conectadas quando necessárias.
                  </span>
                </div>
              </section>

              <section className="project-detail-section">
                <div className="section-kicker">02 / CAPACIDADES FUNCIONAIS</div>
                <h2>Uma rotina conectada em seis frentes.</h2>
                <div className="project-capability-grid">
                  {groups.map((item) => (
                    <article key={item.number}>
                      <span>{item.number}</span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="project-detail-section">
                <div className="section-kicker">03 / ARQUITETURA E SEGURANÇA</div>
                <h2>Autenticação própria e integrações opcionais.</h2>
                <p>
                  A documentação do repositório descreve uma aplicação baseada em Next.js,
                  React e TypeScript, com PostgreSQL e Prisma. O acesso utiliza autenticação
                  própria, senhas protegidas com Argon2id e sessões assinadas. Para contas Google
                  conectadas, o projeto implementa criptografia AES-256-GCM para tokens e fluxo
                  OAuth com nonce de uso único.
                </p>
                <div className="project-tech-tags">
                  {["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Argon2id", "AES-256-GCM", "Google OAuth", "Vercel AI SDK", "Zod"].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <p>
                  As rotinas agendadas de boletos e preços são protegidas por segredo de
                  autorização. O monitor de preços também valida URLs para reduzir riscos de
                  requisições a endereços internos.
                </p>
                <p className="project-detail-footnote">
                  Ressalva técnica: o código mantém compatibilidade de migração com tokens Google
                  legados em texto puro. Portanto, não é correto afirmar que todos os tokens
                  existentes já estão criptografados sem confirmar a execução e o resultado da
                  migração. A descrição das medidas implementadas não equivale a uma auditoria
                  independente de segurança.
                </p>
              </section>

              <section className="project-detail-section">
                <div className="section-kicker">04 / IMPLEMENTADO E DEPENDENTE DE CONFIGURAÇÃO</div>
                <h2>Separar capacidade de código de disponibilidade real.</h2>
                <div className="project-capability-grid">
                  <article>
                    <span>BASE DO SISTEMA</span>
                    <h3>Recursos próprios</h3>
                    <p>
                      Autenticação local, dashboard, tarefas, contas manuais e produtos
                      monitorados dependem da configuração do banco e das variáveis essenciais
                      do ambiente.
                    </p>
                  </article>
                  <article>
                    <span>INTEGRAÇÕES EXTERNAS</span>
                    <h3>Google e automações</h3>
                    <p>
                      Gmail, Google Calendar, leitura assistida por IA e rotinas agendadas
                      dependem de credenciais, permissões, segredos e configuração operacional.
                    </p>
                  </article>
                  <article>
                    <span>LIMITES DE TERCEIROS</span>
                    <h3>Monitoramento de preços</h3>
                    <p>
                      A coleta de preços depende da estrutura e disponibilidade dos sites
                      consultados; mudanças de página, bloqueios e limites externos podem afetar
                      a captura.
                    </p>
                  </article>
                  <article>
                    <span>ROADMAP</span>
                    <h3>Expansões futuras</h3>
                    <p>
                      Microsoft 365, leitura direta de anexos PDF, validações avançadas de
                      boletos, notificações via WhatsApp e central de notificações aparecem na
                      documentação como evoluções planejadas.
                    </p>
                  </article>
                </div>
              </section>

              <section className="project-detail-section">
                <div className="section-kicker">05 / EXPERIÊNCIA DA APLICAÇÃO</div>
                <h2>Três fluxos que estruturam o uso diário.</h2>
                <div className="project-capability-grid">
                  {screenshots.map((shot, index) => (
                    <article key={shot.title}>
                      <span>FLUXO 0{index + 1}</span>
                      <h3>{shot.title}</h3>
                      <p>{shot.detail}</p>
                    </article>
                  ))}
                </div>
                <p className="project-detail-footnote">
                  As imagens do README foram mantidas fora desta página nesta etapa. Antes de
                  publicá-las, é necessário revisar os dados demonstrativos exibidos nas telas
                  (nomes, e-mails, valores, produtos e eventos) e confirmar que não representam
                  informações pessoais ou financeiras reais.
                </p>
              </section>

              <section className="project-detail-section">
                <div className="section-kicker">06 / AUTORIA E DIREÇÃO DO PRODUTO</div>
                <h2>Uma aplicação prática de integração de sistemas.</h2>
                <p>
                  Projeto autoral que combina organização de processos, modelagem de dados,
                  integrações externas e automação. A principal decisão de arquitetura é manter
                  as funções essenciais independentes das conexões externas, reduzindo o risco de
                  que uma falha de OAuth ou de um provedor interrompa todo o uso do painel.
                </p>
                <div className="project-detail-actions">
                  <a className="project-detail-primary" href="https://painel-da-vida-git-main-fabioteraokas-projects.vercel.app/" target="_blank" rel="noreferrer">
                    Explorar aplicação ↗
                  </a>
                  <a className="project-detail-secondary" href="https://github.com/fabioteraoka/painel-da-vida" target="_blank" rel="noreferrer">
                    Ver código-fonte ↗
                  </a>
                </div>
              </section>
            </div>

            <aside className="portal-aside project-detail-aside">
              <section className="portal-aside-card">
                <span className="profile-index">FICHA DO PROJETO</span>
                <strong className="project-aside-status">EM EVOLUÇÃO</strong>
                <h2>Painel da Vida</h2>
                <p>Centro de comando pessoal para agenda, tarefas, finanças do dia a dia e alertas.</p>
              </section>
              <section className="portal-aside-card">
                <span className="profile-index">DOMÍNIOS</span>
                <div className="portal-aside-list">
                  <span>Agenda pessoal e profissional</span>
                  <span>Tarefas e prioridades</span>
                  <span>Contas e boletos</span>
                  <span>E-mails prioritários</span>
                  <span>Monitoramento de preços</span>
                </div>
              </section>
              <section className="portal-aside-card">
                <span className="profile-index">STACK PRINCIPAL</span>
                <div className="project-tech-tags project-tech-tags-aside">
                  {["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Google APIs"].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </section>
              <section className="portal-aside-card">
                <span className="profile-index">LINKS</span>
                <div className="portal-aside-nav">
                  <a href="https://painel-da-vida-git-main-fabioteraokas-projects.vercel.app/" target="_blank" rel="noreferrer">Aplicação ↗</a>
                  <a href="https://github.com/fabioteraoka/painel-da-vida" target="_blank" rel="noreferrer">Repositório GitHub ↗</a>
                  <a href="/projetos">Todos os projetos ↗</a>
                </div>
              </section>
              <p className="project-aside-note">
                Recursos conectados dependem de configuração, permissões e disponibilidade dos
                serviços externos.
              </p>
            </aside>
          </div>
        </section>
      </main>
    </PortalChrome>
  );
}
