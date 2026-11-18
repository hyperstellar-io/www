"use client";
import { useEffect, useState } from "react";

// Ordered by market size: US, Germany, India, UAE.
const cities = [["San Francisco, CA", "America/Los_Angeles"], ["Berlin, Germany", "Europe/Berlin"], ["Bengaluru, IN", "Asia/Kolkata"], ["Dubai, UAE", "Asia/Dubai"]];

export default function Clocks() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => { const tick = () => setNow(new Date()); const t0 = setTimeout(tick, 0), t = setInterval(tick, 30000); return () => { clearTimeout(t0); clearInterval(t); }; }, []);
  return (
    <ul className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-4">
      {cities.map(([c, tz]) => (
        <li key={c}>
          <p className="font-mono text-[0.65rem] uppercase tracking-widest text-mute">{c}</p>
          <p className="mt-1 text-xl tabular-nums">{now ? now.toLocaleTimeString("en-US", { timeZone: tz, hour: "2-digit", minute: "2-digit" }) : "--:--"}</p>
        </li>
      ))}
    </ul>
  );
}
