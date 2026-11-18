// Closing CTA picture: a real photo (Golden Gate Bridge at dawn, public/cta-bg.webp) put through our house filter:
// sideways motion blur, muted earthy colour, soft light streaks and film grain.
// The earlier drawn landscape is saved in CtaArt.v1.tsx (revert: copy it back over this file).
export default function CtaArt() {
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full" aria-hidden="true">
      <defs>
        <filter id="cp" x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="42 2.5" edgeMode="duplicate" />
          <feColorMatrix type="saturate" values="0.7" />
        </filter>
        <filter id="ch" x="-20%" y="-100%" width="140%" height="300%"><feGaussianBlur stdDeviation="90 2" /></filter>
        <filter id="cg"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" /><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .5 0" /></filter>
      </defs>
      <rect width="1600" height="900" fill="#b9b293" />
      <image href="/cta-bg.webp" width="1600" height="900" preserveAspectRatio="xMidYMid slice" filter="url(#cp)" />
      <rect width="1600" height="900" fill="#c9a26a" opacity=".16" style={{ mixBlendMode: "soft-light" }} />
      <g filter="url(#ch)" fill="#fff" opacity=".45"><rect x="120" y="610" width="700" height="5" /><rect x="700" y="820" width="600" height="4" /><rect x="900" y="360" width="500" height="4" /></g>
      <rect width="1600" height="900" fill="#1c1a10" opacity=".18" />
      <rect width="1600" height="900" filter="url(#cg)" opacity=".4" style={{ mixBlendMode: "multiply" }} />
    </svg>
  );
}
