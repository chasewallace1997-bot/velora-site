import type { Metadata } from "next";
import ContactForm from "./form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Velora Labs about early access, Garmin Developer Program inquiries, or partnership questions.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-medium text-accent uppercase tracking-widest mb-7">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.06] mb-6">
            Get in touch.
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-xl mb-14">
            Early access requests, Garmin Developer Program inquiries,
            partnership questions — reach out here or email{" "}
            <span className="text-foreground">contact@veloralabs.io</span>{" "}
            directly.
          </p>

          <ContactForm />
        </div>
      </section>

      {/* Sidebar info below form on mobile */}
      <section className="pb-32 px-6">
        <div className="mx-auto max-w-4xl">
          <div
            className="max-w-xl mt-12 pt-10"
            style={{ borderTop: "1px solid var(--color-border)" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <div className="text-xs font-medium text-muted uppercase tracking-widest mb-3">
                  Email
                </div>
                <p className="text-sm text-foreground">
                  contact@veloralabs.io
                </p>
                <p className="text-xs text-muted mt-1">Response within 2 business days</p>
              </div>
              <div>
                <div className="text-xs font-medium text-muted uppercase tracking-widest mb-3">
                  Based in
                </div>
                <p className="text-sm text-foreground">United States</p>
                <p className="text-xs text-muted mt-1">Indiana, US Eastern time</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
