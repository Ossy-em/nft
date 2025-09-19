export default function SkeletonArticleCard() {
  return (
    <div className="flex flex-col w-full max-w-[390px] min-w-[280px] h-auto min-h-[306px] border border-[#565656] rounded-3xl animate-pulse">
      
      <div className="flex flex-col gap-4 px-4 pb-12 sm:pb-[51px] border-b-2 border-[#565656] flex-grow">
        
        <div className="mt-4 sm:mt-6 bg-gray-700 h-5 w-24 sm:w-[125px] rounded"></div>
        
        <div className="w-full h-20 sm:h-[105px] bg-gray-700 rounded"></div>
      </div>

      <div className="w-full px-4 flex justify-between items-center py-3 sm:py-5 min-h-[40px]">
        
        <div className="h-4 sm:h-5 w-20 sm:w-[120px] bg-gray-700 rounded"></div>
        
        <div className="h-4 w-4 bg-gray-700 rounded-full flex-shrink-0"></div>
      </div>
    </div>
  );
}