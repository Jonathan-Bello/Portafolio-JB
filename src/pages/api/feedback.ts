import type { APIRoute } from "astro";

const messages = {
  es: {
    missing: "Faltan campos requeridos.",
    accepted:
      "Gracias. La integración de envío está en preparación; por ahora escríbeme directamente a contacto@jonathanbello.com.",
  },
  en: {
    missing: "Required fields are missing.",
    accepted:
      "Thanks. Message delivery is being prepared; for now, email me directly at contacto@jonathanbello.com.",
  },
};

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const lang = data.get("lang") === "en" ? "en" : "es";
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: messages[lang].missing,
      }),
      { status: 400 },
    );
  }

  return new Response(
    JSON.stringify({
      message: messages[lang].accepted,
    }),
    { status: 202 },
  );
};
