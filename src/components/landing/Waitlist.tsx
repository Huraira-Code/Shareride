import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

/** Waitlist form. Hook `onJoin` up to real storage when available. */
export function WaitlistForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) return setError("Please enter a valid email.");
    setError("");
    setDone(true);
  };

  if (done)
    return (
      <p className={`inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium ${dark ? "bg-ink-foreground/10 text-ink-foreground" : "bg-primary-soft text-primary-deep"}`}>
        <Check className="h-4 w-4" /> You're on the list. We'll be in touch before launch.
      </p>
    );

  return (
    <form onSubmit={submit} className="w-full max-w-md" noValidate>
      <div className={`flex flex-col gap-2 rounded-xl border p-1.5 sm:flex-row ${dark ? "border-ink-foreground/15 bg-ink-foreground/5" : "bg-card"}`}>
        <label htmlFor={dark ? "wl-dark" : "wl"} className="sr-only">Email address</label>
        <input
          id={dark ? "wl-dark" : "wl"}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className={`h-11 flex-1 bg-transparent px-3 text-base outline-none ${dark ? "text-ink-foreground placeholder:text-ink-foreground/40" : "placeholder:text-muted-foreground"}`}
        />
        <button type="submit" className="group inline-flex h-11 items-center justify-center gap-1.5 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:brightness-95 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
          Join the Waitlist <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
    </form>
  );
}
