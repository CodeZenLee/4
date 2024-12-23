import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Logo and Description */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <Image src="logo.svg" alt="Logo" width={50} height={50} className="mb-2 bg-white" />
          <p className="text-sm text-gray-400 py-2">
            Custom Websites Built for Your Business Goals
          </p>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="flex space-x-6 text-sm">
          <a href="/." className="hover:text-gray-400">Home</a>
          <a href="/About" className="hover:text-gray-400">About</a>
          <a href="/Services" className="hover:text-gray-400">Services</a>
          <Link href="/#form" className="hover:text-gray-400">Contact</Link>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/facebook.svg" alt="Facebook" width={20} height={20} className="bg-gray-300 hover:bg-blue-500"/>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/x.svg" alt="Twitter" width={20} height={20} className="bg-gray-300 hover:bg-white"/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} className="bg-gray-300 hover:bg-fuchsia-500"/>
          </a>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} BlackBox Designs. All rights reserved.
      </div>
    </footer>
  );
}
