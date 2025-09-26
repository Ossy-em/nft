"use client"

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image"
import { MdArrowOutward } from "react-icons/md";
import { useRouter } from "next/navigation";
import SkeletonArticleCard from "@/components/SkeletonArticleCard"

export default function About() {
    const [isConnected, setIsConnected] = useState(false);
    const [mintedCount, setMintedCount] = useState(0)

    const router = useRouter()

    const handleAction = (action: () => void) => {
        if (!isConnected) {
            router.push("/login");
        } else {
            action();
        }
        console.log("tapped")
    }
    const handleClick = () => {
        router.push("/collections");
    };

    const { data, isLoading, isError } = useQuery({
        queryKey: ['article'], queryFn: async () => { const res = await fetch('https://dev.to/api/articles?per_page=5'); return res.json() },
    });

    return (
        <section className="text-white w-full">
       
            <div className="text-white w-full py-16 lg:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6">
                        The project that inspired the modern <span className="font-bold">CrytoArt movement</span>
                    </h1>
                    <p className="max-w-2xl text-base sm:text-lg lg:text-xl mb-8 mx-auto">
                        10,000 unique collectible characters with proof of ownership stored on the Ethereum blockchain.
                    </p>
                    <div className="bg-white rounded-full px-6 py-3 lg:px-8 lg:py-4">
                        <button 
                            className="text-black text-lg lg:text-xl font-medium" 
                            onClick={() => handleAction(() => setMintedCount(mintedCount + 1))}
                        >
                            Mint <span className="font-bold">now</span>
                        </button>
                    </div>
                </div>

           
                <div className="w-full overflow-hidden mt-16 lg:mt-24 py-4">
                    <div className="scroll-container">
                        {isLoading ? (
      <SkeletonScroll />
    ) : (<>
                        <Image src="/about/Image (7).svg" alt="image" width={187} height={187} className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-47 lg:h-47" />
                        <Image src="/about/Image.svg" alt="image" width={187} height={187} className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-47 lg:h-47" />
                        <Image src="/about/Image (2).svg" alt="image" width={187} height={187} className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-47 lg:h-47" />
                        <Image src="/about/Image (3).svg" alt="image" width={187} height={187} className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-47 lg:h-47" />
                        <Image src="/about/Image (4).svg" alt="image" width={187} height={187} className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-47 lg:h-47" />
                        <Image src="/about/Image (5).svg" alt="image" width={187} height={187} className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-47 lg:h-47" />
                        <Image src="/about/Image (6).svg" alt="image" width={187} height={187} className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-47 lg:h-47" />
                        
                        <Image src="/about/Image (7).svg" alt="image" width={187} height={187} className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-47 lg:h-47" />
                        <Image src="/about/Image.svg" alt="image" width={187} height={187} className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-47 lg:h-47" />
                        <Image src="/about/Image (2).svg" alt="image" width={187} height={187} className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-47 lg:h-47" />
                        <Image src="/about/Image (3).svg" alt="image" width={187} height={187} className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-47 lg:h-47" />
                        <Image src="/about/Image (4).svg" alt="image" width={187} height={187} className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-47 lg:h-47" />
                        <Image src="/about/Image (5).svg" alt="image" width={187} height={187} className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-47 lg:h-47" />
                        <Image src="/about/Image (6).svg" alt="image" width={187} height={187} className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-47 lg:h-47" />
     </> )}  </div>
                </div>
            </div>

         
            <div className="w-full flex flex-col items-center py-16 lg:py-24">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-12">Featured in</h1>

                <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {isLoading
                            ? Array.from({ length: 3 }).map((_, i) => <SkeletonArticleCard key={i} />)
                            : data?.slice(0, 3).map((article:any) => (
                                <div key={article.id} className="flex flex-col border border-[#565656] rounded-3xl overflow-hidden">
                                    <div className="flex flex-col gap-4 p-6 border-b-2 border-[#565656] flex-1">
                                        <Image
                                            src="/about/Image (9).svg"
                                            alt="image"
                                            width={125}
                                            height={20}
                                            className="w-auto h-5"
                                        />
                                        <p className="text-xl lg:text-2xl leading-tight flex-1">
                                            {article.title}
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center p-6">
                                        <h1 className="text-lg lg:text-xl">Read article</h1>
                                        <MdArrowOutward
                                            onClick={() => window.open(article.url, "_blank")}
                                            className="text-white w-4 h-4 cursor-pointer hover:opacity-75 transition-opacity"
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

           
            <div className="bg-white">
                <div className="bg-black rounded-b-3xl lg:rounded-b-5xl px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
                 
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16 lg:mb-32">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium flex-shrink-0">
                            Meet the Punks
                        </h1>
                        <div className="flex-1 max-w-2xl">
                            <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-8">
                                The CryptoPunks are 24x24 pixel art images, generated algorithmically. Most are punky-looking guys and girls, but there are a few rarer types mixed in: Apes, Zombies and even the odd Alien. Every punk has their own profile page that shows their attributes as well as their ownership/for-sale status.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                                <button className="bg-white text-black px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg font-medium rounded-full hover:bg-gray-100 transition-colors">
                                    Buy a Punk
                                </button>
                                <button 
                                    onClick={handleClick} 
                                    className="bg-black text-white px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg font-medium rounded-full border border-[#565656] hover:border-gray-400 transition-colors"
                                >
                                    View full collection
                                </button>
                            </div>
                        </div>
                    </div>

        
                    <div className="flex flex-col xl:flex-row gap-8 lg:gap-16">
            
                        <div className="flex flex-col gap-4 lg:gap-6 flex-1 max-w-2xl">
                            <div className="border border-[#565656] bg-[#638596] p-6 lg:p-10 rounded-2xl lg:rounded-3xl">
                                <h1 className="text-xl sm:text-2xl lg:text-3xl leading-tight">
                                    Punks with a blue background are not for sale and have no current bids.
                                </h1>
                            </div>
                            <div className="border border-[#565656] p-6 lg:p-10 rounded-2xl lg:rounded-3xl">
                                <h1 className="text-xl sm:text-2xl lg:text-3xl leading-tight">
                                    Punks with a red background are available for sale by their owner.
                                </h1>
                            </div>
                            <div className="border border-[#565656] p-6 lg:p-10 rounded-2xl lg:rounded-3xl">
                                <h1 className="text-xl sm:text-2xl lg:text-3xl leading-tight">
                                    Punks with a purple background have an active bid on them
                                </h1>
                            </div>
                        </div>

                    
                        <div className="flex-shrink-0 flex justify-center xl:justify-end">
                            <Image
                                src="/feature/Frame.svg"
                                alt="Frame"
                                width={574}
                                height={574}
                                className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

       

        
                   ) }

                   const SkeletonScroll = () => {
  return (
    <div className="flex gap-4 animate-pulse">
      {Array.from({ length: 7 }).map((_, i) => (
        <div
          key={i}
          className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-47 lg:h-47 bg-gray-800 rounded-xl"
        />
      ))}
    </div>
  );
};
