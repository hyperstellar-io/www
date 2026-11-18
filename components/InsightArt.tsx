import { useId } from "react";

// Photo backdrop for insight cards, with a slight horizontal motion blur trailing to the right (`sharp` skips it, for the article banner).
// Callers pass the card's position in its list, so neighbours never share a photo.
const PHOTOS = 6; // public/insight-1.webp … insight-6.webp

export default function InsightArt({ index, sharp = false }: { index: number; sharp?: boolean }) {
  const id = "mb" + useId().replace(/\W/g, "");
  return (
    <>
      {!sharp && (
        <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
          <filter id={id} x="0" y="0" width="100%" height="100%">
            {/* smear sideways, push the smear right, then mix it with the sharp image so the subject stays readable */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="9 0" result="blur" />
            <feOffset in="blur" dx="10" result="trail" />
            <feComposite in="SourceGraphic" in2="trail" operator="arithmetic" k1="0" k2="0.45" k3="0.55" k4="0" />
          </filter>
        </svg>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/insight-${(index % PHOTOS) + 1}.webp`} alt="" loading="lazy" decoding="async" aria-hidden="true" className={`absolute inset-0 -z-20 size-full object-cover ${sharp ? "" : "scale-[1.04]"}`} style={sharp ? undefined : { filter: `url(#${id})` }} />
    </>
  );
}
