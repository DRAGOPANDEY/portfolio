import { NextResponse } from "next/server";

export const runtime = "edge";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  // honeypot — bots fill this, real users won't see it
  website?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { name, email, subject, message, website } = body;

  // Honeypot — silently pretend it succeeded
  if (website && website.trim().length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { error: "Message is too long (max 5000 characters)." },
      { status: 400 }
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || "mohitpy6371@gmail.com";
  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.RESEND_FROM || "Portfolio <onboarding@resend.dev>";

  // If Resend isn't configured, log and return success (good for local dev)
  if (!apiKey) {
    console.log("[contact:received]", {
      to,
      from: { name, email },
      subject,
      messageLength: message.length,
    });
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  // Send via Resend API
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [to],
        reply_to: email,
        subject: `Portfolio · ${subject}`,
        text: `New message from your portfolio contact form.\n\nFrom: ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[contact:resend-failed]", res.status, detail);
      return NextResponse.json(
        { error: "Failed to deliver message. Please email me directly." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("[contact:exception]", err);
    return NextResponse.json(
      { error: "Network error. Please try again or email me directly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
