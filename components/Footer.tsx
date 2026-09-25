"use client";

import { motion } from "framer-motion";
import { Logo } from "./ui/Logo";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

function Container({ children, className, delay = 0.2 }: ContainerProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4, type: "spring", stiffness: 80 }}
    >
      {children}
    </motion.div>
  );
}

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Soluções",
    links: [
      { label: "Automação de processos", href: "/#fluxo" },
      { label: "Integração de sistemas", href: "/#confiar" },
      { label: "IA aplicada", href: "/#resultados" },
      { label: "Casos de uso", href: "/solucoes" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre", href: "https://aglabs.ia.br/" },
      { label: "Loja Labs", href: "https://lojalabs.com.br/" },
      { label: "Quero meu site", href: "https://lp.aglabs.ia.br" },
      { label: "Agentes de IA", href: "https://rag.aglabs.ia.br/" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Blog", href: "https://aglabs.ia.br/blog" },
      { label: "Guia de automação", href: "/solucoes" },
      { label: "Contato", href: "https://wa.me/5564993259857" },
      { label: "FAQ", href: "/solucoes#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Termos de uso", href: "/termos" },
      { label: "Privacidade", href: "/privacidade" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/ag-labs" },
      { label: "Instagram", href: "https://www.instagram.com/ag_labs/" },
    ],
  },
];

function FooterColumn({ title, links, delay }: (typeof columns)[number] & { delay: number }) {
  return (
    <Container delay={delay} className="h-auto">
      <h3 className="text-sm font-semibold text-cloud">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm">
        {links.map((l) => {
          const external = l.href.startsWith("http");
          return (
            <li key={l.label}>
              <a
                href={l.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-mist transition-colors duration-300 hover:text-emerald"
              >
                {l.label}
              </a>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#000000" }}>
      {/* Dots reforçados */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          backgroundPosition: "-13px -13px",
        }}
      />

      {/* Gradiente preto no topo — transição suave da seção anterior */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-48"
        style={{ background: "linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0.7) 35%, transparent 100%)" }}
      />

      {/* Glow suave emergindo de baixo — saindo da tela */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 z-[1]"
        style={{
          bottom: "-22%",
          height: "80%",
          background: "radial-gradient(ellipse 90% 100% at 50% 100%, rgba(52,226,126,0.20) 0%, rgba(52,226,126,0.08) 35%, transparent 72%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative z-[2] mx-auto flex w-full max-w-7xl flex-col items-start px-5 pb-10 pt-20 lg:px-8 lg:pt-28">
        <div className="grid w-full gap-10 xl:grid-cols-3 xl:gap-8">
          {/* Bloco da marca */}
          <Container>
            <div className="flex flex-col items-start md:max-w-[260px]">
              <Logo withText={false} />
              <p className="mt-4 text-sm leading-relaxed text-mist">
                Automações sob medida que conectam seu stack, eliminam o trabalho
                repetitivo e devolvem horas para o seu time.
              </p>
            </div>
          </Container>

          {/* Colunas de links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 xl:col-span-2">
            {columns.map((col, i) => (
              <FooterColumn key={col.title} {...col} delay={0.1 + i * 0.1} />
            ))}
          </div>
        </div>

        {/* Rodapé inferior */}
        <Container delay={0.5} className="mt-12 w-full lg:mt-20">
          <div className="flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
            <p className="text-[13px] text-faint">
              © {new Date().getFullYear()} AG LABS · Automação de Processos. Todos os direitos reservados.
            </p>
            <p className="text-[13px] text-faint">
              Feito para escalar sua operação.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
