"use client"
import React, { useRef } from "react"
import { useQuery } from "@tanstack/react-query"
import { HiArrowSmallRight, HiArrowSmallLeft } from "react-icons/hi2"
import { useRouter } from "next/navigation"

export default function Collections() {
  const salesScrollRef = useRef<HTMLDivElement>(null)
  const txScrollRef = useRef<HTMLDivElement>(null)
  const collectionsScrollRef = useRef<HTMLDivElement>(null)

  const { data: salesData, isLoading: isSalesLoading } = useQuery({
    queryKey: ["largestSales"],
    queryFn: async () => {
      const res = await fetch("/api/opensea-sale")
      if (!res.ok) throw new Error("Failed to fetch sales data")
      return res.json()
    },
  })

  const { data: txData, isLoading: isTxLoading } = useQuery({
    queryKey: ["recentTransactions"],
    queryFn: async () => {
      const res = await fetch("/api/opensea-tx")
      if (!res.ok) throw new Error("Failed to fetch tx data")
      return res.json()
    },
  })

  const { data: collectionsData, isLoading: isCollectionsLoading } = useQuery({
    queryKey: ["collections"],
    queryFn: async () => {
      const res = await fetch("/api/opensea-collections")
      if (!res.ok) throw new Error("Failed to fetch collections data")
      return res.json()
    },
  })

  const scrollLeft = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollBy({ left: -300, behavior: "smooth" })
  }

  const scrollRight = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollBy({ left: 300, behavior: "smooth" })
  }

  const router = useRouter()

  return (
    <section className="bg-white pt-20 sm:pt-32 lg:pt-[163px] py-8 sm:py-12 lg:py-16 w-full mb-0 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-10">


        <div className="flex flex-row items-center justify-between mb-6 sm:mb-8 lg:mb-[53px]">
          <h2 className="text-2xl sm:text-3xl lg:text-[52px] font-medium">Largest Sales</h2>
          <button
            onClick={() => router.push("/largest-sales")}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-black text-white rounded-full font-medium text-sm sm:text-base hover:bg-gray-800 transition-colors duration-200"
          >
            Show More
          </button>
        </div>

        <div
          ref={salesScrollRef}
          className="flex gap-3 sm:gap-4 lg:gap-6 overflow-x-hidden scroll-smooth pb-2"
        >
          {isSalesLoading
            ? Array.from({ length: 3 }).map((_, i) => <SkeletonSaleCard key={i} />)
            : salesData?.asset_events?.map((event: any, i: number) => (
                <Card
                  key={`${event.transaction}-${i}`}
                  image={event.nft?.image_url || event.asset?.image_url}
                  title={event.nft?.name || event.asset?.name || `#${event.nft?.identifier}`}
                  subtitle={`${(Number(event.payment.quantity) / 10 ** event.payment.decimals).toFixed(2)} Ξ`}
                />
              ))}
        </div>

        <ScrollButtons onLeft={() => scrollLeft(salesScrollRef)} onRight={() => scrollRight(salesScrollRef)} />

        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="flex flex-row items-center justify-between mb-4 sm:mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[52px] font-medium sm:text-black">Recent Transactions</h2>
              <h4 className="text-sm sm:text-base lg:text-[19px] text-gray-600 mt-1 sm:mt-2">Updated 20 seconds ago</h4>
            </div>
            <button
              onClick={() => router.push("/recent-transactions")}
              className="px-4 py-2 sm:px-6 sm:py-3 bg-black text-white rounded-full font-medium text-sm sm:text-base hover:bg-gray-800 transition-colors duration-200"
            >
              Show More
            </button>
          </div>
        </div>

        <div
          ref={txScrollRef}
          className="flex gap-3 sm:gap-4 lg:gap-6 overflow-x-hidden scroll-smooth pb-2"
        >
          {isTxLoading
            ? Array.from({ length: 3 }).map((_, i) => <SkeletonSaleCard key={i} />)
            : txData?.asset_events?.map((event: any, i: number) => (
                <Card
                  key={`${event.transaction}-${i}`}
                  image={event.nft?.image_url || event.asset?.image_url}
                  title={event.nft?.name || event.asset?.name || `#${event.nft?.identifier}`}
                  subtitle={`Tx on ${new Date(event.nft?.updated_at || event.asset?.updated_at).toLocaleDateString()}`}
                />
              ))}
        </div>

        <ScrollButtons onLeft={() => scrollLeft(txScrollRef)} onRight={() => scrollRight(txScrollRef)} />

        <div className="mt-12 sm:mt-16 lg:mt-20">
          <h2 className="text-2xl sm:text-3xl lg:text-[52px] font-medium mb-6">Top Collections</h2>
        </div>

        <div
          ref={collectionsScrollRef}
          className="flex gap-3 sm:gap-4 lg:gap-6 overflow-x-hidden scroll-smooth pb-2"
        >
          {isCollectionsLoading
            ? Array.from({ length: 3 }).map((_, i) => <SkeletonSaleCard key={i} />)
            : collectionsData?.collections?.map((col: any, i: number) => (
                <Card
                  key={col.collection || i}
                  image={col.image_url}
                  title={col.name}
                  subtitle={`${col.stats?.total?.toLocaleString() || 0} items`}
                />
              ))}
        </div>

        <ScrollButtons onLeft={() => scrollLeft(collectionsScrollRef)} onRight={() => scrollRight(collectionsScrollRef)} />

      </div>
    </section>
  )
}

const Card = ({ image, title, subtitle }: { image: string; title: string; subtitle: string }) => (
  <div className="bg-white rounded-2xl flex-shrink-0 w-64 sm:w-80 lg:w-[360px] shadow-md">
    <img src={image} alt={title} className="w-full h-64 sm:h-80 lg:h-[360px] object-cover rounded-t-2xl" />
    <div className="p-3 sm:p-4 text-black">
      <h3 className="font-medium text-sm sm:text-base lg:text-lg truncate">{title}</h3>
      <span className="font-medium text-sm sm:text-base">{subtitle}</span>
    </div>
  </div>
)

const SkeletonSaleCard = () => (
  <div className="bg-white rounded-2xl flex-shrink-0 w-64 sm:w-80 lg:w-[360px] animate-pulse shadow-md">
    <div className="w-full h-64 sm:h-80 lg:h-[360px] bg-gray-300 rounded-t-2xl"></div>
    <div className="p-3 sm:p-4 text-black space-y-2 sm:space-y-3">
      <div className="w-2/3 h-4 sm:h-5 bg-gray-300 rounded"></div>
      <div className="w-1/2 h-3 sm:h-4 bg-gray-300 rounded"></div>
    </div>
  </div>
)

const ScrollButtons = ({ onLeft, onRight }: { onLeft: () => void; onRight: () => void }) => (
  <div className="flex flex-row items-center gap-2 sm:gap-2.5 mt-3 sm:mt-4">
    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[55px] lg:h-[55px] rounded-full border border-[#aab4b4] p-2 sm:p-2.5 lg:p-3">
      <HiArrowSmallLeft
        onClick={onLeft}
        className="w-full h-full cursor-pointer hover:text-gray-600 transition-colors"
      />
    </div>
    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[55px] lg:h-[55px] rounded-full border border-[#aab4b4] p-2 sm:p-2.5 lg:p-3">
      <HiArrowSmallRight
        onClick={onRight}
        className="w-full h-full cursor-pointer hover:text-gray-600 transition-colors"
      />
    </div>
  </div>
)
