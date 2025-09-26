"use client"
import { useQuery } from "@tanstack/react-query"


interface NFT {
  identifier?: string
  image_url?: string
  name?: string
  updated_at?: string
}

interface Asset {
  image_url?: string
  name?: string
  updated_at?: string
}

interface Payment {
  quantity: string
  decimals: number
}

interface Event {
  event_timestamp: string | number
  transaction?: string
  nft?: NFT
  asset?: Asset
  payment: Payment
}

export default function RecentTransaction() {
  const { data: recent, isError, isLoading } = useQuery({
  queryKey: ["recent"],
  queryFn: async () => {
    const res = await fetch("/api/opensea-recent");
    if (!res.ok) throw new Error("Failed to fetch recent transactions");
    return res.json();
  },
});


  const { data: ethPriceData } = useQuery({
    queryKey: ["ethPrice"],
    queryFn: async () => {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
      )
      return res.json()
    },
  })

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-black text-white min-h-screen p-4 sm:p-6 lg:p-10 gap-4 sm:gap-6 lg:gap-10 overflow-x-hidden">
        {Array.from({ length: 9 }).map((_, index) => (
          <SkeletonSaleCard key={index} />
        ))}
      </div>
    )
  }

  if (isError)
    return <p className="text-white text-center p-4">Error fetching sales</p>

  const ethPrice = ethPriceData?.ethereum?.usd || 0

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-black text-white min-h-screen p-4 sm:p-6 lg:p-10 gap-4 sm:gap-6 lg:gap-10 overflow-x-hidden">
      {recent?.asset_events
        ?.filter((event: Event) => event.nft?.image_url || event.asset?.image_url)
        ?.sort((a: Event, b: Event) => {
          const timeA = new Date(a.event_timestamp).getTime()
          const timeB = new Date(b.event_timestamp).getTime()
          return timeB - timeA
        })
        .map((event: Event, index: number) => {
          const image = event.nft?.image_url || event.asset?.image_url
          const name = event.nft?.name || event.asset?.name
          const updated_at = event.nft?.updated_at || event.asset?.updated_at
          const ethAmount =
            Number(event.payment.quantity) / 10 ** event.payment.decimals
          const usdValue = ethAmount * ethPrice

          return (
            <div
              key={`${event.transaction}-${index}`}
              className="bg-[#111] rounded-2xl hover:scale-105 hover:shadow-lg transition-all duration-300 w-full max-w-[400px] mx-auto"
            >
              {image && (
                <img
                  src={image}
                  alt={name || "NFT"}
                  className="w-full h-48 sm:h-60 lg:h-80 object-cover rounded-t-2xl"
                />
              )}

              <div className="p-3 sm:p-4">
                <div className="mb-2 sm:mb-3">
                  <h3 className="font-medium text-lg sm:text-xl lg:text-2xl truncate">
                    #{event.nft?.identifier || "N/A"}
                  </h3>
                  <span className="font-medium text-sm sm:text-base lg:text-lg block leading-relaxed">
                    New bid of {ethAmount.toFixed(2)}Ξ ($
                    {usdValue.toLocaleString()})
                  </span>
                </div>

                <h5 className="font-medium text-xs sm:text-sm lg:text-base text-gray-400">
                  {updated_at
                    ? new Date(updated_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                    : "Unknown date"}
                </h5>
              </div>
            </div>
          )
        })}
    </div>
  )
}

const SkeletonSaleCard = () => {
  return (
    <div className="bg-[#111] rounded-2xl animate-pulse w-full max-w-[400px] mx-auto">
      <div className="w-full h-48 sm:h-60 lg:h-80 bg-gray-800 rounded-t-2xl"></div>

      <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
        <div className="h-5 sm:h-6 lg:h-7 w-1/3 bg-gray-700 rounded"></div>
        <div className="h-4 sm:h-5 lg:h-6 w-3/4 bg-gray-700 rounded"></div>
        <div className="h-3 sm:h-4 lg:h-5 w-1/2 bg-gray-700 rounded"></div>
      </div>
    </div>
  )
}
