import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HeaderUAE = () => {
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

  const [selectedCountry, setSelectedCountry] = useState<string>("UAE"); // Type annotation for selectedCountry

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
      <header className="sm:px-24 px-6 sm:flex  justify-between items-center py-4 px-6 bg-white ">
        {/* Logo Section */}
        <div className="col-12 sm:flex  justify-between">
          <div className="col-md-3">
            <div className="sm:flex  items-center space-x-2">
              <Image
                src="/assets/images/Group 17804.svg"
                width={140}
                height={80}
                alt="no-img"
              />

              {/* <span className="text-xl font-semibold">Cloud</span> */}
            </div>
          </div>
          <div className="col-md-6 sm:flex  justify-center items-center">
            {/* Desktop Navigation */}
            <nav className="hidden md:sm:flex  space-x-6 gap-12 text-black font-medium">
              <a
                href="#about"
                className="hover:text-gray-900 text-black text-lg no-underline"
              >
                About
              </a>



              {/* Business Setup Services Dropdown */}
              <div className="relative sm:flex  space-x-8">
                {/* Dropdown 1 */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("products")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="sm:flex  items-center text-lg text-black group">
                    Business Setup Services
                    <span className="ml-1 text-sm icon icon-tabler icons-tabler-filled icon-tabler-caret-down transform transition-transform duration-300 group-hover:rotate-180">

                      <Image
                        src="/assets/images/caret-up.svg"
                        width={14}
                        height={14}
                        alt="no-img"
                      />
                    </span>
                  </button>

                  {openMenu === "products" && (
                    <div className="absolute left-[-2] top-[20px] py-1 mt-2 w-[330px] bg-white shadow-md rounded-md transition-all ease-in-out">
                      <ul className="pl-5 py-0 space-y-2 mt-4">
                        {/* <Link
                          href="/US/totalCompliance"
                          className="no-underline menuValue"
                        > */}
                        <div className="sm:flex  menuValue justify-between items-center mb-3">

                          <li className=" leading-[18px] text-[17px] text-[#000] hover:text-[#0462f2] font-[500]">
                            Company Formation Costs
                            <div className="border menuItem absolute top-[25px] left-[330px] w-[180px] py-1 rounded-[12px]">
                              <ul className="">
                                <Link href="/UAE/mainlandcost" className="no-underline">
                                  <li className="text-[#000] hover:text-[#0462f2] mb-3 text-[15px] mt-2 text-[15px]">Mainland Cost</li>
                                </Link>
                                <Link href="/UAE/companyformationcosts" className="no-underline">
                                  <li className="text-[#000] hover:text-[#0462f2] mb-3 text-[15px]">Free Zone Cost</li>
                                </Link>
                                <li className="text-[#000] hover:text-[#0462f2] mb-3 text-[15px]">Abu Dhabi Cost</li>
                              </ul>
                            </div>
                          </li>
                          <span className="pr-3">
                            <Image
                              src="/assets/images/icon.svg"
                              width={7}
                              height={11}
                              alt="no-img"
                            />
                          </span>
                        </div>


                        <div className="sm:flex  menuValue justify-between items-center mb-3">

                          <li className=" leading-[18px] text-[17px] text-[#000] hover:text-[#0462f2] font-[500]">
                            Business License in Dubai
                            <div className="border menuItem absolute top-[65px] left-[330px] w-[280px] py-1 rounded-[12px]">
                              <ul className="">
                                <li className="text-[#000] hover:text-[#0462f2] mb-3 text-[15px] mt-2 text-[15px]">Professional License in Dubai</li>
                                <li className="text-[#000] hover:text-[#0462f2] mb-3 text-[15px]">Industrial License in Dubai</li>
                                <li className="text-[#000] hover:text-[#0462f2] mb-3 text-[15px]">Commerical License in Dubai</li>
                                <li className="text-[#000] hover:text-[#0462f2] mb-3 text-[15px]">Tourism License in Dubai</li>

                              </ul>
                            </div>
                          </li>
                          <span className="pr-3">
                            <Image
                              src="/assets/images/icon.svg"
                              width={7}
                              height={11}
                              alt="no-img"
                            />
                          </span>
                        </div>


                        <div className="sm:flex  justify-between menuValue items-center mb-3">

                          <li className=" leading-[18px] text-[17px] text-[#000] hover:text-[#0462f2] font-[500]">
                            Visa Services in Dubai
                            <div className="border menuItem absolute top-[95px] left-[330px] w-[180px] py-1 rounded-[12px]">
                              <ul className="">
                                <li className="text-[#000] hover:text-[#0462f2] mb-3 text-[15px] mt-2 text-[15px]">Residence Visa</li>
                                <li className="text-[#000] hover:text-[#0462f2] mb-3 text-[15px]">Investor Visa</li>
                                <li className="text-[#000] hover:text-[#0462f2] mb-3 text-[15px]">Freelance Visa</li>
                                <li className="text-[#000] hover:text-[#0462f2] mb-3 text-[15px]">Business Visa</li>
                              </ul>
                            </div>
                          </li>
                          <span className="pr-3">
                            <Image
                              src="/assets/images/icon.svg"
                              width={7}
                              height={11}
                              alt="no-img"
                            />
                          </span>
                        </div>


                        <div className="sm:flex  menuValue justify-between items-center mb-3">

                          <li className=" leading-[18px] text-[17px] text-[#000] hover:text-[#0462f2] font-[500]">
                            Company Formation Services
                            <div className="border menuItem absolute top-[130px] left-[330px] w-[290px] py-1 rounded-[12px]">
                              <ul className="">
                                <li className="text-[#000] hover:text-[#0462f2] mb-3 text-[15px] mt-2 text-[15px] text-[15px]">Free Zone Company Formation</li>
                                <li className="text-[#000] hover:text-[#0462f2] mb-3 text-[15px]">Investor Visa</li>
                                <li className="text-[#000] hover:text-[#0462f2] mb-3 text-[15px]">IFZA Company Formation</li>
                                <li className="text-[#000] hover:text-[#0462f2] mb-3 text-[15px]">Ras AI Khaimah Company Formation</li>
                                <li className="text-[#000] hover:text-[#0462f2] mb-3 text-[15px]">Ajman Company Formation</li>
                                <li className="text-[#000] hover:text-[#0462f2] mb-3 text-[15px]">Company Formation Abu Dhabi</li>
                                <li className="text-[#000] hover:text-[#0462f2] mb-3 text-[15px]">Sharjah Company Formation</li>

                              </ul>
                            </div>
                          </li>
                          <span className="pr-3">
                            <Image
                              src="/assets/images/icon.svg"
                              width={7}
                              height={11}
                              alt="no-img"
                            />
                          </span>
                        </div>


                        <li className="mb-3 menuValue leading-[18px] text-[17px] text-[#000] font-[500] hover:text-[#0462f2]">
                          Investor Visa Services

                        </li>


                        <div className="sm:flex  menuValue justify-between items-center mb-3">

                          <li className=" leading-[18px] text-[17px] text-[#000] hover:text-[#0462f2] font-[500]">
                            Mainland Company Formation
                            <div className="border menuItem absolute top-[195px] left-[330px] w-[330px] py-1 rounded-[12px]">
                              <ul className="">
                                <li className="text-[#000] hover:text-[#0462f2] mb-3 text-[15px] mt-2 text-[15px]">Ajman Mainland Company Formation</li>
                                <li className="text-[#000] hover:text-[#0462f2] mb-3 text-[15px] text-[15px]">Rak Mainland</li>
                                <li className="text-[#000] hover:text-[#0462f2] mb-3 text-[15px]">Abu Dhabi Cost</li>
                              </ul>
                            </div>
                          </li>
                          <span className="pr-3">
                            <Image
                              src="/assets/images/icon.svg"
                              width={7}
                              height={11}
                              alt="no-img"
                            />
                          </span>
                        </div>


                        <li className="mb-3 leading-[18px] text-[17px] text-[#000] font-[500] menuValue hover:text-[#0462f2]">
                          Rental Office/Business Centers

                        </li>

                        <li className="mb-3 leading-[18px] text-[17px] text-[#000] font-[500] menuValue hover:text-[#0462f2]">
                          Taxation & Vat Services

                        </li>


                        <li className="mb-3 leading-[18px] text-[17px] text-[#000] font-[500] menuValue hover:text-[#0462f2]">
                          Company Registration in Dubai

                        </li>


                        <li className="mb-3 leading-[18px] text-[17px] text-[#000] font-[500] menuValue hover:text-[#0462f2]">
                          LLC Company

                        </li>



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
                  <button className="sm:flex  items-center text-lg hover:text-gray-900 group">
                    Blogs
                    <span className="ml-1 text-sm icon icon-tabler icons-tabler-filled icon-tabler-caret-down transform transition-transform duration-300 group-hover:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-caret-up"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z" />
                      </svg>
                    </span>
                  </button>

                  {openMenu === "services" && (
                    <div className="absolute left-0 mt-2 w-[280px] bg-white shadow-md rounded-md transition-all ease-in-out">
                      <ul className="pl-5 py-2 space-y-2 mt-4">
                        <li className="hover:bg-gray-100 mb-3 leading-[18px] text-[17px] font-[500] text-black">
                          Cloud BSS Bookkeeping <br />
                          <span className="text-[15px] font-[400] text-[#949494]">
                            The ultimate bookkeeping solution
                          </span>
                        </li>
                        <li className="hover:bg-gray-100 mb-3 leading-[18px] text-[17px] text-black font-[500]">
                          Cloud BSS Taxes
                          <br />
                          <span className="text-[15px] font-[400] text-[#949494]">
                            Embrace worry-free tax filings
                          </span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>


              </div>


              <span className="hover:text-gray-900 no-underline text-black text-lg">
                Contacts
              </span>

            </nav>
          </div>
          <div className="col-md-3 sm:flex  justify-end">
            {/* Action Buttons */}
            <div className="hidden md:sm:flex  items-center space-x-4">
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("countryDropdown")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="sm:flex  text-gray-600 cursor-pointer">
                  <Image
                    src="/assets/images/dubai-flag.png"
                    width={25}
                    height={10}
                    alt="no-img"
                    className="rounded-[50px]"
                  />
                  <span className="ml-2 font-[400]">{selectedCountry}</span>
                </div>
                {openMenu === "countryDropdown" && (
                  <ul className="absolute font-[400] pr-14 bg-white shadow-md rounded-md top-[20px] right-[-15px] mt-1 py-1">
                    <li className="px-1 py-2 hover:text-[#0073fd] cursor-pointer">
                      <Link href="/UAE" className="no-underline hover:text-black">
                        <span className="text-inherit sm:flex  gap-3  text-[17px] font-[400]">
                          <Image
                            src="/assets/images/UAE.svg"
                            width={25}
                            height={10}
                            alt="no-img"
                            className="rounded-[50px]"
                          />
                          UAE</span>
                      </Link>
                    </li>
                    <li className="px-1 py-2 hover:text-[#0073fd] cursor-pointer">
                      <Link href="/" className="no-underline hover:text-black">
                        <span className="text-inherit sm:flex  gap-3 ">
                          <Image
                            src="/assets/images/United States (US).svg"
                            width={25}
                            height={10}
                            alt="no-img"
                            className="rounded-[50px]"
                          />
                          US</span>
                      </Link>
                    </li>
                    <li className="px-1 py-2 hover:text-[#0073fd] cursor-pointer">
                      <Link href="/UK" className="no-underline hover:text-black">
                        <span className="text-inherit sm:flex  gap-3">
                          <Image
                            src="/assets/images/United Kingdom (UK).svg"
                            width={25}
                            height={10}
                            alt="no-img"
                            className="rounded-[50px]"
                          />
                          UK</span>
                      </Link>
                    </li>

                  </ul>
                )}
              </div>
              <button className="px-4 py-1 bg-gray-800 font-[400] text-white w-[150px] rounded-[50px] hover:bg-gray-700">
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
          <nav className="sm:flex  sm:flex -col items-start justify-start pl-6 pt-12 space-y-4 text-gray-600 font-medium">
            <a
              href="#about"
              className="hover:text-gray-900 text-lg text-black no-underline"
            >
              About
            </a>

            <Link href="/US/formation" className="no-underline">
              <span className="hover:text-gray-900 text-lg text-black no-underline">
                Formation
              </span>
            </Link>

            {/* Mobile Dropdown for Business Setup Services */}
            <div className="relative sm:flex  sm:flex -col md:sm:flex -row space-y-4 md:space-y-0 md:space-x-8">
              {/* Dropdown 1 */}
              <div className="relative">
                <button
                  className="sm:flex  items-center text-lg text-black"
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
                        href="/US/totalCompliance"
                        className=" no-underline"
                      >
                        <li className="hover:bg-gray-100 mb-3 leading-[18px] text-[17px] font-[500] text-black">
                          Total Compliance <br />
                          <span className="text-[15px] font-[400] text-[#949494]">
                            Everything you need in one package
                          </span>
                        </li>
                      </Link>
                      <Link href="/US/money" className=" no-underline">
                        <li className="hover:bg-gray-100 mb-3 leading-[18px] text-[17px] text-black font-[500]">
                          Cloud BSS Money
                          <br />
                          <span className="text-[15px] font-[400] text-[#949494]">
                            Move money internationally
                          </span>
                        </li>
                      </Link>
                      <Link href="/US/bookKeeping" className=" no-underline">
                        <li className="hover:bg-gray-100 mb-3 leading-[18px] text-[17px] text-black font-[500]">
                          Cloud BSS Bookkeeping
                          <br />
                          <span className="text-[15px] font-[400] text-[#949494]">
                            The ultimate bookkeeping solution
                          </span>
                        </li>
                      </Link>
                      <Link href="/US/taxes" className=" no-underline">
                        <li className="hover:bg-gray-100 mb-3 leading-[18px] text-black text-[17px] font-[500]">
                          Cloud BSS Taxes
                          <br />
                          <span className="text-[15px] font-[400] text-[#949494]">
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
              href="/US/comparePackages"
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
              <div className="sm:flex  items-center text-gray-600 cursor-pointer">
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

export default HeaderUAE;
