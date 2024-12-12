import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBusinessSetupServicesOpen, setIsBusinessSetupServicesOpen] = useState(false); // For Business Setup Services dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleBusinessSetupServices = () => {
    setIsBusinessSetupServicesOpen(!isBusinessSetupServicesOpen);
  };



  return (
    <section className="">

      <header className="sm:px-24 px-6 flex justify-between items-center py-4 px-6 bg-white shadow-md">
        {/* Logo Section */}
        <div className="col-12 flex justify-between">
          <div className="col-md-3">
            <div className="flex items-center space-x-2">
              <Image src="/assets/images/Group 17804 (1).png" width={120} height={50} alt="Cloud Logo" className="" />
              {/* <span className="text-xl font-semibold">Cloud</span> */}
            </div>
          </div>
          <div className="col-md-6 flex justify-center">

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 gap-4 text-black font-medium">
              <a href="#about" className="hover:text-gray-900 text-black text-lg no-underline">About</a>
              
            <Link href="/AllMainComponents/formation" className="no-underline">
            <span className="hover:text-gray-900 text-lg text-black no-underline">Formation</span>
            </Link>

              {/* Business Setup Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleBusinessSetupServices}
                  className="flex items-center text-lg hover:text-gray-900"
                >
                  Products
                  <span className="ml-1 text-sm">▼</span>
                </button>

                {/* Nested Dropdown for Company Formation Services */}
                {isBusinessSetupServicesOpen && (
                  <div className="absolute left-0 mt-2 w-[280px] bg-white shadow-md rounded-md transition-all ease-in-out">
                    <ul className="pl-5 py-2 space-y-2 mt-4">
                      <Link href="/AllMainComponents/totalCompliance" className=" no-underline">
                        <li className="hover:bg-gray-100 mb-3 leading-[18px] text-[16px] font-[500] text-black">Total Compliance <br />
                          <span className="text-[14px] font-[400] text-[#949494]">Everything you need in one package</span>
                        </li>
                      </Link>
                      <Link href="/AllMainComponents/money" className=" no-underline">
                        <li className="hover:bg-gray-100 mb-3 leading-[18px] text-[16px] text-black font-[500]">Cloud BSS Money<br />
                          <span className="text-[14px] font-[400] text-[#949494]">Move money internationally</span>
                        </li>
                      </Link>
                      <Link href="/AllMainComponents/bookKeeping" className=" no-underline">
                        <li className="hover:bg-gray-100 mb-3 leading-[18px] text-[16px] text-black font-[500]">Cloud BSS Bookkeeping<br />
                          <span className="text-[14px] font-[400] text-[#949494]">The ultimate bookkeeping solution</span>
                        </li>
                      </Link>
                      <Link href="/AllMainComponents/taxes" className=" no-underline">
                        <li className="hover:bg-gray-100 mb-3 leading-[18px] text-black text-[16px] font-[500]">Cloud BSS Taxes<br />
                          <span className="text-[14px] font-[400] text-[#949494]">Embrace worry-free tax filings</span>
                        </li>
                      </Link>
                    </ul>
                  </div>
                )}
              </div>
              <Link href="/AllMainComponents/comparePackages" className=" no-underline">
                <span className="hover:text-gray-900 no-underline text-black text-lg">Pricing</span>
              </Link>
            </nav>
          </div>
          <div className="col-md-3 flex justify-end">
            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center text-gray-600">
                <span className="text-lg">🌐</span>
                <span className="ml-2 font-[400]">UAE</span>
              </div>
              <button className="px-4 py-2 bg-gray-800 font-[400] text-white w-[150px] rounded-[50px] hover:bg-gray-700">
                Log In
              </button>
            </div>
          </div>


        </div>





        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-600 text-2xl"
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Mobile Half-Screen Menu */}
        <div
  className={`fixed top-0 left-0 min-h-[50%] w-full bg-white z-50 transform ${
    isMenuOpen ? "translate-y-0" : "-translate-y-full"
  } transition-transform duration-300 ease-in-out overflow-y-auto`}
>

          <button
            className="absolute top-10 right-4 text-2xl text-gray-600"
            onClick={toggleMenu}
          >
            ✕
          </button>
          <nav className="flex flex-col items-start justify-start pl-6 pt-10 space-y-4 text-gray-600 font-medium">
          <div className="flex items-center space-x-2">
              <Image src="/assets/images/Group 17804 (1).png" width={120} height={50} alt="Cloud Logo" className="" />
              {/* <span className="text-xl font-semibold">Cloud</span> */}
            </div>
            <a href="#about" className="hover:text-gray-900 text-lg text-black no-underline">About</a>
            

            <Link href="/AllMainComponents/formation" className="no-underline">
            <span className="hover:text-gray-900 text-lg text-black no-underline">Formation</span>
            </Link>

            {/* Mobile Dropdown for Business Setup Services */}
            <div className="sm:w-full ">
              <button
                onClick={toggleBusinessSetupServices}
                className="hover:text-gray-900 text-black text-lg flex items-center"
              >
                Products
                <span className="ml-1 text-sm">▼</span>
              </button>
              {isBusinessSetupServicesOpen && (
                <div className="mt-2 sm:border-none border shadow-md sm:border-none border-white px-2 py-2 sm:space-y-2 sm:pl-4 max-h-[50vh] overflow-y-auto rounded-[10px]">
                  <ul className="pl-5 py-2 space-y-2 mt-4">
                      <Link href="/AllMainComponents/totalCompliance" className=" no-underline">
                        <li className="hover:bg-gray-100 mb-3 leading-[18px] text-[16px] font-[500] text-black">Total Compliance <br />
                          <span className="text-[14px] font-[400] text-[#949494]">Everything you need in one package</span>
                        </li>
                      </Link>
                      <Link href="/AllMainComponents/money" className=" no-underline">
                        <li className="hover:bg-gray-100 mb-3 leading-[18px] text-[16px] text-black font-[500]">Cloud BSS Money<br />
                          <span className="text-[14px] font-[400] text-[#949494]">Move money internationally</span>
                        </li>
                      </Link>
                      <Link href="/AllMainComponents/bookKeeping" className=" no-underline">
                        <li className="hover:bg-gray-100 mb-3 leading-[18px] text-[16px] text-black font-[500]">Cloud BSS Bookkeeping<br />
                          <span className="text-[14px] font-[400] text-[#949494]">The ultimate bookkeeping solution</span>
                        </li>
                      </Link>
                      <Link href="/AllMainComponents/taxes" className=" no-underline">
                        <li className="hover:bg-gray-100 mb-3 leading-[18px] text-black text-[16px] font-[500]">Cloud BSS Taxes<br />
                          <span className="text-[14px] font-[400] text-[#949494]">Embrace worry-free tax filings</span>
                        </li>
                      </Link>
                    </ul>
                </div>
              )}
            </div>
<Link href="/AllMainComponents/comparePackages" className=" no-underline">
            <span className="hover:text-gray-900 text-lg text-black no-underline">Pricing</span>
</Link>
            <div className="flex items-center mt-4 text-gray-600">
              <span className="text-lg">🌐</span>
              <span className="ml-2">UAE</span>
            </div>
            <button className="px-4 py-2 w-[100px] bg-gray-800 text-white rounded-[50px] hover:bg-gray-700 mt-4">
              Log In
            </button>
          </nav>
        </div>
      </header>
    </section>
  );
};

export default Header;









