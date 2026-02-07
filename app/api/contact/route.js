export async function POST(req) {
  try {
    const body = await req.json();

    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const subject = String(body?.subject || "").trim();
    const mobile = String(body?.mobile || "").trim();
    const message = String(body?.message || "").trim();

    // Honeypot
    const company = String(body?.company || "").trim();
    if (company) {
      return Response.json({ ok: true }, { status: 200 });
    }

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const makeWebhook = process.env.MAKE_CONTACT_WEBHOOK_URL;
    if (!makeWebhook) {
      return Response.json(
        { error: "Server not configured." },
        { status: 500 },
      );
    }

    const payload = {
      name,
      email,
      subject,
      mobile,
      message,
      source: "goddessrisinghair.co.uk",
      ts: new Date().toISOString(),
    };

    const makeRes = await fetch(makeWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!makeRes.ok) {
      return Response.json(
        { error: "Failed to send message." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch {
    return Response.json({ error: "Bad request." }, { status: 400 });
  }
}
