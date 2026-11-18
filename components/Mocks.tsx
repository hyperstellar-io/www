// Illustrative artefacts from each phase, drawn in HTML/CSS. They mirror real delivery practice (use-case scoring,
// evaluation gates, progressive release) but the figures are examples, labelled as such, never client results.
const card = "rounded-2xl bg-white p-5 text-[#15140f] shadow-xl";
const pill = "rounded-full px-2.5 py-1 text-[0.65rem] font-bold";
const muted = "text-[0.7rem] text-[#6b6a62]";
const green = "bg-[#e6f1ea] text-[#1f6b49]";
const amber = "bg-[#fbeede] text-[#8a5b00]";
const red = "bg-[#fbe6e2] text-[#9a3f1f]";

function Head({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div><p className="font-mono text-[0.65rem] uppercase tracking-widest text-[#6b6a62]">{eyebrow}</p><p className="serif mt-1 text-2xl leading-none">{title}</p></div>
      <span className="shrink-0 rounded-full border border-[#15140f]/15 px-2.5 py-1 text-[0.65rem] font-semibold text-[#6b6a62]">Illustrative</span>
    </div>
  );
}

// 1..5 segment meter
function Meter({ n, label }: { n: number; label: string }) {
  return (
    <span className="flex items-center gap-1.5" aria-label={`${label} ${n} of 5`}>
      <span className={`w-12 ${muted}`}>{label}</span>
      <span className="flex gap-0.5">{[1, 2, 3, 4, 5].map((i) => <i key={i} className={`h-1.5 w-3.5 rounded-full ${i <= n ? "bg-[#15140f]" : "bg-[#15140f]/12"}`} />)}</span>
    </span>
  );
}

// Discover: shortlist scored on value, effort and data readiness, ending in a recommended pilot and its success measure.
export function DiscoverMock() {
  const rows: [string, number, number, string, string][] = [
    ["Invoice matching (accounts payable)", 4, 2, "Data ready", green],
    ["Support ticket triage", 4, 2, "Data ready", green],
    ["Contract clause extraction", 5, 4, "Needs labels", amber],
    ["Demand forecasting", 3, 3, "Partial history", amber],
  ];
  return (
    <div className={card}>
      <Head eyebrow="Discovery output" title="Use-case shortlist" />
      <ul className="mt-4 space-y-2">
        {rows.map(([t, value, effort, data, tone]) => (
          <li key={t} className="rounded-xl bg-[#f3f2ee] px-4 py-3">
            <div className="flex items-start justify-between gap-2"><p className="text-sm font-bold leading-tight">{t}</p><span className={`${pill} ${tone}`}>{data}</span></div>
            <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1"><Meter n={value} label="Value" /><Meter n={effort} label="Effort" /></div>
          </li>
        ))}
      </ul>
      <div className="mt-4 rounded-xl border border-[#15140f]/15 p-3">
        <p className="text-xs font-bold">Recommended pilot: invoice matching</p>
        <p className={`mt-1 ${muted}`}>Success measure: share of invoices matched without manual touch, against a baseline taken before the build.</p>
      </div>
    </div>
  );
}

// Develop: an evaluation run of a retrieval assistant against release thresholds, with one gate failing so the next step is clear.
export function EngineerMock() {
  const rows: [string, string, string, boolean][] = [
    ["Faithfulness", "≥ 0.90", "0.93", true],
    ["Answer relevance", "≥ 0.85", "0.88", true],
    ["Context precision", "≥ 0.80", "0.76", false],
    ["Latency p95", "≤ 3.0 s", "2.4 s", true],
  ];
  return (
    <div className={card}>
      <Head eyebrow="Evaluation run · build 14" title="Policy assistant" />
      <p className={`mt-3 ${muted}`}>Retrieve → Re-rank → Generate → Cite sources</p>
      <div className="mt-3 overflow-hidden rounded-xl bg-[#f3f2ee]">
        <div className="grid grid-cols-[1fr_auto_auto_auto] gap-x-4 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-widest text-[#6b6a62]"><span>Metric</span><span>Gate</span><span>Score</span><span className="w-10 text-right">Result</span></div>
        {rows.map(([m, gate, score, ok]) => (
          <div key={m} className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-x-4 border-t border-[#15140f]/8 px-4 py-2.5 text-xs">
            <span className="font-bold">{m}</span><span className="text-[#6b6a62]">{gate}</span><span className="font-bold">{score}</span>
            <span className={`${pill} ${ok ? green : red} w-10 text-center`}>{ok ? "Pass" : "Fail"}</span>
          </div>
        ))}
      </div>
      <p className={`mt-3 ${muted}`}>Next: adjust chunking and re-ranker, then re-run the same 120-question test set before release.</p>
    </div>
  );
}

// Deploy: progressive release behind an evaluation gate, with the live checks and the automatic rollback rule.
export function DeployMock() {
  const steps: [string, string][] = [["Build", "done"], ["Tests", "done"], ["Eval gate", "done"], ["Canary 10%", "live"], ["Full rollout", "next"]];
  const live: [string, string, string][] = [["Latency p95", "2.3 s", "−0.1 s vs stable"], ["Error rate", "0.4%", "within limit"], ["Cost / 1k requests", "On budget", "alert at +15%"]];
  return (
    <div className={card}>
      <Head eyebrow="Release 2.3 · production" title="Release pipeline" />
      <ol className="mt-4 flex items-center gap-1 text-[0.65rem] font-bold">
        {steps.map(([s, st]) => (
          <li key={s} className={`flex-1 rounded-lg px-1 py-2 text-center ${st === "done" ? green : st === "live" ? "bg-[#15140f] text-white" : "bg-[#f3f2ee] text-[#6b6a62]"}`}>{s}</li>
        ))}
      </ol>
      <ul className="mt-3 divide-y divide-[#15140f]/8 rounded-xl bg-[#f3f2ee]">
        {live.map(([k, v, note]) => (
          <li key={k} className="flex items-center justify-between gap-3 px-4 py-2.5"><span className="text-xs font-bold">{k}</span><span className="text-right text-xs"><b>{v}</b> <span className="text-[#6b6a62]">· {note}</span></span></li>
        ))}
      </ul>
      <p className={`mt-3 ${muted}`}>Automatic rollback if the error rate passes 2% or evaluation scores drop. Access and audit logs on from day one.</p>
    </div>
  );
}

export const mocks = [DiscoverMock, EngineerMock, DeployMock];
