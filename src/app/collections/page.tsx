"use client"
import React from 'react'
import { useQuery } from '@tanstack/react-query'

const Collections = () => {
  console.log(process.env.NEXT_PUBLIC_OPENSEA_API_KEY)
  const { data, isError, isLoading } = useQuery({
    queryKey: ['collection'],
    queryFn: async () => {
      const res = await fetch('https://api.opensea.io/api/v2/collection/cryptopunks/nfts', {
        headers: {
          'X-API-KEY': process.env.NEXT_PUBLIC_OPENSEA_API_KEY
        }
      })
      return res.json()
    }
  })

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Something went wrong !😢</p>

  return (
   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6 bg-black text-white">
  {data?.nfts?.map((nft) => (
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
