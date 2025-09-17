import Image from "next/image"
import { HiArrowSmallRight } from "react-icons/hi2";
import { HiArrowSmallLeft } from "react-icons/hi2";
import Punk from "@/app/components/how-to-get-punk"
import { useRouter } from "next/navigation";

export default function Collections() {

    const router = useRouter()
    const handleViewAll = () => {
        router.push('/largest-sales')
    }
    console.log(handleViewAll)
    return (
        <section className=" bg-white pt-[163px] py-16 w-screen mb-0 h-[2887px] overflow-hidden">
            <div className="px-10">
            <div className="flex flex-row items-center justify-between h-[67px]">
                <h2 className="text-[52px] font-medium">Largest Sales</h2>

                <div className="h-[61px] w-[149px] rounded-[100px] border pr-9 pl-10 pt-3.5 pb-4 border-[#b2b9b9] cursor-pointer">
                    <button onClick={handleViewAll} className="text-[20px] font-medium cursor-pointer">View all</button>
                </div>
            </div>

            <div className="mt-[93px] h-173 flex flex-col overflow-x-scroll">
                <div className="flex flex-row">
                    <div className="flex flex-col w-100 h-143 gap-[27px]">
                        <Image
                            src="/collections/Frame (1).svg"
                            alt="collections"
                            width={360}
                            height={360}
                        />
                        <div className="w-[420px] h-[70px]">
                            <h3 className="font-medium text-[26px]">#3100</h3>
                            <span className="font-medium text-[20px]">4.2KΞ ($7.58M)</span>
                        </div>
                        <h5 className="font-medium text-[17px]">Mar 11, 2021</h5>
                    </div>

                    <div className="flex flex-col w-100 h-143 gap-[27px]">
                        <Image
                            src="/collections/Image.svg"
                            alt="collections"
                            width={360}
                            height={360}
                        />
                        <div className="w-[420px] h-[70px]">
                            <h3 className="font-medium text-[26px]">#4140</h3>
                            <span className="font-medium text-[20px]">4.2KΞ ($7.57M)</span>
                        </div>
                        <h5 className="font-medium text-[17px]">Mar 11, 2021</h5>
                    </div>

                    <div className="flex flex-col w-100 h-143 gap-[27px]">
                        <Image
                            src="/collections/Image (2).svg"
                            alt="collections"
                            width={360}
                            height={360}
                        />
                        <div className="w-[420px] h-[70px]">
                            <h3 className="font-medium text-[26px]">#3704</h3>
                            <span className="font-medium text-[20px]">4.2KΞ ($17.58M)</span>
                        </div>
                        <h5 className="font-medium text-[17px]">Dec 07, 2021</h5>
                    </div>

                </div>
                <div className="flex flex-row items-center gap-2.5">
                    <div className="w-[65px] h-[65px] rounded-[100px] border border-[#aab4b4] p-5">
                        <HiArrowSmallLeft className="w-[24px] h-[24px]" />
                    </div>

                    <div className="w-[65px] h-[65px] rounded-[100px] border border-[#aab4b4] p-5">
                        <HiArrowSmallRight className="w-[24px] h-[24px] " />
                    </div>
                </div>
            </div>




            <div className="h-[117px] gap-[19px]">
                <div className="flex flex-row items-center justify-between h-[117px]">
                    <h2 className="text-[52px] font-medium">Recent Transcations</h2>
                    <div className="h-[61px] w-[149px] rounded-[100px] border pr-9 pl-10 pt-3.5 pb-4 border-[#b2b9b9] cursor-pointer">
                        <button className="text-[20px] font-medium cursor-pointer">View all</button>
                    </div>
                </div>
                <h4 className="text-[19px]">
                    Updated 20 seconds ago
                </h4>
            </div>


            <div className="mt-[93px] h-173 flex flex-col overflow-x-scroll">
                <div className="flex flex-row">
                    <div className="flex flex-col w-100 h-143 gap-[27px]">
                        <Image
                            src="/collections/Image 1.svg"
                            alt="collections"
                            width={360}
                            height={360}
                        />
                        <div className="w-[420px] h-[70px]">
                            <h3 className="font-medium text-[26px]">#1254</h3>
                            <span className="font-medium text-[20px]">New bid of 5120Ξ ($213,879)</span>
                        </div>

                    </div>

                    <div className="flex flex-col w-100 h-143 gap-[27px]">
                        <Image
                            src="/collections/Frame 2.svg"
                            alt="collections"
                            width={360}
                            height={360}
                        />
                        <div className="w-[420px] h-[70px]">
                            <h3 className="font-medium text-[26px]">#9140</h3>
                            <span className="font-medium text-[20px]"> New bid of 5120Ξ ($213,879)</span>
                        </div>

                    </div>

                    <div className="flex flex-col w-100 h-143 gap-[27px]">
                        <Image
                            src="/collections/Frame 3.svg"
                            alt="collections"
                            width={360}
                            height={360}
                        />
                        <div className="w-[420px] h-[70px]">
                            <h3 className="font-medium text-[26px]">#4125</h3>
                            <span className="font-medium text-[20px]">Offered for 111Ξ ($453,049)</span>
                        </div>
                    </div>

                </div>
                <div className="flex flex-row items-center gap-2.5">
                    <div className="w-[65px] h-[65px] rounded-[100px] border border-[#aab4b4] p-5">
                        <HiArrowSmallLeft className="w-[24px] h-[24px]" />
                    </div>

                    <div className="w-[65px] h-[65px] rounded-[100px] border border-[#aab4b4] p-5">
                        <HiArrowSmallRight className="w-[24px] h-[24px] " />
                    </div>
                </div>

               
            </div>
            </div>

   <Punk/>

        </section>
    )
}
