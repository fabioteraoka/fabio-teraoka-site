import { PortalChrome } from "../../components/PortalChrome";

export const metadata = {
  title: "Impacto Dashboard — Projeto | Fábio Teraoka",
  description:
    "Estudo de caso de uma aplicação para consolidação de ordens de serviço, padronização de dados operacionais e geração de indicadores gerenciais.",
};

const capabilities = [
  {
    number: "01",
    title: "Consolidação de dados",
    description:
      "Importação de relatórios operacionais em formatos distintos, com identificação estrutural, validação e regras para preservar os dados já consolidados.",
  },
  {
    number: "02",
    title: "Indicadores operacionais",
    description:
      "Visões gerenciais de ordens de serviço, status, clientes, bases, serviços executados e registros de materiais, com filtros combináveis.",
  },
  {
    number: "03",
    title: "Padronização de serviços e clientes",
    description:
      "Organização de títulos em português e inglês, classificação por tipo de ordem e unificação de variações de nomes sem descartar o texto de origem.",
  },
  {
    number: "04",
    title: "Consulta e governança de OS",
    description:
      "Pesquisa de ordens de serviço e consulta de materiais vinculados, com edição administrativa condicionada ao perfil de acesso.",
  },
  {
    number: "05",
    title: "Relatórios executivos",
    description:
      "Exportação de dados para Excel e geração de apresentações PowerPoint com gráficos e tabelas alinhados aos filtros aplicados.",
  },
  {
    number: "06",
    title: "Acesso por perfil",
    description:
      "Autenticação com Firebase e regras de acesso por função para separar consulta, importação e administração.",
  },
];

export default function ImpactoDashboardProject() {
  return (
    <PortalChrome active="projetos">
      <main className="site-page portal-inner-page project-detail-page">
        <section className="site-page-main portal-main">
          <div className="portal-page-grid">
            <div className="portal-primary-column">
              <header className="portal-page-intro project-detail-intro">
                <div className="section-kicker">PORTFÓLIO / PROJETO AUTORAL / GESTÃO OPERACIONAL</div>
                <p className="project-detail-eyebrow">DADOS OPERACIONAIS · ORDENS DE SERVIÇO · MATERIAIS</p>
                <h1>Impacto <em>Dashboard.</em></h1>
                <p className="site-page-lead">
                  Aplicação web concebida para transformar exportações operacionais em uma base
                  consolidada, indicadores gerenciais e relatórios executivos — reduzindo o
                  retrabalho causado por duplicidades, nomenclaturas divergentes e fontes de dados
                  complementares.
                </p>
                <div className="project-detail-actions">
                  <a className="project-detail-primary" href="https://dashboard-impacto-soex.onrender.com" target="_blank" rel="noreferrer">
                    Acessar aplicação ↗
                  </a>
                  <a className="project-detail-secondary" href="/projetos">
                    Voltar aos projetos
                  </a>
                </div>
              </header>

              <section className="project-detail-section">
                <div className="section-kicker">01 / CONTEXTO E PROBLEMA</div>
                <h2>Dados fragmentados dificultam a leitura da operação.</h2>
                <p>
                  Exportações de um ERP podem apresentar uma mesma ordem de serviço em múltiplas
                  linhas por causa dos materiais associados. Também podem existir diferenças de
                  idioma, grafia de clientes e títulos de serviços, além de relatórios que
                  complementam informações uns dos outros. Sem regras explícitas de consolidação,
                  esses fatores distorcem contagens, dificultam comparações e aumentam o esforço
                  de preparação dos relatórios.
                </p>
                <div className="project-detail-callout">
                  <strong>Objetivo do projeto</strong>
                  <span>
                    Criar uma camada de tratamento e análise entre os arquivos exportados e a
                    gestão: preservar a origem dos dados, aplicar critérios consistentes e
                    transformar registros operacionais em informação utilizável.
                  </span>
                </div>
              </section>

              <section className="project-detail-section">
                <div className="section-kicker">02 / CAPACIDADES FUNCIONAIS</div>
                <h2>Da importação à apresentação gerencial.</h2>
                <div className="project-capability-grid">
                  {capabilities.map((item) => (
                    <article key={item.number}>
                      <span>{item.number}</span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="project-detail-section">
                <div className="section-kicker">03 / REGRAS DE TRATAMENTO</div>
                <h2>Consolidar sem apagar a informação de origem.</h2>
                <ul className="project-detail-list">
                  <li>
                    <strong>Contagem por ordem de serviço:</strong> evita contar cada linha de
                    material como uma nova ordem, mantendo os itens vinculados ao registro.
                  </li>
                  <li>
                    <strong>Relatórios complementares:</strong> aplica regras distintas para
                    relatórios com e sem materiais, evitando que uma importação sem esses dados
                    remova materiais já associados.
                  </li>
                  <li>
                    <strong>Padronização rastreável:</strong> permite agrupar serviços e clientes
                    por uma nomenclatura gerencial sem perder os valores originais recebidos.
                  </li>
                  <li>
                    <strong>Importação controlada:</strong> valida a estrutura das planilhas e
                    registra o histórico do processamento, com mecanismos de retomada em lotes.
                  </li>
                </ul>
              </section>

              <section className="project-detail-section">
                <div className="section-kicker">04 / ARQUITETURA E TECNOLOGIA</div>
                <h2>Aplicação web com autenticação e persistência em nuvem.</h2>
                <p>
                  Conforme a documentação técnica do projeto, a interface utiliza React, TypeScript
                  e Vite, com servidor Node.js e Express. Firebase Authentication e Cloud
                  Firestore compõem a camada de autenticação e persistência. Recharts apoia a
                  visualização dos indicadores; SheetJS e PptxGenJS são utilizados na leitura e
                  geração de arquivos Excel e PowerPoint.
                </p>
                <div className="project-tech-tags">
                  {["React 19", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "Firebase Auth", "Cloud Firestore", "Recharts", "SheetJS", "PptxGenJS"].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <p className="project-detail-footnote">
                  O repositório de código é privado. A disponibilidade da aplicação e de seus
                  recursos depende do ambiente publicado, das credenciais e das permissões
                  concedidas. A descrição não representa uma auditoria independente de segurança.
                </p>
              </section>

              <section className="project-detail-section">
                <div className="section-kicker">05 / TRANSPARÊNCIA E CONFIDENCIALIDADE</div>
                <h2>Documentação visual em revisão.</h2>
                <p>
                  As capturas de tela do projeto não foram incluídas nesta versão do portfólio.
                  Antes da publicação, é necessário remover ou substituir identificadores de
                  clientes, aeronaves e registros operacionais que possam permitir associação a
                  operações reais. A página já está estruturada para receber imagens revisadas
                  posteriormente.
                </p>
              </section>

              <section className="project-detail-section project-detail-author">
                <div className="section-kicker">06 / AUTORIA E APLICAÇÃO PRÁTICA</div>
                <h2>Engenharia de processos aplicada à informação.</h2>
                <p>
                  Projeto autoral que reúne experiência em gestão operacional, engenharia,
                  materiais e tecnologia para estruturar dados, explicitar regras de negócio e
                  apoiar a tomada de decisão. O foco não é apenas apresentar gráficos, mas
                  estabelecer critérios consistentes entre a informação de origem e os indicadores
                  utilizados pela gestão.
                </p>
                <div className="project-detail-actions">
                  <a className="project-detail-primary" href="https://dashboard-impacto-soex.onrender.com" target="_blank" rel="noreferrer">
                    Explorar aplicação ↗
                  </a>
                  <a className="project-detail-secondary" href="/projetos">
                    Todos os projetos
                  </a>
                </div>
              </section>
            </div>

            <aside className="portal-aside project-detail-aside">
              <section className="portal-aside-card">
                <span className="profile-index">FICHA DO PROJETO</span>
                <strong className="project-aside-status">PROJETO AUTORAL</strong>
                <h2>Impacto Dashboard</h2>
                <p>Camada de consolidação, análise e comunicação de dados operacionais.</p>
              </section>
              <section className="portal-aside-card">
                <span className="profile-index">ESCOPO FUNCIONAL</span>
                <div className="portal-aside-list">
                  <span>Importação e validação de planilhas</span>
                  <span>Indicadores de ordens de serviço</span>
                  <span>Materiais e clientes</span>
                  <span>Padronização bilíngue</span>
                  <span>Consulta e edição administrativa</span>
                  <span>Excel e PowerPoint</span>
                </div>
              </section>
              <section className="portal-aside-card">
                <span className="profile-index">STACK PRINCIPAL</span>
                <div className="project-tech-tags project-tech-tags-aside">
                  {["React", "TypeScript", "Firebase", "Firestore", "Express"].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </section>
              <section className="portal-aside-card">
                <span className="profile-index">ACESSO</span>
                <div className="portal-aside-nav">
                  <a href="https://dashboard-impacto-soex.onrender.com" target="_blank" rel="noreferrer">Aplicação ↗</a>
                  <a href="/projetos">Todos os projetos ↗</a>
                </div>
              </section>
              <p className="project-aside-note">
                Acesso sujeito à disponibilidade do ambiente e às permissões configuradas.
              </p>
            </aside>
          </div>
        </section>
      </main>
    </PortalChrome>
  );
}
