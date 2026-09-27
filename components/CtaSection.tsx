import { Reveal } from "./ui/Reveal";
import { automationWhatsAppUrl } from "@/lib/contact";

const CTA_BG = "/img/cta.webp";

export function CtaSection() {
  return (
    <section
      id="contato"
      className="relative isolate overflow-hidden bg-black lg:min-h-[600px]"
    >
      {/* Imagem — mobile: faixa embaixo; desktop: coluna à direita */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-0 h-[300px] bg-contain bg-bottom bg-no-repeat sm:h-[360px] lg:inset-0 lg:left-auto lg:right-0 lg:h-auto lg:w-[62%] lg:bg-center"
        style={{ backgroundImage: `url(${CTA_BG})` }}
      />

      {/* Overlay mobile — funde o topo da foto no preto + brilho verde */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] lg:hidden"
        style={{
          background: [
            "linear-gradient(180deg, #000 0%, #000 40%, rgba(0,0,0,0.45) 58%, transparent 78%)",
            "radial-gradient(90% 35% at 50% 100%, rgba(52,226,126,0.16) 0%, transparent 60%)",
          ].join(", "),
        }}
      />

      {/* Overlay desktop — escurece a área do texto à esquerda, foto visível à direita */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
        style={{
          background: [
            "linear-gradient(90deg, #000 0%, rgba(0,0,0,0.92) 26%, rgba(0,0,0,0.55) 46%, rgba(0,0,0,0.15) 64%, transparent 80%)",
            "linear-gradient(180deg, transparent 62%, #000 100%)",
            "radial-gradient(120% 60% at 55% 118%, rgba(52,226,126,0.16) 0%, transparent 55%)",
          ].join(", "),
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-[5] mx-auto flex max-w-7xl flex-col px-6 pb-[320px] pt-20 sm:px-8 sm:pb-[380px] lg:min-h-[600px] lg:justify-center lg:px-14 lg:py-32 lg:pb-32">
        <Reveal delay={80}>
          <h2 className="max-w-2xl text-4xl font-light leading-[1.08] tracking-tightest text-cloud sm:text-5xl lg:text-7xl lg:leading-[1.05]">
            Transforme suas{" "}
            <span className="dim">rotinas</span>
            <br />
            com automação
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-mist sm:mt-5 sm:text-base">
            Conte qual processo consome tempo da sua equipe. Vamos avaliar o caso
            e indicar o próximo passo para automatizá-lo.
          </p>
        </Reveal>

        {/* CTA WhatsApp */}
        <Reveal delay={160}>
          <a
            href={automationWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow mt-6 inline-flex h-12 w-full max-w-sm items-center justify-center rounded-sm px-6 text-[14px] font-semibold sm:mt-8 sm:w-auto"
          >
            Falar no WhatsApp
          </a>
          <p className="mt-3 text-[12px] text-faint">
            Fale com a AG LABS pelo canal oficial
          </p>
        </Reveal>
      </div>
    </section>
  );
}
