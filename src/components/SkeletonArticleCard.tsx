export default function SkeletonArticleCard ()  {
  return (

  <div className="flex flex-col w-[390px] h-[306px] border border-[#565656] rounded-3xl animate-pulse">
    {/* Top section */}
    <div className="flex flex-col gap-4 px-4 pb-[51px] border-b-2 border-[#565656]">
      {/* Fake logo */}
      <div className="mt-6 bg-gray-700 h-[20px] w-[125px] rounded"></div>
      {/* Fake title */}
      <div className="w-[354px] h-[105px] bg-gray-700 rounded"></div>
    </div>

    {/* Bottom section */}
    <div className="w-[358px] h-10 px-4 flex justify-between py-5">
      {/* Fake "Read article" text */}
      <div className="h-[20px] w-[120px] bg-gray-700 rounded"></div>
      {/* Fake arrow */}
      <div className="h-[16px] w-[16px] bg-gray-700 rounded-full"></div>
    </div>
  </div>


  )}