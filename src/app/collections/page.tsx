"use client"
import React from 'react'
import { useQuery } from '@tanstack/react-query'

const Collections = () => {
  console.log(process.env.NEXT_PUBLIC_OPENSEA_API_KEY)
  const { data, isError, isLoading } = useQuery({
    queryKey: ['collection'],
    queryFn: async () => {
       const headers: HeadersInit = {}
      if (process.env.NEXT_PUBLIC_OPENSEA_API_KEY) {
        headers['X-API-KEY'] = process.env.NEXT_PUBLIC_OPENSEA_API_KEY
      }
      const res = await fetch('https://api.opensea.io/api/v2/collection/cryptopunks/nfts', {
        headers
      })
      return res.json()
    }
  })
  console.log("OpenSea API Key:", process.env.NEXT_PUBLIC_OPENSEA_API_KEY)


if (isLoading) {

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6 bg-black text-white">
      {Array.from({ length: 10 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  )
}

  if (isError) return <p>Something went wrong !😢</p>

  return (
   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6 bg-black text-white">
  {data?.nfts?.map((nft:{ 
  identifier: string; 
  image_url?: string; 
  name?: string; 
  collection?: { name?: string } 
}) => (
    <div
      key={nft.identifier}
      className="bg-[#111] rounded-2xl overflow-hidden shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
    >
      <img
        src={nft.image_url}
        alt={nft.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <p className="font-semibold text-lg">{nft.name}</p>
        <p className="text-sm text-gray-400">{nft.collection?.name}</p>
        <p className="text-emerald-400 mt-2">Ξ {Math.floor(Math.random() * 50) + 1}.00</p>
      </div>
    </div>
  ))}
</div>

  )
}

export default Collections

const SkeletonCard = () => {
  return (
    <div className="bg-[#111] rounded-2xl overflow-hidden animate-pulse">
  
      <div className="w-full h-64 bg-gray-800"></div>
      
    
      <div className="p-4 space-y-2">
        <div className="h-6 w-3/4 bg-gray-700 rounded"></div> 
        <div className="h-4 w-1/2 bg-gray-700 rounded"></div> 
        <div className="h-5 w-1/3 bg-green-600 rounded mt-2"></div> 
      </div>
    </div>
  )
}
