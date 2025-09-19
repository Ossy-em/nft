"use client"
import React from 'react'
import { useQuery } from '@tanstack/react-query'

export default function LargestSales() {

  const { data: salesData, isError, isLoading } = useQuery({
    queryKey: ['sales'],
    queryFn: async () => {
      const res = await fetch(
        'https://api.opensea.io/api/v2/events/collection/cryptopunks?event_type=sale&limit=42',
        {
          headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_OPENSEA_API_KEY || '' },
        }
      )
      return res.json()
    },
  })
  console.log(salesData)


  const { data: ethPriceData } = useQuery({
    queryKey: ['ethPrice'],
    queryFn: async () => {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'
      )
      return res.json()
    },
  })

if (isLoading) {
  return (
    <div className="grid grid-cols-3 bg-black text-white min-h-screen p-10 gap-10 overflow-x-hidden">
      {Array.from({ length: 9 }).map((_, index) => (
        <SkeletonSaleCard key={index} />
      ))}
    </div>
  )
}

  if (isError) return <p>Error fetching sales</p>


  const ethPrice = ethPriceData?.ethereum?.usd || 0

  return (
    <div className="grid grid-cols-3 bg-black text-white min-h-screen p-10 gap-10 overflow-x-hidden">
      {salesData?.asset_events
        ?.filter((event) => event.nft?.image_url || event.asset?.image_url)
        ?.sort((a, b) => {
    const priceA = Number(a.payment.quantity) / 10 ** a.payment.decimals
    const priceB = Number(b.payment.quantity) / 10 ** b.payment.decimals
    return priceB - priceA 
  })
        .map((event, index) => {
          const image = event.nft?.image_url || event.asset?.image_url
          const name = event.nft?.name || event.asset?.name
          const updated_at = event.nft?.updated_at || event.asset?.updated_at

      
          const ethAmount = Number(event.payment.quantity) / 10 ** event.payment.decimals
          const usdValue = ethAmount * ethPrice

          return (
            <div
              key={`${event.transaction}-${index}`}
              className="bg-[#111] rounded-2xl hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
          
              {image && (
                <img
                  src={image}
                  alt={name || 'NFT'}
                  width={360}
                  height={360}
                  className="rounded-2xl"
                />
              )}


              <div className="w-[420px] h-[70px]">
                <h3 className="font-medium text-[26px]">
                  #{event.nft.identifier}
                </h3>
                <span className="font-medium text-[20px]">
                  {ethAmount.toFixed(2)}Ξ (${usdValue.toLocaleString()})
                </span>
              </div>

           
              <h5 className="font-medium text-[17px]">
                {new Date(updated_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </h5>
            </div>
          )
        })}
    </div>
  )
}
const SkeletonSaleCard = () => {
  return (
    <div className="bg-[#111] rounded-2xl animate-pulse">
      {/* Image placeholder */}
      <div className="w-full h-64 bg-gray-800 rounded-2xl"></div>
      
      {/* Text placeholders */}
      <div className="w-[420px] h-[70px] p-4 space-y-2">
        <div className="h-6 w-1/3 bg-gray-700 rounded"></div> {/* Token # */}
        <div className="h-5 w-2/3 bg-gray-700 rounded"></div> {/* ETH + USD */}
      </div>

      <div className="h-5 w-1/2 bg-gray-700 rounded mx-4 mb-4"></div> {/* Date */}
    </div>
  )
}
