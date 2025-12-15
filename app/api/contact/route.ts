import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const leadsFile = path.join(process.cwd(), "data", "leads.json");

async function persistLead(data: LeadPayload) {
  try {
    await fs.mkdir(path.dirname(leadsFile), { recursive: true });
    const existingRaw = await fs.readFile(leadsFile, "utf8").catch(() => "[]");
    const existing = JSON.parse(existingRaw) as LeadPayload[];
    existing.push(data);
    await fs.writeFile(leadsFile, JSON.stringify(existing, null, 2));
    return true;
  } catch (error) {
    console.warn("Write to leads.json failed; logging instead.", error);
    return false;
  }
}
