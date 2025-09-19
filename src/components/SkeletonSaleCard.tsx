export default function SkeletonSaleCard() {
  return (
    <div className="bg-white rounded-2xl flex-shrink-0 w-[360px] animate-pulse">
      {/* Image placeholder */}
      <div className="w-full h-[360px] bg-gray-300 rounded-2xl" />

      <div className="p-4 text-black space-y-3">
        {/* Title placeholder */}
        <div className="w-2/3 h-5 bg-gray-300 rounded" />

        {/* Price placeholder */}
        <div className="w-1/2 h-4 bg-gray-300 rounded" />

        {/* Date placeholder */}
        <div className="w-1/3 h-3 bg-gray-300 rounded" />
      </div>
    </div>
  )
}