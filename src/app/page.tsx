"use client";
import Image from "next/image";
import Header from "./components/header";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import DownloadText from "./components/downloadtext";
import BusinessStarterText from "./components/businesstartertext";

import "bootstrap/dist/css/bootstrap.min.css";
export default function Home() {
  return (
    <>
      <section>
        <div className="bg-[#f3efe7]">
          <Header />
        </div>
      </section>

      <section className="overflow-hidden sm:px-20 px-6 sm:pt-24 pb-10">
        <div className="overflow-hidden">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 sm:flex  justify-center items-center">
                <div className="col-md-12">
                  <p className="sm:text-[53px] text-[30px] sm:leading-[60px] leading-[35px]  font-[600] ">
                    Start your US business from anywhere and keep it 100%
                    compliant
                  </p>
                  <p className="sm:text-[20px] sm:leading-[32px] leading-[22px] font-[400] pe-4">
                    Formation, EIN, Registered Agent, Annual State Filings,
                    Federal Tax Filings and a Dedicated Account Manager. Grow
                    your business and let doola handle your business compliance
                    needs.
                  </p>
                  <div className="col-12 sm:flex  gap-3 mb-4">
                    <div>
                      <button className="border-1 hover:text-[#fff] hover:bg-[#000] font-[400] border-[black] w-[150px] h-[40px] rounded-[50px] text-[15px]">
                        Get Started
                      </button>
                    </div>
                    <div>

                      <button className="border-1 hover:text-[#fff] hover:bg-[#000] font-[400] border-[black] w-[150px] h-[40px] rounded-[50px] text-[15px]">
                        Schedule a call
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 sm:flex  justify-center items-center">
                <div className="col-md-12 sm:flex  justify-end items-center">
                  <Image
                    src="/assets/images/Picture ⏵ comp-secreyary-vanessa-sg@1x.webp.png"
                    width={450}
                    height={350}
                    alt="no-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden sm:px-20 px-6 py-14 pb-10  bg-[#F3EFE7]">
        <div className="overflow-hidden">
          <div className="container-fluid">
            <div className="row">
              {/* Card 1 */}
              <div className="col-md-4 mb-4">
                <div className="sm:flex  sm:flex -col justify-between rounded-[12px] px-4 py-4 bg-[#fff] h-full min-h-[450px]">
                  <div>
                    <div className="col-12 py-3">
                      <Image
                        src="/assets/images/Vector.png"
                        width={112}
                        height={112}
                        alt="no-img"
                      />
                    </div>
                    <div>
                      <p className="text-[28px] font-[500]">Formation</p>
                      <p className="text-[18px] font-[500] leading-[22px]">
                        Form your US company from anywhere in the world.
                      </p>
                      <p className="text-[13px] font-[200] font-[400] text-[#656565]">
                        Form your US company effortlessly with doola—no SSN
                        required. We handle LLC, C-Corp, and DAO LLC formations.
                        Our all-inclusive service covers Employer Identification
                        Number (EIN), Registered Agent service, and Operating
                        Agreement, all without hidden fees.
                      </p>
                    </div>
                  </div>
                  <div className="col-12">

                    <button className="w-full  w-full h-[45px] mb-2 rounded-full font-[400] text-[16px] border-1 border-[#000] text-[#000] hover:bg-[#0073FD] hover:text-white hover:border-[#0073FD] focus:outline-none sm:flex  items-center justify-center gap-2 group">
                      Incl, in Total Compliance
                      <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-black group-hover:fill-white "
                      >
                        <path
                          d="M21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM0 9H21V7H0V9Z"
                        />
                      </svg>
                    </button>


                    <button className="w-full  w-full h-[45px] mb-2 rounded-full font-[400] text-[16px] border-1 border-[#000] text-[#000] hover:bg-[#0073FD] hover:text-white hover:border-[#0073FD] focus:outline-none sm:flex  items-center justify-center gap-2 group">
                      Learn more
                      <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-black group-hover:fill-white "
                      >
                        <path
                          d="M21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM0 9H21V7H0V9Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="sm:flex  sm:flex -col justify-between rounded-[12px] px-4 py-4 bg-[#fff] h-full min-h-[450px]">
                  <div>
                    <div className="col-12 py-3">
                      <Image
                        src="/assets/images/image 56.png"
                        width={128}
                        height={112}
                        alt="no-img"
                      />
                    </div>
                    <div>
                      <p className="text-[28px] font-[500]">Money</p>
                      <p className="text-[18px] font-[500] leading-[22px]">
                        International transfers to 100+ countries.
                      </p>
                      <p className="text-[13px] font-[200] font-[400] text-[#656565]">
                        Introducing a powerful, low-cost solution for
                        international money transfers. doola Money facilitates
                        transactions in local currencies worldwide with the
                        added convenience of deposits in $USD. No Social
                        Security Number (SSN) is required to open an account,
                        making it the ideal solution for founders around the
                        globe.
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="w-full  w-full h-[45px] mb-2 rounded-full font-[400] text-[16px] border-1 border-[#000] text-[#000] hover:bg-[#0073FD] hover:text-white hover:border-[#0073FD] focus:outline-none sm:flex  items-center justify-center gap-2 group">
                      Learn more
                      <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-black group-hover:fill-white "
                      >
                        <path
                          d="M21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM0 9H21V7H0V9Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="sm:flex  sm:flex -col justify-between rounded-[12px] px-4 py-4 bg-[#fff] h-full min-h-[450px]">
                  <div>
                    <div className="col-12 py-3">
                      <Image
                        src="/assets/images/Layer_2.png"
                        width={112}
                        height={112}
                        alt="no-img"
                      />
                    </div>
                    <div>
                      <p className="text-[28px] font-[500]">Taxes</p>
                      <p className="text-[18px] font-[500] leading-[22px]">
                        Embrace worry-free tax filings.
                      </p>
                      <p className="text-[13px] font-[200] font-[400] text-[#656565]">
                        Ensure 100% IRS and state compliance with the added
                        benefit of a free CPA consultation. Avoid fines up to
                        $25,000 and simplify your tax season with our dedicated
                        support and transparent processes.
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="w-full  w-full h-[45px] mb-2 rounded-full font-[400] text-[16px] border-1 border-[#000] text-[#000] hover:bg-[#0073FD] hover:text-white hover:border-[#0073FD] focus:outline-none sm:flex  items-center justify-center gap-2 group">
                      Incl, in Total Compliance
                      <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-black group-hover:fill-white "
                      >
                        <path
                          d="M21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM0 9H21V7H0V9Z"
                        />
                      </svg>
                    </button>


                    <button className="w-full  w-full h-[45px] mb-2 rounded-full font-[400] text-[16px] border-1 border-[#000] text-[#000] hover:bg-[#0073FD] hover:text-white hover:border-[#0073FD] focus:outline-none sm:flex  items-center justify-center gap-2 group">
                      Learn more
                      <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-black group-hover:fill-white "
                      >
                        <path
                          d="M21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM0 9H21V7H0V9Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden px-6 sm:px-20 pt-16 pb-10">
        <div className="overflow-hidden">
          <div className="container-fluid">
            {/* Heading Section */}
            <div className="col-12 mb-5 pb-16">
              <p className="text-[24px] sm:text-[34px] text-center font-[600]">
                One-stop solution for busy
              </p>
              <p className="text-[24px] sm:text-[34px] text-center font-[600] leading-[1px]">
                entrepreneurs
              </p>
            </div>

            {/* First Content Section */}
            <div className="col-12 sm:flex  sm:flex -wrap sm:flex  -nowrap mb-5">
              <div className="w-full sm:w-1/2 sm:flex  items-center mb-5 sm:mb-0">
                <div className="w-full px-4">
                  <Image
                    src="/assets/images/image 57.png"
                    width={850}
                    height={750}
                    alt="no-img"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="w-full sm:w-1/2 sm:flex  justify-start items-center">
                <div className="w-full px-4">
                  <p className="text-[20px] sm:text-[26px] font-[600]">
                    Kickstart your business
                  </p>
                  <p className="text-[16px] font-[400] sm:text-[19px] text-[#404040]">
                    From the formation of your company to BOI Reporting, we’re
                    by your side every step, ensuring your business remains 100%
                    compliant.
                  </p>
                  <div className="mt-4">
                    <button className="w-[150px] h-[40px] font-[400] rounded-[50px] border border-black bg-[#fff] text-[#000] hover:bg-[#000] hover:text-[#fff]">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Content Section */}
            <div className="col-12 sm:flex  sm:flex -wrap sm:flex  -nowrap">
              <div className="w-full sm:w-1/2 sm:flex  justify-start items-center mb-5 sm:mb-0">
                <div className="w-full px-4">
                  <p className="text-[20px] sm:text-[26px] font-[600]">
                    Kickstart your business
                  </p>
                  <p className="text-[16px] font-[400] sm:text-[19px] text-[#404040]">
                    From the formation of your company to BOI Reporting, we’re
                    by your side every step, ensuring your business remains 100%
                    compliant.
                  </p>
                  <div className="mt-4">
                    <button className="w-[150px] h-[40px] font-[400] rounded-[50px] border border-black bg-[#fff] text-[#000] hover:bg-[#000] hover:text-[#fff]">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 sm:flex  items-center">
                <div className="w-full px-4">
                  <Image
                    src="/assets/images/image 58.png"
                    width={850}
                    height={750}
                    alt="no-img"
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Final Heading Section */}
            <div className="col-12 sm:mb-5 pt-20">
              <p className="text-center text-[24px] sm:text-[32px] font-[600]">
                Unleash your success now
              </p>
              <p className="text-center text-[15px] sm:text-[18px] font-[400] sm:leading-[1px] leading-[20px]">
                Each state charges a one-time formation fee. Your state fee will
                vary depending on the state you form in.
              </p>
              <p className="text-center text-[15px] sm:text-[18px] font-[400] sm:pe-5">
                Not sure which state to choose?{" "}
                <span className="text-[#0073fd]"> Take our quiz →</span>
              </p>
            </div>

            {/* Pricing Section */}
            <div className="col-12 mb-5 pt-10 sm:flex  sm:flex -wrap justify-center items-center gap-4">
              <div className="w-full sm:w-[30%] bg-[#fffdfa] border-8 border-[#f3efe7] rounded-[20px] px-6 py-6">
                <p className="text-[20px] sm:text-[25px] font-[600] leading-[20px]">
                  Starter
                </p>
                <p className="text-[16px] sm:text-[18px] font-[500] leading-[20px]">
                  Start your business
                </p>
                <p className="text-[15px] sm:text-[16px] font-[400] text-[#666666] leading-[20px]">
                  Formation & EIN filings, RA service, Operating Agreement, and
                  regular compliance reminders.
                </p>
                <p className="text-[35px] sm:text-[45px] font-[600] leading-[50px]">
                  <span className="text-[25px] sm:text-[30px]">$</span> 297/y
                </p>
                <p className="text-[13px] sm:text-[15px] font-[400] text-[#767676] leading-[1px]">
                  State fee not included.
                </p>
                <div className="col-12 mt-4">
                  <button className="border font-[400] border-black rounded-[50px] text-[15px] sm:text-[16px] text-[#000] bg-[#fff] w-full h-[45px] hover:text-[#fff] hover:bg-[#000]">
                    Formation
                  </button>
                </div>
              </div>
              <div className="w-full sm:w-[30%] bg-[#fffdfa] border-8 border-[#f3efe7] rounded-[20px] px-6 py-6">
                <p className="text-[20px] sm:text-[25px] font-[600] leading-[20px]">
                  Total Compliance
                </p>
                <p className="text-[16px] sm:text-[18px] font-[500] leading-[20px]">
                  Stay 100% compliant
                </p>
                <p className="text-[15px] sm:text-[16px] font-[400] text-[#666666] leading-[20px]">
                  Formation with Annual State filings, IRS Tax filings, a
                  dedicated Account Manager and a free CPA consultation.
                </p>
                <p className="text-[35px] sm:text-[45px] font-[600] leading-[50px]">
                  <span className="text-[25px] sm:text-[30px]">$</span> 300/m
                </p>
                <p className="text-[13px] sm:text-[15px] font-[400] text-[#767676] leading-[1px]">
                  State fee not included.
                </p>
                <div className="col-12 mt-4">

                  <button className="border font-[400] border-black rounded-[50px] text-[15px] sm:text-[16px] text-[#000] bg-[#fff] w-full h-[45px] hover:text-[#fff] hover:bg-[#000]">
                    Total Compliance
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden sm:px-20 px-6 pt-14 sm:pb-10 bg-[#ccdfff]">
        <div className="overflow-hidden">
          <div className="container-fluid">
            <DownloadText />
          </div>
        </div>
      </section>

      <section className="overflow-hidden sm:px-20 px-6  pt-[22px] pb-10  bg-[#f3efe7] ">
        <div className="overflow-hidden">
          <div className="container-fluid">
            <div className="row">
              <FAQ />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#000] overflow-hidden sm:px-20 px-6 sm:py-5 py-5">
        <div className="container-fluid p-0">
          <BusinessStarterText />
        </div>
      </section>

      <section>
        <div className="col-12">
          <Footer />
        </div>
      </section>
    </>
  );
}
