import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("🔑 OPENSEA_API_KEY present?", !!process.env.OPENSEA_API_KEY);
    console.log(
      "🔑 OPENSEA_API_KEY value:",
      process.env.OPENSEA_API_KEY ? process.env.OPENSEA_API_KEY.slice(0, 4) + "..." : "undefined"
    );

    if (!process.env.OPENSEA_API_KEY) {
      throw new Error("Missing OPENSEA_API_KEY");
    }

    const res = await fetch(
      "https://api.opensea.io/api/v2/collection/cryptopunks/nfts",
      {
        headers: {
          "X-API-KEY": process.env.OPENSEA_API_KEY,
        },
      }
    );

    if (!res.ok) {
      console.error("❌ OpenSea fetch failed:", res.status, res.statusText);
      return NextResponse.json(
        { error: "Failed to fetch from OpenSea" },
        { status: res.status }
      );
    }

    const data = await res.json();
    console.log("✅ OpenSea data keys:", Object.keys(data));

    return NextResponse.json(data);
  } catch (err) {
    console.error("🔥 API error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
