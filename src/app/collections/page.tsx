"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";

const Collections = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["collection"],
    queryFn: async () => {
      const res = await fetch("/api/opensea-collection"); // 👈 use your backend route
      if (!res.ok) throw new Error("Failed to fetch collection");
      return res.json();
    },
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6 bg-black text-white">
        {Array.from({ length: 10 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  if (isError) return <p>Something went wrong! 😢</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6 bg-black text-white">
      {data?.nfts?.map(
        (nft: {
          identifier: string;
          image_url?: string;
          name?: string;
          collection?: { name?: string };
        }) => (
          <div
            key={nft.identifier}
            className="bg-[#111] rounded-2xl overflow-hidden shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            <img
              src={nft.image_url}
              alt={nft.name || "NFT"}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <p className="font-semibold text-lg">{nft.name}</p>
              <p className="text-sm text-gray-400">{nft.collection?.name}</p>
              <p className="text-emerald-400 mt-2">
                Ξ {Math.floor(Math.random() * 50) + 1}.00
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Collections;

const SkeletonCard = () => (
  <div className="bg-[#111] rounded-2xl overflow-hidden animate-pulse">
    <div className="w-full h-64 bg-gray-800"></div>
    <div className="p-4 space-y-2">
      <div className="h-6 w-3/4 bg-gray-700 rounded"></div>
      <div className="h-4 w-1/2 bg-gray-700 rounded"></div>
      <div className="h-5 w-1/3 bg-green-600 rounded mt-2"></div>
    </div>
  </div>
);
