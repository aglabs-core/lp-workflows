"use client";
import { useState, useEffect } from "react";

const useCases = [
  { dept: "IT Ops",     description: "Provisionar acessos e sistemas em segundos"            },
  { dept: "Financeiro", description: "Reconciliar pagamentos sem intervenção manual"         },
  { dept: "RH",         description: "Rodar onboarding e offboarding de ponta a ponta"       },
  { dept: "Suporte",    description: "Triar e responder tickets em tempo real"               },
  { dept: "Marketing",  description: "Nutrir leads conforme o comportamento de cada um"      },
  { dept: "Você",       description: "Fale com a gente e veja o que dá pra automatizar"      },
];

// Altura fixa por item no ticker mobile — garante translateY consistente
const ITEM_H = 82;

export function WorkflowShowcase() {
  const [active, setActive] = useState(0);

  // Auto-avança a cada 5s; reinicia se o usuário clicar
  useEffect(() => {
    const id = setInterval(() => {
      setActive(prev => (prev + 1) % useCases.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ background: "#050505" }}>

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          backgroundPosition: "-13px -13px",
        }}
      />
      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 70% at 55% 50%, transparent 20%, rgba(5,5,5,0.7) 55%, #050505 75%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-0">

          {/* ── Desktop: lista completa (oculta em mobile) ── */}
          <div className="hidden w-full shrink-0 lg:block lg:w-72">
            {useCases.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="group relative w-full py-4 pl-5 pr-2 text-left transition-all duration-200"
              >
                <span
                  className="absolute left-0 top-3 bottom-3 w-[2px] rounded-full transition-all duration-200"
                  style={{ background: active === i ? "#34E27E" : "transparent" }}
                />
                <span
                  className="block text-[22px] font-light leading-snug transition-colors duration-200"
                  style={{ color: active === i ? "#fff" : "rgba(255,255,255,0.25)" }}
                >
                  {item.dept}{" "}
                  <span style={{ color: active === i ? "#34E27E" : "rgba(255,255,255,0.15)" }}>
                    pode
                  </span>
                </span>
                <span
                  className="mt-1 block text-[14px] leading-snug transition-colors duration-200"
                  style={{ color: active === i ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.15)" }}
                >
                  {item.description}
                </span>
              </button>
            ))}
          </div>

          {/* ── Mobile: ticker animado (oculto em desktop) ── */}
          <div
            className="relative overflow-hidden lg:hidden"
            style={{
              height: ITEM_H * 3,
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)",
              maskImage:        "linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)",
            }}
          >
            {/* Faixa deslizante — translateY centra o item ativo */}
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(${ITEM_H * (1 - active)}px)` }}
            >
              {useCases.map((item, i) => {
                const dist = Math.abs(i - active);
                const isActive = dist === 0;
                return (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="relative w-full text-left"
                    style={{
                      height: ITEM_H,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      paddingLeft: 20,
                      paddingRight: 20,
                      // Opacidade decresce com distância: 1 → 0.22 → 0.06
                      opacity: dist === 0 ? 1 : dist === 1 ? 0.22 : 0.06,
                      transition: "opacity 0.45s ease",
                    }}
                  >
                    {/* Indicador verde — apenas no item ativo */}
                    <span
                      className="absolute left-0 rounded-full transition-all duration-300"
                      style={{
                        top: "25%", height: "50%", width: 2,
                        background: isActive ? "#34E27E" : "transparent",
                      }}
                    />

                    <span
                      className="block text-[22px] font-light leading-snug"
                      style={{ color: "#fff" }}
                    >
                      {item.dept}{" "}
                      <span style={{ color: isActive ? "#34E27E" : "rgba(255,255,255,0.4)" }}>
                        pode
                      </span>
                    </span>

                    {/* Descrição — visível apenas no ativo via opacidade */}
                    <span
                      className="mt-1 block text-[13px] leading-snug"
                      style={{
                        color: "rgba(255,255,255,0.4)",
                        opacity: isActive ? 1 : 0,
                        transition: "opacity 0.35s ease",
                      }}
                    >
                      {item.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── SVG workflow (ambos) ── */}
          <div className="relative flex-1">
            <div
              className="w-full"
              style={{
                WebkitMaskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 75%)",
                maskImage:        "radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 75%)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                loading="lazy"
                decoding="async"
                src="https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/aglabs/workflow_itops_5d5a4bf299.svg"
                alt="Diagrama de automação de fluxo"
                className="h-auto w-full"
                style={{ opacity: 0.9 }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
