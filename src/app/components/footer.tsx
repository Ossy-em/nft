import { FaTwitter, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-10 py-8 w-screen">

      <div className="flex flex-col md:flex-row items-center justify-between pb-6 overflow-x-scroll">
        <h2 className="text-white font-bold text-lg mb-4 md:mb-0">
          CryptoPunks
        </h2>

        <nav className="flex gap-6 mb-4 md:mb-0 text-[17px] text-[#ddd9d9]">
          <a href="#" className="hover:text-gray-400">
            Buy a Punk
          </a>
          <a href="#" className="hover:text-gray-400">
            View Full Collection
          </a>
        </nav>

        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-400">
            <FaTwitter size={28} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaDiscord size={28} />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 my-4"></div>

      <div className="flex flex-col md:flex-row items-center justify-center text-center text-sm gap-6">
        <p>© 2021 CryptoPunks. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white">
            Cookies Settings
          </a>
        </div>
      </div>
    </footer>
  );
}
