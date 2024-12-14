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
      <header className="sm:px-24 px-6 flex justify-between items-center py-4 px-6 bg-white ">
        {/* Logo Section */}
        <div className="col-12 flex justify-between">
          <div className="col-md-3">
            <div className="flex items-center space-x-2">
              <svg width="142" height="54" viewBox="0 0 202 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.9244 14.9517C8.42554 14.3356 2.07586 26.9608 0.963385 33.3504C-3.28114 17.1938 7.52414 7.73487 13.4573 5.025C28.2447 -0.862571 38.9587 7.47815 42.4673 12.3845C49.0395 20.942 47.6018 30.612 46.0615 34.3773C40.4477 49.6439 27.0638 51.2926 21.0735 50.2087C9.41326 48.0987 10.8616 35.8035 13.4573 31.5533C18.248 23.7092 26.0148 25.2207 27.9195 27.8736C29.8657 31.9244 33.2252 32.0667 34.9367 31.5533C38.8389 30.1156 39.1299 26.7325 38.7876 25.2207C37.4868 17.964 29.0035 15.3511 24.9244 14.9517Z" fill="#212833" />
                <path d="M70.7458 38.5563C61.6218 38.5563 55.669 32.7148 55.669 24.2028C55.669 15.5796 61.6218 9.79368 70.7458 9.79368C79.0352 9.79368 85.0993 14.4669 85.0993 21.3655V21.9218H79.1465V21.588C79.1465 17.3042 76.031 15.1902 70.6345 15.1902C64.4035 15.1902 61.6218 18.1387 61.6218 24.2028C61.6218 30.1556 64.4035 33.1599 70.6345 33.1599C76.031 33.1599 79.1465 31.0458 79.1465 26.762V26.3725H85.0993V26.9845C85.0993 33.8831 79.0352 38.5563 70.7458 38.5563ZM95.551 38H89.5426V0.725381H95.551V38ZM115.246 38.5563C106.066 38.5563 99.8909 32.7148 99.8909 24.2028C99.8909 15.5796 106.066 9.79368 115.246 9.79368C124.481 9.79368 130.656 15.5796 130.656 24.2028C130.656 32.7148 124.481 38.5563 115.246 38.5563ZM115.246 33.2155C121.978 33.2155 124.759 30.0444 124.759 24.2028C124.759 18.3056 121.978 15.0789 115.246 15.0789C108.57 15.0789 105.788 18.3056 105.788 24.2028C105.788 30.0444 108.57 33.2155 115.246 33.2155ZM146.533 38.5563C138.744 38.5563 134.961 33.3824 134.961 26.9845V10.35H140.914V25.3711C140.914 30.5451 143.306 33.1599 149.148 33.1599C155.267 33.1599 158.105 30.0444 158.105 24.0359V10.35H164.057V38H158.55V29.4324H158.216C157.326 34.1056 153.654 38.5563 146.533 38.5563ZM181.7 38.5563C172.965 38.5563 168.125 32.7148 168.125 24.2028C168.125 15.5796 172.91 9.79368 181.31 9.79368C187.875 9.79368 191.603 13.1873 192.715 17.8606H193.049V0.725381H199.058V38H193.55V30.0444H193.16C191.992 35.5521 187.931 38.5563 181.7 38.5563ZM174.189 24.2028C174.189 30.8232 177.583 33.0486 183.536 33.0486C189.433 33.0486 193.049 30.2669 193.049 24.481V24.0359C193.049 18.1387 189.6 15.2458 183.425 15.2458C177.639 15.2458 174.189 17.5268 174.189 24.2028ZM55.824 51H54.6121V42.7982H55.9342V46.5686H56.0076C56.2524 45.5403 57.0604 44.7935 58.5171 44.7935C60.3901 44.7935 61.4184 46.0667 61.4184 47.9641C61.4184 49.8371 60.3779 51.1224 58.4437 51.1224C57.0604 51.1224 56.1668 50.4614 55.9097 49.2495H55.824V51ZM55.9342 48.0253C55.9342 49.2984 56.7176 49.9105 58.0275 49.9105C59.3618 49.9105 60.0963 49.4208 60.0963 47.9641C60.0963 46.4951 59.3496 45.9932 58.052 45.9932C56.6809 45.9932 55.9342 46.6298 55.9342 47.9274V48.0253ZM65.1136 51.1224C63.3998 51.1224 62.5674 49.984 62.5674 48.5762V44.9159H63.8772V48.2212C63.8772 49.3596 64.4036 49.935 65.689 49.935C67.0355 49.935 67.6599 49.2495 67.6599 47.9274V44.9159H68.9697V51H67.7578V49.1148H67.6843C67.4885 50.1431 66.6805 51.1224 65.1136 51.1224ZM73.2924 51.1224C71.3338 51.1224 70.2198 50.3512 70.2198 48.9434V48.9067H71.5419V49.0046C71.5419 49.8003 72.0193 50.0574 73.2924 50.0574C74.4798 50.0574 74.8348 49.8126 74.8348 49.2739C74.8348 48.772 74.541 48.6129 73.6719 48.4905L72.007 48.2701C70.8563 48.1232 70.1586 47.6336 70.1586 46.6175C70.1586 45.5525 71.1256 44.7935 72.9986 44.7935C74.8593 44.7935 75.9855 45.5403 75.9855 46.9848V47.0215H74.6757V46.948C74.6757 46.2258 74.3085 45.8463 72.9619 45.8463C71.8479 45.8463 71.4562 46.0911 71.4562 46.6665C71.4562 47.1439 71.701 47.3153 72.6191 47.4377L74.0269 47.6336C75.4714 47.8172 76.1324 48.3069 76.1324 49.3107C76.1324 50.4491 75.0062 51.1224 73.2924 51.1224ZM78.6532 44.2059H77.3312V42.7982H78.6532V44.2059ZM78.6532 51H77.3312V44.9159H78.6532V51ZM81.4444 51H80.1223V44.9159H81.3342V46.8011H81.4199C81.6036 45.7729 82.4115 44.7935 83.9539 44.7935C85.6433 44.7935 86.4757 45.932 86.4757 47.3398V51H85.1536V47.6948C85.1536 46.5563 84.6395 45.981 83.3786 45.981C82.0443 45.981 81.4444 46.6665 81.4444 47.9886V51ZM90.959 51.1224C88.9636 51.1224 87.6538 49.9962 87.6538 47.9641C87.6538 46.0667 88.9514 44.7935 90.9345 44.7935C92.8197 44.7935 94.1051 45.8341 94.1051 47.6825C94.1051 47.9029 94.0928 48.0743 94.0561 48.2579H88.8902C88.9391 49.4331 89.5145 50.0574 90.9222 50.0574C92.1954 50.0574 92.7218 49.6412 92.7218 48.9189V48.821H94.0438V48.9312C94.0438 50.2288 92.7707 51.1224 90.959 51.1224ZM90.91 45.8341C89.5634 45.8341 88.9758 46.4339 88.9024 47.5234H92.8564V47.4989C92.8564 46.3727 92.2076 45.8341 90.91 45.8341ZM98.2169 51.1224C96.2582 51.1224 95.1442 50.3512 95.1442 48.9434V48.9067H96.4663V49.0046C96.4663 49.8003 96.9438 50.0574 98.2169 50.0574C99.4043 50.0574 99.7593 49.8126 99.7593 49.2739C99.7593 48.772 99.4655 48.6129 98.5964 48.4905L96.9315 48.2701C95.7808 48.1232 95.083 47.6336 95.083 46.6175C95.083 45.5525 96.0501 44.7935 97.9231 44.7935C99.7838 44.7935 100.91 45.5403 100.91 46.9848V47.0215H99.6002V46.948C99.6002 46.2258 99.2329 45.8463 97.8864 45.8463C96.7724 45.8463 96.3806 46.0911 96.3806 46.6665C96.3806 47.1439 96.6255 47.3153 97.5436 47.4377L98.9514 47.6336C100.396 47.8172 101.057 48.3069 101.057 49.3107C101.057 50.4491 99.9307 51.1224 98.2169 51.1224ZM105.132 51.1224C103.174 51.1224 102.06 50.3512 102.06 48.9434V48.9067H103.382V49.0046C103.382 49.8003 103.859 50.0574 105.132 50.0574C106.32 50.0574 106.675 49.8126 106.675 49.2739C106.675 48.772 106.381 48.6129 105.512 48.4905L103.847 48.2701C102.696 48.1232 101.999 47.6336 101.999 46.6175C101.999 45.5525 102.966 44.7935 104.839 44.7935C106.699 44.7935 107.826 45.5403 107.826 46.9848V47.0215H106.516V46.948C106.516 46.2258 106.148 45.8463 104.802 45.8463C103.688 45.8463 103.296 46.0911 103.296 46.6665C103.296 47.1439 103.541 47.3153 104.459 47.4377L105.867 47.6336C107.311 47.8172 107.972 48.3069 107.972 49.3107C107.972 50.4491 106.846 51.1224 105.132 51.1224ZM114.385 51.1224C112.426 51.1224 111.312 50.3512 111.312 48.9434V48.9067H112.634V49.0046C112.634 49.8003 113.112 50.0574 114.385 50.0574C115.572 50.0574 115.927 49.8126 115.927 49.2739C115.927 48.772 115.633 48.6129 114.764 48.4905L113.099 48.2701C111.949 48.1232 111.251 47.6336 111.251 46.6175C111.251 45.5525 112.218 44.7935 114.091 44.7935C115.952 44.7935 117.078 45.5403 117.078 46.9848V47.0215H115.768V46.948C115.768 46.2258 115.401 45.8463 114.054 45.8463C112.94 45.8463 112.549 46.0911 112.549 46.6665C112.549 47.1439 112.793 47.3153 113.712 47.4377L115.119 47.6336C116.564 47.8172 117.225 48.3069 117.225 49.3107C117.225 50.4491 116.099 51.1224 114.385 51.1224ZM121.484 51.1224C119.489 51.1224 118.179 49.9962 118.179 47.9641C118.179 46.0667 119.476 44.7935 121.459 44.7935C123.345 44.7935 124.63 45.8341 124.63 47.6825C124.63 47.9029 124.618 48.0743 124.581 48.2579H119.415C119.464 49.4331 120.039 50.0574 121.447 50.0574C122.72 50.0574 123.247 49.6412 123.247 48.9189V48.821H124.569V48.9312C124.569 50.2288 123.296 51.1224 121.484 51.1224ZM121.435 45.8341C120.088 45.8341 119.501 46.4339 119.427 47.5234H123.381V47.4989C123.381 46.3727 122.733 45.8341 121.435 45.8341ZM129.856 51H128.46C127.15 51 126.343 50.4246 126.343 48.9434V46.0177H125.314V44.9159H126.343V43.5816H127.652V44.9159H129.856V46.0177H127.652V48.87C127.652 49.6167 127.995 49.8126 128.754 49.8126H129.856V51ZM133.462 51.1224C131.748 51.1224 130.915 49.984 130.915 48.5762V44.9159H132.225V48.2212C132.225 49.3596 132.752 49.935 134.037 49.935C135.384 49.935 136.008 49.2495 136.008 47.9274V44.9159H137.318V51H136.106V49.1148H136.032C135.837 50.1431 135.029 51.1224 133.462 51.1224ZM140.086 53.0811H138.764V44.9159H139.976V46.6053H140.086C140.331 45.4791 141.188 44.7935 142.62 44.7935C144.505 44.7935 145.57 46.0789 145.57 47.9641C145.57 49.8493 144.529 51.1224 142.632 51.1224C141.261 51.1224 140.38 50.4002 140.135 49.2862H140.086V53.0811ZM140.086 48.062C140.086 49.3107 140.881 49.9227 142.179 49.9227C143.489 49.9227 144.248 49.4208 144.248 47.9641C144.248 46.4951 143.477 46.0054 142.204 46.0054C140.845 46.0054 140.086 46.642 140.086 47.9519V48.062ZM151.945 51.1224C149.986 51.1224 148.872 50.3512 148.872 48.9434V48.9067H150.194V49.0046C150.194 49.8003 150.672 50.0574 151.945 50.0574C153.132 50.0574 153.487 49.8126 153.487 49.2739C153.487 48.772 153.194 48.6129 152.324 48.4905L150.66 48.2701C149.509 48.1232 148.811 47.6336 148.811 46.6175C148.811 45.5525 149.778 44.7935 151.651 44.7935C153.512 44.7935 154.638 45.5403 154.638 46.9848V47.0215H153.328V46.948C153.328 46.2258 152.961 45.8463 151.614 45.8463C150.5 45.8463 150.109 46.0911 150.109 46.6665C150.109 47.1439 150.353 47.3153 151.272 47.4377L152.679 47.6336C154.124 47.8172 154.785 48.3069 154.785 49.3107C154.785 50.4491 153.659 51.1224 151.945 51.1224ZM159.044 51.1224C157.049 51.1224 155.739 49.9962 155.739 47.9641C155.739 46.0667 157.036 44.7935 159.02 44.7935C160.905 44.7935 162.19 45.8341 162.19 47.6825C162.19 47.9029 162.178 48.0743 162.141 48.2579H156.975C157.024 49.4331 157.6 50.0574 159.007 50.0574C160.28 50.0574 160.807 49.6412 160.807 48.9189V48.821H162.129V48.9312C162.129 50.2288 160.856 51.1224 159.044 51.1224ZM158.995 45.8341C157.648 45.8341 157.061 46.4339 156.987 47.5234H160.941V47.4989C160.941 46.3727 160.293 45.8341 158.995 45.8341ZM164.747 51H163.425V44.9159H164.637V46.5563H164.723C164.906 45.577 165.567 44.7935 166.816 44.7935C168.199 44.7935 168.799 45.7851 168.799 46.9358V47.7315H167.489V47.1929C167.489 46.3237 167.122 45.9198 166.216 45.9198C165.176 45.9198 164.747 46.4951 164.747 47.5846V51ZM173.779 51H172.164L169.324 44.9159H170.78L172.947 49.7146H173.045L175.212 44.9159H176.644L173.779 51ZM178.889 44.2059H177.567V42.7982H178.889V44.2059ZM178.889 51H177.567V44.9159H178.889V51ZM183.431 51.1224C181.423 51.1224 180.113 49.8371 180.113 47.9641C180.113 46.0667 181.423 44.7935 183.431 44.7935C185.255 44.7935 186.589 45.8218 186.589 47.3398V47.4622H185.279V47.3887C185.279 46.4461 184.594 45.981 183.406 45.981C182.035 45.981 181.423 46.6298 181.423 47.9641C181.423 49.2739 182.035 49.935 183.406 49.935C184.594 49.935 185.279 49.4698 185.279 48.5272V48.4415H186.589V48.5762C186.589 50.0941 185.255 51.1224 183.431 51.1224ZM190.872 51.1224C188.877 51.1224 187.567 49.9962 187.567 47.9641C187.567 46.0667 188.864 44.7935 190.848 44.7935C192.733 44.7935 194.018 45.8341 194.018 47.6825C194.018 47.9029 194.006 48.0743 193.969 48.2579H188.803C188.852 49.4331 189.428 50.0574 190.835 50.0574C192.108 50.0574 192.635 49.6412 192.635 48.9189V48.821H193.957V48.9312C193.957 50.2288 192.684 51.1224 190.872 51.1224ZM190.823 45.8341C189.477 45.8341 188.889 46.4339 188.815 47.5234H192.769V47.4989C192.769 46.3727 192.121 45.8341 190.823 45.8341ZM198.13 51.1224C196.171 51.1224 195.057 50.3512 195.057 48.9434V48.9067H196.379V49.0046C196.379 49.8003 196.857 50.0574 198.13 50.0574C199.317 50.0574 199.672 49.8126 199.672 49.2739C199.672 48.772 199.379 48.6129 198.509 48.4905L196.845 48.2701C195.694 48.1232 194.996 47.6336 194.996 46.6175C194.996 45.5525 195.963 44.7935 197.836 44.7935C199.697 44.7935 200.823 45.5403 200.823 46.9848V47.0215H199.513V46.948C199.513 46.2258 199.146 45.8463 197.799 45.8463C196.685 45.8463 196.294 46.0911 196.294 46.6665C196.294 47.1439 196.539 47.3153 197.457 47.4377L198.864 47.6336C200.309 47.8172 200.97 48.3069 200.97 49.3107C200.97 50.4491 199.844 51.1224 198.13 51.1224Z" fill="#212833" />
              </svg>

              {/* <span className="text-xl font-semibold">Cloud</span> */}
            </div>
          </div>
          <div className="col-md-6 flex justify-center items-center">
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
                  <button className="flex items-center text-lg hover:text-gray-900 group">
                    Products
                    <span className="ml-1 text-sm icon icon-tabler icons-tabler-filled icon-tabler-caret-down transform transition-transform duration-300 group-hover:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-caret-up"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z" /></svg>
                    </span>
                  </button>

                  {openMenu === "products" && (
                    <div className="absolute left-[-2] top-[20px] py-1 mt-2 w-[280px] bg-white shadow-md rounded-md transition-all ease-in-out">
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
                  <button className="flex items-center text-lg hover:text-gray-900 group">
                    Products
                    <span className="ml-1 text-sm icon icon-tabler icons-tabler-filled icon-tabler-caret-down transform transition-transform duration-300 group-hover:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-caret-up"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z" /></svg>
                    </span>
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
                <div className="flex text-gray-600 cursor-pointer">
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
                      <Link href="/allUAEcomponents" className="no-underline hover:text-black">
                        <span className="text-inherit flex gap-3  text-[16px] font-[400]">
                        <Image
                            src="/assets/images/dubai-flag.png"
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
                        <span className="text-inherit flex gap-3 ">
                          <Image
                            src="/assets/images/united-states (1).png"
                            width={25}
                            height={10}
                            alt="no-img"
                            className="rounded-[50px]"
                          />  
                          US</span>
                      </Link>
                    </li>
                    <li className="px-1 py-2 hover:text-[#0073fd] cursor-pointer">
                      <Link href="/allUKcomponents" className="no-underline hover:text-black">
                        <span className="text-inherit flex gap-3">
                        <Image
                            src="/assets/images/united-kingdom.png"
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

export default HeaderUAE;