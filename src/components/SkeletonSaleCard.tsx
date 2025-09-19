export default function SkeletonSaleCard() {
   return (
    <div className="bg-white rounded-2xl flex-shrink-0 w-full max-w-[360px] min-w-[240px] animate-pulse">
  
      <div className="w-full h-[240px] sm:h-[300px] lg:h-[360px] bg-gray-300 rounded-2xl" />

      <div className="p-3 sm:p-4 text-black space-y-2 sm:space-y-3">
      
        <div className="w-2/3 h-4 sm:h-5 bg-gray-300 rounded" />

  
        <div className="w-1/2 h-3 sm:h-4 bg-gray-300 rounded" />

 
        <div className="w-1/3 h-2 sm:h-3 bg-gray-300 rounded" />
      </div>
    </div>
  )
}