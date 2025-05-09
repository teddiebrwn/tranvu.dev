import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");
  if (!url) return new Response(null, { status: 400 });
  const res = await fetch(url, { headers: { "User-Agent": "bot" } });
  const html = await res.text();
  const title =
    /<meta property="og:title" content="([^"]*)"/i.exec(html)?.[1] || "";
  const description =
    /<meta property="og:description" content="([^"]*)"/i.exec(html)?.[1] || "";
  const image =
    /<meta property="og:image" content="([^"]*)"/i.exec(html)?.[1] || "";
  return Response.json({ title, description, image });
}
