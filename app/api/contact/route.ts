import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

type LeadPayload = {
  fullName?: string;
  company?: string;
  email?: string;
  country?: string;
  monthlyUsage?: string;
  interestedIn?: string[];
  message?: string;
};

type StoredLead = LeadPayload & {
  createdAt: string;
};

const leadsFile = path.join(process.cwd(), "data", "leads.json");

async function persistLead(data: LeadPayload) {
  try {
    await fs.mkdir(path.dirname(leadsFile), { recursive: true });
    const existingRaw = await fs.readFile(leadsFile, "utf8").catch(() => "[]");
    const existing = JSON.parse(existingRaw) as StoredLead[];
    const payload: StoredLead = {
      ...data,
      createdAt: new Date().toISOString()
    };
    existing.push(payload);
    await fs.writeFile(leadsFile, JSON.stringify(existing, null, 2));
    return true;
  } catch (error) {
    console.warn("Write to leads.json failed; logging instead.", error);
    return false;
  }
}

export async function POST(request: Request) {
  const payload = (await request.json()) as LeadPayload;
  const cleanedPayload = {
    fullName: payload.fullName ?? "",
    company: payload.company ?? "",
    email: payload.email ?? "",
    country: payload.country ?? "",
    monthlyUsage: payload.monthlyUsage ?? "",
    interestedIn: payload.interestedIn ?? [],
    message: payload.message ?? ""
  };

  const stored = await persistLead(cleanedPayload);
  if (!stored) {
    console.log("Contact submission", cleanedPayload);
  }

  return NextResponse.json({ success: true });
}

export async function GET() {
  return NextResponse.json({ status: "ok" });
}
