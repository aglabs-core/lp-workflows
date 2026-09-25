/**
 * Configuração central de SEO/identidade do site.
 * Toda URL canônica, dados da empresa e contatos vivem aqui — um único ponto
 * de verdade para metadata, robots, sitemap, manifest e schema (JSON-LD).
 */

/** Domínio canônico desta landing page (sem barra no final). */
export const SITE_URL = "https://wf.aglabs.ia.br";

/** Site institucional principal da AG LABS (entidade Organization). */
export const ORG_URL = "https://aglabs.ia.br";

export const SITE = {
  name: "AG LABS",
  legalName: "AG LABS — Automação de Processos",
  shortName: "AG LABS",
  url: SITE_URL,
  orgUrl: ORG_URL,
  locale: "pt_BR",
  lang: "pt-BR",
  title: "AG LABS — Automações inteligentes que escalam seu negócio",
  description:
    "A AG LABS desenha, integra e opera automações sob medida: conecte ferramentas, elimine trabalho manual e ganhe visibilidade total dos seus fluxos. Resultados em semanas, não meses.",
  /** Card social 1200x630 em JPEG, gerado por og-shot.mjs. */
  ogImage: "/og-cover.jpg",
  /** Em uso hoje (Open Graph / Twitter) — quadrado 512x512, já existe em /public. */
  ogImageFallback: "/icon-512.png",
  logo: `${SITE_URL}/icon-512.png`,
  themeColor: "#050505",
  accentColor: "#34E27E",
  // Contato
  whatsapp: "https://wa.me/5564993259857",
  telephone: "+5564993259857",
  // Redes
  social: {
    instagram: "https://www.instagram.com/ag_labs/",
    linkedin: "https://www.linkedin.com/company/ag-labs",
    facebook: "https://www.facebook.com/profile.php?id=61573483665476",
    x: "https://x.com/aglabsrv",
  },
  keywords: [
    "automação de processos",
    "automações inteligentes",
    "automação com IA",
    "integração de sistemas",
    "workflow",
    "n8n",
    "make",
    "RevOps",
    "agentes de IA",
    "atendimento no WhatsApp com IA",
    "qualificação de leads",
    "AG LABS",
  ],
} as const;

/** Monta uma URL absoluta a partir de um caminho relativo. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}
