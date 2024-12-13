import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null); // Type annotation for openMenu

  // Handle mouse enter for desktop (with type annotation for 'menu' as string)
  const handleMouseEnter = (menu: string) => {
    setOpenMenu(menu);
  };

  // Handle menu click (with type annotation for 'menu' as string)
  const handleMenuClick = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // Handle mouse leave for desktop
  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [selectedCountry, setSelectedCountry] = useState<string>("Select Country"); // Type annotation for selectedCountry

  // Handle country selection
  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setOpenMenu(null); // Close the dropdown after selecting a country
  };

  // Toggle country dropdown
  const handleToggleDropdown = () => {
    setOpenMenu(openMenu === "countryDropdown" ? null : "countryDropdown");
  };

  return (
    <section className="">
      <header className="sm:px-24 px-6 flex justify-between items-center py-4 px-6 bg-white ">
        {/* Logo Section */}
        <div className="col-12 flex justify-between">
          <div className="col-md-3">
            <div className="flex items-center space-x-2">
              <Image
                src="/assets/images/Group 17804 (1).png"
                width={120}
                height={50}
                alt="Cloud Logo"
                className=""
              />
              {/* <span className="text-xl font-semibold">Cloud</span> */}
            </div>
          </div>
          <div className="col-md-6 flex justify-center">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 gap-4 text-black font-medium">
              <a
                href="#about"
                className="hover:text-gray-900 text-black text-lg no-underline"
              >
                About
              </a>

              <Link
                href="/AllMainComponents/formation"
                className="no-underline"
              >
                <span className="hover:text-gray-900 text-lg text-black no-underline">
                  Formation
                </span>
              </Link>

              {/* Business Setup Services Dropdown */}
              <div className="relative flex space-x-8">
                {/* Dropdown 1 */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("products")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center text-lg hover:text-gray-900">
                    Products
                    <span className="ml-1 text-sm">▼</span>
                  </button>
                  {openMenu === "products" && (
                    <div className="absolute left-0 mt-2 w-[280px] bg-white shadow-md rounded-md transition-all ease-in-out">
                      <ul className="pl-5 py-0 space-y-2 mt-4">
                        <Link
                          href="/AllMainComponents/totalCompliance"
                          className=" no-underline"
                        >
                          <li className="mb-3 leading-[18px] text-[16px] font-[500] hover:text-[#000]">
                            Total Compliance <br />
                            <span className="text-[14px] font-[400] text-[#949494]">
                              Everything you need in one package
                            </span>
                          </li>
                        </Link>
                        <Link
                          href="/AllMainComponents/money"
                          className=" no-underline"
                        >
                          <li className="mb-3 leading-[18px] text-[16px] font-[500] hover:text-[#000]">
                            Cloud BSS Money
                            <br />
                            <span className="text-[14px] font-[400] text-[#949494]">
                              Move money internationally
                            </span>
                          </li>
                        </Link>
                        <Link
                          href="/AllMainComponents/bookKeeping"
                          className=" no-underline"
                        >
                          <li className="mb-3 leading-[18px] text-[16px] font-[500] hover:text-[#000]">
                            Cloud BSS Bookkeeping
                            <br />
                            <span className="text-[14px] font-[400] text-[#949494]">
                              The ultimate bookkeeping solution
                            </span>
                          </li>
                        </Link>
                        <Link
                          href="/AllMainComponents/taxes"
                          className=" no-underline"
                        >
                          <li className="mb-3 leading-[18px] text-[16px] font-[500] hover:text-[#000]">
                            Cloud BSS Taxes
                            <br />
                            <span className="text-[14px] font-[400] text-[#949494]">
                              Embrace worry-free tax filings
                            </span>
                          </li>
                        </Link>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Dropdown 2 */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("services")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center text-lg hover:text-gray-900">
                    Services
                    <span className="ml-1 text-sm">▼</span>
                  </button>
                  {openMenu === "services" && (
                    <div className="absolute left-0 mt-2 w-[280px] bg-white shadow-md rounded-md transition-all ease-in-out">
                      <ul className="pl-5 py-2 space-y-2 mt-4">
                        <li className="hover:bg-gray-100 mb-3 leading-[18px] text-[16px] font-[500] text-black">
                          Cloud BSS Bookkeeping <br />
                          <span className="text-[14px] font-[400] text-[#949494]">
                            The ultimate bookkeeping solution
                          </span>
                        </li>
                        <li className="hover:bg-gray-100 mb-3 leading-[18px] text-[16px] text-black font-[500]">
                          Cloud BSS Taxes
                          <br />
                          <span className="text-[14px] font-[400] text-[#949494]">
                            Embrace worry-free tax filings
                          </span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Dropdown 3 */}
                {/* <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("about")}
        onMouseLeave={handleMouseLeave}
      >
        <button className="flex items-center text-lg hover:text-gray-900">
          About Us
          <span className="ml-1 text-sm">▼</span>
        </button>
        {openMenu === "about" && (
          <div className="absolute left-0 mt-2 w-[280px] bg-white shadow-md rounded-md transition-all ease-in-out">
            <ul className="pl-5 py-2 space-y-2 mt-4">
              <li className="hover:bg-gray-100 mb-3 leading-[18px] text-[16px] font-[500] text-black">
                Our Story <br />
                <span className="text-[14px] font-[400] text-[#949494]">
                  Learn more about us
                </span>
              </li>
              <li className="hover:bg-gray-100 mb-3 leading-[18px] text-[16px] text-black font-[500]">
                Contact Us
                <br />
                <span className="text-[14px] font-[400] text-[#949494]">
                  Get in touch with our team
                </span>
              </li>
            </ul>
          </div>
        )}
      </div> */}
              </div>


              <Link
                href="/AllMainComponents/comparePackages"
                className=" no-underline"
              >
                <span className="hover:text-gray-900 no-underline text-black text-lg">
                  Pricing
                </span>
              </Link>
            </nav>
          </div>
          <div className="col-md-3 flex justify-end">
            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("countryDropdown")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center text-gray-600 cursor-pointer">
                  <span className="text-lg">🌐</span>
                  <span className="ml-2 font-[400]">{selectedCountry}</span>
                </div>
                {openMenu === "countryDropdown" && (
                  <ul className="absolute font-[400] pr-4 bg-white shadow-md rounded-md absolute top-[25px] right-[-20px] mt-1 py-1">
                    {["UAE", "USA", "China", "India", "Germany"].map((country) => (
                      <li
                        key={country}
                        className="px-1 py-2 hover:text-[#0073fd] cursor-pointer "
                        onClick={() => handleCountrySelect(country)}
                      >
                        {country}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <button className="px-4 py-2 bg-gray-800 font-[400] text-white w-[150px] rounded-[50px] hover:bg-gray-700">
                Log In
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
  className="md:hidden absolute right-[18px] text-gray-600 text-2xl"
  aria-label="Toggle Menu"
  onClick={toggleMenu}
>
  ☰
</button>

{/* Mobile Half-Screen Menu */}
<div
  className={`fixed top-0 left-0 min-h-[50%] w-full bg-white z-50 transform ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
    } transition-transform duration-300 ease-in-out overflow-y-auto`}
  style={{ height: isMenuOpen ? 'auto' : '50%' }} // Allow height to grow with content
>
  <button
    className="absolute top-4 right-4 text-2xl text-gray-600"
    onClick={toggleMenu}
  >
    ✕
  </button>
  <nav className="flex flex-col items-start justify-start pl-6 pt-12 space-y-4 text-gray-600 font-medium">
    <a
      href="#about"
      className="hover:text-gray-900 text-lg text-black no-underline"
    >
      About
    </a>

    <Link href="/AllMainComponents/formation" className="no-underline">
      <span className="hover:text-gray-900 text-lg text-black no-underline">
        Formation
      </span>
    </Link>

    {/* Mobile Dropdown for Business Setup Services */}
    <div className="relative flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
      {/* Dropdown 1 */}
      <div className="relative">
        <button
          className="flex items-center text-lg text-black"
          onClick={() => handleMenuClick("products")} // Mobile: Toggle dropdown
        >
          Products
          <span className="ml-1 text-sm">▼</span>
        </button>
        {openMenu === "products" && (
          <div
            className="absolute left-0 mt-2 w-[280px] bg-white shadow-md rounded-md transition-all ease-in-out z-10"
            style={{
              background: "white", // Ensuring opaque white background
              border: "1px solid #e5e5e5", // Optional: Add a border for clarity
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Drop shadow for better visibility
            }}
          >
            <ul className="pl-5 py-0 space-y-2 mt-4">
              <Link
                href="/AllMainComponents/totalCompliance"
                className=" no-underline"
              >
                <li className="hover:bg-gray-100 mb-3 leading-[18px] text-[16px] font-[500] text-black">
                  Total Compliance <br />
                  <span className="text-[14px] font-[400] text-[#949494]">
                    Everything you need in one package
                  </span>
                </li>
              </Link>
              <Link href="/AllMainComponents/money" className=" no-underline">
                <li className="hover:bg-gray-100 mb-3 leading-[18px] text-[16px] text-black font-[500]">
                  Cloud BSS Money
                  <br />
                  <span className="text-[14px] font-[400] text-[#949494]">
                    Move money internationally
                  </span>
                </li>
              </Link>
              <Link href="/AllMainComponents/bookKeeping" className=" no-underline">
                <li className="hover:bg-gray-100 mb-3 leading-[18px] text-[16px] text-black font-[500]">
                  Cloud BSS Bookkeeping
                  <br />
                  <span className="text-[14px] font-[400] text-[#949494]">
                    The ultimate bookkeeping solution
                  </span>
                </li>
              </Link>
              <Link href="/AllMainComponents/taxes" className=" no-underline">
                <li className="hover:bg-gray-100 mb-3 leading-[18px] text-black text-[16px] font-[500]">
                  Cloud BSS Taxes
                  <br />
                  <span className="text-[14px] font-[400] text-[#949494]">
                    Embrace worry-free tax filings
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>

      {/* Dropdown 2 */}

    </div>
    <Link
      href="/AllMainComponents/comparePackages"
      className=" no-underline"
    >
      <span className="hover:text-gray-900 text-lg text-black no-underline">
        Pricing
      </span>
    </Link>
    <div
      className="relative"
      onMouseEnter={() => handleMouseEnter("countryDropdown")}
      onMouseLeave={handleMouseLeave}
      onClick={handleToggleDropdown} // For mobile devices
    >
      <div className="flex items-center text-gray-600 cursor-pointer">
        <span className="text-lg">🌐</span>
        <span className="ml-2 font-[400]">{selectedCountry}</span>
      </div>

      {openMenu === "countryDropdown" && (
        <ul className="absolute font-[400] bg-white shadow-md rounded-md mt-2 py-1 w-[200px] md:w-[280px] z-50">
          {["UAE", "USA", "China", "India", "Germany"].map((country) => (
            <li
              key={country}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleCountrySelect(country)}
            >
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>

    <button className="px-4 py-2 mb-4 w-[100px] bg-gray-800 text-white rounded-[50px] hover:bg-gray-700 mt-4">
      Log In
    </button>
  </nav>
</div>

      </header>
    </section>
  );
};

export default Header;
