import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name")?.toString().trim();
  const email = data.get("email")?.toString().trim();
  const websiteUrl = data.get("website_url")?.toString().trim();

  if (!name || !email || !websiteUrl) {
    return new Response(JSON.stringify({ error: "Campos requeridos faltantes" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { error } = await resend.emails.send({
    from: "Auditoría <leads@sebasarmijos.dev>",
    to: "sebas31051999@gmail.com",
    replyTo: email,
    subject: `Solicitud de auditoría gratuita de ${name}`,
    html: `
      <h2>Nueva solicitud de auditoría web gratuita</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Sitio web:</strong> <a href="${websiteUrl}">${websiteUrl}</a></p>
    `,
  });

  if (error) {
    return new Response(JSON.stringify({ error: "Error al enviar el correo" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
