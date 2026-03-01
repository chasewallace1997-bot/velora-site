import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Data & Privacy",
  description:
    "How Velora collects, uses, and stores your training data. Plain-English explanation of our data practices.",
};

export default function DataPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-medium text-accent uppercase tracking-widest mb-7">
            Data & Privacy
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.06] mb-8">
            What we collect,
            <br />
            and why.
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-xl">
            No jargon. A plain-English explanation of what data Velora collects,
            how it&apos;s used, and how you stay in control.
          </p>
        </div>
      </section>

      {/* Connected sources */}
      <section className="pb-20 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            What we collect
          </h2>

          <div className="space-y-4 mb-12">
            {/* Strava */}
            <div
              className="bg-surface rounded-xl p-6"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="font-medium text-foreground text-sm">
                  Strava
                </span>
                <span className="text-xs text-muted bg-surface-raised px-2 py-0.5 rounded-full">
                  Live
                </span>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Activity metadata: name, date, sport type, duration, distance",
                  "Effort data: average pace, average heart rate, max heart rate",
                  "Lap splits when available",
                  "Perceived effort / RPE if logged in Strava",
                  "GPS route stored as polyline for display — not individually analyzed",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <span className="mt-2 h-1 w-1 rounded-full bg-border shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p
                className="text-xs text-muted mt-5 pt-5"
                style={{ borderTop: "1px solid var(--color-border)" }}
              >
                We request only the{" "}
                <span className="text-foreground font-medium">
                  activity:read
                </span>{" "}
                scope from Strava. No access to segments, social features, or
                athlete profile beyond what coaching requires.
              </p>
            </div>

            {/* Garmin */}
            <div
              className="bg-surface rounded-xl p-6"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="font-medium text-foreground text-sm">
                  Garmin
                </span>
                <span className="text-xs text-muted bg-surface-raised px-2 py-0.5 rounded-full">
                  In development
                </span>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Activity data: same fields as Strava, plus detailed HR streams",
                  "Daily health metrics: resting HR, HRV, sleep summary, body battery",
                  "Training readiness score if available via API",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <span className="mt-2 h-1 w-1 rounded-full bg-border shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p
                className="text-xs text-muted mt-5 pt-5"
                style={{ borderTop: "1px solid var(--color-border)" }}
              >
                Pending Garmin Developer Program approval. Data scope will be
                finalized at integration time. Users will see explicit scope
                descriptions during OAuth.
              </p>
            </div>

            {/* Account */}
            <div
              className="bg-surface rounded-xl p-6"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                <span className="font-medium text-foreground text-sm">
                  Account data
                </span>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Email address (via authentication)",
                  "Display name / first name",
                  "Timezone preference",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <span className="mt-2 h-1 w-1 rounded-full bg-border shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* What we don't collect */}
          <h2 className="text-xl font-semibold text-foreground mb-4">
            What we don&apos;t collect
          </h2>
          <div
            className="bg-surface-raised rounded-xl p-6 mb-12"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <ul className="space-y-2.5">
              {[
                "Payment data — no payment system exists currently",
                "Social or contact data from connected accounts",
                "Location data beyond what's included in activities you explicitly sync",
                "Any data from accounts you haven't connected",
                "Third-party tracking pixels or browser fingerprinting data",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted"
                >
                  <span className="mt-0.5 text-muted shrink-0 leading-none text-base">
                    ×
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Storage and retention */}
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Storage and retention
          </h2>
          <div className="space-y-0 mb-12">
            {[
              {
                label: "Where",
                value:
                  "Supabase (PostgreSQL), hosted in the US on AWS infrastructure.",
              },
              {
                label: "Encryption",
                value:
                  "Data encrypted at rest (AES-256) and in transit (TLS 1.2+).",
              },
              {
                label: "Retention",
                value:
                  "Data is retained for the duration of your account. When you delete your account, all personal data is purged within 30 days.",
              },
              {
                label: "Backups",
                value:
                  "Supabase maintains automated backups subject to the same deletion timeline on account termination.",
              },
            ].map((item, i, arr) => (
              <div
                key={item.label}
                className="flex flex-col sm:flex-row gap-2 sm:gap-8 py-4"
                style={{
                  borderBottom:
                    i < arr.length - 1
                      ? "1px solid var(--color-border)"
                      : undefined,
                }}
              >
                <span className="text-sm text-muted sm:w-24 shrink-0">
                  {item.label}
                </span>
                <span className="text-sm text-foreground">{item.value}</span>
              </div>
            ))}
          </div>

          {/* User controls */}
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Your controls
          </h2>
          <div className="space-y-3 mb-12">
            {[
              {
                action: "Disconnect Strava",
                result:
                  "Revokes our access token immediately. We stop ingesting new activities. Existing synced data remains in your account unless you delete it.",
              },
              {
                action: "Disconnect Garmin",
                result:
                  "Same as Strava — immediate token revocation, no new data ingestion. Available when Garmin integration launches.",
              },
              {
                action: "Delete account",
                result:
                  "Purges all personal data within 30 days: synced activities, computed baselines, prescriptions, and account info.",
              },
              {
                action: "Data export",
                result:
                  "Email contact@veloralabs.io to request a copy of your data in JSON format.",
              },
            ].map((item) => (
              <div
                key={item.action}
                className="bg-surface rounded-xl p-5"
                style={{ border: "1px solid var(--color-border)" }}
              >
                <div className="font-medium text-foreground text-sm mb-1.5">
                  {item.action}
                </div>
                <p className="text-sm text-muted">{item.result}</p>
              </div>
            ))}
          </div>

          {/* Cookies */}
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Cookies
          </h2>
          <div
            className="bg-surface rounded-xl p-6 mb-16"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <p className="text-sm text-muted leading-relaxed">
              Velora uses a single session cookie to maintain authentication
              state. We use no advertising cookies, analytics pixels, or
              third-party tracking. There is no cookie banner because there is
              nothing to consent to beyond functional session management.
            </p>
          </div>

          {/* CTA */}
          <div
            className="bg-surface-raised rounded-2xl p-8"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Questions?
            </h2>
            <p className="text-sm text-muted mb-6">
              If you have questions about how your data is handled, email us or
              use the contact form.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Contact us <ChevronRight size={14} />
              </Link>
              <Link
                href="/legal/privacy"
                className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full text-muted hover:text-foreground transition-colors"
                style={{ border: "1px solid var(--color-border)" }}
              >
                Full privacy policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
