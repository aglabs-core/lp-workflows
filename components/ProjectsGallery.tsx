"use client";

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeading } from "./ui/Primitives";
import { Reveal } from "./ui/Reveal";
import { projects } from "./projects-data";

export function ProjectsGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    breakpoints: {
      "(max-width: 768px)": { dragFree: true },
    },
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ backgroundColor: "#050505" }}
    >
      {/* Fades verticais */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32" style={{ background: "linear-gradient(to bottom, #050505, transparent)" }} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32" style={{ background: "linear-gradient(to top, #050505, transparent)" }} />

      {/* Header — alinhado ao container */}
      <div className="relative z-[1] mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
            <div className="flex flex-col gap-4">
              <SectionHeading>
                Projetos que já{" "}
                <span className="text-gradient-green">entregamos</span>
              </SectionHeading>
              <p className="max-w-lg text-[14px] leading-relaxed text-mist">
                Automações rodando em produção, em empresas reais. Cada projeto começa com um diagnóstico e termina com resultado mensurável.
              </p>
            </div>

            {/* Setas desktop */}
            <div className="hidden shrink-0 gap-2 md:flex">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canPrev}
                aria-label="Anterior"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-line transition-all duration-200 hover:border-emerald/40 disabled:opacity-25"
                style={{ background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.7)" }}
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canNext}
                aria-label="Próximo"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-line transition-all duration-200 hover:border-emerald/40 disabled:opacity-25"
                style={{ background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.7)" }}
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Carrossel — full-width, alinhado ao container em 2xl */}
      <div className="relative z-[1] w-full">
        <div ref={emblaRef} className="overflow-hidden select-none">
          <div className="ml-0 flex 2xl:ml-[max(1.25rem,calc(50vw-38rem))] 2xl:mr-[max(0rem,calc(50vw-38rem))]">
            {projects.map((item) => (
              <div
                key={item.id}
                className="w-[82vw] shrink-0 grow-0 pl-5 sm:w-[300px] lg:w-[360px]"
                role="group"
                aria-roledescription="slide"
              >
                <div className="group relative h-full min-h-[24rem] max-w-full overflow-hidden rounded-sm sm:min-h-[27rem] md:aspect-[5/4] lg:aspect-[16/9]">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 h-full"
                    style={{
                      background: "linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.4) 55%, rgba(5,5,5,0.05) 100%)",
                    }}
                  />

                  {/* Conteúdo */}
                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 md:p-8">
                    <h3 className="mb-1.5 text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mb-3 line-clamp-2 text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {item.description}
                    </p>
                    <a
                      href={`/solucoes#${item.id}`}
                      className="flex items-center text-sm transition-all duration-200 hover:opacity-80"
                      style={{ color: "rgba(52,226,126,0.8)" }}
                    >
                      Ver solução
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
              className="h-1.5 rounded-sm transition-all duration-300"
              style={{
                width: current === i ? 24 : 6,
                background: current === i ? "#34E27E" : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
