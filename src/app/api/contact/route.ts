import { NextResponse } from "next/server";

/**
 * Contact / "Book a demo" endpoint.
 *
 * Creates (or updates) a contact in GoHighLevel via the LeadConnector v2 API
 * using the LocationID + API token supplied through environment variables,
 * then attaches the enquiry details as a note on that contact.
 *
 * Required env vars (see .env.example):
 *   GHL_LOCATION_ID   — the sub-account (location) id
 *   GHL_API_TOKEN     — a token with contacts.write scope
 * Optional:
 *   GHL_LEAD_TAGS     — comma-separated tags to add to every lead
 *   GHL_LEAD_SOURCE   — the "source" label stored on the contact
 */

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";

type Payload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  interest?: string;
  message?: string;
};

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const firstName = clean(body.firstName);
  const lastName = clean(body.lastName);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const businessName = clean(body.businessName);
  const interest = clean(body.interest);
  const message = clean(body.message);

  // Basic server-side validation.
  if (!firstName || !email || !phone) {
    return NextResponse.json(
      { ok: false, error: "Please provide your name, email and phone." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const locationId = process.env.GHL_LOCATION_ID;
  const token = process.env.GHL_API_TOKEN;

  if (!locationId || !token) {
    // Not configured yet — don't lose the lead, log it so it's visible in
    // Vercel logs, and tell the visitor it worked (they've done their part).
    console.warn(
      "[contact] GHL_LOCATION_ID / GHL_API_TOKEN not set — lead not sent to GHL:",
      { firstName, lastName, email, phone, businessName, interest }
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  const tags = (process.env.GHL_LEAD_TAGS || "Website Lead")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  if (interest) tags.push(interest);

  const source = process.env.GHL_LEAD_SOURCE || "Website";

  const headers = {
    Authorization: `Bearer ${token}`,
    Version: GHL_VERSION,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  try {
    // 1) Upsert the contact (handles duplicates by email/phone).
    const upsertRes = await fetch(`${GHL_BASE}/contacts/upsert`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        locationId,
        firstName,
        lastName,
        name: [firstName, lastName].filter(Boolean).join(" "),
        email,
        phone,
        companyName: businessName || undefined,
        source,
        tags,
      }),
    });

    const upsertJson = (await upsertRes.json().catch(() => ({}))) as {
      contact?: { id?: string };
      message?: string;
    };

    if (!upsertRes.ok) {
      console.error("[contact] GHL upsert failed:", upsertRes.status, upsertJson);
      return NextResponse.json(
        { ok: false, error: "We couldn't submit your details. Please try again." },
        { status: 502 }
      );
    }

    const contactId = upsertJson.contact?.id;

    // 2) Attach the enquiry as a note (captures interest + free-text message).
    if (contactId) {
      const noteLines = [
        `New demo request from the ${source}.`,
        interest ? `Interested in: ${interest}` : null,
        businessName ? `Business: ${businessName}` : null,
        message ? `Message: ${message}` : null,
      ].filter(Boolean);

      const noteRes = await fetch(`${GHL_BASE}/contacts/${contactId}/notes`, {
        method: "POST",
        headers,
        body: JSON.stringify({ body: noteLines.join("\n") }),
      });
      if (!noteRes.ok) {
        // Non-fatal — the contact already exists; just log it.
        console.warn("[contact] GHL note create failed:", noteRes.status);
      }
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't submit your details. Please try again." },
      { status: 500 }
    );
  }
}
