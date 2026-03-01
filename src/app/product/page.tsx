import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Layers, TrendingUp, Clock, Target, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Velora is an AI-native training OS built for endurance athletes. Adaptive blocks, multi-sport support, and coaching logic that respects your physiology.",
};

const features = [
  {
    icon: TrendingUp,
    title: "Baseline engine",
    description:
      "The first thing Velora does is establish your training baseline — typical weekly volume, intensity distribution, and load patterns across each discipline. Everything after that is relative to this baseline.",
    details: [
      "7-day and 28-day rolling load windows",
      "Per-discipline tracking: run, bike, swim",
      "Automatically updates after each sync",
      "Defines 'normal' before prescribing deviation",
    ],
  },
  {
    icon: Layers,
    title: "Phase detection",
    description:
      "Athletes train in phases: base, build, peak, recover. Velora detects your current phase from training history patterns and adjusts prescription scope accordingly. Build phase means progressive overload. Recovery phase means enforced easy sessions.",
    details: [
      "Base / Build / Peak / Recovery classification",
      "Phase-aware duration and intensity bounds",
      "Automatic phase transitions",
      "Race event integration (planned)",
    ],
  },
  {
    icon: Clock,
    title: "Load state management",
    description:
      "After every session, your load state updates. Velora uses RPE, heart rate zone data, and duration to classify each workout: easy, moderate, or hard. This classification gates the next prescription — hard never follows hard.",
    details: [
      "RPE input + HR zone inference",
      "Load states: fresh / moderate / fatigued / overreached",
      "Daily guardrails enforced automatically",
      "No override mechanism — the system means it",
    ],
  },
  {
    icon: Target,
    title: "Daily prescription",
    description:
      "The output is simple: one prescription per day. Discipline, session type, duration, and coaching rationale. No calendar to manage. No plan to follow. Just the next best step based on everything the system knows about you.",
    details: [
      "Single-discipline prescription daily",
      "Session types: easy / tempo / intervals / long / rest",
      "Duration bounded by load state and phase",
      "Plain-language coaching rationale included",
    ],
  },
  {
    icon: Zap,
    title: "Multi-sport support",
    description:
      "Velora tracks run, bike, and swim independently. The coaching engine balances volume across disciplines, biasing toward whichever vertical is undertrained. Strength is treated as an overlay — always available, never crowding endurance sessions.",
    details: [
      "Run, bike, swim vertical tracking",
      "Cross-discipline volume balancing",
      "Strength sessions as non-competing overlay",
      "Discipline-specific load thresholds",
    ],
  },
];

export default function ProductPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-medium text-accent uppercase tracking-widest mb-7">
            Product overview
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tight leading-[1.06] mb-8">
            Training intelligence,
            <br />
            engineered precisely.
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl">
            Velora isn&apos;t a training plan generator. It&apos;s a coaching
            engine — a system that reads your history, understands your current
            phase, and prescribes exactly what comes next.
          </p>
        </div>
      </section>

      {/* Feature blocks */}
      <section className="pb-24 px-6">
        <div className="mx-auto max-w-6xl space-y-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-surface rounded-2xl p-8 md:p-10"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="md:w-1/2">
                  <f.icon size={18} className="text-accent mb-5" />
                  <h2 className="text-xl font-semibold text-foreground mb-3">
                    {f.title}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed">
                    {f.description}
                  </p>
                </div>
                <div
                  className="md:w-1/2 bg-surface-raised rounded-xl p-6"
                  style={{ border: "1px solid var(--color-border)" }}
                >
                  <ul className="space-y-3">
                    {f.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-3 text-sm text-muted"
                      >
                        <span className="mt-[7px] h-1 w-1 rounded-full bg-accent shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="pb-24 px-6">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-medium text-muted uppercase tracking-widest mb-5">
            Integrations
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 tracking-tight">
            Data where athletes already train.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className="rounded-xl p-6"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium text-foreground">
                  Strava
                </span>
                <span className="text-xs text-muted bg-surface px-2 py-0.5 rounded-full">
                  Live
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Activities sync automatically after every workout. Activity
                metadata, lap data, and effort fields are ingested and processed
                into the coaching engine.
              </p>
            </div>
            <div
              className="rounded-xl p-6"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="text-sm font-medium text-foreground">
                  Garmin
                </span>
                <span className="text-xs text-muted bg-surface px-2 py-0.5 rounded-full">
                  In development
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Applying to the Garmin Developer Program. HRV, sleep, and
                training readiness data will make coaching significantly more
                accurate by grounding prescriptions in recovery physiology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32 px-6">
        <div className="mx-auto max-w-4xl flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Request early access <ChevronRight size={15} />
          </Link>
          <Link
            href="/garmin"
            className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full transition-colors text-muted hover:text-foreground"
            style={{ border: "1px solid var(--color-border)" }}
          >
            Garmin integration details
          </Link>
        </div>
      </section>
    </>
  );
}
