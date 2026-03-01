"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle, Loader2 } from "lucide-react";
import { submitContact, type ContactState } from "@/lib/contact-action";

const inputClass =
  "w-full bg-surface rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none transition-colors";

const inputStyle = {
  border: "1px solid var(--color-border)",
};

const inputFocusStyle = {
  border: "1px solid var(--color-accent)",
};

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={inputClass}
      style={inputStyle}
      onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
      onBlur={(e) => Object.assign(e.target.style, inputStyle)}
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`${inputClass} resize-none`}
      style={inputStyle}
      onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
      onBlur={(e) => Object.assign(e.target.style, inputStyle)}
    />
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending && <Loader2 size={15} className="animate-spin" />}
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

const initial: ContactState = { status: "idle" };

export default function ContactForm() {
  const [state, action] = useActionState(submitContact, initial);

  if (state.status === "success") {
    return (
      <div
        className="flex items-start gap-4 bg-surface rounded-2xl p-8 max-w-xl"
        style={{ border: "1px solid var(--color-border)" }}
      >
        <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
        <div>
          <div className="font-medium text-foreground mb-1.5">
            Message received.
          </div>
          <p className="text-sm text-muted leading-relaxed">
            We&apos;ll be in touch within 2 business days. For urgent matters,
            email{" "}
            <span className="text-foreground">contact@veloralabs.io</span>{" "}
            directly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form action={action} className="max-w-xl space-y-5">
      {/* Honeypot — hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-xs font-medium text-muted uppercase tracking-widest mb-2"
        >
          Name <span className="text-accent">*</span>
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          autoComplete="name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs font-medium text-muted uppercase tracking-widest mb-2"
        >
          Email <span className="text-accent">*</span>
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          autoComplete="email"
        />
      </div>

      <div>
        <label
          htmlFor="organization"
          className="block text-xs font-medium text-muted uppercase tracking-widest mb-2"
        >
          Organization{" "}
          <span className="normal-case font-normal text-muted">(optional)</span>
        </label>
        <Input
          id="organization"
          name="organization"
          type="text"
          placeholder="Company, team, or program"
          autoComplete="organization"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-medium text-muted uppercase tracking-widest mb-2"
        >
          Message <span className="text-accent">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you looking for? How can we help?"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="garmin"
          name="garmin"
          type="checkbox"
          className="mt-0.5 h-4 w-4 rounded cursor-pointer"
          style={{ accentColor: "var(--color-accent)" }}
        />
        <label
          htmlFor="garmin"
          className="text-sm text-muted leading-snug cursor-pointer select-none"
        >
          I&apos;m contacting about the Garmin integration / Developer Program
          application
        </label>
      </div>

      {state.status === "error" && (
        <p className="text-sm text-red-400">{state.message}</p>
      )}

      <SubmitButton />
    </form>
  );
}
