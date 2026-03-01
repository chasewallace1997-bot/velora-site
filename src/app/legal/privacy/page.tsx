import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Velora Labs privacy policy.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-base font-semibold text-foreground mb-3">{title}</h2>
      <div className="space-y-2 text-sm text-muted leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-32 px-6">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-medium text-muted uppercase tracking-widest mb-5">
          Legal
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted mb-14">
          Effective date: March 1, 2026. Last updated: March 1, 2026.
        </p>

        <div className="space-y-10">
          <Section title="1. Who we are">
            <p>
              Velora Labs ("Velora", "we", "us") operates veloralabs.io and the
              Velora training platform. We are a US-based company. Contact:{" "}
              contact@veloralabs.io.
            </p>
          </Section>

          <Section title="2. What data we collect">
            <p>We collect:</p>
            <ul className="list-disc list-inside space-y-1.5 mt-2">
              <li>
                Account data: email address, display name, timezone preference
              </li>
              <li>
                Training data synced from connected services (Strava; Garmin
                planned): activity records, heart rate, pace, duration, health
                metrics
              </li>
              <li>
                Usage data: pages visited, features used — via server-side
                logging only, no third-party analytics
              </li>
              <li>Contact form submissions</li>
            </ul>
            <p className="mt-2">
              We do not collect payment data, social connections, or any data
              from accounts you have not explicitly connected.
            </p>
          </Section>

          <Section title="3. How we use your data">
            <ul className="list-disc list-inside space-y-1.5">
              <li>
                To generate personalized training prescriptions and coaching
                feedback
              </li>
              <li>To maintain and improve the service</li>
              <li>To respond to support and data requests</li>
              <li>
                To send transactional emails (account-related only; no marketing
                without explicit consent)
              </li>
            </ul>
          </Section>

          <Section title="4. Data sharing">
            <p>We do not sell your data. We share data only with:</p>
            <ul className="list-disc list-inside space-y-1.5 mt-2">
              <li>
                OpenAI — for AI-generated coaching content; governed by
                OpenAI&apos;s data processing terms
              </li>
              <li>Supabase — database hosting; data processed in the US</li>
              <li>Resend — transactional email delivery</li>
            </ul>
            <p className="mt-2">
              Each sub-processor is bound by appropriate data processing
              agreements. No sub-processor is authorized to use your data for
              their own purposes.
            </p>
          </Section>

          <Section title="5. Data retention">
            <p>
              We retain your data for as long as your account is active. Upon
              account deletion, personal data is purged within 30 days, except
              where retention is required by applicable law.
            </p>
          </Section>

          <Section title="6. Your rights">
            <p>
              You may request: access to your stored data, correction of
              inaccurate data, deletion of your account and all associated data,
              or a portable JSON export. Email contact@veloralabs.io. We
              respond within 2 business days.
            </p>
          </Section>

          <Section title="7. Security">
            <p>
              We use AES-256 encryption at rest and TLS 1.2+ in transit. Access
              is controlled via least-privileged service roles with Row-Level
              Security. We maintain access audit logs.
            </p>
          </Section>

          <Section title="8. Cookies">
            <p>
              We use a single session cookie for authentication. We do not use
              advertising, analytics, or cross-site tracking cookies.
            </p>
          </Section>

          <Section title="9. Third-party integrations">
            <p>
              When you connect Strava or Garmin, you authorize those services to
              share data with us within the scope shown during the OAuth flow.
              You may revoke access at any time from within Velora or directly
              from the third-party service&apos;s settings.
            </p>
          </Section>

          <Section title="10. Children">
            <p>
              Velora is not intended for users under 18. We do not knowingly
              collect data from minors.
            </p>
          </Section>

          <Section title="11. Changes to this policy">
            <p>
              We will notify users of material changes by email before they take
              effect. Continued use after notice constitutes acceptance of the
              updated policy.
            </p>
          </Section>

          <Section title="12. Contact">
            <p>
              Privacy questions or data requests: contact@veloralabs.io
            </p>
          </Section>
        </div>
      </div>
    </section>
  );
}
