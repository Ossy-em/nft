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
        "No. The CryptoPunks pre-date the ERC-721 standard and are a custom contract, that means it doesn’t comply with any standards. They are almost an ERC20 token. We support the methods that provide your balance so you can watch CryptoPunks as a token in your wallet and see how many you own. None of the other methods are the same since you’re not transferring a simple balance, but need to reference which specific Punk you want to work with.",
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
    <section className="bg-black mt-3 text-white px-10 py-20 rounded-t-[40px] w-screen">
      <h2 className="text-[54px] font-medium mb-24">Details and FAQ</h2>
      <div className="divide-y divide-gray-700 pr-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 py-8"
          >
            <h3 className="font-semibold text-[21px]">{faq.question}</h3>
            <p className="text-gray-300 w-[606px] text-[18px] leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
