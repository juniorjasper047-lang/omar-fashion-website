"use server";

import { z } from "zod";
import { writeFile, readFile, mkdir } from "fs/promises";
import path from "path";

const schema = z.object({
  name: z.string().min(2),
  whatsapp: z.string().min(6),
  email: z.string().email(),
  style: z.string().min(2),
  notes: z.string().optional(),
  contactTime: z.string().optional(),
  budget: z.string().optional(),
});

export async function submitConsultation(input: unknown) {
  const parsed = schema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Please check the form and try again." };
  }
  const data = parsed.data;
  const store = { ...data, createdAt: new Date().toISOString() };

  // Fallback store so the form always works without Resend configured.
  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    const file = path.join(dir, "inquiries.json");
    let arr: unknown[] = [];
    try {
      arr = JSON.parse(await readFile(file, "utf8"));
    } catch {
      /* no file yet */
    }
    arr.push(store);
    await writeFile(file, JSON.stringify(arr, null, 2));
  } catch (e) {
    console.error("inquiry store failed", e);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      const to = process.env.CONSULTATION_TO || "hello@omarfashion.com";
      const from = process.env.CONSULTATION_FROM || "Omar Fashion <onboarding@resend.dev>";
      await resend.emails.send({
        from,
        to,
        subject: `New consultation request — ${data.name}`,
        replyTo: data.email,
        text: [
          `Name: ${data.name}`,
          `WhatsApp: ${data.whatsapp}`,
          `Email: ${data.email}`,
          `Style / occasion: ${data.style}`,
          `Preferred contact time: ${data.contactTime || "-"}`,
          `Budget: ${data.budget || "-"}`,
          `Notes / measurements: ${data.notes || "-"}`,
        ].join("\n"),
      });
    } catch (e) {
      console.error("Resend send failed", e);
      // still ok — we stored it locally
    }
  } else {
    console.log("[consultation] no RESEND_API_KEY — stored locally:", JSON.stringify(store));
  }

  return { ok: true };
}
