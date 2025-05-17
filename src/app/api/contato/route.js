import nodemailer from "nodemailer";

export async function POST(req) {
  const { email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_REMETENTE,
      pass: process.env.SENHA_REMETENTE,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_DESTINO,
      subject: "Mensagem do site",
      text: message,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    console.error("Erro ao enviar:", error);
    return new Response(JSON.stringify({ error: "Erro ao enviar e-mail" }), { status: 500 });
  }
}
