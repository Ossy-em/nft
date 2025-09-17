"use client"
import React from 'react'
import { useQuery } from '@tanstack/react-query'

export default function LargestSales() {
    console.log(process.env.NEXT_PUBLIC_OPENSEA_API_KEY)
    const { data, isError, isLoading } = useQuery({

        queryKey: ['sales'],
        queryFn: async () => {
            const res = await fetch('https://api.opensea.io/api/v2/events/collection/cryptopunks?event_type=sale&limit=20', {
                headers: {
                    'X-API-KEY': process.env.NEXT_PUBLIC_OPENSEA_API_KEY
                }
            })
            // return res.json()
            const json = await res.json()
            return json
        }
    })
    // console.log(data)

    const timestamp = 1757928935;
    const date = new Date(timestamp * 1000);

    console.log(date.toLocaleString());




    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error fetching sales</p>
    if (data) {
        console.log("API Data:", data)
    }


    return (

        <div className='grid grid-cols-3 bg-black text-white min-h-screen p-10 gap-10 overflow-x-hidden'>
            {data?.asset_events
                ?.filter(event => event.nft?.image_url || event.asset?.image_url)
                .map((event, index) => {
                    const image = event.nft?.image_url || event.asset?.image_url
                    const name = event.nft?.name || event.asset?.name
                    const updated_at = event.nft?.updated_at || event.asset?.updated_at

                    return (
                        <div key={`${event.transaction}-${index}`} className='bg-[#111] rounded-2xl hover:scale-105 hover:shadow-lg transition-all duration-300"'>
                            <div className=''>{image && <img src={image} alt={name || "NFT"} width={360}
                                height={360} className='rounded-4xl' />}</div>
                            <div className="w-[420px] h-[70px]">
                                 <h3 className="font-medium text-[26px]">
                                #{event.nft.identifier}
                            </h3>
                                <span className="font-medium text-[20px]">
                                    {(event.payment.quantity / 10 ** event.payment.decimals).toFixed(2)}Ξ
                                </span> </div>

                           <h5 className="font-medium text-[17px]">   {new Date(updated_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                            })}</h5>  
                        </div>
                    )
                })}



        </div>
    )
}