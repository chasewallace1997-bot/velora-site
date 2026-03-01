import Link from "next/link";
import { Activity, Brain, Shield, ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Velora — AI-native endurance training OS",
};

const cards = [
  {
    icon: Brain,
    title: "Adaptive Training",
    body: "Your baseline evolves with every workout. No static plans. The system reads load state, recovery signals, and trend data to adjust what comes next.",
  },
  {
    icon: Activity,
    title: "Clarity",
    body: "One daily prescription. One number to understand your training load. No noise, no dashboard overwhelm — just what to do and why.",
  },
  {
    icon: Shield,
    title: "Trust",
    body: "Built on conservative coaching principles. Hard never follows hard. Load state gates every prescription. Your data stays yours.",
  },
];

const steps = [
  {
    n: "01",
    title: "Baseline sync",
    body: "Connect Strava (and soon Garmin). Velora ingests your training history and establishes load baselines for each discipline — run, bike, swim.",
  },
  {
    n: "02",
    title: "Phase detection",
    body: "The system identifies your current training phase — base, build, peak, or recovery — and routes prescriptions through phase-aware templates.",
  },
  {
    n: "03",
    title: "Daily prescription",
    body: "Every day you get one prescription: what discipline, what session type, and at what intensity. No ambiguity.",
  },
  {
    n: "04",
    title: "Load state feedback",
    body: "After each session, load state updates. Hard follows easy. Recovery is enforced. The system adapts — not you.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center pt-14 px-6">
        <div className="mx-auto max-w-4xl w-full">
          <p className="text-xs font-medium text-accent uppercase tracking-widest mb-10">
            Velora Labs — Early Access
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground leading-[1.04]">
            AI-native
            <br />
            endurance
            <br />
            training OS.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted max-w-xl leading-relaxed">
            Baseline-driven training, adaptive blocks, and multi-sport support
            for athletes who run, ride, and swim — and take it seriously.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Request early access <ChevronRight size={15} />
            </Link>
            <Link
              href="/product"
              className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full transition-colors text-muted hover:text-foreground"
              style={{ border: "1px solid var(--color-border)" }}
            >
              See the product
            </Link>
          </div>
        </div>
      </section>

      {/* Value cards */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cards.map((c) => (
              <div
                key={c.title}
                className="bg-surface rounded-2xl p-8"
                style={{ border: "1px solid var(--color-border)" }}
              >
                <c.icon size={18} className="text-accent mb-6" />
                <h3 className="font-semibold text-foreground mb-3 text-sm">
                  {c.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-medium text-muted uppercase tracking-widest mb-5">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 tracking-tight">
            Coaching logic that learns your pattern.
          </h2>
          <div className="space-y-0">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="flex gap-8 py-8"
                style={{
                  borderBottom:
                    i < steps.length - 1
                      ? "1px solid var(--color-border)"
                      : undefined,
                }}
              >
                <span className="text-xs text-muted pt-0.5 w-8 shrink-0 tabular-nums">
                  {s.n}
                </span>
                <div>
                  <div className="font-medium text-foreground mb-2 text-sm">
                    {s.title}
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garmin CTA */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-6xl">
          <div
            className="bg-surface-raised rounded-2xl p-10 md:p-14 flex flex-col md:flex-row gap-10 items-start md:items-center justify-between"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <div className="max-w-xl">
              <p className="text-xs font-medium text-accent uppercase tracking-widest mb-3">
                Integration roadmap
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
                We&apos;re building a Garmin integration.
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                Garmin devices carry data Strava doesn&apos;t: detailed HR
                streams, sleep, HRV, training readiness. We&apos;re applying to
                the Garmin Developer Program to bring this data into
                Velora&apos;s coaching pipeline — so your wearable actually
                informs your training.
              </p>
            </div>
            <Link
              href="/garmin"
              className="shrink-0 inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Learn more <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-medium text-muted uppercase tracking-widest mb-5">
            About
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 tracking-tight">
            Built by a founder who trains.
          </h2>
          <p className="text-muted text-base leading-relaxed max-w-2xl">
            Velora is built by a solo founder based in the US. The motivation is
            simple: existing coaching apps are either too generic to be useful or
            too complex to stay consistent with. Velora exists to close that gap
            — AI-powered training intelligence with the discipline of a real
            coaching system, available to any serious endurance athlete.
          </p>
          <p className="text-muted text-base leading-relaxed max-w-2xl mt-4">
            The product is in active development. Early access is available to a
            small group of athletes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 mt-7 text-sm text-accent hover:text-accent-soft transition-colors"
          >
            Request access <ChevronRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
