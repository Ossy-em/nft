import { NextResponse } from "next/server";

export async function GET() {
  try {
    if (!process.env.OPENSEA_API_KEY) {
      throw new Error("Missing OPENSEA_API_KEY");
    }

    const res = await fetch(
      "https://api.opensea.io/api/v2/events/collection/cryptopunks?event_type=transfer&limit=42",
      {
        headers: {
          "X-API-KEY": process.env.OPENSEA_API_KEY,
        },
      }
    );

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`OpenSea API error: ${res.status} ${text}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err: any) {
    console.error("🔥 Tx API error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
