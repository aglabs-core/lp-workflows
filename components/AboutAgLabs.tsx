"use client";

import { ArrowRight } from "lucide-react";
import { Eyebrow, GlowOrb } from "./ui/Primitives";
import { Reveal } from "./ui/Reveal";
import { VerticalCutReveal } from "./ui/VerticalCutReveal";

const FOUNDER_IMG = "/img/equipe.webp";

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconYoutube() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.4 5 12 5 12 5s-4.4 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.8C6.6 19 12 19 12 19s4.4 0 7-.2c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM9.7 14.5V9.5l5.3 2.5-5.3 2.5z" />
    </svg>
  );
}
function IconLinkedin() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socials = [
  { href: "https://www.instagram.com/ag_labs/", Icon: IconInstagram, label: "Instagram" },
  { href: "https://www.linkedin.com/company/ag-labs", Icon: IconLinkedin, label: "LinkedIn" },
];

export function AboutAgLabs() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden py-16 px-4"
      style={{ backgroundColor: "#050505" }}
    >
      {/* Fades verticais */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32" style={{ background: "linear-gradient(to bottom, #050505, transparent)" }} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32" style={{ background: "linear-gradient(to top, #050505, transparent)" }} />

      <GlowOrb className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.15]" size={900} animate={false} blur={100} />

      <div className="relative z-[1] mx-auto max-w-6xl">
        <div className="relative">

          {/* Header: eyebrow + ícones sociais */}
          <Reveal className="flex justify-between items-center mb-8 w-[85%] absolute lg:top-4 md:top-0 sm:-top-2 -top-3 z-10">
            <div className="flex items-center gap-2">
              <span className="animate-[spin_4s_linear_infinite] text-lg" style={{ color: "#34E27E" }}>✱</span>
              <span className="text-sm font-medium uppercase tracking-[0.18em] text-mist">AG LABS</span>
            </div>
            <div className="flex gap-3">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center rounded-sm border border-line transition-all duration-200 hover:border-emerald/40 md:h-8 md:w-8 h-6 w-6"
                  style={{ background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.5)" }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Imagem com SVG clip */}
          <Reveal>
            <figure className="relative group">
              {/* Glow atrás da imagem */}
              <div
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                  background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(200,255,230,0.28) 0%, rgba(180,255,220,0.08) 55%, transparent 75%)",
                  filter: "blur(50px)",
                  transform: "scale(1.4)",
                }}
              />
              <svg className="w-full" width="100%" height="100%" viewBox="0 0 100 40">
                <defs>
                  <clipPath id="ag-clip" clipPathUnits="objectBoundingBox">
                    <path d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z" />
                  </clipPath>
                </defs>
                <image
                  clipPath="url(#ag-clip)"
                  preserveAspectRatio="xMidYMid slice"
                  width="100%"
                  height="100%"
                  href={FOUNDER_IMG}
                />
              </svg>
            </figure>
          </Reveal>

          {/* Stats abaixo da imagem */}
          <Reveal className="flex flex-wrap lg:justify-start justify-between items-center py-3 text-sm">
            <div className="flex gap-4">
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="font-bold" style={{ color: "#34E27E" }}>3+</span>
                <span className="text-mist">anos de experiência</span>
                <span className="text-faint">|</span>
              </div>
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="font-bold" style={{ color: "#34E27E" }}>100+</span>
                <span className="text-mist">automações entregues</span>
              </div>
            </div>
            <div className="lg:absolute right-0 bottom-16 flex lg:flex-col flex-row-reverse lg:gap-0 gap-4">
              <div className="flex lg:text-3xl sm:text-2xl text-xl items-center gap-2 mb-2">
                <span className="font-semibold" style={{ color: "#34E27E" }}>200+</span>
                <span className="text-cloud uppercase text-sm">ferramentas</span>
              </div>
              <div className="flex items-center gap-2 mb-2 text-xs">
                <span className="font-bold" style={{ color: "#34E27E" }}>30%</span>
                <span className="text-mist">redução de tempo operacional</span>
                <span className="text-faint lg:hidden block">|</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Conteúdo principal */}
        <div className="grid md:grid-cols-3 gap-8 mt-2">
          <div className="md:col-span-2">
            <h2 className="sm:text-4xl md:text-5xl text-2xl !leading-[110%] font-semibold text-cloud mb-8">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.09}
                staggerFrom="first"
                transition={{ type: "spring", stiffness: 250, damping: 30, delay: 0.2 }}
              >
                Nascemos para tirar o operacional das costas das equipes.
              </VerticalCutReveal>
            </h2>

            <Reveal className="grid md:grid-cols-2 gap-8">
              <Reveal delay={80} className="sm:text-base text-xs">
                <p className="leading-relaxed text-justify text-mist">
                  Nossa jornada começou identificando um problema real: equipes excelentes
                  presas em processos manuais e repetitivos. Criamos a AG LABS para mudar isso —
                  entregando automações que realmente funcionam.
                </p>
              </Reveal>
              <Reveal delay={160} className="sm:text-base text-xs">
                <p className="leading-relaxed text-justify text-mist">
                  Cada fluxo que entregamos devolve horas, reduz erros e escala com o
                  seu negócio. Tecnologia trabalhando por você, 24 horas por dia, sete dias
                  por semana.
                </p>
              </Reveal>
            </Reveal>
          </div>

          <div className="md:col-span-1">
            <div className="text-right">
              <Reveal className="mb-2" delay={100}>
                <div className="text-2xl font-bold" style={{ color: "#34E27E" }}>AG LABS</div>
              </Reveal>
              <Reveal delay={160}>
                <div className="text-mist text-sm mb-8">
                  Automação de Processos
                </div>
              </Reveal>
              <Reveal delay={220}>
                <p className="text-cloud font-medium mb-4 text-sm">
                  Pronto para eliminar o trabalho manual do seu negócio?
                </p>
              </Reveal>
              <Reveal delay={300}>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-sm border border-line px-5 py-3 text-sm font-semibold text-cloud transition-all duration-300 hover:gap-4 hover:border-emerald/50 ml-auto"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  FALE COM A GENTE <ArrowRight size={16} />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
