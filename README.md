NFT Portfolio Dashboard

An interactive NFT portfolio app built with Next.js 14, React Query, and Wagmi + Web3Modal.
It showcases trending collections, largest sales, and recent transactions — with wallet connect & mint functionality.

✨ Features

🔗 Connect Wallet (via Wagmi + Web3Modal)

📊 Largest Sales & Top Collections (fetched live from OpenSea API)

💸 Recent Transactions (via OpenSea Events endpoint)

📰 News Section (fetched from Dev.to API) with tags nft & crypto

🎨 Responsive & sleek UI from custom Figma design

🛠 Tech Stack

Framework: Next.js 14 (App Router)

Data Fetching: @tanstack/react-query

Blockchain Tools: Wagmi
 + Web3Modal

APIs:

OpenSea API
 → sales, collections, events

Dev.to API
 → crypto & NFT-related blog posts

⚡ Installation & Setup

Clone the repo:

git clone https://github.com/YOUR_USERNAME/nft-portfolio.git
cd nft-portfolio


Install dependencies:

npm install


Create a .env.local file in the root with:

NEXT_PUBLIC_PROJECT_ID=your_web3modal_project_id
OPENSEA_API_KEY=your_opensea_api_key


Run the dev server:

npm run dev

Open http://localhost:3000
 🚀


📚 API Endpoints (Server Routes)

/api/opensea-sales → fetches largest NFT sales

/api/opensea-collections → fetches top collections

/api/opensea-tx → fetches recent transactions (transfer events)

/api/news → fetches Dev.to NFT & crypto blog posts