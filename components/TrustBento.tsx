"use client";

import { Eyebrow, SectionHeading, GlowOrb } from "./ui/Primitives";
import { Reveal } from "./ui/Reveal";
import { IconPlug, IconShield, IconEye, IconCheck } from "./ui/Icons";
import DottedMap from "dotted-map";

const _map = new DottedMap({ height: 55, grid: "diagonal" });
const _mapPoints = _map.getPoints();

function DotMap() {
  return (
    <svg
      viewBox="0 0 120 60"
      className="w-full"
      style={{ display: "block", background: "#050505", color: "rgba(52,226,126,0.28)" }}
    >
      {_mapPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={0.38} fill="currentColor" />
      ))}
    </svg>
  );
}

function AreaChart() {
  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago"];
  return (
    <div className="relative w-full" style={{ height: 120 }}>
      <svg
        viewBox="0 0 400 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="tbFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(52,226,126,0.22)" />
            <stop offset="100%" stopColor="rgba(52,226,126,0)" />
          </linearGradient>
        </defs>
        {/* Grid lines */}
        {[25, 50, 75].map((y) => (
          <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        ))}
        {/* Area fill */}
        <path
          d="M0,80 C30,75 55,70 85,55 C115,40 140,62 170,42 C200,22 228,48 258,30 C288,12 318,24 348,14 L400,8 L400,100 L0,100 Z"
          fill="url(#tbFill)"
        />
        {/* Line stroke */}
        <path
          d="M0,80 C30,75 55,70 85,55 C115,40 140,62 170,42 C200,22 228,48 258,30 C288,12 318,24 348,14 L400,8"
          fill="none"
          stroke="rgba(52,226,126,0.55)"
          strokeWidth="1.5"
        />
        {/* Dot at end */}
        <circle cx="400" cy="8" r="3" fill="#34E27E" opacity="0.8" />
      </svg>
      {/* Month labels */}
      <div className="absolute bottom-0 inset-x-0 flex justify-between px-1">
        {months.map((m) => (
          <span key={m} className="text-[10px]" style={{ color: "rgba(255,255,255,0.2)" }}>{m}</span>
        ))}
      </div>
    </div>
  );
}

export function TrustBento() {
  return (
    <section
      id="confiar"
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        backgroundColor: "#050505",
        backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      {/* Vinheta radial */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 65% at 50% 50%, transparent 30%, rgba(5,5,5,0.75) 65%, #050505 88%)",
        }}
      />
      {/* Fades verticais */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32" style={{ background: "linear-gradient(to bottom, #050505, transparent)" }} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32" style={{ background: "linear-gradient(to top, #050505, transparent)" }} />

      <GlowOrb className="right-0 bottom-0 translate-x-1/3 translate-y-1/3 opacity-[0.12]" size={900} animate={false} blur={100} />

      <div className="relative z-[1] mx-auto max-w-5xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Sem fricção técnica</Eyebrow>
          <SectionHeading className="mt-6">
            Funciona com o que você já usa,{" "}
            <span className="text-gradient-green">sem surpresas</span>
          </SectionHeading>
        </Reveal>

        <Reveal className="mt-14">
          <div className="rounded-sm border border-line overflow-hidden">

            {/* Linha 1: Integrações + Suporte */}
            <div className="grid md:grid-cols-2">

              {/* Painel 1 — Integrações */}
              <div className="border-b border-line md:border-r overflow-hidden">
                <div className="p-8 sm:p-10">
                  <span className="flex items-center gap-2" style={{ color: "rgba(52,226,126,0.7)" }}>
                    <IconPlug className="h-4 w-4" />
                    <span className="text-sm text-mist">Integrações nativas</span>
                  </span>

                  <h3 className="mt-6 text-[22px] font-semibold leading-snug text-cloud">
                    Integrações desenhadas para o seu processo
                  </h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-mist">
                    Avaliamos as ferramentas, permissões e limites antes de definir o escopo da integração.
                  </p>
                </div>

                {/* Dot map com card flutuante */}
                <div aria-hidden className="relative overflow-hidden">
                  {/* Card flutuante */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="relative">
                      {/* Sombra empilhada */}
                      <div
                        className="absolute inset-x-4 -bottom-2 h-full rounded-sm border border-line"
                        style={{ background: "rgba(5,5,5,0.9)" }}
                      />
                      {/* Card principal */}
                      <div
                        className="relative flex items-center gap-2.5 rounded-sm border border-line px-4 py-2.5 text-[12px] shadow-lg"
                        style={{ background: "rgba(10,12,10,0.95)", backdropFilter: "blur(8px)" }}
                      >
                        <span style={{ color: "#34E27E" }}>⚡</span>
                        <span className="text-cloud font-medium">Exemplo de integração</span>
                        <span className="text-mist">HubSpot → Slack</span>
                      </div>
                    </div>
                  </div>

                  {/* Vinheta: fade linear no topo + radial nas bordas */}
                  <div
                    className="absolute inset-0 z-[1]"
                    style={{
                      background: [
                        "linear-gradient(to bottom, #050505 0%, transparent 45%)",
                        "radial-gradient(ellipse at center, transparent 20%, rgba(5,5,5,0.8) 75%)",
                      ].join(", "),
                    }}
                  />

                  <DotMap />
                </div>
              </div>

              {/* Painel 2 — Suporte */}
              <div className="p-8 sm:p-10 border-b border-line" style={{ background: "rgba(255,255,255,0.01)" }}>
                <span className="flex items-center gap-2" style={{ color: "rgba(52,226,126,0.7)" }}>
                  <IconCheck className="h-4 w-4" />
                  <span className="text-sm text-mist">Suporte dedicado</span>
                </span>

                <h3 className="mt-6 text-[22px] font-semibold leading-snug text-cloud">
                  Não te deixamos sozinho
                </h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-mist">
                  Suporte por WhatsApp, call ou e-mail. Da implementação ao dia a dia, a gente está junto.
                </p>

                <div className="mt-7 flex flex-col gap-4">
                  <div>
                    <div className="mb-1.5 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#34E27E" }} />
                      <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.25)" }}>Exemplo de atendimento</span>
                    </div>
                    <div
                      className="w-4/5 rounded-sm border border-line p-3 text-[12px] leading-relaxed text-mist"
                      style={{ background: "rgba(255,255,255,0.03)" }}
                    >
                      A automação de onboarding parou de rodar. O que pode ser?
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div
                      className="w-4/5 rounded-sm border p-3 text-[12px] leading-relaxed text-cloud"
                      style={{ background: "rgba(52,226,126,0.06)", borderColor: "rgba(52,226,126,0.18)" }}
                    >
                      Já identifiquei — mudança no webhook do HubSpot. Corrigido e testado. ✓
                    </div>
                    <span className="mt-1.5 text-[11px]" style={{ color: "rgba(255,255,255,0.25)" }}>Resposta ilustrativa</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Linha 2 — Big stat */}
            <div className="border-b border-line px-10 py-12 text-center lg:py-16">
              <p
                className="text-5xl font-light tracking-tight text-cloud lg:text-7xl"
              >
                Monitoramento <span style={{ color: "#34E27E" }}>e suporte</span>
              </p>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-mist">
                Acompanhamos as execuções e tratamos falhas conforme o escopo de suporte contratado.
              </p>
            </div>

            {/* Linha 3 — Monitoramento + gráfico */}
            <div className="relative">
              <div className="p-8 sm:p-10 lg:p-12">
                <span className="flex items-center gap-2" style={{ color: "rgba(52,226,126,0.7)" }}>
                  <IconEye className="h-4 w-4" />
                  <span className="text-sm text-mist">Acompanhamento da operação</span>
                </span>
                <p className="mt-5 max-w-md text-[22px] font-semibold leading-snug text-cloud">
                  Visibilidade dos fluxos contratados.{" "}
                  <span className="text-mist">Alertas e recuperação definidos no projeto.</span>
                </p>
              </div>
              <div className="px-4 pb-2">
                <AreaChart />
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
