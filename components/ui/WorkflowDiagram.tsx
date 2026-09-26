"use client";

import { useState } from "react";

const W = 1000;
const H = 480;
const NN = 64;

type Node = {
  id: string;
  slug: string; // simpleicons slug (separado do id para poder corrigir sem quebrar arestas)
  cx: number; cy: number;
  rgb: string;
  iconColor: string;
  letter: string; // fallback se CDN falhar
};

const nodes: Node[] = [
  { id: "n8n",      slug: "n8n",      cx:  80, cy: 240, rgb: "234,75,113",  iconColor: "EA4B71", letter: "N"  },
  { id: "claude",   slug: "claude",   cx: 300, cy: 110, rgb: "249,115,22",  iconColor: "F97316", letter: "AI" },
  { id: "youtube",  slug: "youtube",  cx: 300, cy: 370, rgb: "240,0,0",     iconColor: "F00000", letter: "YT" },
  { id: "gmail",    slug: "gmail",    cx: 530, cy:  70, rgb: "234,67,53",   iconColor: "EA4335", letter: "G"  },
  { id: "whatsapp", slug: "whatsapp", cx: 530, cy: 240, rgb: "37,211,102",  iconColor: "25D366", letter: "W"  },
  { id: "discord",  slug: "discord",  cx: 530, cy: 410, rgb: "88,101,242",  iconColor: "5865F2", letter: "D"  },
  { id: "stripe",   slug: "stripe",   cx: 755, cy: 155, rgb: "99,91,255",   iconColor: "635BFF", letter: "S"  },
  { id: "supabase", slug: "supabase", cx: 930, cy: 240, rgb: "62,207,142",  iconColor: "3ECF8E", letter: "SB" },
];

const edges: { from: string; to: string; style: "solid" | "dashed" }[] = [
  { from: "n8n",       to: "claude",    style: "solid"  },
  { from: "n8n",       to: "youtube", style: "solid"  },
  { from: "claude",    to: "gmail",   style: "dashed" },
  { from: "claude",    to: "whatsapp",  style: "solid"  },
  { from: "youtube", to: "whatsapp",  style: "dashed" },
  { from: "youtube", to: "discord",     style: "solid"  },
  { from: "whatsapp",  to: "stripe",    style: "solid"  },
  { from: "gmail",   to: "stripe",    style: "dashed" },
  { from: "stripe",    to: "supabase",  style: "solid"  },
  { from: "discord",     to: "supabase",  style: "dashed" },
];

function nodeById(id: string) { return nodes.find(n => n.id === id)!; }

function edgePath(a: Node, b: Node) {
  const x1 = a.cx + NN / 2, y1 = a.cy;
  const x2 = b.cx - NN / 2, y2 = b.cy;
  const dx = (x2 - x1) * 0.5;
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

function gradId(rgb: string) {
  if (["37,211,102", "62,207,142"].includes(rgb)) return "lg-green";
  if (["99,91,255", "88,101,242"].includes(rgb)) return "lg-purple";
  if (["249,115,22"].includes(rgb)) return "lg-orange";
  if (rgb === "234,75,113") return "lg-pink";
  if (["240,0,0", "234,67,53"].includes(rgb)) return "lg-red";
  return "lg-neutral";
}

function NodeIcon({ slug, iconColor, letter }: { slug: string; iconColor: string; letter: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        style={{
          fontSize: "28%",
          fontWeight: 700,
          color: `#${iconColor}`,
          opacity: 0.8,
          fontFamily: "system-ui, sans-serif",
          letterSpacing: "-0.02em",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        {letter}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      loading="lazy"
      decoding="async"
      src={`https://cdn.simpleicons.org/${slug}/${iconColor}`}
      alt={slug}
      style={{ width: "54%", height: "54%", objectFit: "contain" }}
      onError={() => setFailed(true)}
    />
  );
}

export function WorkflowDiagram({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full ${className}`} style={{ aspectRatio: `${W}/${H}` }}>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lg-green" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgba(52,226,126,0.04)"/><stop offset="0.5" stopColor="rgba(52,226,126,0.55)"/><stop offset="1" stopColor="rgba(52,226,126,0.04)"/>
          </linearGradient>
          <linearGradient id="lg-purple" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgba(99,91,255,0.04)"/><stop offset="0.5" stopColor="rgba(99,91,255,0.55)"/><stop offset="1" stopColor="rgba(99,91,255,0.04)"/>
          </linearGradient>
          <linearGradient id="lg-orange" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgba(249,115,22,0.04)"/><stop offset="0.5" stopColor="rgba(249,115,22,0.55)"/><stop offset="1" stopColor="rgba(249,115,22,0.04)"/>
          </linearGradient>
          <linearGradient id="lg-pink" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgba(234,75,113,0.04)"/><stop offset="0.5" stopColor="rgba(234,75,113,0.5)"/><stop offset="1" stopColor="rgba(234,75,113,0.04)"/>
          </linearGradient>
          <linearGradient id="lg-red" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgba(240,0,0,0.04)"/><stop offset="0.5" stopColor="rgba(240,0,0,0.5)"/><stop offset="1" stopColor="rgba(240,0,0,0.04)"/>
          </linearGradient>
          <linearGradient id="lg-neutral" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgba(200,200,200,0.04)"/><stop offset="0.5" stopColor="rgba(200,200,200,0.4)"/><stop offset="1" stopColor="rgba(200,200,200,0.04)"/>
          </linearGradient>
          <filter id="glow-line">
            <feGaussianBlur stdDeviation="2.5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {edges.map(({ from, to, style }, i) => {
          const a = nodeById(from), b = nodeById(to);
          const d = edgePath(a, b);
          return (
            <g key={`${from}-${to}`}>
              <path d={d} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" />
              <path
                d={d}
                fill="none"
                stroke={`url(#${gradId(a.rgb)})`}
                strokeWidth={style === "solid" ? 2 : 1.5}
                strokeDasharray={style === "dashed" ? "5 14" : undefined}
                filter="url(#glow-line)"
                className="animate-flow-dash"
                style={{
                  animationDelay: `${i * 0.12}s`,
                  animationDuration: style === "solid" ? "1.2s" : "1.8s",
                }}
              />
            </g>
          );
        })}
      </svg>

      {nodes.map(n => (
        <div
          key={n.id}
          className="absolute"
          style={{
            left: `${(n.cx / W) * 100}%`,
            top: `${(n.cy / H) * 100}%`,
            transform: "translate(-50%,-50%)",
            width: `${(NN / W) * 100}%`,
            height: `${(NN / H) * 100}%`,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "20%",
              background: "rgba(8,12,8,0.95)",
              border: `1px solid rgba(${n.rgb},0.32)`,
              boxShadow: `0 0 24px -6px rgba(${n.rgb},0.48), inset 0 0 0 1px rgba(255,255,255,0.04)`,
            }}
          >
            <NodeIcon slug={n.slug} iconColor={n.iconColor} letter={n.letter} />
          </div>
        </div>
      ))}
    </div>
  );
}
