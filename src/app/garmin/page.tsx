import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Eye, UserCheck, Lock, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Garmin Integration",
  description:
    "Velora is applying to the Garmin Developer Program to bring Garmin health and activity data into an AI-native training coaching engine.",
};

export default function GarminPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          <div
            className="inline-flex items-center gap-2 bg-surface rounded-full px-4 py-2 mb-10"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span className="text-xs text-muted">
              Garmin Developer Program — Application Context
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tight leading-[1.06] mb-8">
            Garmin × Velora:
            <br />
            coaching that reads
            <br />
            your wearable.
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl">
            We&apos;re applying for access to the Garmin Health API to integrate
            real wearable data into Velora&apos;s coaching engine. This page
            explains what we need, why, and how we handle it.
          </p>
        </div>
      </section>

      {/* What we need */}
      <section className="pb-20 px-6">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-medium text-accent uppercase tracking-widest mb-4">
            API access
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
            What we&apos;re requesting.
          </h2>
          <p className="text-muted text-sm leading-relaxed mb-8 max-w-2xl">
            We operate on a principle of least privilege. We request only the
            data required to inform coaching decisions. The data categories below
            represent our complete intended scope — nothing beyond what&apos;s
            listed.
          </p>
          <div className="space-y-3">
            {[
              {
                category: "Activity data",
                scope: "Read-only",
                description:
                  "Completed workouts including GPS tracks, heart rate streams, pace/speed, distance, elevation, and lap splits. Used to build per-discipline load baselines and verify training quality against prescription.",
                required: true,
              },
              {
                category: "Daily health metrics",
                scope: "Read-only",
                description:
                  "Resting heart rate, HRV status, sleep summary (duration, quality), stress score, and body battery. Used to inform load state — whether the athlete is physiologically ready for a harder session.",
                required: true,
              },
              {
                category: "Training readiness / Training status",
                scope: "Read-only",
                description:
                  "Garmin's computed Training Readiness and Training Status (if available via API). Used as an additional recovery signal in load state computation alongside raw HRV and sleep data.",
                required: false,
              },
              {
                category: "Structured workout delivery",
                scope: "Write — conditional",
                description:
                  "If supported, we intend to push prescribed sessions directly to the athlete's Garmin device as structured workouts. This is a future capability and not required for initial API access.",
                required: false,
              },
            ].map((item) => (
              <div
                key={item.category}
                className="bg-surface rounded-xl p-6"
                style={{ border: "1px solid var(--color-border)" }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-foreground text-sm">
                      {item.category}
                    </span>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full ${
                        item.required
                          ? "text-accent bg-surface-raised"
                          : "text-muted bg-surface-raised"
                      }`}
                      style={{ border: "1px solid var(--color-border)" }}
                    >
                      {item.required ? "Required" : "Optional"}
                    </span>
                  </div>
                  <span className="text-xs text-muted font-medium">
                    {item.scope}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it's used */}
      <section className="pb-20 px-6">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-medium text-accent uppercase tracking-widest mb-4">
            Usage
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-10 tracking-tight">
            How Garmin data enters the coaching pipeline.
          </h2>
          <div className="space-y-0">
            {[
              {
                step: "01",
                title: "Baseline seeding",
                detail:
                  "Activity history sets the athlete's baseline load per discipline. Garmin provides more complete data than Strava alone — especially for pool swims and indoor sessions that don't sync reliably through Strava's third-party flow.",
              },
              {
                step: "02",
                title: "Load state computation",
                detail:
                  "HRV trend, sleep quality, and body battery are folded into the daily load state calculation alongside RPE and training load. An athlete who trained hard yesterday but slept well and shows normal HRV is treated differently from one showing HRV suppression.",
              },
              {
                step: "03",
                title: "Prescription gating",
                detail:
                  "Load state gates every prescription. If health metrics indicate insufficient recovery, the system downgrades the prescribed session or recommends rest — regardless of where the athlete sits in their training block.",
              },
              {
                step: "04",
                title: "Workout delivery",
                detail:
                  "When the athlete connects a Garmin device, prescribed sessions can optionally be pushed as structured workouts. The prescription defines the intent — e.g., '35 min easy run, Z2' — and the structured workout translates this for the watch.",
              },
              {
                step: "05",
                title: "Feedback loop",
                detail:
                  "Post-session data from Garmin — achieved HR zones, pacing execution, compliance with prescribed effort — feeds back into the coaching model to refine future prescriptions.",
              },
            ].map((s, i, arr) => (
              <div
                key={s.step}
                className="flex gap-8 py-8"
                style={{
                  borderBottom:
                    i < arr.length - 1
                      ? "1px solid var(--color-border)"
                      : undefined,
                }}
              >
                <span className="text-xs text-muted pt-0.5 w-8 shrink-0 tabular-nums">
                  {s.step}
                </span>
                <div>
                  <div className="font-medium text-foreground mb-2 text-sm">
                    {s.title}
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User benefit */}
      <section className="pb-20 px-6">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-medium text-accent uppercase tracking-widest mb-4">
            Athlete value
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 tracking-tight">
            Why Garmin users benefit.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "More accurate coaching",
                body: "HRV and sleep data replace subjective guessing. The system knows if you're recovered — not just if you say you are.",
              },
              {
                title: "Better swim and bike insight",
                body: "Garmin captures pool swims and indoor rides that Strava misses. Full discipline coverage means no vertical is invisibly undertrained.",
              },
              {
                title: "Less manual entry",
                body: "Data flows directly from the device. Athletes don't need to log RPE manually — the wearable tracked it.",
              },
              {
                title: "Workouts on your watch",
                body: "Prescribed sessions can be sent directly to the Garmin watch. Show up with the session already loaded.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="bg-surface rounded-xl p-6"
                style={{ border: "1px solid var(--color-border)" }}
              >
                <h3 className="font-medium text-foreground mb-2 text-sm">
                  {b.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data handling */}
      <section className="pb-20 px-6">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-medium text-accent uppercase tracking-widest mb-4">
            Data handling
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 tracking-tight">
            How we handle your data.
          </h2>
          <div className="space-y-0">
            {[
              {
                icon: Eye,
                title: "Principle of least privilege",
                body: "We request only the scopes necessary for coaching functionality. No access to payment data, contacts, or any non-training-relevant user information.",
              },
              {
                icon: UserCheck,
                title: "User-controlled disconnect",
                body: "Athletes can disconnect the Garmin integration at any time from within the Velora dashboard. Disconnecting immediately revokes our token and stops all data ingestion.",
              },
              {
                icon: Lock,
                title: "No data selling",
                body: "Garmin data is used exclusively to power the coaching engine for the individual athlete. It is never sold, licensed, or shared with third parties.",
              },
              {
                icon: Clock,
                title: "Retention policy",
                body: "Activity and health data is retained for as long as the user account is active. Upon account deletion, all stored data is purged within 30 days.",
              },
            ].map((item, i, arr) => (
              <div
                key={item.title}
                className="flex gap-5 py-6"
                style={{
                  borderBottom:
                    i < arr.length - 1
                      ? "1px solid var(--color-border)"
                      : undefined,
                }}
              >
                <item.icon
                  size={16}
                  className="text-accent shrink-0 mt-0.5"
                />
                <div>
                  <div className="font-medium text-foreground mb-1 text-sm">
                    {item.title}
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="pb-20 px-6">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-medium text-accent uppercase tracking-widest mb-4">
            Security posture
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 tracking-tight">
            Technical security measures.
          </h2>
          <div
            className="bg-surface rounded-2xl p-8"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  label: "Encryption at rest",
                  value: "All user data encrypted at rest (AES-256) via Supabase / PostgreSQL",
                },
                {
                  label: "Encryption in transit",
                  value: "All API communication over TLS 1.2+ — HTTPS enforced site-wide",
                },
                {
                  label: "Authentication",
                  value:
                    "OAuth 2.0 Authorization Code Flow; tokens stored server-side, never exposed to browser",
                },
                {
                  label: "Access control",
                  value:
                    "Least-privileged service roles; Row-Level Security enabled on all tables; no direct DB access from client",
                },
                {
                  label: "Token handling",
                  value:
                    "Refresh tokens encrypted, scoped, and rotated; immediate revocation on disconnect",
                },
                {
                  label: "Audit logging",
                  value:
                    "API access and data sync events logged with timestamp, scope, and user identifier",
                },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-xs font-medium text-muted uppercase tracking-wide mb-1">
                    {s.label}
                  </div>
                  <div className="text-sm text-foreground">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="pb-20 px-6">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-medium text-accent uppercase tracking-widest mb-4">
            Compliance
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 tracking-tight">
            Compliance posture.
          </h2>
          <div className="space-y-0">
            {[
              {
                label: "Privacy policy",
                value: "Published at veloralabs.io/legal/privacy",
                link: "/legal/privacy",
              },
              {
                label: "Terms of service",
                value: "Published at veloralabs.io/legal/terms",
                link: "/legal/terms",
              },
              {
                label: "Contact email",
                value: "contact@veloralabs.io",
                link: null,
              },
              {
                label: "Support process",
                value:
                  "Users email contact@veloralabs.io for data requests, deletion, or integration issues. Response within 2 business days.",
                link: null,
              },
              {
                label: "Data minimization",
                value:
                  "Data minimization principles applied. Users can request deletion of all stored data. No cross-context behavioral advertising.",
                link: null,
              },
            ].map((c, i, arr) => (
              <div
                key={c.label}
                className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-6 py-4"
                style={{
                  borderBottom:
                    i < arr.length - 1
                      ? "1px solid var(--color-border)"
                      : undefined,
                }}
              >
                <span className="text-sm text-muted sm:w-40 shrink-0">
                  {c.label}
                </span>
                {c.link ? (
                  <Link
                    href={c.link}
                    className="text-sm text-accent hover:text-accent-soft transition-colors"
                  >
                    {c.value}
                  </Link>
                ) : (
                  <span className="text-sm text-foreground">{c.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration status */}
      <section className="pb-20 px-6">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-medium text-accent uppercase tracking-widest mb-4">
            Status
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 tracking-tight">
            Integration status.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className="bg-surface rounded-xl p-6"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="text-sm font-medium text-foreground">
                  In development
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                The Garmin integration is actively in development. Core coaching
                engine and Strava integration are live. Garmin data layer is the
                next phase.
              </p>
            </div>
            <div
              className="bg-surface rounded-xl p-6"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                <span className="text-sm font-medium text-foreground">
                  Planned beta
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Pending API access approval. Beta launch planned with a small
                cohort of Garmin-connected athletes during the development cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32 px-6">
        <div className="mx-auto max-w-4xl">
          <div
            className="bg-surface-raised rounded-2xl p-8 md:p-10"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <Shield size={18} className="text-accent mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Questions about the integration?
            </h2>
            <p className="text-sm text-muted mb-6 max-w-lg">
              If you&apos;re reviewing this as part of the Garmin Developer
              Program, we&apos;re happy to provide additional technical detail,
              architecture documentation, or schedule a call.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Get in touch <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
