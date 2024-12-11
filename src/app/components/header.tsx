import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBusinessSetupServicesOpen, setIsBusinessSetupServicesOpen] = useState(false); // For Business Setup Services dropdown
  const [isCompanyFormationDropdownOpen, setIsCompanyFormationDropdownOpen] = useState(false); // For Company Formation Services dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleBusinessSetupServices = () => {
    setIsBusinessSetupServicesOpen(!isBusinessSetupServicesOpen);
  };

  const toggleCompanyFormationDropdown = () => {
    setIsCompanyFormationDropdownOpen(!isCompanyFormationDropdownOpen);
  };

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Cloud Logo" className="h-8 w-8" />
        <span className="text-xl font-semibold">Cloud</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
        <a href="#about" className="hover:text-gray-900">About</a>
        <a href="#formation" className="hover:text-gray-900">Formation</a>

        {/* Business Setup Services Dropdown */}
        <div className="relative">
          <button
            onClick={toggleBusinessSetupServices}
            className="flex items-center hover:text-gray-900"
          >
            Business Setup Services
            <span className="ml-1 text-sm">▼</span>
          </button>

          {/* Nested Dropdown for Company Formation Services */}
          {isBusinessSetupServicesOpen && (
            <div className="absolute left-0 mt-2 w-96 bg-white shadow-md rounded-md transition-all ease-in-out">
              <ul className="pl-4 py-2 space-y-2">
                <li className="hover:bg-gray-100">Company Formation Costs</li>
                <li className="hover:bg-gray-100">Business License in Dubai</li>
                <li className="hover:bg-gray-100">Visa Services in Dubai</li>
                <li className="hover:bg-gray-100">Investor Visa Services</li>
                <li className="hover:bg-gray-100">Mainland Company Formation</li>
                <li className="hover:bg-gray-100">Rental Office/Business Centers</li>
                <li className="hover:bg-gray-100">Taxation & Vat Services</li>
                <li className="hover:bg-gray-100">Company Registration in Dubai</li>
                <li className="hover:bg-gray-100">LLC Company</li>

                {/* Company Formation Services Dropdown */}
                <div className="relative">
                  <button
                    onClick={toggleCompanyFormationDropdown}
                    className="flex items-center hover:text-gray-900"
                  >
                    Company Formation Services
                    <span className="ml-1 text-sm">▼</span>
                  </button>

                  {isCompanyFormationDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-96 bg-white shadow-md rounded-md transition-all ease-in-out">
                      <ul className="pl-4 py-2 space-y-2">
                        <li className="hover:bg-gray-100">Free Zone Company Formation</li>
                        <li className="hover:bg-gray-100">Investor Visa</li>
                        <li className="hover:bg-gray-100">IFZA Company Formation</li>
                        <li className="hover:bg-gray-100">Ras Al Khaimah Company Formation</li>
                        <li className="hover:bg-gray-100">Ajman Company Formation</li>
                        <li className="hover:bg-gray-100">Company Formation Abu Dhabi</li>
                        <li className="hover:bg-gray-100">Sharjah Company Formation</li>
                      </ul>
                    </div>
                  )}
                </div>
              </ul>
            </div>
          )}
        </div>

        <a href="#blogs" className="hover:text-gray-900">Blogs</a>
      </nav>

      {/* Action Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="flex items-center text-gray-600">
          <span className="text-lg">🌐</span>
          <span className="ml-2">UAE</span>
        </div>
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
          Log In
        </button>
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
        className={`fixed top-0 left-0 h-screen w-full bg-white z-50 transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="absolute top-4 right-4 text-2xl text-gray-600"
          onClick={toggleMenu}
        >
          ✕
        </button>
        <nav className="flex flex-col items-start justify-start pl-6 pt-10 space-y-4 text-gray-600 font-medium">
          <a href="#about" className="hover:text-gray-900 text-lg">About</a>
          <a href="#formation" className="hover:text-gray-900 text-lg">Formation</a>
          
          {/* Mobile Dropdown for Business Setup Services */}
          <div className="sm:w-full ">
            <button
              onClick={toggleBusinessSetupServices}
              className="hover:text-gray-900 text-lg flex items-center"
            >
              Business Setup Services
              <span className="ml-1 text-sm">▼</span>
            </button>
            {isBusinessSetupServicesOpen && (
              <div className="mt-2 sm:border-none border shadow-md sm:border-none border-white px-2 py-2 sm:space-y-2 sm:pl-4 max-h-[50vh] overflow-y-auto rounded-[10px]">
                <ul>
                  <li className="hover:text-gray-900">Company Formation Costs</li>
                  <li className="hover:text-gray-900">Business License in Dubai</li>
                  <li className="hover:text-gray-900">Visa Services in Dubai</li>
                  <li className="hover:text-gray-900">Company Formation Services</li>
                  <li className="hover:text-gray-900">Investor Visa Services</li>
                  <li className="hover:text-gray-900">Mainland Company Formation</li>
                  <li className="hover:text-gray-900">Rental Office/Business Centers</li>
                  <li className="hover:text-gray-900">Taxation & Vat Services</li>
                  <li className="hover:text-gray-900">Company Registration in Dubai</li>
                  <li className="hover:text-gray-900">LLC Company</li>

                  {/* Mobile Dropdown for Company Formation Services */}
                  <div className="w-full">
                    <button
                      onClick={toggleCompanyFormationDropdown}
                      className="hover:text-gray-900 text-lg flex items-center"
                    >
                      Company Formation Services
                      <span className="ml-1 text-sm">▼</span>
                    </button>
                    {isCompanyFormationDropdownOpen && (
                      <div className="mt-2 space-y-2 sm:pl-4 max-h-[50vh] overflow-y-auto">
                        <ul>
                          <li className="hover:text-gray-900">Free Zone Company Formation</li>
                          <li className="hover:text-gray-900">Investor Visa</li>
                          <li className="hover:text-gray-900">IFZA Company Formation</li>
                          <li className="hover:text-gray-900">Ras Al Khaimah Company Formation</li>
                          <li className="hover:text-gray-900">Ajman Company Formation</li>
                          <li className="hover:text-gray-900">Company Formation Abu Dhabi</li>
                          <li className="hover:text-gray-900">Sharjah Company Formation</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </ul>
              </div>
            )}
          </div>

          <a href="#blogs" className="hover:text-gray-900 text-lg">Blogs</a>
          <div className="flex items-center mt-4 text-gray-600">
            <span className="text-lg">🌐</span>
            <span className="ml-2">UAE</span>
          </div>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 mt-4">
            Log In
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
