"use client";

import { useRef } from "react";

// Slugs verificados — simpleicons.org (cdn.simpleicons.org/<slug>/ffffff)
const row1 = [
  "n8n", "huggingface", "anthropic", "supabase", "telegram", "instagram",
  "whatsapp", "github", "mattermost", "notion", "stripe", "zapier",
  "discord", "figma", "shopify", "mongodb", "zoom", "linear",
  "mailchimp", "airtable", "hubspot", "typeform", "brevo", "vercel", "firebase",
];

const row2 = [
  "zoho", "postgresql", "redis", "googlemeet", "jira", "asana",
  "googledrive", "webflow", "clickup", "miro", "zendesk", "intercom",
  "confluence", "dropbox", "basecamp", "netlify", "cloudflare", "digitalocean",
  "woocommerce", "wordpress", "loom", "mixpanel", "mysql", "trello", "googleanalytics",
];

function Logo({ slug }: { slug: string }) {
  const boxRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={boxRef}
      style={{
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        height: 60,
        margin: "0 12px",
        borderRadius: 16,
        border: "1px solid rgba(255,255,255,0.07)",
        background: "rgba(255,255,255,0.03)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://cdn.simpleicons.org/${slug}/ffffff`}
        alt={slug}
        width={26}
        height={26}
        style={{ opacity: 0.5, display: "block" }}
        onError={() => {
          // Esconde o container inteiro — sem caixa vazia visível
          if (boxRef.current) boxRef.current.style.display = "none";
        }}
      />
    </div>
  );
}

function MarqueeRow({
  slugs,
  reverse,
  duration = 45,
}: {
  slugs: string[];
  reverse?: boolean;
  duration?: number;
}) {
  // Duplicar exatamente 1x: animação -50% percorre 1 cópia → loop perfeito
  // Ambas as cópias perdem as mesmas caixas no onError → -50% continua correto
  const items = [...slugs, ...slugs];
  return (
    <div style={{ overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          width: "max-content",
          willChange: "transform",
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${duration}s linear infinite`,
        }}
      >
        {items.map((s, i) => (
          <Logo key={i} slug={s} />
        ))}
      </div>
    </div>
  );
}

export function HeroIntro() {
  return (
    <section
      style={{
        background: "#050505",
        overflow: "hidden",
        paddingTop: 48,
        paddingBottom: 48,
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: 15,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.2)",
          marginBottom: 32,
        }}
      >
        Integra com as ferramentas que você já usa
      </p>

      <div
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <MarqueeRow slugs={row1} duration={65} />
        <MarqueeRow slugs={row2} reverse duration={80} />
      </div>
    </section>
  );
}
