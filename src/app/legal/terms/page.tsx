import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Velora Labs terms of service.",
};

const sections = [
  {
    title: "1. Acceptance",
    body: "By accessing or using Velora, you agree to these Terms of Service. If you do not agree, do not use the service.",
  },
  {
    title: "2. Eligibility",
    body: "You must be 18 or older to use Velora. The service is intended for personal, non-commercial use by individual athletes.",
  },
  {
    title: "3. Your account",
    body: "You are responsible for maintaining the security of your account credentials. Notify us immediately of unauthorized access at contact@veloralabs.io.",
  },
  {
    title: "4. Connected services",
    body: "By connecting Strava, Garmin, or other third-party services, you authorize Velora to access data from those services on your behalf within the scope disclosed during the connection flow. You may revoke access at any time.",
  },
  {
    title: "5. Acceptable use",
    body: "You may not use Velora to: violate applicable law, attempt to reverse-engineer the service, share your account with others, scrape or harvest data, or interfere with service infrastructure.",
  },
  {
    title: "6. AI-generated content",
    body: "Velora uses AI to generate training prescriptions and coaching feedback. This content is informational only and does not constitute medical advice, professional coaching advice, or any guarantee of athletic outcomes. Consult a licensed professional for medical concerns.",
  },
  {
    title: "7. Service availability",
    body: "We aim for high availability but make no uptime guarantees. The service is provided 'as is' during early access. We may modify or discontinue features with reasonable notice.",
  },
  {
    title: "8. Intellectual property",
    body: "Velora retains all rights to the platform, its code, AI models, and generated content structure. Your training data remains yours. You grant Velora a limited license to process your data to provide the service.",
  },
  {
    title: "9. Limitation of liability",
    body: "To the maximum extent permitted by applicable law, Velora is not liable for indirect, incidental, special, or consequential damages arising from use of the service, including any training outcomes or injuries.",
  },
  {
    title: "10. Indemnification",
    body: "You agree to indemnify Velora against any claims arising from your violation of these Terms or misuse of the service.",
  },
  {
    title: "11. Changes to these Terms",
    body: "We may update these Terms. Material changes will be communicated by email at least 7 days before they take effect. Continued use constitutes acceptance.",
  },
  {
    title: "12. Governing law",
    body: "These Terms are governed by the laws of the State of Indiana, United States, without regard to conflict of law principles.",
  },
  {
    title: "13. Contact",
    body: "Questions about these Terms: contact@veloralabs.io",
  },
];

export default function TermsPage() {
  return (
    <section className="pt-32 pb-32 px-6">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-medium text-muted uppercase tracking-widest mb-5">
          Legal
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-sm text-muted mb-14">
          Effective date: March 1, 2026.
        </p>

        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-base font-semibold text-foreground mb-2">
                {s.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
