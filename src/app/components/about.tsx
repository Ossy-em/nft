
import Image from "next/image"
import { MdArrowOutward } from "react-icons/md";

export default function About() {


    return (
        <section className="text-white w-screen pt-[100px]">
            <div className="text-white w-screen h-[606px]">
                <div className="w-[1207px] h-[275px] flex flex-col items-center justify-center text-center ml-7">
                    <h1 className=" text-[44px] h-20 text-center">The project that inspired the modern <span className="font-bold">CrytoArt movement</span> </h1>
                    <p className=" w-[650px] h-16 text-[20px] p-2 text-center mx-auto">10,000 unique collectible characters with proof of ownership stored on the Ethereum blockchain.</p>
                    <div className="mt-9 w-[165px] h-[59px] bg-white p-3 rounded-[100px]">
                        <button className="text-black text-[20px]">
                            Mint <span className="font-bold">now</span>
                        </button>
                    </div>
                </div>
                <div className="flex flex-row w-screen overflow-x-scroll gap-[18px] mb-4 mt-24 py-9">

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

            </div>


            <div className="w-[1301px] h-[691px] flex flex-col items-center">

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
                            <MdArrowOutward className="text-white w-[16px] h-[16px] cursor-pointer" />
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
                            <MdArrowOutward className="text-white w-[16px] h-[16px] cursor-pointer" />
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
                            <MdArrowOutward className="text-white w-[16px] h-[16px] cursor-pointer" />
                        </div>
                    </div>
                </div>

            </div>
            <div className=" h-[1091px] bg-white">
                <div className="flex flex-col px-10 h-[1091px] gap-[131px] bg-black rounded-b-[40px]">

                    <div className="flex flex-row h-[266px] g-[352px]">
                        <h1 className="h-[67px] text-[53px] font-medium">Meet the Punks</h1>
                        <div className="w-[627px] h-[266px] ml-[182px]">
                            <p className="w-[605px] h-[155px] text-[20px]">The CryptoPunks are 24x24 pixel art images, generated algorithmically. Most are punky-looking guys and girls, but there are a few rarer types mixed in: Apes, Zombies and even the odd Alien. Every punk has their own profile page that shows their attributes as well as their ownership/for-sale status.</p>
                            <div className="flex flex-row  w-[627px] h-[80px] text-center py-3 gap-[19px] mt-10">
                                <button className="flex flex-row text-black  w-[178px] h-[59px] bg-white justify-center  py-3 text-[19px] font-medium cursor-pointer rounded-[100px]">
                                    Buy a Punk
                                </button>
                                <button className="flex flex-row text-white  w-[256px] h-[61px] bg-black  justify-center py-3 text-[20px] font-medium cursor-pointer rounded-[100px] border-1 border-[#565656]">
                                    View full collection
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-[53px] p-0 items-start h-[574px] mr-[140px]">
                        <div className="flex flex-col h-[523px] w-[574px] gap-[19px]">
                            <div className="h-[162px] w-[574px] border border-[#565656] bg-[#638596] py-10 pl-10 pr-12 rounded-[28px]">
                                <h1 className="h-[84px] w-[534px] text-[28px]">
                                    Punks with a blue background are not for sale and have no current bids.
                                </h1>
                            </div>
                            <div className="h-[162px] w-[574px] border border-[#565656] py-10 pl-10 pr-12 rounded-[28px]">
                                <h1 className="h-[84px] w-[464px] text-[28px]">
                                    Punks with a red background are available for sale by their owner.
                                </h1>
                            </div>
                            <div className="h-[162px] w-[574px] border border-[#565656] py-10 pl-10 pr-12 rounded-[28px]">
                                <h1 className="h-[84px] w-[504px] text-[28px]">
                                    Punks with a purple background have an active bid on them
                                </h1>
                            </div>
                        </div>

                        <Image
                            src="/feature/Frame.svg"
                            alt="Frame"
                            width={574}
                            height={574}
                        />

                    </div>
                </div>
            </div>


        </section>

    )

}