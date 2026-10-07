import { Check } from "lucide-react";

const riders = [
  { name: "Ahmed", route: "Malir → PECHS", dist: "1.2 km away", delay: "1.4s" },
  { name: "Ali", route: "Model Colony → Saddar", dist: "800 m away", delay: "1.8s" },
  { name: "Sara", route: "Malir → Saddar", dist: "1.7 km away", delay: "2.2s" },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      <div className="overflow-hidden rounded-2xl border bg-card shadow-float">
        {/* Map */}
        <div className="relative h-52 bg-map">
          <svg viewBox="0 0 400 210" className="absolute inset-0 h-full w-full" aria-hidden>
            <g className="stroke-map-line" strokeWidth="1" fill="none">
              {[30, 75, 120, 165].map((y) => <path key={y} d={`M0 ${y} L400 ${y + 12}`} />)}
              {[60, 150, 240, 330].map((x) => <path key={x} d={`M${x} 0 L${x - 20} 210`} />)}
            </g>
            <path d="M40 170 C 120 160, 150 110, 220 95 S 330 50, 365 40" className="stroke-primary route-draw" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M90 190 C 130 150, 160 120, 220 95" className="stroke-primary/50 route-draw" style={{ animationDelay: "0.6s" }} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M220 95 C 260 120, 290 140, 320 150" className="stroke-foreground/30 route-draw" style={{ animationDelay: "0.9s" }} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="1000" />
            {[[40, 170], [90, 190], [320, 150]].map(([x, y], i) => (
              <g key={i} className="pop-in" style={{ animationDelay: `${1.2 + i * 0.3}s` }}>
                <circle cx={x} cy={y} r="5" className="fill-card stroke-primary" strokeWidth="2.5" />
              </g>
            ))}
            <circle cx="365" cy="40" r="6" className="fill-primary pulse-ring" />
            <circle cx="365" cy="40" r="6" className="fill-ink" />
          </svg>
          <span className="absolute left-3 bottom-3 rounded-md bg-card/90 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Malir</span>
          <span className="absolute right-3 top-3 rounded-md bg-card/90 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Saddar</span>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Your shared ride</p>
            <span className="inline-flex items-center gap-1 rounded-full bg-primary-soft px-2 py-0.5 text-[11px] font-medium text-primary-deep">
              <Check className="h-3 w-3" /> 4 people matched
            </span>
          </div>
          <p className="mt-2 text-xl font-semibold tracking-tight">Malir → Saddar</p>
          <p className="text-sm text-muted-foreground">Today · 5:30 PM</p>

          <ul className="mt-4 space-y-2">
            {riders.map((r) => (
              <li key={r.name} className="pop-in flex items-center gap-3 rounded-lg border bg-background px-3 py-2" style={{ animationDelay: r.delay }}>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-xs font-semibold text-ink-foreground">{r.name[0]}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{r.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{r.route}</p>
                </div>
                <span className="font-mono text-[11px] text-muted-foreground">{r.dist}</span>
              </li>
            ))}
          </ul>

          <div className="pop-in mt-4 flex items-end justify-between rounded-xl bg-ink p-4 text-ink-foreground" style={{ animationDelay: "2.7s" }}>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-60">One ride</p>
              <p className="text-sm opacity-70"><span className="line-through">Rs. 1,000</span> · shared by 4</p>
            </div>
            <p className="text-2xl font-semibold tracking-tight">Rs. 250<span className="text-sm font-normal opacity-60"> /person</span></p>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-muted-foreground">Illustrative example. Actual fares and savings vary.</p>
    </div>
  );
}
