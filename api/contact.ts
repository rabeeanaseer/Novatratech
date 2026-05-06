import * as https from "https";

function httpsPost(url: string, body: unknown, headers: Record<string, string>): Promise<{ status: number; text: string }> {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(body);
    const u = new URL(url);
    const req = https.request({
      hostname: u.hostname,
      path: u.pathname + u.search,
      method: "POST",
      headers: { ...headers, "Content-Type": "application/json", "Content-Length": Buffer.byteLength(payload) },
    }, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve({ status: res.statusCode ?? 500, text: data }));
    });
    req.on("error", reject);
    req.write(payload);
    req.end();
  });
}

export default async function handler(req: any, res: any) {
  res.setHeader("Content-Type", "application/json");
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { name, email, projectType, budget, message } = req.body ?? {};
    if (!name || !email || !projectType) return res.status(400).json({ error: "Missing required fields" });

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const result = await httpsPost("https://api.resend.com/emails", {
        from: "NovatraTech Website <onboarding@resend.dev>",
        to: ["novatratechsmcpvtltd@gmail.com"],
        reply_to: email,
        subject: `New Inquiry: ${projectType} — ${name}`,
        text: [`Name: ${name}`, `Email: ${email}`, `Project Type: ${projectType}`, `Budget: ${budget || "Not specified"}`, ``, `Message:`, message || "(none)"].join("\n"),
      }, { Authorization: `Bearer ${apiKey}` });
      if (result.status >= 400) throw new Error(result.text);
    }

    return res.status(200).json({ ok: true });
  } catch (_err) {
    return res.status(500).json({ error: "Failed to send. Please try WhatsApp instead." });
  }
}
