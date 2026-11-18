const css = `.lm-root { --lm-bg:#f5f7fc; --lm-p0:#eaeef8; --lm-p1:#ffffff; --lm-p2:#fafbff; --lm-p3:#f1f4fb; --lm-p4:#ffffff; --lm-l1:#e3e8f3; --lm-l2:#d5dcee; --lm-l3:#bcc7e2; --lm-fg:#0f1320; --lm-mute:#566079; --lm-soft:#39425a; --lm-cf:#1c3f9e; --lm-blue:#3d7bff; --lm-bt:#2e5fe0; --lm-bh:#2f6af0; --lm-bt2:#4a78e8; --lm-bd:#2b55b8; }
:root[data-theme="dark"] .lm-root { --lm-bg:#06070b; --lm-p0:#080a10; --lm-p1:#0d1017; --lm-p2:#0f131c; --lm-p3:#0b0e15; --lm-p4:#131825; --lm-l1:#1f2536; --lm-l2:#232b40; --lm-l3:#2c3550; --lm-fg:#eceff6; --lm-mute:#9aa3b8; --lm-soft:#c3cadb; --lm-cf:#cfe0ff; --lm-bt:#7ca7ff; --lm-bh:#5b90ff; --lm-bt2:#8fb4ff; }
.lm-root { --bg:var(--lm-bg); --panel:var(--lm-p1); --panel2:var(--lm-p4); --line:var(--lm-l1); --fg:var(--lm-fg); --mute:var(--lm-mute); --blue:var(--lm-blue); --bluet:var(--lm-bt); background:var(--bg); color:var(--fg); position:relative; overflow-x:clip; }
/* per-product accent: set --lm-acc on a .lm-root.lm-acc element */
:root .lm-root.lm-acc { --lm-blue:var(--lm-acc); --lm-bh:color-mix(in srgb,var(--lm-acc) 85%,#fff); --lm-bt:color-mix(in srgb,var(--lm-acc) 70%,#000); --lm-bt2:var(--lm-acc); --lm-bd:color-mix(in srgb,var(--lm-acc) 70%,#000); --lm-cf:color-mix(in srgb,var(--lm-acc) 55%,#000); }
:root[data-theme="dark"] .lm-root.lm-acc { --lm-bt:color-mix(in srgb,var(--lm-acc) 60%,#fff); --lm-bt2:color-mix(in srgb,var(--lm-acc) 80%,#fff); --lm-cf:color-mix(in srgb,var(--lm-acc) 30%,#fff); }
.lm-grid { background-image:linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px); background-size:56px 56px; -webkit-mask-image:radial-gradient(ellipse at 50% 35%,#000 15%,transparent 70%); mask-image:radial-gradient(ellipse at 50% 35%,#000 15%,transparent 70%); opacity:.5; }
.lm-glow { background:radial-gradient(closest-side,color-mix(in srgb,var(--lm-blue) 42%,transparent),transparent); filter:blur(24px); }
.lm-kbd { font-family:var(--font-geist-mono),ui-monospace,monospace; font-size:.68rem; line-height:1; border:1px solid var(--lm-l3); border-bottom-width:2px; border-radius:6px; padding:.18rem .42rem; color:var(--mute); background:var(--lm-p3); display:inline-block; }
.lm-grad { background:linear-gradient(100deg,var(--lm-bt),var(--lm-blue) 60%,var(--lm-bt2)); -webkit-background-clip:text; background-clip:text; color:transparent; }
.lm-win { background:linear-gradient(180deg,var(--lm-p4),var(--lm-p3)); border:1px solid var(--lm-l2); box-shadow:0 40px 120px -30px color-mix(in srgb,var(--lm-blue) 35%,transparent),0 0 0 1px rgba(255,255,255,.03) inset; }
.lm-tile { background:linear-gradient(180deg,var(--lm-p2),var(--lm-p3)); border:1px solid var(--line); transition:border-color .25s,transform .25s; }
.lm-tile:hover { border-color:var(--lm-l3); }
.lm-ping { animation:lm-ping 1.8s ease-out infinite; }
@keyframes lm-ping { 0% { box-shadow:0 0 0 0 color-mix(in srgb,var(--lm-blue) 60%,transparent); } 80%,100% { box-shadow:0 0 0 10px color-mix(in srgb,var(--lm-blue) 0%,transparent); } }
.lm-caret { animation:lm-blink 1s steps(1) infinite; }
@keyframes lm-blink { 50% { opacity:0; } }
.lm-strike { background:linear-gradient(var(--blue),var(--blue)) no-repeat 0 55%/0 2px; animation:lm-strike 1.2s .4s ease forwards; }
@keyframes lm-strike { to { background-size:100% 2px; } }
.lm-drift { animation:lm-drift 6s ease-in-out infinite alternate; }
@keyframes lm-drift { to { transform:translateY(-6px) rotate(var(--r,0deg)); } }
@media (prefers-reduced-motion:reduce) { .lm-ping,.lm-caret,.lm-drift,.lm-strike { animation:none; } .lm-strike { background-size:100% 2px; } }
`;
export default css;
