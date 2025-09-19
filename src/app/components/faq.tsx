export default function FaqSection() {
  const faqs = [
    {
      question: "Where are the images for the punks stored?",
      answer:
        "When originally released, the actual images of the punks were too large to store on the blockchain, so we took a hash of the composite image of all the punks and embedded it into the contract. You can verify that the punks being managed by the Ethereum contract are the True Official Genuine CryptoPunks by calculating an SHA256 hash on the cryptopunks image and comparing it to the hash stored in the contract. Since then, due to some clever compression ideas and some help from friends of the punks we have managed to put the entire image and attribute data fully on chain. You can read more about the mechanisms and details of the process in the announcement blog post.",
    },
    {
      question: "Are the punks an ERC-721 token?",
      answer:
        "No. The CryptoPunks pre-date the ERC-721 standard and are a custom contract, that means it doesn't comply with any standards. They are almost an ERC20 token. We support the methods that provide your balance so you can watch CryptoPunks as a token in your wallet and see how many you own. None of the other methods are the same since you're not transferring a simple balance, but need to reference which specific Punk you want to work with.",
    },
    {
      question: "Where does the market data on this site come from?",
      answer:
        "The prices, bids and sales you see on this site are loaded from the Cryptopunks contract on the Ethereum blockchain. Because the Cryptopunks pre-date the ERC721 standard (and all third party NFT marketplaces) we also needed to write a market in the punks, that could be transacted. We have no control over the contract governing this market and have no access to any additional data beyond what the blockchain provides. In fact, anyone else could write a web front end for it.",
    },
    {
      question: "Do you charge any fees for transactions?",
      answer:
        "No. We charge no fees for Cryptopunks transacted through the built-in market beyond the ones charged by Ethereum (gas). The contract source and more technical details are available on Github.",
    },
  ];

  return (
    <div>

      <section className="bg-black text-white py-12 lg:py-20 rounded-t-3xl lg:rounded-t-5xl w-full px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col xl:flex-row justify-between gap-8 lg:gap-16">

            <div className="flex-shrink-0">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-8 xl:mb-0">
                How do I get a punk?
              </h2>
            </div>


            <div className="flex-1 max-w-4xl">
              <div className="relative">
     
                <div className="hidden sm:block absolute left-5 top-16 bottom-20 w-px bg-gray-600"></div>

    
                <div className="flex items-start gap-4 sm:gap-6 mb-12 lg:mb-16 relative">
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black border-2 border-gray-600 flex-shrink-0">
                    <span className="text-sm lg:text-base">1</span>
                  </div>

                  <div className="flex flex-col gap-3 lg:gap-4 flex-1">
                    <span className="text-4xl lg:text-6xl">🦊</span>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-medium">
                      Download and install MetaMask
                    </h3>
                    <p className="text-base lg:text-lg leading-relaxed text-gray-300 max-w-2xl">
                      Download and install a Chrome browser plugin called{" "}
                      <a href="#" className="underline hover:text-white transition-colors">
                        MetaMask
                      </a>. This will allow websites (that you authorise) access to your Ethereum account.
                    </p>
                    <button className="w-fit px-4 lg:px-6 py-2 lg:py-3 rounded-full border border-gray-400 text-base lg:text-lg hover:border-gray-300 hover:bg-gray-900 transition-colors">
                      Download MetaMask
                    </button>
                  </div>
                </div>

      
                <div className="flex items-start gap-4 sm:gap-6 mb-12 lg:mb-16 relative">
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black border-2 border-gray-600 flex-shrink-0">
                    <span className="text-sm lg:text-base">2</span>
                  </div>

                  <div className="flex flex-col gap-3 lg:gap-4 flex-1">
                    <span className="text-4xl lg:text-6xl">💎</span>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-medium">
                      Buy some Ethereum
                    </h3>
                    <p className="text-base lg:text-lg leading-relaxed text-gray-300 max-w-2xl">
                      If you made a new account, buy some Ethereum. The MetaMask plugin
                      has a button that will allow you to buy Ether from Coinbase.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-6 relative">
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black border-2 border-gray-600 flex-shrink-0">
                    <span className="text-sm lg:text-base">3</span>
                  </div>

                  <div className="flex flex-col gap-3 lg:gap-4 flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-medium">
                      Start bidding, buying and selling
                    </h3>
                    <p className="text-base lg:text-lg leading-relaxed text-gray-300 max-w-2xl">
                      Once you have the plugin installed, this website will recognise it
                      and add buttons that allow you to bid on, buy and sell punks
                      directly in the interface.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white px-4 sm:px-6 lg:px-10 py-16 lg:py-24 w-full">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-12 lg:mb-24">
            Details and FAQ
          </h2>
          
          <div className="divide-y divide-gray-700">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 py-6 lg:py-8"
              >
                <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl mb-4 lg:mb-0">
                  {faq.question}
                </h3>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}