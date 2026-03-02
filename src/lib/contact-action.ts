"use server";

import { Resend } from "resend";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot — bots fill this field, humans don't
  const honeypot = formData.get("website") as string;
  if (honeypot) {
    return { status: "success" }; // silently succeed to not reveal the check
  }

  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const org = (formData.get("organization") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";
  const isGarmin = formData.get("garmin") === "on";

  if (!name || name.length > 200) {
    return { status: "error", message: "Please provide your name." };
  }
  if (!isValidEmail(email)) {
    return { status: "error", message: "Please provide a valid email address." };
  }
  if (!message || message.length > 5000) {
    return { status: "error", message: "Please include a message (max 5000 characters)." };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Never silently succeed — a missing key means no email is delivered.
    console.error("[contact-action] RESEND_API_KEY is not set. Email not sent.");
    return {
      status: "error",
      message: "Missing RESEND_API_KEY — email could not be sent. Set the environment variable and redeploy.",
    };
  }

  const resend = new Resend(apiKey);

  const subjectParts = [
    "[Velora] Contact form",
    isGarmin ? "· Garmin" : null,
    org ? `· ${org}` : null,
    `· ${name}`,
  ].filter(Boolean);
  const subject = subjectParts.join(" ");

  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    org ? `Organization: ${org}` : null,
    `Regarding Garmin integration: ${isGarmin ? "Yes" : "No"}`,
    "",
    "Message:",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  try {
    await resend.emails.send({
      from: "Velora Contact Form <contact@veloralabs.io>",
      to: "contact@veloralabs.io",
      replyTo: email,
      subject,
      text: body,
    });

    console.log(`[contact-action] Email delivered — from: ${email}, garmin: ${isGarmin}`);
    return { status: "success" };
  } catch (err) {
    // Log the error class/message but not the user's message body or personal details.
    const errMsg = err instanceof Error ? err.message : String(err);
    console.error(`[contact-action] Resend send failed: ${errMsg}`);
    return {
      status: "error",
      message:
        "Failed to send your message. Please email contact@veloralabs.io directly.",
    };
  }
}
