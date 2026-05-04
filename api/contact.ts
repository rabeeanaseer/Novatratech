import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { name, email, projectType, budget, message } = req.body ?? {};

  if (!name || !email || !projectType) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    res.status(200).json({ ok: true, note: "Email not sent — SMTP not configured" });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: smtpUser, pass: smtpPass },
  });

  const html = `
    <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#070B14;color:#EAF0FF;padding:32px;border-radius:12px;border:1px solid rgba(255,255,255,0.08)">
      <div style="margin-bottom:24px">
        <span style="font-size:18px;font-weight:800;color:#4F7CFF">NovatraTech</span>
        <span style="font-size:18px;font-weight:800;color:#fff"> — New Inquiry</span>
      </div>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#9AA4B2;width:130px">Name</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-weight:600">${name}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#9AA4B2">Email</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06)">${email}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#9AA4B2">Project Type</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06)">${projectType}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#9AA4B2">Budget</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06)">${budget || "Not specified"}</td></tr>
      </table>
      <div style="margin-top:24px">
        <p style="color:#9AA4B2;margin-bottom:8px;font-size:13px;text-transform:uppercase;letter-spacing:0.1em">Message</p>
        <div style="background:rgba(255,255,255,0.04);padding:16px;border-radius:8px;border:1px solid rgba(255,255,255,0.06);line-height:1.6">${(message || "No message provided").replace(/\n/g, "<br/>")}</div>
      </div>
      <div style="margin-top:32px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.06);font-size:12px;color:#9AA4B2">
        Sent from novatratech.co contact form
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"NovatraTech Website" <${smtpUser}>`,
      to: "novatratechsmcpvtltd@gmail.com",
      replyTo: email,
      subject: `New Inquiry: ${projectType} — ${name}`,
      html,
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    res.status(500).json({ error: "Failed to send message. Please try WhatsApp instead." });
  }
}
