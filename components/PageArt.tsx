import type { Motif } from "@/lib/pagetheme";

// Animated SVG backdrop. One hue + one motif per page; everything is CSS-animated and respects reduced motion.
const rand = (seed: number) => () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);

export default function PageArt({ hue, motif, id }: { hue: number; motif: Motif; id: string }) {
  const c = (l: number, s = 55, a = 1) => `hsl(${hue} ${s}% ${l}% / ${a})`;
  const r = rand(hue * 7 + 3);
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={c(14, 50)} /><stop offset=".55" stopColor={c(24, 55)} /><stop offset="1" stopColor={`hsl(${hue + 40} 55% 34%)`} /></linearGradient>
        <radialGradient id={`${id}-glow`} cx=".75" cy=".2" r=".6"><stop offset="0" stopColor={`hsl(${hue + 20} 90% 70% / .55)`} /><stop offset="1" stopColor="transparent" /></radialGradient>
        <filter id={`${id}-blur`}><feGaussianBlur stdDeviation="40" /></filter>
        <filter id={`${id}-grain`}><feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="2" stitchTiles="stitch" /><feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .5 0" /></filter>
      </defs>
      <rect width="1600" height="900" fill={`url(#${id}-bg)`} />
      <rect width="1600" height="900" fill={`url(#${id}-glow)`} />
      <g filter={`url(#${id}-blur)`} className="art-float">
        <circle cx="260" cy="700" r="260" fill={c(45, 70, 0.35)} />
        <circle cx="1300" cy="300" r="220" fill={`hsl(${hue + 50} 80% 60% / .3)`} />
      </g>

      {motif === "waves" && (
        <g className="art-drift" style={{ width: "200%" }}>
          {[0, 1, 2, 3].map((i) => (
            <path key={i} fill="none" stroke={c(70 + i * 4, 60, 0.22 - i * 0.03)} strokeWidth={2 + i}
              d={`M0 ${520 + i * 70} ${Array.from({ length: 17 }, (_, k) => `Q${k * 200 + 100} ${(k % 2 ? 450 : 590) + i * 70} ${k * 200 + 200} ${520 + i * 70}`).join(" ")}`} />
          ))}
        </g>
      )}

      {motif === "grid" && (
        <g>
          {Array.from({ length: 13 }, (_, i) => <line key={`v${i}`} x1={i * 134} y1="0" x2={i * 134} y2="900" stroke={c(80, 40, 0.1)} />)}
          {Array.from({ length: 8 }, (_, i) => <line key={`h${i}`} x1="0" y1={i * 130} x2="1600" y2={i * 130} stroke={c(80, 40, 0.1)} />)}
          {Array.from({ length: 22 }, (_, i) => <circle key={i} cx={Math.round(r() * 12) * 134} cy={Math.round(r() * 7) * 130} r="5" fill={c(82, 80)} className="art-blink" style={{ animationDelay: `${(i * 0.37) % 3}s` }} />)}
        </g>
      )}

      {motif === "routes" && (
        <g fill="none">
          {[0, 1, 2, 3, 4].map((i) => (
            <path key={i} className="art-dash" stroke={c(80, 70, 0.45)} strokeWidth="2" d={`M-20 ${150 + i * 150} C ${400 + r() * 200} ${i * 120} ${900 - r() * 200} ${900 - i * 100} 1620 ${200 + i * 120}`} style={{ animationDuration: `${14 + i * 3}s` }} />
          ))}
          {Array.from({ length: 9 }, (_, i) => <circle key={i} cx={150 + i * 175} cy={180 + ((i * 211) % 560)} r="7" fill={c(86, 80)} className="art-blink" style={{ animationDelay: `${i * 0.4}s` }} />)}
        </g>
      )}

      {motif === "pulse" && (
        <g fill="none">
          <path stroke={c(70, 60, 0.18)} strokeWidth="2" d="M0 560 H520 L580 470 L650 650 L720 380 L790 600 L850 560 H1600" />
          <g className="art-scan"><path stroke={c(88, 90)} strokeWidth="4" strokeLinecap="round" d="M0 560 H520 L580 470 L650 650 L720 380 L790 600 L850 560 H1600" style={{ clipPath: "inset(0 85% 0 0)" }} /></g>
          {[180, 300, 420].map((rad, i) => <circle key={rad} cx="1180" cy="330" r={rad} stroke={c(80, 60, 0.12 - i * 0.03)} className="art-float" />)}
        </g>
      )}

      {motif === "rings" && (
        <g transform="translate(1100 380)" fill="none">
          {[120, 220, 330, 450].map((rx, i) => (
            <g key={rx} className="art-spin" style={{ animationDuration: `${90 + i * 40}s`, animationDirection: i % 2 ? "reverse" : "normal" }}>
              <ellipse rx={rx} ry={rx * 0.42} stroke={c(82, 60, 0.28 - i * 0.04)} strokeWidth="2" transform={`rotate(${-20 + i * 14})`} />
              <circle cx={rx} cy="0" r={6 - i} fill={c(88, 85)} transform={`rotate(${-20 + i * 14})`} />
            </g>
          ))}
        </g>
      )}

      {motif === "blocks" && (
        <g>
          {Array.from({ length: 16 }, (_, i) => {
            const h = 140 + r() * 360;
            return <rect key={i} x={40 + i * 98} y={900 - h} width="72" height={h} rx="6" fill={c(70 + (i % 3) * 6, 60, 0.12 + (i % 4) * 0.04)} className="art-rise" style={{ animationDelay: `${(i * 0.6) % 4}s`, animationDuration: `${4 + (i % 5)}s` }} />;
          })}
        </g>
      )}
      <rect width="1600" height="900" filter={`url(#${id}-grain)`} opacity=".22" />
    </svg>
  );
}
