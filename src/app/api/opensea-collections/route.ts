
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://api.opensea.io/api/v2/collections?limit=20", {
      headers: {
        "X-API-KEY": process.env.OPENSEA_API_KEY ?? "",
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch collections" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("🔥 Error fetching collections:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
