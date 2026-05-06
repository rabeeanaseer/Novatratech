import * as tls from "tls";

const b64 = (s: string) => Buffer.from(s).toString("base64");

function smtpConnect(host: string, port: number) {
  return new Promise<{
    send: (cmd: string) => Promise<string>;
    data: (msg: string) => Promise<string>;
    close: () => void;
  }>((resolve, reject) => {
    const socket = tls.connect({ host, port, servername: host });
    let buf = "";
    let waiter: { res: (s: string) => void; rej: (e: Error) => void } | null = null;

    const tryFlush = () => {
      if (!waiter) return;
      const lines = buf.split("\r\n");
      for (let i = 0; i < lines.length - 1; i++) {
        if (/^\d{3} /.test(lines[i])) {
          buf = lines.slice(i + 1).join("\r\n");
          const code = parseInt(lines[i]);
          const w = waiter;
          waiter = null;
          if (code >= 400) w.rej(new Error(lines[i]));
          else w.res(lines[i]);
          return;
        }
      }
    };

    socket.on("data", (chunk) => { buf += chunk.toString(); tryFlush(); });
    socket.on("error", (e) => { if (waiter) waiter.rej(e as Error); else reject(e); });

    const waitReply = () =>
      new Promise<string>((res, rej) => { waiter = { res, rej }; tryFlush(); });

    const send = (cmd: string) => { socket.write(cmd + "\r\n"); return waitReply(); };
    const data = (msg: string) => { socket.write(msg + "\r\n.\r\n"); return waitReply(); };

    socket.once("secureConnect", async () => {
      try { await waitReply(); resolve({ send, data, close: () => socket.destroy() }); }
      catch (e) { socket.destroy(); reject(e); }
    });
  });
}

async function sendGmail(opts: {
  user: string; pass: string; to: string; subject: string; text: string; replyTo: string;
}) {
  const smtp = await smtpConnect("smtp.gmail.com", 465);
  try {
    await smtp.send("EHLO novatratech.co");
    await smtp.send("AUTH LOGIN");
    await smtp.send(b64(opts.user));
    await smtp.send(b64(opts.pass));
    await smtp.send(`MAIL FROM:<${opts.user}>`);
    await smtp.send(`RCPT TO:<${opts.to}>`);
    await smtp.send("DATA");
    await smtp.data(
      `From: "NovatraTech Website" <${opts.user}>\r\n` +
      `To: ${opts.to}\r\n` +
      `Reply-To: ${opts.replyTo}\r\n` +
      `Subject: ${opts.subject}\r\n` +
      `Content-Type: text/plain; charset=UTF-8\r\n` +
      `\r\n` +
      opts.text
    );
    await smtp.send("QUIT");
  } finally {
    smtp.close();
  }
}

export default async function handler(req: any, res: any) {
  res.setHeader("Content-Type", "application/json");
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { name, email, projectType, budget, message } = req.body ?? {};
    if (!name || !email || !projectType) return res.status(400).json({ error: "Missing required fields" });

    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (user && pass) {
      const text = [
        `Name: ${name}`, `Email: ${email}`, `Project Type: ${projectType}`,
        `Budget: ${budget || "Not specified"}`, ``, `Message:`, message || "(none)",
      ].join("\n");

      await sendGmail({
        user, pass,
        to: "novatratechsmcpvtltd@gmail.com",
        subject: `New Inquiry: ${projectType} — ${name}`,
        text, replyTo: email,
      });
    }

    return res.status(200).json({ ok: true });
  } catch (_err) {
    return res.status(500).json({ error: "Failed to send. Please try WhatsApp instead." });
  }
}
