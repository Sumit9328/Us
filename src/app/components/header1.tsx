import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeaderMain = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle the menu toggle

  return (
    <header className="text-white p-4 bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/images/Group 17660.png" // Replace with your logo image path
            alt="Logo"
            width={100}
            height={100}
          />
          <h1 className="text-xl font-semibold">Your Brand</h1>
        </div>

        {/* Center - Navigation Links for larger screens */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#home" className="hover:text-gray-400">Home</Link>
          <Link href="#about" className="hover:text-gray-400">About</Link>
          <Link href="#all" className="hover:text-gray-400">All</Link>
          <Link href="#message" className="hover:text-gray-400">Message</Link>
        </nav>

        {/* Right Side - Login Input with Image for larger screens */}
        <div className="hidden md:flex items-center space-x-3">
          <input
            type="text"
            placeholder="Login"
            className="px-4 py-2 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
          />
          <Image
            src="/path-to-your-image.png" // Replace with your icon/image for login
            alt="Login Icon"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </div>

        {/* Hamburger Menu for mobile screens */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4 absolute top-16 left-0 right-0 z-50">
          <div className="flex flex-col space-y-4">
            <Link href="#home" className="hover:text-gray-400">Home</Link>
            <Link href="#about" className="hover:text-gray-400">About</Link>
            <Link href="#all" className="hover:text-gray-400">All</Link>
            <Link href="#message" className="hover:text-gray-400">Message</Link>

            {/* Login Input and Search */}
            <div className="flex flex-col items-center space-y-4 mt-4">
              <input
                type="text"
                placeholder="Login"
                className="px-4 py-2 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none w-4/5"
              />
              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-4 py-2 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
                />
                <Image
                  src="/assets/images/menu-2.png" // Replace with your icon/image for login
                  alt="Login Icon"
                  width={30}
                  height={30}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderMain;
