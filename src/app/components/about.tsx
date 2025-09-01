
import Image from "next/image"
import { MdArrowOutward } from "react-icons/md";

export default function About() {


    return (
        <div className="text-white w-[1512px] h-[606px] mt-[100px]">
            <div className="w-[1207px] h-[275px] flex flex-col items-center justify-center text-center ml-7">
                <h1 className=" text-[44px] h-20 text-center">The project that inspired the modern <span className="font-bold">CrytoArt movement</span> </h1>
                <p className=" w-[650px] h-16 text-[20px] p-2 text-center mx-auto">10,000 unique collectible characters with proof of ownership stored on the Ethereum blockchain.</p>
                <div className="mt-9 w-[165px] h-[59px] bg-white p-3 rounded-[100px]">
                    <button className="text-black text-[20px]">
                        Mint <span className="font-bold">now</span>
                    </button>
                </div>
            </div>

            <div className="flex flex-row mt-[100px] w-screen overflow-x-scroll gap-[18px] mb-4">

                <Image
                    src="/about/Image (7).svg"
                    alt="image"
                    width={187}
                    height={187} />
                <Image
                    src="/about/Image.svg"
                    alt="image"
                    width={187}
                    height={187} /> <Image
                    src="/about/Image (2).svg"
                    alt="image"
                    width={187}
                    height={187} /> <Image
                    src="/about/Image (3).svg"
                    alt="image"
                    width={187}
                    height={187} /> <Image
                    src="/about/Image (4).svg"
                    alt="image"
                    width={187}
                    height={187} /> <Image
                    src="/about/Image (5).svg"
                    alt="image"
                    width={187}
                    height={187} /> <Image
                    src="/about/Image (6).svg"
                    alt="image"
                    width={187}
                    height={187} />
            </div>

            <div className="w-[1301px] h-[691px] flex flex-col items-center ">

                <h1 className="mt-[100px] h-10 font-medium text-4xl">Featured in</h1>

                <div className="flex grid-rows-3 w-[1301px] h-[316px] mt-[74px] items-center gap-3 px-[40px]">
                    <div className="flex flex-col w-[390px] h-[306px] border-1 border-[#565656] rounded-3xl ">
                        <div className="flex flex-col gap-4 px-4 pb-[51px] border-b-2 border-[#565656]">
                            <Image
                                src="/about/Image (9).svg"
                                alt="image"
                                width={125}
                                height={20}
                                className="mt-6" />
                            <p className="w-[354px] h-[105px] text-2xl pr-4">This ethereum-based project could change how we think about digital art</p>
                        </div>

                        <div className=" w-[358px] h-10 px-4 flex justify-between py-5">
                            <h1 className="text-[20px] ">Read article</h1>
                            <MdArrowOutward className="text-white w-[16px] h-[16px]" />
                        </div>
                    </div>

                     <div className="flex flex-col w-[390px] h-[306px] border-1 border-[#565656] rounded-3xl ">
                        <div className="flex flex-col gap-4 px-4 pb-[51px] border-b-2 border-[#565656]">
                            <Image
                                src="/about/Image (9).svg"
                                alt="image"
                                width={125}
                                height={20}
                                className="mt-6" />
                            <p className="w-[354px] h-[105px] text-2xl pr-4">CryptoKitties, CryptoPunks and the birth of a cottage industry</p>
                        </div>

                        <div className=" w-[358px] h-10 px-4 flex justify-between py-5">
                            <h1 className="text-[20px] ">Read article</h1>
                            <MdArrowOutward className="text-white w-[16px] h-[16px]" />
                        </div>
                    </div>

                     <div className="flex flex-col w-[390px] h-[306px] border-1 border-[#565656] rounded-3xl ">
                        <div className="flex flex-col gap-4 px-4 pb-[51px] border-b-2 border-[#565656]">
                            <Image
                                src="/about/Image (9).svg"
                                alt="image"
                                width={125}
                                height={20}
                                className="mt-6" />
                            <p className="w-[354px] h-[105px] text-2xl pr-4">‘Obviously, we had no idea it was going to get here,’ say the guys who made the first NFT</p>
                        </div>

                        <div className=" w-[358px] h-10 px-4 flex justify-between py-5">
                            <h1 className="text-[20px] ">Read article</h1>
                            <MdArrowOutward className="text-white w-[16px] h-[16px]" />
                        </div>
                    </div>

                    



                </div>

            </div>
        </div>
    )

}