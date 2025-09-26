"use client";

import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { WagmiProvider } from "wagmi";
import { ReactNode } from "react";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!;

const chains = [mainnet, sepolia] as const;

const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata: {
    name: "My NFT Portfolio App",
    description: "An NFT dashboard",
    url: "https://myapp.com",
    icons: ["https://myapp.com/icon.png"],
  },
});

// Initialize Web3Modal once
createWeb3Modal({
  wagmiConfig,
  projectId,
  themeMode: "dark",
});

// ✅ Use WagmiProvider (not WagmiConfig)
export default function WalletProvider({ children }: { children: ReactNode }) {
  return <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>;
}
