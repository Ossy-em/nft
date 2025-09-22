// src/app/api/opensea-sales/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  console.log("🚀 API route hit: /api/opensea-sales"); // log to server console

  try {
    const res = await fetch("https://api.opensea.io/api/v2/events/collection/cryptopunks?event_type=sale&limit=42", {
      headers: {
        "X-API-KEY": process.env.OPENSEA_API_KEY ?? "",
      },
    });

    if (!res.ok) {
      console.error("❌ OpenSea fetch failed:", res.status, res.statusText);
      return NextResponse.json({ error: "Failed to fetch from OpenSea" }, { status: res.status });
    }

    const data = await res.json();
    console.log("✅ OpenSea data length:", data?.asset_events?.length ?? 0);

    return NextResponse.json(data);
  } catch (err) {
    console.error("🔥 API error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
