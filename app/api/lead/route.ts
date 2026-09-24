import { NextResponse } from "next/server";
import { qualify } from "@/lib/qualify";

const STR_FIELDS = [
  "fundingAmount","fundingUse","timeInBusiness","monthlyRevenue","creditRange",
  "industry","state","urgency","firstName","lastName","businessName","email","phone",
] as const;

const ATTR_FIELDS = [
  "landing_page","referrer","utm_source","utm_medium","utm_campaign","utm_content",
] as const;

const MAX_LENGTHS: Record<string, number> = {
  email: 254, phone: 20, firstName: 100, lastName: 100, businessName: 200,
  industry: 100, state: 60, landing_page: 300, referrer: 500,
  utm_source: 100, utm_medium: 100, utm_campaign: 200, utm_content: 200,
};

function sanitize(s: unknown, max = 500): string {
  if (typeof s !== "string") return "";
  return s.trim().slice(0, max);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body || typeof body !== "object") {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    const raw = body as Record<string, unknown>;

    const missing = STR_FIELDS.some(
      (f) => typeof raw[f] !== "string" || !(raw[f] as string).trim()
    );
    if (missing) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }

    const fields = Object.fromEntries(
      STR_FIELDS.map((f) => [f, sanitize(raw[f], MAX_LENGTHS[f] ?? 200)])
    );

    const attr = Object.fromEntries(
      ATTR_FIELDS.map((f) => [f, sanitize(raw[f], MAX_LENGTHS[f] ?? 300)])
    );

    const qualificationStatus = qualify(fields);

    const webhook = process.env.LEAD_WEBHOOK_URL;
    if (!webhook) {
      console.error("LEAD_WEBHOOK_URL is not configured");
      return NextResponse.json(
        { ok: false, error: "Lead intake is not currently available." },
        { status: 503 }
      );
    }

    const payload = {
      lead_id: crypto.randomUUID(),
      created_at: new Date().toISOString(),
      qualification_status: qualificationStatus,
      ...fields,
      ...attr,
    };

    const forwarded = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!forwarded.ok) {
      return NextResponse.json({ ok: false, error: "Lead delivery failed." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
