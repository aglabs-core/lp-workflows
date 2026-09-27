import { Mark } from "./Logo";
import { WorkflowDiagram } from "./WorkflowDiagram";

function BarChart({ bars, tone = "green" }: { bars: number[]; tone?: "green" | "blue" }) {
  const color = tone === "green"
    ? "from-emerald to-emerald/30"
    : "from-sky-400 to-sky-400/30";
  return (
    <div className="flex h-10 items-end gap-[3px]">
      {bars.map((h, i) => (
        <div key={i} className={`w-1.5 rounded-sm bg-gradient-to-t ${color}`} style={{ height: `${h}%` }} />
      ))}
    </div>
  );
}

const railIcons = 5;

export function DashboardMockup() {
  return (
    <div className="glass-strong relative overflow-hidden rounded-[18px] shadow-card">

      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-line bg-ink-900/80 px-4 py-2.5">
        <div className="flex items-center gap-2.5">
          <Mark className="h-4 w-4" />
          <span className="text-[12px] font-medium text-mist">AG LABS · Orquestrador</span>
          <span className="ml-2 hidden gap-1 sm:flex">
            {["Fluxos", "Integrações", "Logs"].map((t, i) => (
              <span key={t} className={`rounded-md px-2 py-0.5 text-[10px] ${i === 0 ? "bg-emerald/15 text-emerald-bright" : "text-faint"}`}>
                {t}
              </span>
            ))}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden rounded-md border border-line px-2 py-0.5 text-[10px] text-faint sm:inline">Exemplo visual</span>
          <span className="h-2 w-2 rounded-full bg-emerald shadow-[0_0_8px_2px_rgba(52,226,126,0.6)]" />
        </div>
      </div>

      <div className="flex">
        {/* Sidebar rail */}
        <div className="hidden w-11 shrink-0 flex-col items-center gap-3 border-r border-line bg-ink-900/50 py-4 sm:flex">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald/15">
            <Mark className="h-3.5 w-3.5" />
          </div>
          {Array.from({ length: railIcons }).map((_, i) => (
            <div key={i} className={`h-6 w-6 rounded-lg ${i === 0 ? "bg-white/10" : "bg-white/[0.04]"}`} />
          ))}
        </div>

        {/* Canvas com fundo n8n (dots) + bokeh */}
        <div className="relative min-w-0 flex-1">

          {/* Fundo: dot grid estilo n8n */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#0b0f0b",
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          {/* Diagrama de nós */}
          <div className="relative p-2 sm:p-6">
            <WorkflowDiagram />
          </div>

          {/* Painéis inferiores */}
          <div className="relative grid grid-cols-2 gap-px border-t border-line bg-line">
            <div className="bg-ink-900/90 p-2 sm:p-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] text-mist">Processo</span>
                <span className="text-[10px] sm:text-[11px] text-emerald">mapeado</span>
              </div>
              <div className="mt-1.5 flex items-end justify-between">
                <span className="text-lg sm:text-2xl font-light text-cloud">Fluxos</span>
                <BarChart bars={[40, 65, 50, 80, 60, 90, 70]} tone="green" />
              </div>
            </div>
            <div className="bg-ink-900/90 p-2 sm:p-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] text-mist">Execuções</span>
                <span className="text-[10px] sm:text-[11px] text-sky-400">visíveis</span>
              </div>
              <div className="mt-1.5 flex items-end justify-between">
                <span className="text-lg sm:text-2xl font-light text-cloud">Eventos</span>
                <BarChart bars={[55, 45, 70, 60, 85, 75, 95]} tone="blue" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
