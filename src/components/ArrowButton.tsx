"use client"
import { HiArrowSmallRight } from "react-icons/hi2";
import { HiArrowSmallLeft } from "react-icons/hi2";
import React, { useRef } from "react"

const Button =()=>{
const scrollRef = useRef(null)

    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
        })
    }
    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
        })
    }

        const cardWidth = 360;
    const gap = 24;
    const scrollAmount = cardWidth + gap;
       
return(
 <div className="flex flex-row items-center gap-2.5 mt-4">
                        <div className="w-[55px] h-[55px] rounded-[100px] border border-[#aab4b4] p-3">
                            <HiArrowSmallLeft onClick={scrollLeft} className="w-[30px] h-[30px] font-extrabold cursor-pointer" />
                        </div>
    
                        <div className="w-[55px] h-[55px] rounded-[100px] border border-[#aab4b4] p-3">
                            <HiArrowSmallRight onClick={scrollRight} className="w-[30px] h-[30px] font-extrabold cursor-pointer" />
                        </div>
                    </div>
)
    
}

export default Button 