"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Image from "next/image";
import About from "./components/about";
import Collections from "./components/collections"
import Faq from "./components/faq";
import Footer from "@/app/components/footer"

export default function Home() {
  const queryClient = new QueryClient()
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("0x5aAe09f337Ef1BeAed");
  
  return (
    <div className="flex flex-col min-h-screen bg-black">
   
      <nav className="flex flex-col lg:flex-row w-full px-4 sm:px-6 lg:px-8 py-4 lg:py-6 bg-black text-white items-center gap-4 lg:gap-8">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/nav/Frame.svg"
            alt="icon"
            width={39}
            height={30}
            className="w-[39px] h-[30px]" 
          />
        </div>

     
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 flex-1 justify-between w-full lg:w-auto">
          
       
          <ul className="flex flex-col sm:flex-row text-base lg:text-lg font-medium text-white text-opacity-75 font-[Manrope] gap-4 lg:gap-9">
            <li><a href="about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="collection" className="hover:text-white transition-colors">Collection</a></li>
            <li><a href="faqs" className="hover:text-white transition-colors">FAQs</a></li>
          </ul>

          <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6">
         
            <div className="rounded-full bg-[#638596] hover:bg-[#4a6a7a] transition-colors">
              <button className="text-base lg:text-lg px-4 lg:px-6 py-2 lg:py-3 text-[#C4EBFF] whitespace-nowrap">
                Connect wallet
              </button>
            </div>

            
            <div className="flex gap-3 lg:gap-4">
              <Image
                src="/nav/Vector.svg"
                alt="Social Link"
                height={18}
                width={15}
                className="hover:opacity-75 transition-opacity cursor-pointer"
              />
              <Image
                src="/nav/Vector 1.svg"
                alt="Social Link"
                height={18}
                width={15}
                className="hover:opacity-75 transition-opacity cursor-pointer"
              />
            </div>
          </div>
        </div>
      </nav>

    
      <main className="flex-1 w-full">
        <QueryClientProvider client={queryClient}>
          <About/>
        </QueryClientProvider>
        
        <Collections/>
        
        <div className="bg-white">
          <Faq/>
          <Footer/>
        </div>
      </main>
    </div>
  )
}