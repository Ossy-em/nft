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
    <div className="flex flex-col w-screen h-full bg-black overflow-hidden">

      <nav className="flex w-screen h-[84px] p-[27px] bg-black text-white gap-140 pr-[27px] items-center">

        <div className="pl-9.5 ">
          <Image
            src="/nav/Frame.svg"
            alt="icon"
            width={39}
            height={30}
            className="w-[39px] h-[30px]" />
        </div>

        <div className="flex flex-row w-[603px] h-[47px] items-center ">
          <ul className="flex text-[18px] font-medium text-white text-opacity-75 font-[Manrope] pl-5 gap-9">
            <li><a href="about">About</a></li>
            <li><a href="collection">Collection</a></li>
            <li><a href="faqs">FAQs</a></li>
          </ul>

          <div className="flex ml-10 rounded-[100px] justify-center w-45 h-12 bg-[#638596]">
            <button className="text-[18px] p-[8px] text-[#C4EBFF]">Connect wallet</button>
          </div>

          <div className="flex gap-[14px] w-[70px] h-7 ml-10  ">
            <Image
              src="/nav/Vector.svg"
              alt="Twitter"
              height={18}
              width={15} />
            <Image
              src="/nav/Vector 1.svg"
              alt="Twitter"
              height={18}
              width={15} />
          </div>
        </div>
      </nav>

<div className="w-screen h-fit ">

<QueryClientProvider client={queryClient}><About/></QueryClientProvider>
  
  <Collections/>
  <div className="bg-white">
 <Faq/>
    <Footer/>
  </div>
</div>
    </div>
  )
}