import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

const messages = {
  es: {
    missing: "Faltan campos requeridos.",
    invalidEmail: "El correo electrónico no tiene un formato válido.",
    tooLong: "El mensaje es demasiado largo.",
    accepted: "Gracias. Tu mensaje fue enviado correctamente.",
    unavailable:
      "No se pudo enviar el formulario. Escríbeme directamente a contacto@jonatan.com.",
  },
  en: {
    missing: "Required fields are missing.",
    invalidEmail: "The email address format is invalid.",
    tooLong: "The message is too long.",
    accepted: "Thanks. Your message was sent successfully.",
    unavailable:
      "The form could not be sent. Email me directly at contacto@jonatan.com.",
  },
};

const MAX_FIELD_LENGTH = 160;
const MAX_MESSAGE_LENGTH = 4000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getTextField(data: FormData, key: string) {
  const value = data.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function getSmtpConfig() {
  const host = import.meta.env.SMTP_HOST;
  const port = Number(import.meta.env.SMTP_PORT ?? 465);
  const user = import.meta.env.SMTP_USER;
  const pass = import.meta.env.SMTP_PASS;
  const to = import.meta.env.CONTACT_TO_EMAIL;
  const fromEmail = import.meta.env.SMTP_FROM_EMAIL || user;
  const fromName = import.meta.env.SMTP_FROM_NAME || "Jonathan Bello Portfolio";

  if (!host || !port || !user || !pass || !to || !fromEmail) {
    return null;
  }

  return {
    host,
    port,
    secure: import.meta.env.SMTP_SECURE !== "false",
    user,
    pass,
    to,
    from: `"${fromName}" <${fromEmail}>`,
  };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const lang = data.get("lang") === "en" ? "en" : "es";
  const name = getTextField(data, "name");
  const email = getTextField(data, "email");
  const message = getTextField(data, "message");
  const company = getTextField(data, "company");
  const text = messages[lang];

  if (company) {
    return new Response(JSON.stringify({ message: text.accepted }), {
      status: 202,
    });
  }

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ message: text.missing }), {
      status: 400,
    });
  }

  if (!EMAIL_REGEX.test(email)) {
    return new Response(JSON.stringify({ message: text.invalidEmail }), {
      status: 400,
    });
  }

  if (
    name.length > MAX_FIELD_LENGTH ||
    email.length > MAX_FIELD_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return new Response(JSON.stringify({ message: text.tooLong }), {
      status: 400,
    });
  }

  const smtpConfig = getSmtpConfig();

  if (!smtpConfig) {
    return new Response(JSON.stringify({ message: text.unavailable }), {
      status: 500,
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.secure,
      auth: {
        user: smtpConfig.user,
        pass: smtpConfig.pass,
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    await transporter.sendMail({
      from: smtpConfig.from,
      to: smtpConfig.to,
      replyTo: `${name} <${email}>`,
      subject: `Nuevo mensaje de portafolio: ${name}`,
      text: [
        "Nuevo mensaje desde el formulario del portafolio.",
        "",
        `Nombre: ${name}`,
        `Email: ${email}`,
        "",
        "Mensaje:",
        message,
      ].join("\n"),
      html: `
        <h2>Nuevo mensaje desde el formulario del portafolio</h2>
        <p><strong>Nombre:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return new Response(JSON.stringify({ message: text.accepted }), {
      status: 200,
    });
  } catch (error) {
    console.error("Contact email could not be sent", error);

    return new Response(JSON.stringify({ message: text.unavailable }), {
      status: 500,
    });
  }
};
