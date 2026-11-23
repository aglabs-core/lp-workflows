# AG LABS — Landing Page de Automações

LP de conversão premium para a **AG LABS**, inspirada no design **FlowTune** (dark + verde esmeralda, tipografia Urbanist, diagramas de nós de automação).

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** com design tokens customizados
- Fonte **Urbanist** via `next/font` (sem requisição externa em runtime)
- Zero dependências de UI — tudo em componentes próprios

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm start        # servir o build
```

## Estrutura

```
app/
  layout.tsx        # fonte Urbanist + metadata/SEO
  globals.css       # tokens, grid de pontos, glass, botões, reveal
  page.tsx          # composição das seções
components/
  Nav · Hero · Features · HowItWorks · UseCases
  Stats · Testimonial · CtaSection · Footer
  ui/
    Logo            # marca asterisco (8 pétalas)
    WorkflowDiagram # diagrama de nós com linhas de fluxo animadas (peça central)
    Primitives      # Eyebrow, GlowOrb, SectionHeading
    Icons · Reveal  # ícones SVG + animação no scroll
tailwind.config.ts  # paleta (ink/emerald), animações, sombras/glow
```

## Design tokens principais

| Token | Valor |
|---|---|
| Fundo (`ink`) | `#0A0C0A` |
| Accent (`emerald`) | `#34E27E` (bright `#5BF59B`) |
| Texto (`cloud` / `mist` / `faint`) | `#EDEFED` / `#9AA09A` / `#5A605A` |
| Headlines | Urbanist Light, tracking apertado, bicolor (`.dim`) |

## Personalização rápida

- **Cores/glow:** `tailwind.config.ts` → `colors.emerald` e `backgroundImage`.
- **Copy:** texto direto em cada componente de seção (PT-BR).
- **Logos de prova social:** array `trustLogos` em `components/Hero.tsx`.
- **Fluxo do diagrama:** arrays `nodes` / `edges` em `components/ui/WorkflowDiagram.tsx`.
- **Formulário do CTA:** `components/CtaSection.tsx` (`<form action="#">` — conectar ao seu endpoint/CRM).


O workflow `quality.yml` executa a instalação do lockfile, a verificação de tipos e o build nos PRs e na branch `main`. O check também confere o HTML gerado.
