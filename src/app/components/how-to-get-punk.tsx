export default function HowToGetPunk() {
  return (
    <section className=" flex flex-row justify-between bg-black mt-20 text-white px-16 py-20 rounded-t-[40px] ">
      <h2 className="text-5xl font-medium mb-16 pt-12">How do I get a punk?</h2>

      <div className="relative flex flex-col pt-12">
        <div className="absolute left-5 top-15 bottom-18 w-px bg-gray-600 "></div>

        <div className="flex items-start gap-6 mb-16 relative ">
          <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black border-2 border-gray-600">
            <span>1</span>
          </div>

          <div className="flex flex-col gap-4">
              <span className="text-6xl">🦊</span>
              <h3 className="text-[22px] font-medium">Download and install MetaMask</h3>   
            <p className="w-[586px] text-[19px] leading-tight">
              Download and install a Chrome browser plugin called{" "}
              <a href="#" className="underline">MetaMask</a>. This
              will allow websites (that you authorise) access to your Ethereum
              account.
            </p>
            <button className="w-[225px] h-[49px] rounded-[100px] border border-[#b0a9a9] px-4 py-2 text-[18px]">
              Download MetaMask
            </button>
          </div>
        </div>

        <div className="flex items-start gap-6 mb-16 relative">
          <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black border-2 border-gray-600">
            <span>2</span>
          </div>

          <div className="flex flex-col gap-4">
          
              <span className="text-6xl">💎</span>
              <h3 className="text-[22px] font-medium">Buy some Ethereum</h3>
           
            <p className="w-[586px] text-[19px] leading-tight">
              If you made a new account, buy some Ethereum. The MetaMask plugin
              has a button that will allow you to buy Ether from Coinbase.
            </p>
          </div>
        </div>

      
        <div className="flex items-start gap-6 relative">
          <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black border-2 border-gray-600">
            <span>3</span>
          </div>

          <div className="flex flex-col gap-4">
              <h3 className="text-[22px] font-medium">Start bidding, buying and selling</h3>
           
            <p className="w-[586px] text-[19px] leading-tight">
              Once you have the plugin installed, this website will recognise it
              and add buttons that allow you to bid on, buy and sell punks
              directly in the interface.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
