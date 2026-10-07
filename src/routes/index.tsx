import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X, Wallet, Radar, Users, UserCircle2, Route as RouteIcon, FileText, Fingerprint, ShieldAlert, ShieldCheck, CheckCircle2, Loader2 } from "lucide-react";
import { HeroVisual } from "@/components/landing/HeroVisual";
import { Reveal } from "@/components/landing/Reveal";
import { WaitlistForm } from "@/components/landing/Waitlist";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ShareRide — Going the same way? Don't pay alone." },
      { name: "description", content: "ShareRide matches people in Karachi going the same direction so they can share one ride and split the fare. Join the waitlist." },
      { property: "og:title", content: "ShareRide — Share the ride. Split the cost." },
      { property: "og:description", content: "Get matched with people going your way in Karachi and split the fare. Join the waitlist." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/** Set to a real number once you have verified waitlist count; null hides the figure. */
const WAITLIST_COUNT: number | null = null;

const nav = [
  { href: "#how", label: "How it works" },
  { href: "#example", label: "Example" },
  { href: "#why", label: "Why ShareRide" },
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path d="M4 18 C 8 18, 10 12, 12 12 S 16 6, 20 6" className="stroke-primary" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M4 6 C 8 6, 10 12, 12 12" className="stroke-foreground" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
      ShareRide
    </a>
  );
}

function CTA({ 
  children = "Join the Waitlist", 
  onClick 
}: { 
  children?: React.ReactNode; 
  onClick?: () => void; 
}) {
  return (
    <button 
      type="button"
      onClick={onClick}
      className="group inline-flex h-11 items-center gap-1.5 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:brightness-95 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer"
    >
      {children} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </button>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary-deep">{children}</p>;
}

function WaitlistModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", whatsapp: "", email: "" });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    // Replace with your deployed Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbybEJrXbQEvZtvI2P22PEnuAgcwKsmbu8zBDMtC6U8OW5c-4hLFxl6zHtCARToo0ywi/exec";

    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // Required for Google Apps Script cross-origin calls
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setLoading(false);
    setSubmitted(true);
  } catch (error) {
    console.error("Error saving to sheet:", error);
    setLoading(false);
    alert("Something went wrong. Please try again.");
  }
};
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />
      
      {/* Modal Dialog */}
      <div className="relative w-full max-w-md rounded-2xl border bg-card p-6 shadow-2xl animate-in zoom-in-95 duration-200 sm:p-8">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight">You're on the list!</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We've saved your spot for Karachi launch updates. We'll reach out on WhatsApp soon.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ name: "", whatsapp: "", email: "" });
                onClose();
              }}
              className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition hover:brightness-95"
            >
              Got it
            </button>
          </div>
        ) : (
          <div>
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-widest text-primary">Early Access</span>
              <h3 className="text-2xl font-semibold tracking-tight">Join the ShareRide Waitlist</h3>
              <p className="text-sm text-muted-foreground">Be the first to split rides and save money in Karachi.</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground" htmlFor="waitlist-name">Full Name</label>
                <input
                  id="waitlist-name"
                  type="text"
                  required
                  placeholder="Ahmed Khan"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground" htmlFor="waitlist-whatsapp">WhatsApp Number</label>
                <input
                  id="waitlist-whatsapp"
                  type="tel"
                  required
                  placeholder="0300 1234567"
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className="w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground" htmlFor="waitlist-email">Email Address</label>
                <input
                  id="waitlist-email"
                  type="email"
                  required
                  placeholder="ahmed@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition hover:brightness-95 active:scale-[0.98] disabled:opacity-75 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Securing your spot...
                  </>
                ) : (
                  <>
                    Join Waitlist <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
            <p className="mt-4 text-center text-[11px] text-muted-foreground">Free to join · No spam ever</p>
          </div>
        )}
      </div>
    </div>
  );
}

function Navbar({ onOpenWaitlist }: { onOpenWaitlist: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "border-b bg-background/80 backdrop-blur-md" : "border-b border-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((n) => <a key={n.href} href={n.href} className="text-sm text-muted-foreground transition hover:text-foreground">{n.label}</a>)}
        </nav>
        <div className="hidden md:block"><CTA onClick={onOpenWaitlist} /></div>
        <button className="grid h-11 w-11 place-items-center md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t bg-background px-5 pb-6 pt-2 md:hidden animate-in fade-in slide-in-from-top-2">
          {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b py-4 text-lg font-medium">{n.label}</a>)}
          <button 
            onClick={() => { setOpen(false); onOpenWaitlist(); }} 
            className="mt-5 flex h-12 w-full items-center justify-center rounded-lg bg-primary font-semibold text-primary-foreground"
          >
            Join the Waitlist
          </button>
        </div>
      )}
    </header>
  );
}

function ProofBar() {
  return (
    <div className="flex justify-center px-5 pt-6">
      <p className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground">
        <span className="relative flex h-2 w-2"><span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-60" /><span className="relative h-2 w-2 rounded-full bg-primary" /></span>
        {WAITLIST_COUNT ? `${WAITLIST_COUNT.toLocaleString()}+ people have already joined the waitlist` : "Waitlist now open · Launching in Karachi"}
      </p>
    </div>
  );
}

function Hero({ onOpenWaitlist }: { onOpenWaitlist: () => void }) {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-10 md:pt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pb-28">
      <div className="text-center lg:text-left">
        <h1 className="text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          Don't pay for the <span className="text-primary">whole ride.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground lg:mx-0">
          You're going somewhere. Other people are too. Share a ride with people going your way and split the cost together.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
          <CTA onClick={onOpenWaitlist} />
          <a href="#how" className="inline-flex h-11 items-center px-4 text-sm font-medium text-foreground underline-offset-4 hover:underline">See how it works</a>
        </div>
        <p className="mt-5 text-xs text-muted-foreground">Free to join · Launching in Karachi</p>
      </div>
      <HeroVisual />
    </section>
  );
}

function Aha() {
  const people = [
    { n: "Ahmed", r: "Malir → Saddar", d: "M20 40 C 120 40, 180 110, 300 130" },
    { n: "Ali", r: "Malir → PECHS", d: "M20 130 C 120 130, 200 130, 300 130" },
    { n: "Sara", r: "Model Colony → Saddar", d: "M20 220 C 120 220, 180 150, 300 130" },
  ];
  return (
    <section className="border-y bg-card">
      <Reveal className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 lg:grid-cols-2">
        <div>
          <Eyebrow>The idea</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">You're not the only one going that way.</h2>
          <p className="mt-8 space-y-1 text-2xl font-medium leading-snug tracking-tight text-muted-foreground">
            <span className="block">Different destinations.</span>
            <span className="block">Same direction.</span>
            <span className="block text-foreground">One shared ride.</span>
          </p>
        </div>
        <div className="relative">
          <svg viewBox="0 0 480 260" className="w-full" aria-label="Three routes converging into one shared ride">
            {people.map((p, i) => (
              <path key={p.n} d={p.d} className="stroke-foreground/25 route-draw" style={{ animationDelay: `${i * 0.25}s` }} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            ))}
            <path d="M300 130 L 460 130" className="stroke-primary route-draw" style={{ animationDelay: "1.4s" }} strokeWidth="6" strokeLinecap="round" />
            <path d="M300 130 L 460 130" className="stroke-primary-foreground route-flow" strokeWidth="2" strokeLinecap="round" />
            <circle cx="300" cy="130" r="8" className="fill-primary pulse-ring" />
            <circle cx="300" cy="130" r="8" className="fill-primary" />
            <circle cx="460" cy="130" r="6" className="fill-ink" />
          </svg>
          <div className="pointer-events-none absolute inset-0">
            {people.map((p, i) => (
              <div key={p.n} className="pop-in absolute left-0 -translate-y-1/2 rounded-lg border bg-background px-3 py-1.5 shadow-float" style={{ top: `${[15.4, 50, 84.6][i]}%`, animationDelay: `${0.4 + i * 0.25}s` }}>
                <p className="text-xs font-semibold">{p.n}</p>
                <p className="text-[11px] text-muted-foreground">{p.r}</p>
              </div>
            ))}
            <div className="pop-in absolute right-0 top-[50%] mt-6 rounded-md bg-ink px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-foreground" style={{ animationDelay: "2s" }}>1 ride</div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Example() {
  const routes = ["Malir → PECHS", "Model Colony → Saddar", "Malir → Saddar"];
  return (
    <section id="example" className="scroll-mt-20">
      <Reveal className="mx-auto max-w-6xl px-5 py-24">
        <Eyebrow>Real-world example</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Imagine your next ride from Malir.</h2>
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-2xl border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <span className="h-3 w-3 rounded-full border-2 border-primary" />
                <span className="h-10 w-0.5 bg-primary" />
                <span className="h-3 w-3 rounded-full bg-ink" />
              </div>
              <div className="space-y-6">
                <p className="text-lg font-semibold">Malir</p>
                <p className="text-lg font-semibold">Saddar</p>
              </div>
              <span className="ml-auto font-mono text-xs uppercase tracking-wider text-muted-foreground">Your trip</span>
            </div>
            <p className="mt-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">Overlapping routes found</p>
            <ul className="mt-3 space-y-2">
              {routes.map((r, i) => (
                <li key={r} className="pop-in flex items-center justify-between rounded-lg border bg-background px-4 py-3" style={{ animationDelay: `${0.3 + i * 0.25}s` }}>
                  <span className="text-sm font-medium">{r}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-primary-deep"><span className="h-1.5 w-1.5 rounded-full bg-primary" />Overlaps</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between rounded-2xl bg-ink p-6 text-ink-foreground sm:p-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest opacity-50">Instead of</p>
              <p className="mt-2 text-4xl font-semibold tracking-tight opacity-50 line-through">Rs. 1,000</p>
              <p className="text-sm opacity-50">One person</p>
            </div>
            <div className="mt-10">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Potentially</p>
              <p className="mt-2 text-6xl font-semibold tracking-[-0.04em]">Rs. 250<span className="text-xl font-normal opacity-60"> each</span></p>
              <p className="mt-2 text-sm opacity-70">4 people · 1 shared ride</p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Illustrative example. Actual fares and savings vary.</p>
      </Reveal>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    ["Enter your trip", "Tell us where you're going and when."],
    ["Get matched", "We find people traveling along similar routes."],
    ["Share the ride", "Ride together instead of booking separately."],
    ["Split the fare", "Share the cost of the journey."],
  ];
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const f = () => {
      const el = ref.current; if (!el) return;
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.6 - r.top) / r.height));
      setActive(Math.min(3, Math.floor(p * 4)));
    };
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <section id="how" className="scroll-mt-20 border-y bg-card">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Four steps. One shared ride.</h2>
        <div ref={ref} className="relative mt-14">
          <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-border md:left-0 md:right-0 md:top-[11px] md:bottom-auto md:h-0.5 md:w-auto" />
          <div className="absolute left-[11px] top-2 w-0.5 bg-primary transition-all duration-700 md:left-0 md:top-[11px] md:h-0.5 md:w-[var(--p)] h-[var(--p)]" style={{ ["--p" as string]: `${(active / 3) * 100}%` }} />
          <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
            {steps.map(([t, d], i) => (
              <li key={t} className="flex gap-5 md:block">
                <span className={`relative grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 transition-colors duration-500 ${i <= active ? "border-primary bg-primary" : "border-border bg-card"}`}>
                  <span className={`h-2 w-2 rounded-full ${i <= active ? "bg-primary-foreground" : "bg-border"}`} />
                </span>
                <div className={`transition-opacity duration-500 md:mt-6 ${i <= active ? "opacity-100" : "opacity-40"}`}>
                  <p className="font-mono text-xs text-muted-foreground">0{i + 1}</p>
                  <p className="mt-1 text-lg font-semibold uppercase tracking-tight">{t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    { i: Wallet, t: "Pay your share", d: "Don't carry the entire cost of a ride when others are heading your way." },
    { i: Radar, t: "Find people automatically", d: "You don't need to search for passengers yourself." },
    { i: Users, t: "Make existing rides count", d: "One journey can work for multiple people." },
  ];
  return (
    <section id="why" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <Eyebrow>Why ShareRide</Eyebrow>
        <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">A ride works better when it's shared.</h2>
        <div className="mt-14 divide-y border-y">
          {items.map(({ i: Icon, t, d }, idx) => (
            <Reveal key={t} className="group grid items-center gap-4 py-8 md:grid-cols-[80px_1fr_1.2fr] md:py-10">
              <span className="font-mono text-sm text-muted-foreground">0{idx + 1}</span>
              <h3 className="flex items-center gap-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                <Icon className="h-6 w-6 text-primary transition group-hover:scale-110" strokeWidth={1.75} /> {t}
              </h3>
              <p className="text-muted-foreground md:text-lg">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Safety() {
  const launch = [
    { i: UserCircle2, t: "User profiles", d: "Know who you're riding with." },
    { i: RouteIcon, t: "Route transparency", d: "See every pickup and drop-off on your route." },
    { i: FileText, t: "Ride details", d: "Time, route and co-riders, shared up front." },
    { i: Radar, t: "Matching information", d: "Understand why you were matched." },
  ];
  const planned = [
    { i: ShieldAlert, t: "Reporting & blocking" },
    { i: Fingerprint, t: "Further verification options" },
  ];
  return (
    <section className="border-y bg-card">
      <Reveal className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>Trust & safety</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">Designed around knowing who you ride with.</h2>
            <p className="mt-4 text-muted-foreground">Safety-focused product design from day one. We'll be clear about what's live and what's coming.</p>
          </div>
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold"><ShieldCheck className="h-4 w-4 text-primary" /> Planned for launch</p>
            <div className="mt-4 grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2">
              {launch.map(({ i: Icon, t, d }) => (
                <div key={t} className="bg-background p-5">
                  <Icon className="h-5 w-5 text-foreground" strokeWidth={1.75} />
                  <p className="mt-3 font-semibold">{t}</p>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm font-semibold text-muted-foreground">On the roadmap</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {planned.map(({ i: Icon, t }) => (
                <span key={t} className="inline-flex items-center gap-2 rounded-full border border-dashed px-3 py-1.5 text-sm text-muted-foreground"><Icon className="h-4 w-4" />{t}</span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Karachi({ onOpenWaitlist }: { onOpenWaitlist: () => void }) {
  const pts: Record<string, [number, number]> = {
    Malir: [520, 120], "Model Colony": [470, 190], Gulshan: [360, 90], PECHS: [280, 170], Saddar: [170, 240], Clifton: [130, 320],
  };
  const lines = [
    "M520 120 C 440 130, 360 150, 280 170",
    "M470 190 C 380 200, 260 220, 170 240",
    "M520 120 C 420 160, 280 200, 170 240",
    "M360 90 C 320 140, 300 160, 280 170",
    "M360 90 C 300 180, 200 260, 130 320",
    "M470 190 C 360 240, 220 300, 130 320",
  ];
  return (
    <section className="bg-ink text-ink-foreground">
      <Reveal className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Karachi</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Karachi is full of people going the same way.</h2>
          <p className="mt-6 text-lg opacity-60">Every day, thousands travel along overlapping routes — each paying alone.</p>
          <p className="mt-8 text-xl font-medium">Your next ride might already have passengers.</p>
          <div className="mt-6"><CTA onClick={onOpenWaitlist} /></div>
        </div>
        <svg viewBox="80 40 500 320" className="w-full" aria-label="Stylized map of Karachi with overlapping routes">
          <path d="M90 350 C 150 330, 120 290, 180 280 S 260 330, 330 350" className="stroke-ink-foreground/15" strokeWidth="1.5" fill="none" strokeDasharray="3 5" />
          {lines.map((d, i) => (
            <g key={i}>
              <path d={d} className="stroke-primary/70 route-draw" style={{ animationDelay: `${i * 0.2}s` }} strokeWidth="2" fill="none" strokeLinecap="round" />
              <path d={d} className="stroke-primary route-flow" strokeWidth="2" fill="none" opacity="0.5" />
            </g>
          ))}
          {Object.entries(pts).map(([n, [x, y]], i) => (
            <g key={n} className="pop-in" style={{ animationDelay: `${0.8 + i * 0.12}s` }}>
              <circle cx={x} cy={y} r="5" className="fill-ink stroke-ink-foreground" strokeWidth="2" />
              <text x={x + 10} y={y - 8} className="fill-ink-foreground font-mono text-[11px]" opacity="0.75">{n}</text>
            </g>
          ))}
        </svg>
      </Reveal>
    </section>
  );
}

function FinalCTA({ onOpenWaitlist }: { onOpenWaitlist: () => void }) {
  return (
    <section id="waitlist" className="scroll-mt-20">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center px-5 py-28 text-center">
        <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">Your next ride might already have passengers.</h2>
        <p className="mt-6 max-w-lg text-lg text-muted-foreground">Join the ShareRide waitlist and be among the first to experience shared rides in Karachi.</p>
        <div className="mt-10 flex w-full justify-center">
          <CTA onClick={onOpenWaitlist}>Join the Waitlist</CTA>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Free to join · No spam</p>
      </Reveal>
    </section>
  );
}

function Footer({ onOpenWaitlist }: { onOpenWaitlist: () => void }) {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <div><Logo /><p className="mt-2 text-sm text-muted-foreground">Share the ride. Split the cost.</p></div>
        <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground" aria-label="Footer">
          <a href="#how" className="hover:text-foreground">How it works</a>
          <a href="#why" className="hover:text-foreground">Why ShareRide</a>
          <button onClick={onOpenWaitlist} className="hover:text-foreground text-left">Waitlist</button>
          <a href="mailto:hello@shareride.pk" className="hover:text-foreground">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

function Index() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const handleOpen = () => setIsWaitlistOpen(true);
  const handleClose = () => setIsWaitlistOpen(false);

  return (
    <div id="top" className="overflow-x-hidden">
      <Navbar onOpenWaitlist={handleOpen} />
      <main>
        <ProofBar />
        <Hero onOpenWaitlist={handleOpen} />
        <Aha />
        <Example />
        <HowItWorks />
        <Why />
        <Safety />
        <Karachi onOpenWaitlist={handleOpen} />
        <FinalCTA onOpenWaitlist={handleOpen} />
      </main>
      <Footer onOpenWaitlist={handleOpen} />
      <WaitlistModal isOpen={isWaitlistOpen} onClose={handleClose} />
    </div>
  );
}