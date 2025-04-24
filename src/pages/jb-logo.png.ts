export async function GET({ params, request }) {
  const response = await fetch("http://localhost:4321/favicon.svg");
  return new Response(await response.arrayBuffer());
}
