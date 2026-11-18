// Desktop: a row of panels that widen on hover or focus to reveal the note. Phones and tablets: a plain list.
export default function FrameworkPanels({ items }: { items: { name: string; note: string }[] }) {
  return (
    <ul className="mt-10 divide-y divide-line border-y border-line lg:flex lg:h-[22rem] lg:gap-3 lg:divide-y-0 lg:border-0">
      {items.map((f, i) => (
        <li key={f.name} tabIndex={0} className="group relative py-5 outline-none transition-[flex] duration-500 lg:flex-1 lg:overflow-hidden lg:rounded-[1.75rem] lg:bg-panel lg:p-6 lg:py-6 lg:hover:flex-[3] lg:focus:flex-[3] lg:focus-visible:ring-2 lg:focus-visible:ring-accent">
          <span className="font-mono text-xs text-mute">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="serif mt-2 text-2xl lg:absolute lg:bottom-6 lg:left-6 lg:right-6 lg:mt-0 lg:text-3xl lg:transition-all lg:duration-500 lg:group-hover:bottom-auto lg:group-hover:top-12 lg:group-focus:bottom-auto lg:group-focus:top-12">{f.name}</h3>
          <p className="mt-2 text-mute lg:absolute lg:inset-x-6 lg:bottom-6 lg:mt-0 lg:translate-y-3 lg:opacity-0 lg:transition-all lg:duration-500 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus:translate-y-0 lg:group-focus:opacity-100">{f.note}</p>
        </li>
      ))}
    </ul>
  );
}
