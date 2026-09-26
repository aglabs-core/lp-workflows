"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export interface TechItem {
  id: string;
  /** Nome da tecnologia */
  name: string;
  /** Descritor curto (ex.: "Motor de workflows") */
  category: string;
  /** URL do logo/imagem */
  image: string;
  /** Link opcional para o site da tecnologia */
  href?: string;
}

const cx = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(" ");

interface TechShowcaseProps {
  items: TechItem[];
}

export default function TechShowcase({ items }: TechShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const col1 = items.filter((_, i) => i % 3 === 0);
  const col2 = items.filter((_, i) => i % 3 === 1);
  const col3 = items.filter((_, i) => i % 3 === 2);

  return (
    <div className="mx-auto flex w-full max-w-5xl select-none flex-col items-start gap-8 font-sans md:flex-row md:gap-10 lg:gap-14">
      {/* ── Esquerda: grade de logos ── */}
      <div className="flex w-full max-w-full flex-shrink-0 gap-2 overflow-x-auto pb-1 md:w-auto md:max-w-none md:gap-3 md:pb-0">
        {/* Coluna 1 */}
        <div className="flex flex-col gap-2 md:gap-3">
          {col1.map((item) => (
            <LogoCard
              key={item.id}
              item={item}
              className="h-[110px] w-[100px] sm:h-[140px] sm:w-[130px] md:h-[165px] md:w-[155px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Coluna 2 */}
        <div className="mt-[48px] flex flex-col gap-2 sm:mt-[56px] md:mt-[68px] md:gap-3">
          {col2.map((item) => (
            <LogoCard
              key={item.id}
              item={item}
              className="h-[122px] w-[112px] sm:h-[155px] sm:w-[145px] md:h-[182px] md:w-[172px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Coluna 3 */}
        <div className="mt-[22px] flex flex-col gap-2 sm:mt-[26px] md:mt-[32px] md:gap-3">
          {col3.map((item) => (
            <LogoCard
              key={item.id}
              item={item}
              className="h-[114px] w-[105px] sm:h-[146px] sm:w-[136px] md:h-[172px] md:w-[162px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      {/* ── Direita: lista de nomes ── */}
      <div className="flex w-full flex-1 flex-col gap-4 pt-0 sm:grid sm:grid-cols-2 md:flex md:flex-col md:gap-5 md:pt-2">
        {items.map((item) => (
          <TechRow
            key={item.id}
            item={item}
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Card de logo
───────────────────────────────────────── */

function LogoCard({
  item,
  className,
  hoveredId,
  onHover,
}: {
  item: TechItem;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === item.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cx(
        "flex-shrink-0 cursor-pointer overflow-hidden rounded-xl border border-line bg-surface-glass transition-opacity duration-300",
        className,
        isDimmed ? "opacity-60" : "opacity-100"
      )}
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        loading="lazy"
        decoding="async"
        src={item.image}
        alt={item.name}
        className="h-full w-full object-cover transition-[filter] duration-500"
        style={{
          filter: isActive
            ? "grayscale(0) brightness(1)"
            : "grayscale(1) brightness(0.77)",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   Linha de tecnologia
───────────────────────────────────────── */

function TechRow({
  item,
  hoveredId,
  onHover,
}: {
  item: TechItem;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === item.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cx(
        "cursor-pointer transition-opacity duration-300",
        isDimmed ? "opacity-50" : "opacity-100"
      )}
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Nome + link */}
      <div className="flex items-center gap-2.5">
        <span
          className={cx(
            "h-3 w-4 flex-shrink-0 rounded-[5px] transition-all duration-300",
            isActive ? "w-5 bg-emerald" : "bg-cloud/25"
          )}
        />
        <span
          className={cx(
            "text-base font-semibold leading-none tracking-tight transition-colors duration-300 md:text-[18px]",
            isActive ? "text-cloud" : "text-cloud/80"
          )}
        >
          {item.name}
        </span>

        {item.href && (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={cx(
              "ml-0.5 rounded p-1 text-mist transition-all duration-200 hover:scale-110 hover:bg-cloud/10 hover:text-emerald",
              isActive
                ? "translate-x-0 opacity-100"
                : "pointer-events-none -translate-x-2 opacity-0"
            )}
            title={`Abrir ${item.name}`}
          >
            <ArrowUpRight size={13} />
          </a>
        )}
      </div>

      {/* Categoria */}
      <p className="mt-1.5 pl-[27px] text-[10px] font-medium uppercase tracking-[0.2em] text-faint md:text-[11px]">
        {item.category}
      </p>
    </div>
  );
}
