// Giant outlined words drifting sideways between sections. Decorative only.
export default function Ticker({ words }: { words: string[] }) {
  const row = words.map((w) => (
    <span key={w} className="serif mx-8 whitespace-nowrap text-[clamp(3.5rem,9vw,8rem)] leading-none text-transparent [-webkit-text-stroke:1px_var(--mute)] sm:mx-12">{w}<span className="mx-8 text-accent [-webkit-text-stroke:0] sm:mx-12">✦</span></span>
  ));
  return (
    <div className="overflow-hidden py-10" aria-hidden="true">
      <div className="ticker flex w-max">{row}{row}</div>
    </div>
  );
}
