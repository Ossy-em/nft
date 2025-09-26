"use client"

import React from "react"
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react"
import { WagmiConfig } from "wagmi"
import { mainnet, polygon, arbitrum, sepolia } from "wagmi/chains"

// 1. Your WalletConnect Cloud project ID (get one free at https://cloud.walletconnect.com)
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string

if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID in .env.local")
}

// 2. Define chains
const chains = [mainnet, polygon, arbitrum, sepolia]

// 3. Create wagmi config
const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata: {
    name: "My NFT Portfolio App",
    description: "Demo wallet connection",
    url: "http://localhost:3000", // update when deployed
    icons: ["https://avatars.githubusercontent.com/u/37784886"]
  }
})

// 4. Create Web3Modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains
})

export function WalletProvider({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
}
