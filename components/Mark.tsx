// Brand mark: the letter H on the accent circle.
export default function Mark({ className = "size-11" }: { className?: string }) {
  return (
    <span className={`grid place-items-center rounded-full bg-ion ${className}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" className="size-3/5">
        <text x="12" y="18" textAnchor="middle" fontSize="20" fontWeight="600" fill="var(--on-ion)" style={{ fontFamily: "var(--font-newsreader), serif" }}>H</text>
      </svg>
    </span>
  );
}
