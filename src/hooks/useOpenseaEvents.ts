
import { useQuery } from "@tanstack/react-query";

const OPENSEA_API_KEY = process.env.NEXT_PUBLIC_OPENSEA_API_KEY;

async function fetchOpenseaEvents({
  chain = "ethereum",
  collectionSlug,
  limit = 10,
}: {
  chain?: string;
  collectionSlug: string;
  limit?: number;
}) {
  const res = await fetch(
    `https://api.opensea.io/api/v2/events?chain=${chain}&collection_slug=${collectionSlug}&limit=${limit}`,
    {
      headers: {
        "X-API-KEY": OPENSEA_API_KEY ?? "",
        Accept: "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.statusText}`);
  }

  return res.json();
}

// React Query Hook
export function useOpenseaEvents(
  collectionSlug: string,
  chain: string = "ethereum",
  limit: number = 10
) {
  return useQuery({
    queryKey: ["opensea-events", collectionSlug, chain, limit],
    queryFn: () => fetchOpenseaEvents({ chain, collectionSlug, limit }),
    enabled: !!collectionSlug,
    refetchInterval: 30000, 
  });
}
