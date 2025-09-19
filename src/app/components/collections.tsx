"use client"
import React, { useRef } from "react"
import { useQuery } from "@tanstack/react-query"
import { HiArrowSmallRight, HiArrowSmallLeft } from "react-icons/hi2"
import SkeletonSaleCard from "@/components/SkeletonSaleCard"

export default function Collections() {
  const salesScrollRef = useRef<HTMLDivElement>(null)
  const txScrollRef = useRef<HTMLDivElement>(null)

  // Fetch largest sales
  const { data: salesData, isLoading: isSalesLoading } = useQuery({
    queryKey: ["largestSales"],
    queryFn: async () => {
      const res = await fetch(
        "https://api.opensea.io/api/v2/events/collection/cryptopunks?event_type=sale&limit=42",
        { headers: { "X-API-KEY": process.env.NEXT_PUBLIC_OPENSEA_API_KEY || "" } }
      )
      return res.json()
    },
  })

  // Fetch recent transactions
  const { data: txData, isLoading: isTxLoading } = useQuery({
    queryKey: ["recentTransactions"],
    queryFn: async () => {
      const res = await fetch(
        "https://api.opensea.io/api/v2/events/collection/cryptopunks?event_type=transfer&limit=42",
        { headers: { "X-API-KEY": process.env.NEXT_PUBLIC_OPENSEA_API_KEY || "" } }
      )
      return res.json()
    },
  })

  const scrollAmount = 384

  // Scroll helpers
  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" })
  }
  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollBy({ left: scrollAmount, behavior: "smooth" })
  }

  return (
    <section className="bg-white pt-[163px] py-16 w-screen mb-0 overflow-hidden">
      <div className="px-10">

        {/* Largest Sales */}
        <div className="flex flex-row items-center justify-between h-[67px]">
          <h2 className="text-[52px] font-medium">Largest Sales</h2>
        </div>

        <div className="mt-[53px] flex flex-col">
          <div
            ref={salesScrollRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth"
            style={{ width: "100%" }}
          >
            {isSalesLoading
              ? Array.from({ length: 3 }).map((_, i) => <SkeletonSaleCard key={i} />)
              : salesData?.asset_events?.map((event, i) => (
                  <div
                    key={`${event.transaction}-${i}`}
                    className="bg-white rounded-2xl flex-shrink-0 w-[360px]"
                  >
                    <img
                      src={event.nft?.image_url || event.asset?.image_url}
                      alt="NFT"
                      className="w-full h-[360px] object-cover rounded-2xl"
                    />
                    <div className="p-4 text-black">
                      <h3 className="font-medium text-lg">
                        {event.nft?.name || event.asset?.name}
                      </h3>
                      <span className="font-medium">
                        {(Number(event.payment.quantity) /
                          10 ** event.payment.decimals).toFixed(2)} Ξ
                      </span>
                    </div>
                  </div>
                ))}
          </div>
        </div>

        <div className="flex flex-row items-center gap-2.5 mt-4">
          <div className="w-[55px] h-[55px] rounded-full border border-[#aab4b4] p-3">
            <HiArrowSmallLeft
              onClick={() => scrollLeft(salesScrollRef)}
              className="w-[30px] h-[30px] cursor-pointer"
            />
          </div>
          <div className="w-[55px] h-[55px] rounded-full border border-[#aab4b4] p-3">
            <HiArrowSmallRight
              onClick={() => scrollRight(salesScrollRef)}
              className="w-[30px] h-[30px] cursor-pointer"
            />
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="h-[117px] mt-12">
          <div className="flex flex-row items-center justify-between h-[117px]">
            <h2 className="text-[52px] font-medium">Recent Transactions</h2>
          </div>
          <h4 className="text-[19px]">Updated 20 seconds ago</h4>
        </div>

        <div className="mt-[53px] flex flex-row gap-6 overflow-x-auto scroll-smooth">
          <div
            ref={txScrollRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth"
            style={{ width: "100%" }}
          >
            {isTxLoading
              ? Array.from({ length: 3 }).map((_, i) => <SkeletonSaleCard key={i} />)
              : txData?.asset_events?.map((event, i) => (
                  <div
                    key={`${event.transaction}-${i}`}
                    className="bg-white rounded-2xl flex-shrink-0 w-[360px]"
                  >
                    <img
                      src={event.nft?.image_url || event.asset?.image_url}
                      alt="NFT"
                      className="w-full h-[360px] object-cover rounded-2xl"
                    />
                    <div className="p-4 text-black">
                      <h3 className="font-medium text-lg">
                        {event.nft?.name || event.asset?.name}
                      </h3>
                      <span className="font-medium">
                        Tx on{" "}
                        {new Date(
                          event.nft?.updated_at || event.asset?.updated_at
                        ).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
          </div>
        </div>

        <div className="flex flex-row items-center gap-2.5 mt-4">
          <div className="w-[55px] h-[55px] rounded-full border border-[#aab4b4] p-3">
            <HiArrowSmallLeft
              onClick={() => scrollLeft(txScrollRef)}
              className="w-[30px] h-[30px] cursor-pointer"
            />
          </div>
          <div className="w-[55px] h-[55px] rounded-full border border-[#aab4b4] p-3">
            <HiArrowSmallRight
              onClick={() => scrollRight(txScrollRef)}
              className="w-[30px] h-[30px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
