export async function POST(req: Request) {
  try {
    const body = await req.json();

    const text = `
🚗 Nuevo lead Nordimp

👤 Nombre: ${body.name}
📞 Contacto: ${body.contact}
🔗 Coche: ${body.carUrl}
💰 Presupuesto: ${body.budget}
💬 Mensaje: ${body.message}
`;

    await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text,
        }),
      }
    );

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ ok: false }, { status: 500 });
  }
}