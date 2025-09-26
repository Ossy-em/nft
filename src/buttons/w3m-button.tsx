"use client"

import { useWeb3Modal } from "@web3modal/wagmi/react"
import { useAccount } from "wagmi"

export default function W3MButton() {
  const { open } = useWeb3Modal()
  const { isConnected, address } = useAccount()

  return (
    <button
      onClick={() => open()}
      className="px-4 py-2 rounded-full bg-[#638596] text-[#C4EBFF] hover:bg-[#4a6a7a] transition-colors"
    >
      {isConnected && address
        ? `${address.slice(0, 6)}...${address.slice(-4)}`
        : "Connect Wallet"}
    </button>
  )
}
