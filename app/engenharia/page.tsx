import type { Metadata } from "next";
import Link from "next/link";
import { PortalChrome } from "../components/PortalChrome";

export const metadata: Metadata = {
  title: "Experiência Profissional | Fábio Teraoka",
  description: "Trajetória profissional de Fábio Teraoka em engenharia aeronáutica, Supply Chain e gestão da qualidade.",
};

type CareerItem = {
  period: string;
  role: string;
  company: string;
  detail: string;
  mark: string;
  logo?: string;
  logoAlt?: string;
};

const career: CareerItem[] = [
  { period: "Fev/2026 — atual", role: "Gerente de Qualidade", company: "Impacto Aviation", detail: "Gestão da qualidade em ambiente aeronáutico.", mark: "IA", logo: "https://impactoaviation.com/images/logo/logo-dark.png", logoAlt: "Logotipo Impacto Aviation" },
  { period: "Jan/2025 — Jan/2026", role: "Material Logistics Manager", company: "SAS · Smart Airport Systems", detail: "Atuação em cenário de desorganização estrutural de estoque, ausência de rastreabilidade e dependência de compras emergenciais. Trabalho voltado à organização dos materiais, controles e estabilidade do abastecimento.", mark: "SAS", logo: "https://solarimpulse.com/files/companies/logo/2019-11-01-114646/logoSmartAirportSystems.jpg", logoAlt: "Logotipo Smart Airport Systems" },
  { period: "Jul/2023 — Nov/2024", role: "Gerente de Suprimentos", company: "Helipark", detail: "Gestão da área de suprimentos, coordenação de equipe e organização dos processos de compras, controle de materiais, estoque e abastecimento.", mark: "H" },
  { period: "Jul/2022 — Jul/2023", role: "Gestor de Suprimentos", company: "VOAR · Táxi Aéreo", detail: "Gestão de equipe distribuída entre compras nacionais e internacionais, estoque e logística. Coordenação dos processos de aquisição, recebimento, armazenagem, controle e distribuição de materiais.", mark: "VOAR" },
  { period: "Mar/2022 — Jul/2022", role: "Aeronavegabilidade", company: "SkyOn Aeroengineering", detail: "Atuação em consultoria técnica e conformidade de aeronavegabilidade.", mark: "SKY" },
  { period: "Ago/2021 — Dez/2021", role: "Aeronavegabilidade", company: "PCA Airworthiness", detail: "Atuação em processos de aeronavegabilidade e documentação técnica.", mark: "PCA" },
  { period: "Ago/2020 — Jul/2021", role: "Perito Judicial", company: "Justiça Federal", detail: "Elaboração de análises e avaliações técnicas no âmbito de perícias judiciais.", mark: "JF" },
  { period: "Jun/2018 — Mar/2020", role: "Gerente de Engenharia", company: "Connect Cargo Linhas Aéreas", detail: "Gestão de engenharia e acompanhamento de processos técnicos e operacionais.", mark: "CC" },
  { period: "Fev/2012 — Fev/2018", role: "Engenheiro de Planejamento", company: "Líder Signature", detail: "Planejamento e acompanhamento de atividades de engenharia, projetos e manutenção.", mark: "LÍDER" },
  { period: "Ago/2010 — Set/2011", role: "Gerente Geral de Engenharia", company: "TAM Linhas Aéreas", detail: "Gestão geral de engenharia e coordenação de atividades técnicas.", mark: "TAM", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b0/LOGO_TAM.png", logoAlt: "Logotipo TAM Linhas Aéreas" },
  { period: "1999 — 2010", role: "Superintendente Técnico de Engenharia", company: "Pantanal Linhas Aéreas", detail: "Atuação em ambiente de manutenção aeronáutica, com foco em processos técnicos, controle e conformidade.", mark: "P" },
  { period: "1998 — 1999", role: "Consultor de Engenharia", company: "Vórtice Consultoria Aeronáutica", detail: "Consultoria e implantação de sistemas de controle de manutenção.", mark: "V" },
  { period: "1996 — 1997", role: "Projetista Mecânico", company: "Dataregis S.A.", detail: "Desenvolvimento de projetos mecânicos em AutoCAD.", mark: "D" },
  { period: "1992 — 1995", role: "Técnico de Planejamento", company: "VASP", detail: "Controle técnico de manutenção, com foco em Boletins de Serviço.", mark: "VASP" },
  { period: "1992", role: "Técnico Mecânico", company: "Metalúrgica Brasitalia", detail: "Atuação técnica em processos de fabricação.", mark: "B" },
];

const visualReferences = [
  {
    image: "https://impactoaviation.com/images/servicos/real-frota-impacto-rampa.jpg",
    alt: "Veículo de apoio da Impacto Aviation ao lado de aeronave de carga no pátio",
    title: "Manutenção e suporte em pista",
    source: "Impacto Aviation",
    href: "https://impactoaviation.com/pt/empresa",
  },
  {
    image: "https://flapinternational.com.br/wp-content/uploads/2023/03/317098553_842772017053154_767659805115999018_n-2.jpg",
    alt: "Helicóptero em frente ao edifício da Helipark",
    title: "Aviação de asas rotativas",
    source: "Flap International",
    href: "https://flapinternational.com.br/destaque/helipark-recebe-homenagem-na-hai-heli-expo/",
  },
  {
    image: "https://aviacaobrasil.com.br/wp-content/uploads/2022/10/VOAR_Jun21-127.jpg",
    alt: "Hangar e aeronaves executivas da VOAR",
    title: "Operação de aviação executiva",
    source: "Portal Aviação Brasil",
    href: "https://aviacaobrasil.com.br/voar-aviation-abre-40-vagas-de-estagio-e-trainee/",
  },
];

export default function Engineering() {
  return (
    <PortalChrome active="engenharia">
    <main className="site-page career-page">
      <section className="site-page-main career-main">
        <div className="career-intro">
          <div className="section-kicker">EXPERIÊNCIA PROFISSIONAL</div>
          <h1>Engenharia, <em>qualidade e gestão.</em></h1>
          <p className="site-page-lead">Uma trajetória iniciada em 1992, construída entre engenharia aeronáutica, manutenção, aeronavegabilidade, Supply Chain e gestão da qualidade.</p>
          <div className="career-stats">
            <div><strong>1992</strong><span>INÍCIO DA TRAJETÓRIA</span></div>
            <div><strong>3 frentes</strong><span>ENGENHARIA · SUPPLY CHAIN · QUALIDADE</span></div>
            <div><strong>Aviação</strong><span>SETOR DE ATUAÇÃO CENTRAL</span></div>
          </div>
        </div>

        <div className="career-layout">
          <div className="career-main-column">
            <section className="career-section">
              <div className="career-section-heading">
                <span className="profile-index">01 / TRAJETÓRIA</span>
                <h2>Experiência construída em diferentes contextos da aviação.</h2>
                <p>Da base técnica à liderança de engenharia e materiais, até a gestão da qualidade.</p>
              </div>
              <div className="career-timeline">
                {career.map((item, index) => (
                  <article className="career-item" key={item.period + item.company}>
                    <div className="career-timeline-rail">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="career-item-card">
                      <div className="career-item-logo">
                        {item.logo ? <img src={item.logo} alt={item.logoAlt || `Logotipo ${item.company}`} loading="lazy" /> : <span>{item.mark}</span>}
                      </div>
                      <div className="career-item-copy">
                        <time>{item.period}</time>
                        <h3>{item.role}</h3>
                        <strong>{item.company}</strong>
                        <p>{item.detail}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="career-aside">
            <section className="career-aside-card career-current">
              <span className="profile-index">ATUAÇÃO ATUAL</span>
              <img src="https://impactoaviation.com/images/logo/logo-dark.png" alt="Impacto Aviation" />
              <h2>Gerente de Qualidade</h2>
              <p>Impacto Aviation · desde fevereiro de 2026</p>
            </section>
            <section className="career-aside-card">
              <span className="profile-index">ÁREAS DE ATUAÇÃO</span>
              <div className="career-focus-list">
                <div><span>01</span><strong>Engenharia aeronáutica</strong><small>Manutenção · Planejamento · Aeronavegabilidade</small></div>
                <div><span>02</span><strong>Supply Chain</strong><small>Suprimentos · Materiais · Logística</small></div>
                <div><span>03</span><strong>Gestão da qualidade</strong><small>Processos · Conformidade · Controles</small></div>
              </div>
            </section>
            <section className="career-aside-card">
              <span className="profile-index">CONTEXTO DA INDÚSTRIA</span>
              <p className="career-visual-note">Imagens institucionais e editoriais para contextualizar segmentos da aviação. Não são apresentadas como registros pessoais do trabalho.</p>
              <div className="career-visual-list">
                {visualReferences.map((item) => (
                  <a className="career-visual-item" href={item.href} target="_blank" rel="noreferrer" key={item.title}>
                    <img src={item.image} alt={item.alt} loading="lazy" />
                    <span><strong>{item.title}</strong><small>Fonte: {item.source} ↗</small></span>
                  </a>
                ))}
              </div>
            </section>
            <section className="career-aside-card career-contact">
              <span className="profile-index">CONTATO</span>
              <a href="mailto:fteraoka@gmail.com">fteraoka@gmail.com ↗</a>
              <a href="https://www.linkedin.com/in/fabioteraoka/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </section>
          </aside>
        </div>

        <Link className="back-link" href="/sobre">← Voltar ao perfil profissional</Link>
      </section>
    </main>
    </PortalChrome>
  );
}
