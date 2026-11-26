import { PortalChrome } from "../../components/PortalChrome";

export const metadata = {
  title: "Airworthiness Compliance — Projeto | Fábio Teraoka",
  description:
    "Plataforma de inteligência de aeronavegabilidade continuada para organizar dados de frota, requisitos regulatórios, aplicabilidade, obrigações e evidências técnicas.",
};

const capabilities = [
  {
    number: "01",
    title: "Inventário e configuração de frota",
    text: "Cadastro de aeronaves, motores e componentes, com atributos técnicos como fabricante, modelo, MSN, ESN, P/N, S/N, horas e ciclos.",
  },
  {
    number: "02",
    title: "Inteligência regulatória",
    text: "Pesquisa e triagem de publicações, com conector consultado para o Federal Register e fluxos de ingestão e análise de fontes regulatórias.",
  },
  {
    number: "03",
    title: "Análise de ADs e aplicabilidade",
    text: "Extração assistida de informações documentais e avaliação por regras determinísticas, considerando configuração e dados da frota.",
  },
  {
    number: "04",
    title: "Obrigações e limites",
    text: "Acompanhamento do ciclo de vida das obrigações e cálculo de vencimentos por horas de voo, ciclos e calendário.",
  },
  {
    number: "05",
    title: "Evidências e pareceres",
    text: "Organização e verificação de evidências técnicas, perguntas de esclarecimento e geração de Folhas de Análise e Parecer Técnico (FAPT).",
  },
  {
    number: "06",
    title: "Delivery e pré-compra",
    text: "Ambiente separado para avaliação de aeronaves em processos de aquisição, entrega ou devolução, com reconciliação de registros.",
  },
];

const technologies = [
  "React 19",
  "TypeScript",
  "Vite",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "Google Gemini",
  "Vitest",
  "SHA-256",
  "PDFKit",
];

export default function AirworthinessComplianceProject() {
  return (
    <PortalChrome active="projetos">
      <main className="site-page portal-inner-page project-detail-page">
        <section className="site-page-main portal-main">
          <div className="portal-page-grid">
            <div className="portal-primary-column">
              <header className="portal-page-intro project-detail-intro">
                <div className="section-kicker">
                  PORTFÓLIO / PROJETO AUTORAL / ENGENHARIA AERONÁUTICA
                </div>
                <p className="project-detail-eyebrow">
                  CAMO · AIRWORTHINESS · REGULATORY INTELLIGENCE
                </p>
                <h1>
                  Airworthiness <em>Compliance Intelligence.</em>
                </h1>
                <p className="site-page-lead">
                  Uma plataforma de engenharia de software voltada à organização
                  e análise de informações de aeronavegabilidade continuada.
                  Conecta dados de frota, requisitos regulatórios, regras de
                  aplicabilidade, obrigações e evidências em fluxos rastreáveis.
                </p>
                <div className="project-detail-actions">
                  <a
                    className="project-detail-primary"
                    href="https://airworthinesscompliance.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir demonstração ↗
                  </a>
                  <a
                    className="project-detail-secondary"
                    href="https://github.com/fabioteraoka/Airworthiness-Compliance-"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver código-fonte ↗
                  </a>
                </div>
              </header>

              <section className="project-detail-section">
                <div className="section-kicker">01 / CONTEXTO E OBJETIVO</div>
                <h2>Da informação regulatória à análise técnica rastreável.</h2>
                <p>
                  O controle de aeronavegabilidade depende da relação entre a
                  configuração real de cada aeronave, os requisitos aplicáveis,
                  os prazos de cumprimento e a documentação que comprova as
                  ações executadas. Quando essas informações ficam dispersas,
                  a análise técnica torna-se mais difícil de acompanhar e
                  auditar.
                </p>
                <p>
                  O projeto estrutura esse fluxo em um ambiente único, apoiando
                  a triagem regulatória e o trabalho de engenharia sem
                  substituir a avaliação ou a autoridade do profissional
                  responsável.
                </p>
                <div className="project-detail-callout">
                  <strong>Princípio de concepção</strong>
                  <span>
                    Automação para organizar, cruzar e sinalizar informações;
                    decisão de conformidade e responsabilidade técnica
                    permanecem sob controle humano.
                  </span>
                </div>
              </section>

              <section className="project-detail-section">
                <div className="section-kicker">02 / MÓDULOS E CAPACIDADES</div>
                <h2>Uma visão conectada do ciclo de conformidade.</h2>
                <div className="project-capability-grid">
                  {capabilities.map((item) => (
                    <article key={item.number}>
                      <span>{item.number}</span>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="project-detail-section">
                <div className="section-kicker">03 / LÓGICA DE ENGENHARIA</div>
                <h2>Regras explícitas, evidência e revisão humana.</h2>
                <ul className="project-detail-list">
                  <li>
                    <strong>Separação entre IA e decisão:</strong> os recursos
                    de IA são utilizados para apoiar a leitura e estruturação
                    documental. A avaliação de aplicabilidade é atribuída ao
                    motor determinístico, não ao modelo generativo.
                  </li>
                  <li>
                    <strong>Tratamento de dados ausentes:</strong> lacunas de
                    configuração ou de histórico devem levar a estados de
                    revisão ou insuficiência de dados, em vez de serem
                    interpretadas automaticamente como não aplicabilidade.
                  </li>
                  <li>
                    <strong>Evidência não é apenas anexo:</strong> a existência
                    de um documento não basta para caracterizar cumprimento.
                    O fluxo prevê verificação técnica e validação humana.
                  </li>
                  <li>
                    <strong>Isolamento por contexto:</strong> a avaliação de
                    aeronaves em pré-entrega é tratada em ambiente separado da
                    frota ativa, reduzindo o risco de misturar contextos
                    operacionais.
                  </li>
                  <li>
                    <strong>Histórico rastreável:</strong> o projeto contempla
                    registros de eventos e verificações de integridade por
                    hash. O uso de SHA-256 apoia a detecção de alterações; não
                    equivale, isoladamente, a uma garantia absoluta contra
                    adulteração.
                  </li>
                </ul>
              </section>

              <section className="project-detail-section">
                <div className="section-kicker">04 / FLUXO FUNCIONAL</div>
                <h2>Uma sequência que preserva a origem da decisão.</h2>
                <div className="project-detail-callout">
                  <strong>Fluxo de trabalho representado no sistema</strong>
                  <span>
                    Fonte regulatória → descoberta e triagem → análise da AD →
                    requisito estruturado → avaliação de aplicabilidade →
                    obrigação e prazo → evidência → verificação → parecer e
                    acompanhamento da aeronave.
                  </span>
                </div>
                <p>
                  A arquitetura também contempla pesquisa de diretrizes,
                  perguntas técnicas para resolver lacunas de dados, base de
                  conhecimento reutilizável, relatórios FAPT e avaliação
                  isolada de delivery. A disponibilidade de cada integração
                  depende das credenciais, fontes e configurações do ambiente.
                </p>
              </section>

              <section className="project-detail-section">
                <div className="section-kicker">05 / ARQUITETURA E TECNOLOGIA</div>
                <h2>Aplicação web com frontend e serviços especializados.</h2>
                <p>
                  O repositório descreve uma aplicação React e TypeScript,
                  construída com Vite, apoiada por servidor Node.js e Express.
                  O domínio é organizado em serviços para persistência,
                  inteligência regulatória, avaliação de regras, obrigações,
                  evidências e auditoria.
                </p>
                <div className="project-tech-tags">
                  {technologies.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <p className="project-detail-footnote">
                  Google Gemini depende de chave de API e configuração
                  apropriada. A consulta a fontes externas depende de
                  conectividade e disponibilidade dos respectivos serviços.
                  A documentação consultada descreve persistência em arquivo
                  local com escrita atômica; isso deve ser considerado antes
                  de qualquer uso multi-instância ou com alta concorrência.
                </p>
              </section>

              <section className="project-detail-section">
                <div className="section-kicker">06 / ESCOPO E LIMITES</div>
                <h2>O que a demonstração não pretende afirmar.</h2>
                <ul className="project-detail-list">
                  <li>
                    O projeto é uma ferramenta de apoio à engenharia; não é,
                    por si só, uma aprovação, certificação ou homologação de
                    produto ou operador por FAA, EASA ou ANAC.
                  </li>
                  <li>
                    A existência de referências a requisitos regulatórios não
                    garante conformidade de uma aeronave ou frota. Essa
                    conclusão depende de dados completos, evidências válidas e
                    avaliação autorizada.
                  </li>
                  <li>
                    Alguns conectores descritos na documentação ainda dependem
                    de integração específica; a cobertura de fontes não deve
                    ser interpretada como atualização universal em tempo real.
                  </li>
                  <li>
                    O roadmap inclui funções adicionais de Maintenance
                    Control, como programas de manutenção e ordens de serviço.
                    Esses itens não são apresentados aqui como capacidades
                    concluídas.
                  </li>
                </ul>
              </section>

              <section className="project-detail-section project-detail-author">
                <div className="section-kicker">07 / AUTORIA E APLICAÇÃO</div>
                <h2>Engenharia aeronáutica estruturada como sistema.</h2>
                <p>
                  Projeto autoral que aproxima conhecimento de engenharia
                  aeronáutica, controle de manutenção, análise regulatória e
                  desenvolvimento de software. O foco está em transformar
                  critérios técnicos e relações entre dados em processos
                  explícitos, rastreáveis e passíveis de revisão.
                </p>
                <div className="project-detail-actions">
                  <a
                    className="project-detail-primary"
                    href="https://airworthinesscompliance.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Explorar aplicação ↗
                  </a>
                  <a className="project-detail-secondary" href="/projetos">
                    Voltar aos projetos
                  </a>
                </div>
              </section>
            </div>

            <aside className="portal-aside project-detail-aside">
              <section className="portal-aside-card">
                <span className="profile-index">FICHA DO PROJETO</span>
                <strong className="project-aside-status">PROJETO AUTORAL</strong>
                <h2>Airworthiness Compliance</h2>
                <p>
                  Plataforma de apoio à análise de aeronavegabilidade
                  continuada e rastreabilidade técnica.
                </p>
              </section>
              <section className="portal-aside-card">
                <span className="profile-index">ESCOPO FUNCIONAL</span>
                <div className="portal-aside-list">
                  <span>Cadastro e configuração de frota</span>
                  <span>Pesquisa e triagem regulatória</span>
                  <span>Análise de ADs e aplicabilidade</span>
                  <span>Obrigações e vencimentos</span>
                  <span>Evidências e FAPT</span>
                  <span>Delivery e pré-compra</span>
                  <span>Trilha de auditoria</span>
                </div>
              </section>
              <section className="portal-aside-card">
                <span className="profile-index">STACK PRINCIPAL</span>
                <div className="project-tech-tags project-tech-tags-aside">
                  {["React", "TypeScript", "Vite", "Node / Express", "Vitest"].map(
                    (item) => (
                      <span key={item}>{item}</span>
                    )
                  )}
                </div>
              </section>
              <section className="portal-aside-card">
                <span className="profile-index">ACESSO</span>
                <div className="portal-aside-nav">
                  <a
                    href="https://airworthinesscompliance.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Aplicação ↗
                  </a>
                  <a
                    href="https://github.com/fabioteraoka/Airworthiness-Compliance-"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repositório GitHub ↗
                  </a>
                  <a href="/projetos">Todos os projetos ↗</a>
                </div>
              </section>
              <p className="project-aside-note">
                A demonstração e seus recursos dependem da disponibilidade do
                ambiente, das credenciais e das integrações configuradas.
              </p>
            </aside>
          </div>
        </section>
      </main>
    </PortalChrome>
  );
}
