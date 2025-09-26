"use client"

import { useWeb3Modal } from "@web3modal/wagmi/react"
import { useAccount } from "wagmi"

export default function MintButton() {
  const { open } = useWeb3Modal()
  const { isConnected, address } = useAccount()

  const handleMint = () => {
    if (!isConnected) {
      open() 
    } else {

      alert(`🎉 Mint successful! (demo)\nWallet: ${address}`)
    }
  }

  return (
    <button
      onClick={handleMint}
      className="bg-white text-black text-lg lg:text-xl font-medium px-6 py-3 lg:px-8 lg:py-4 rounded-full hover:bg-gray-200 transition-colors"
    >
      Mint <span className="font-bold">now</span>
    </button>
  )
}
