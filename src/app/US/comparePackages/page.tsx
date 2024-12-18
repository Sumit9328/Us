"use client";
import Image from "next/image";
import Header from "../../components/header";
import FAQ from "../../components/faq";
import Footer from "../../components/footer";
import FeaturesTable from "@/app/components/featureTable";
import BusinessStarterText from "@/app/components/businesstartertext";
import DownloadText from "@/app/components/downloadtext";

import "bootstrap/dist/css/bootstrap.min.css";
export default function Home() {
  return (
    <>
      <section>
        <div className="bg-[#f3efe7]">
          <Header />
        </div>
      </section>

      <section className="overflow-hidden px-6 sm:px-20 sm:pt-16 pb-0">
        <div className="overflow-hidden">
          <div className="container-fluid">
            {/* Final Heading Section */}
            <div className="col-12 sm:mb-0 sm:flex  justify-center">
              <div className="w-[400px]">
                <p className="text-center text-[38px] font-bold mb-0 leading-[45px]">
                  Simplified pricing for all your need
                </p>
                <p className="text-center text-[15px] sm:text-[18px] font-[400] leading-[50px] sm:pe-5">
                  <span className="text-[#0073fd]"> Compare packages →</span>
                </p>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="col-12 mb-5 pt-10 sm:flex  sm:flex -wrap justify-center items-center gap-4">
              <div className="w-full sm:w-[40%] bg-[#fffdfa] border-8 border-[#f3efe7] rounded-[35px] px-6 py-6">
                <div className="h-[120px]">
                  <p className="text-[20px] sm:text-[25px] font-[600] leading-[20px]">
                    Starter
                  </p>
                  <p className="text-[16px] sm:text-[18px] font-[500] leading-[20px]">
                    Start your business
                  </p>
                  <p className="text-[15px] sm:text-[16px] font-[400] text-[#666666] leading-[20px]">
                    Formation & EIN filings, RA service, Operating Agreement,
                    and regular compliance reminders.
                  </p>
                </div>
                <p className="text-[35px] sm:text-[45px] font-[600] leading-[50px]">
                  <span className="text-[25px] sm:text-[30px]">$</span> 297/y
                </p>
                <p className="text-[13px] sm:text-[15px] font-[400] text-[#767676] leading-[1px]">
                  State fee not included.
                </p>
                <div className="col-12 mt-4">
                  <button className="border border-black rounded-[50px] text-[15px] sm:text-[16px] text-[#000] bg-[#fff] w-full h-[45px] font-[400] hover:bg-[#000] hover:text-[#fff]">
                    Formation
                  </button>
                </div>
              </div>
              <div className="w-full sm:w-[40%] bg-[#fffdfa] border-8 border-[#f3efe7] rounded-[35px] px-6 py-6">
                <div className="h-[120px]">
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
                </div>
                <p className="text-[35px] sm:text-[45px] font-[600] leading-[50px]">
                  <span className="text-[25px] sm:text-[30px]">$</span> 300/m
                </p>
                <p className="text-[13px] sm:text-[15px] font-[400] text-[#767676] leading-[1px]">
                  State fee not included.
                </p>
                <div className="col-12 mt-4">
                  <button className="border border-black rounded-[50px] text-[15px] sm:text-[16px] text-[#000] bg-[#fff] w-full h-[45px] font-[400] hover:bg-[#000] hover:text-[#fff]">
                    Total Compliance
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden sm:px-20 px-6 pt-0 pb-0 ">
        <div className="overflow-hidden">
          <div className="container-fluid">
            <div className="row">
              <FeaturesTable />
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden sm:px-20 px-6 py-12 pb-10 bg-[#F3EFE7]">
        <div className="overflow-hidden">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 sm:flex  justify-center items-center mb-4">
                <div className="col-md-6">
                  <p className="text-center text-[#898989] font-[400] text-[18px] leading-[20px]">
                    TOTAL COMPLIANCE
                  </p>
                  <p className="text-center sm:text-[35px] text-[28px] font-[600] sm:leading-[40px] leading-[35px]">
                    The all-in-one bundle to form & manage your US business with
                    ease
                  </p>
                </div>
              </div>
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
                      <div className="h-[120px]">
                        <p className="text-[28px] font-[500]">Formation</p>
                        <p className="text-[18px] font-[500] leading-[22px]">
                          Form your US company from anywhere in the world.
                        </p>
                      </div>
                      <p className="text-[15px] font-[400] text-[#656565]">
                        Form your US company effortlessly with doola—no SSN
                        required. We handle LLC, C-Corp, and DAO LLC formations.
                        Our all-inclusive service covers Employer Identification
                        Number (EIN), Registered Agent service, and Operating
                        Agreement, all without hidden fees.
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="w-full mt-2 w-full h-[45px] mb-2 rounded-full font-[400] text-[16px] border-1 border-[#000] text-[#000] hover:bg-[#0073FD] hover:text-white hover:border-[#0073FD] focus:outline-none sm:flex  items-center justify-center gap-2 group">
                      Learn More
                      <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-black group-hover:fill-white "
                      >
                        <path d="M21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM0 9H21V7H0V9Z" />
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
                      <div className="h-[120px]">
                        <p className="text-[28px] font-[500]">Money</p>
                        <p className="text-[18px] font-[500] leading-[22px]">
                          International transfers to 100+ countries.
                        </p>
                      </div>
                      <p className="text-[15px] font-[400] text-[#656565]">
                        Facilitate transactions in local currencies worldwide
                        with the added convenience of deposits in $USD. No
                        Social Security Number (SSN) is required to open an
                        account, making it the ideal solution for founders
                        around the globe.
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="w-full mt-2 w-full h-[45px] mb-2 rounded-full font-[400] text-[16px] border-1 border-[#000] text-[#000] hover:bg-[#0073FD] hover:text-white hover:border-[#0073FD] focus:outline-none sm:flex  items-center justify-center gap-2 group">
                      Learn More
                      <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-black group-hover:fill-white "
                      >
                        <path d="M21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM0 9H21V7H0V9Z" />
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
                      <div className="h-[120px]">
                        <p className="text-[28px] font-[500]">Taxes</p>
                        <p className="text-[18px] font-[500] leading-[22px]">
                          Embrace worry-free tax filings.
                        </p>
                      </div>
                      <p className="text-[15px] font-[400] text-[#656565]">
                        Unlock financial clarity with the 1:1 CPA consultation
                        included in our Total Compliance package. Ask expert tax
                        questions, get personalized advice, and navigate the
                        complexities of taxes with confidence.
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="w-full mt-2 w-full h-[45px] mb-2 rounded-full font-[400] text-[16px] border-1 border-[#000] text-[#000] hover:bg-[#0073FD] hover:text-white hover:border-[#0073FD] focus:outline-none sm:flex  items-center justify-center gap-2 group">
                      Learn More
                      <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-black group-hover:fill-white "
                      >
                        <path d="M21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM0 9H21V7H0V9Z" />
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
                        src="/assets/images/Vector.png"
                        width={112}
                        height={112}
                        alt="no-img"
                      />
                    </div>
                    <div>
                      <p className="text-[28px] font-[500]">
                        Expedited Processing
                      </p>
                      <p className="text-[18px] font-[500] leading-[22px]">
                        Optimize your business launch with expedited processing.
                      </p>
                      <p className="text-[15px] font-[400] text-[#656565]">
                        Processing times are contingent upon factors like the
                        availability of a US Social Security Number (SSN). With
                        this service, doola guarantees the expedited submission
                        of your application to the state, facilitating quicker
                        processing.
                      </p>
                    </div>
                  </div>
                  <div className="col-12"></div>
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
                      <p className="text-[28px] font-[500]">CPA Consultation</p>
                      <p className="text-[18px] font-[500] leading-[22px]">
                        Elevate your financial strategy with our CPA
                        consultations.
                      </p>
                      <p className="text-[15px] font-[400] text-[#656565]">
                        Unlock financial clarity with the 1:1 CPA consultation
                        included in our Total Compliance package. Ask expert tax
                        questions, get personalized advice, and navigate the
                        complexities of taxes with confidence.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 mb-4 mt-4">
                    <button className="w-full mt-2 w-full h-[45px] mb-2 rounded-full font-[400] text-[16px] border-1 border-[#000] text-[#000] hover:bg-[#0073FD] hover:text-white hover:border-[#0073FD] focus:outline-none sm:flex  items-center justify-center gap-2 group">
                      Learn More
                      <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-black group-hover:fill-white "
                      >
                        <path d="M21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM0 9H21V7H0V9Z" />
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
                      <p className="text-[28px] font-[500]">Account Manager</p>
                      <p className="text-[18px] font-[500] leading-[22px]">
                        Your personal account manager for dedicated support.
                      </p>
                      <p className="text-[15px] font-[400] text-[#656565]">
                        Enjoy dedicated support, guidance, and comprehensive
                        answers to all your queries. Seamlessly navigate the
                        complexities of running and growing your business with
                        personalized assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden sm:px-20 px-6 pt-14 sm:pb-10 bg-[#ccdfff]">
        <div className="overflow-hidden">
          <DownloadText />
        </div>
      </section>

      <section className="overflow-hidden sm:px-20 px-6  pt-10 pb-10  bg-[#f3efe7]">
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
