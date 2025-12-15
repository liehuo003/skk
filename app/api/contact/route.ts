import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

/**
 * Local payload type for this route.
 * Keep it simple to avoid missing imports across files.
 */
type LeadPayload = {
  fullName: string;
  company: string;
  email: string;
  country: string;
  monthlyUsage: string;
  interestedIn: string[];
  message: string;
};

const leadsFile = path.join(process.cwd(), "data", "leads.json");

async function persistLead(data: LeadPayload): Promise<boolean> {
  try {
    // Ensure directory exists (works locally; on Vercel this may be ephemeral)
    await fs.mkdir(path.dirname(leadsFile), { recursive: true });

    const existingRaw = await fs.readFile(leadsFile, "utf8").catch(() => "[]");
    const existing = JSON.parse(existingRaw) as LeadPayload[];

    existing.push(data);

    await fs.writeFile(leadsFile, JSON.stringify(existing, null, 2), "utf8");
    return true;
  } catch (error) {
    // On Vercel, filesystem writes may fail or be non-persistent.
    console.warn("Write to leads.json failed; logging instead.", error);
    return false;
  }
}

function normalizeString(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

function normalizeStringArray(v: unknown): string[] {
  if (Array.isArray(v)) return v.filter((x) => typeof x === "string").map((s) => s.trim());
  return [];
}

export async function POST(request: Request) {
  const payload = (await request.json()) as Partial<LeadPayload> & Record<string, unknown>;

  const cleanedPayload: LeadPayload = {
    fullName: normalizeString(payload.fullName),
    company: normalizeString(payload.company),
    email: normalizeString(payload.email),
    country: normalizeString(payload.country),
    monthlyUsage: normalizeString(payload.monthlyUsage),
    interestedIn: normalizeStringArray(payload.interestedIn),
    message: normalizeString(payload.message),
  };

  // Minimal validation (optional): require email + message
  // If you want stricter checks, tell me.
  const stored = await persistLead(cleanedPayload);
  if (!stored) {
    console.log("Contact submission (fallback)", cleanedPayload);
  }

  return NextResponse.json({ success: true });
}

export async function GET() {
  return NextResponse.json({ status: "ok" });
}
