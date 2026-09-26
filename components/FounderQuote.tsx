export function FounderQuote() {
  return (
    <section style={{ background: "#050505" }}>
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-14 lg:px-8 lg:pb-28 lg:pt-16">

        {/* Top row — label + 2 mini-blocos */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <div className="flex items-center gap-2 sm:pt-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald shadow-[0_0_6px_2px_rgba(52,226,126,0.5)]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/35">Sobre</span>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:flex sm:gap-16">
            <p className="text-[13px] leading-[1.65] text-white/35 sm:w-[160px] sm:text-[15px]">
              A AG LABS automatiza processos com integrações e fluxos que escalam sozinhos.
            </p>
            <p className="text-[13px] leading-[1.65] text-white/35 sm:w-[160px] sm:text-[15px]">
              Equipes livres para focar no crescimento — enquanto o operacional roda no automático.
            </p>
          </div>
        </div>

        {/* Void intencional */}
        <div className="h-36 lg:h-52" />

        {/* Fundador */}
        <div className="flex items-center gap-4">
          <div
            className="h-20 w-20 shrink-0 overflow-hidden rounded-full"
            style={{ boxShadow: "0 0 0 2px rgba(52,226,126,0.55), 0 0 0 5px rgba(52,226,126,0.1)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              loading="lazy"
              decoding="async"
              src="https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/aglabs/founder.jpeg"
              alt="Antonio Garcia — Fundador AG LABS"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[15px] font-medium text-white/90">Antonio Garcia</span>
            <span className="text-[12px] text-white/35">Fundador · AG LABS</span>
          </div>
        </div>

        {/* Quote bicolor */}
        <blockquote
          className="mt-7 font-extralight leading-[1.07] tracking-tight"
          style={{ fontSize: "clamp(2.2rem, 5vw, 4.75rem)" }}
        >
          <span className="text-white">" Não entregamos apenas </span>
          <span className="text-white/35">códigos e workflows, </span>
          <span className="text-white">entregamos </span>
          <span className="text-white/35">soluções prontas </span>
          <span className="text-white"> que geram lucro e </span>
          <span className="text-white/35">eficiência."</span>
        </blockquote>

      </div>
    </section>
  );
}
