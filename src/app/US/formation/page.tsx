"use client";
import Image from "next/image";
import Header from "../../components/header";
import FAQ from "../../components/faq";
import Footer from "../../components/footer";
import Carousal from "@/app/components/Slider";
import DownloadText from "@/app/components/downloadtext";
import BusinessStarterText from "@/app/components/businesstartertext";

import "bootstrap/dist/css/bootstrap.min.css";
export default function Home() {
  return (
    <>
      <section>
        <div className="bg-[#f3efe7]">
          <Header />
        </div>
      </section>
      <section className="overflow-hidden sm:px-20 px-6 sm:pt-32 pt-0 pb-10">
        <div className="overflow-hidden">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 sm:flex  justify-center items-center">
                <div className="col-md-12">
                  <p className="sm:text-[53px] text-[25px] sm:leading-[60px] leading-[35px] font-[600]">
                    Start your US business from anywhere and keep it 100%
                    compliant
                  </p>
                  <p className="sm:text-[20px] sm:leading-[25px] leading-[22px] font-[400] pe-4">
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
                    src="/assets/images/Picture ⏵ comp-secreyary-vanessa-sg@1x.webp (2).png"
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
                      <p className="text-[28px] font-[500]">LLC</p>
                      <p className="text-[18px] font-[500] leading-[22px]">
                        Form an LLC to monetize your US presence.
                      </p>
                      <p className="text-[13px] font-[200] font-[400] text-[#656565]">
                        A Limited Liability Company merges partnership
                        sm:flex ibility with corporate liability protection. It
                        shields your personal assets from business debts,
                        simplifies management, and allows for pass-through
                        taxation, making it a popular choice for small
                        businesses.
                      </p>
                    </div>
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
                      <p className="text-[28px] font-[500]">C-Corp</p>
                      <p className="text-[18px] font-[500] leading-[22px]">
                        Establish a C-Corp for global growth.
                      </p>
                      <p className="text-[13px] font-[200] font-[400] text-[#656565]">
                        Empower your startup with a C-Corporation—crafted for
                        growth and attracting investors. Offering liability
                        protection and diverse funding options, it’s ideal for
                        entrepreneurs aiming at significant expansion and
                        actively seeking external investments.
                      </p>
                    </div>
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
                      <p className="text-[28px] font-[500]">DAO LLC</p>
                      <p className="text-[18px] font-[500] leading-[22px]">
                        Forge the future with a DAO LLC.
                      </p>
                      <p className="text-[13px] font-[200] font-[400] text-[#656565]">
                        Step into the future with a DAO LLC, merging LLC
                        sm:flex ibility with blockchain tech. Transform governance
                        for transparency, autonomy, and innovation—an ideal
                        option for shaping decentralized structures and
                        revolutionizing decision-making processes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden px-6 sm:px-20 pt-0 pb-10">
        <div className="overflow-hidden">
          <div className="container-fluid">
            {/* Final Heading Section */}
            <div className="col-12 sm:mb-0 pt-10">
              <p className="text-center text-[28px] sm:text-[32px] font-[600] sm:leading-[40px] leading-[30px]">
                Learn about business structures
              </p>

              <p className="text-center text-[20px] sm:text-[18px] font-[400] sm:leading-[1px] leading-[10px] sm:pe-5">
                <span className="text-[#0073fd]"> Take our quiz →</span>
              </p>
            </div>

            {/* Pricing Section */}
            <div className="col-12 sm:mb-5 pt-10 sm:flex    justify-center items-center gap-2">
              <div className="sm:mb-0 col-md-4 mb-4 w-full bg-[#fffdfa] border-8 border-[#f3efe7] rounded-[30px] px-6 py-6">
                <div>
                  <div className="mb-4">
                    <span className="text-[24px] rounded-[40px] font-[600] bg-[#F6F6F6] px-4 py-1 text-black">
                      LLC
                    </span>
                  </div>
                  <div className="sm:h-[280px]">
                    <ul className="space-y-4">
                      {[
                        {
                          content:
                            "Great for small businesses due to more sm:flex ibility",
                          status: "tick",
                        },
                        {
                          content:
                            "Simple management structure and easier to operate",
                          status: "tick",
                        },
                        {
                          content:
                            "Less paperwork, corporate restrictions, no meeting requirements",
                          status: "tick",
                        },
                        {
                          content:
                            "Ownership represented by members (LLCs cannot issue stock)",
                          status: "cross",
                        },
                      ].map((item, index) => (
                        <li key={index} className="sm:flex  items-start space-x-3">
                          {item.status === "tick" ? (
                            // Green tick icon with fixed size
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="text-green-500"
                              style={{ minWidth: "24px", minHeight: "24px" }} // Fixed size
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            // Red cross icon with fixed size
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ minWidth: "18px", minHeight: "18px" }} // Fixed size
                            >
                              <path
                                d="M12.3509 11.4195L20.5998 3.17024C20.725 3.04932 20.8249 2.90467 20.8936 2.74474C20.9623 2.58481 20.9984 2.4128 21 2.23875C21.0015 2.0647 20.9683 1.89208 20.9024 1.73098C20.8365 1.56988 20.7391 1.42352 20.6161 1.30044C20.493 1.17736 20.3466 1.08003 20.1855 1.01412C20.0244 0.948208 19.8518 0.915041 19.6778 0.916553C19.5037 0.918066 19.3317 0.954228 19.1718 1.02293C19.0118 1.09163 18.8672 1.19149 18.7463 1.31669L10.497 9.56557L2.24817 1.31669C2.00144 1.07538 1.66949 0.941105 1.32438 0.943006C0.979266 0.944906 0.648824 1.08283 0.404766 1.32684C0.160708 1.57086 0.0227271 1.90128 0.0207655 2.24639C0.0188038 2.5915 0.153021 2.92347 0.394289 3.17024L8.6435 11.4195L0.394289 19.6687C0.270338 19.7899 0.171668 19.9345 0.103991 20.0941C0.0363139 20.2538 0.000974692 20.4252 1.98797e-05 20.5986C-0.000934933 20.772 0.0325137 20.9438 0.0984285 21.1042C0.164343 21.2645 0.261414 21.4102 0.384022 21.5328C0.50663 21.6554 0.652339 21.7524 0.81271 21.8183C0.973082 21.8842 1.14493 21.9176 1.31831 21.9166C1.49168 21.9157 1.66314 21.8803 1.82275 21.8126C1.98236 21.7449 2.12696 21.6462 2.24817 21.5222L10.497 13.2733L18.7463 21.5222C19.0022 21.7782 19.3378 21.9063 19.673 21.9063C20.0083 21.9063 20.3442 21.7782 20.5998 21.5222C20.8456 21.2764 20.9836 20.943 20.9836 20.5954C20.9836 20.2478 20.8456 19.9145 20.5998 19.6687L12.3509 11.4195Z"
                                fill="#EF0000"
                              />
                            </svg>
                          )}
                          <span className="text-[15px] font-[500]">
                            {item.content}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="sm:mb-0 col-md-4 mb-4 w-full bg-[#fffdfa] border-8 border-[#f3efe7] rounded-[30px] px-6 py-6">
                <div>
                  <div className="mb-4">
                    <span className="text-[24px] rounded-[40px] font-[600] bg-[#F6F6F6] px-4 py-1 text-black">
                      C-Corp
                    </span>
                  </div>
                  <div className="sm:h-[280px]">
                    <ul className="space-y-4">
                      {[
                        {
                          content:
                            "Great for startups fundraising from investors",
                          status: "tick",
                        },
                        {
                          content:
                            "Ability to raise capital by issuing stock; ownership represented by shareholders",
                          status: "tick",
                        },
                        {
                          content:
                            "Management structure with more operating requirements",
                          status: "tick",
                        },
                        {
                          content:
                            "More paperwork and corporate requirements such as annual meetings and minutes",
                          status: "cross",
                        },
                      ].map((item, index) => (
                        <li key={index} className="sm:flex  items-start space-x-3">
                          {item.status === "tick" ? (
                            // Green tick icon with fixed size
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="text-green-500"
                              style={{ minWidth: "24px", minHeight: "24px" }} // Fixed size
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            // Red cross icon with fixed size
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ minWidth: "18px", minHeight: "18px" }} // Fixed size
                            >
                              <path
                                d="M12.3509 11.4195L20.5998 3.17024C20.725 3.04932 20.8249 2.90467 20.8936 2.74474C20.9623 2.58481 20.9984 2.4128 21 2.23875C21.0015 2.0647 20.9683 1.89208 20.9024 1.73098C20.8365 1.56988 20.7391 1.42352 20.6161 1.30044C20.493 1.17736 20.3466 1.08003 20.1855 1.01412C20.0244 0.948208 19.8518 0.915041 19.6778 0.916553C19.5037 0.918066 19.3317 0.954228 19.1718 1.02293C19.0118 1.09163 18.8672 1.19149 18.7463 1.31669L10.497 9.56557L2.24817 1.31669C2.00144 1.07538 1.66949 0.941105 1.32438 0.943006C0.979266 0.944906 0.648824 1.08283 0.404766 1.32684C0.160708 1.57086 0.0227271 1.90128 0.0207655 2.24639C0.0188038 2.5915 0.153021 2.92347 0.394289 3.17024L8.6435 11.4195L0.394289 19.6687C0.270338 19.7899 0.171668 19.9345 0.103991 20.0941C0.0363139 20.2538 0.000974692 20.4252 1.98797e-05 20.5986C-0.000934933 20.772 0.0325137 20.9438 0.0984285 21.1042C0.164343 21.2645 0.261414 21.4102 0.384022 21.5328C0.50663 21.6554 0.652339 21.7524 0.81271 21.8183C0.973082 21.8842 1.14493 21.9176 1.31831 21.9166C1.49168 21.9157 1.66314 21.8803 1.82275 21.8126C1.98236 21.7449 2.12696 21.6462 2.24817 21.5222L10.497 13.2733L18.7463 21.5222C19.0022 21.7782 19.3378 21.9063 19.673 21.9063C20.0083 21.9063 20.3442 21.7782 20.5998 21.5222C20.8456 21.2764 20.9836 20.943 20.9836 20.5954C20.9836 20.2478 20.8456 19.9145 20.5998 19.6687L12.3509 11.4195Z"
                                fill="#EF0000"
                              />
                            </svg>
                          )}
                          <span className="text-[15px] font-[500]">
                            {item.content}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="sm:mb-0 col-md-4 mb-4 w-full bg-[#fffdfa] border-8 border-[#f3efe7] rounded-[30px] px-6 py-6">
                <div>
                  <div className="mb-4">
                    <span className="text-[24px] rounded-[40px] font-[600] bg-[#F6F6F6] px-4 py-1 text-black">
                      DAO LLC
                    </span>
                  </div>
                  <div className="sm:h-[280px]">
                    <ul className="space-y-4">
                      {[
                        {
                          content:
                            "Great for companies that primarily operate on-chain under a Decentralized Autonomous Network",
                          status: "tick",
                        },
                        {
                          content:
                            "Simple management structure and easy to operate via smart contracts",
                          status: "tick",
                        },
                        {
                          content:
                            "Legal Protection for the owners from lawsuits or legal procedures",
                          status: "tick",
                        },
                        {
                          content:
                            "DAO LLC ownership represented by owners % ownership in the LLC. (LLCs cannot issue stock)",
                          status: "cross",
                        },
                      ].map((item, index) => (
                        <li key={index} className="sm:flex  items-start space-x-3">
                          {item.status === "tick" ? (
                            // Green tick icon with fixed size
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="text-green-500"
                              style={{ minWidth: "24px", minHeight: "24px" }} // Fixed size
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            // Red cross icon with fixed size
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ minWidth: "18px", minHeight: "18px" }} // Fixed size
                            >
                              <path
                                d="M12.3509 11.4195L20.5998 3.17024C20.725 3.04932 20.8249 2.90467 20.8936 2.74474C20.9623 2.58481 20.9984 2.4128 21 2.23875C21.0015 2.0647 20.9683 1.89208 20.9024 1.73098C20.8365 1.56988 20.7391 1.42352 20.6161 1.30044C20.493 1.17736 20.3466 1.08003 20.1855 1.01412C20.0244 0.948208 19.8518 0.915041 19.6778 0.916553C19.5037 0.918066 19.3317 0.954228 19.1718 1.02293C19.0118 1.09163 18.8672 1.19149 18.7463 1.31669L10.497 9.56557L2.24817 1.31669C2.00144 1.07538 1.66949 0.941105 1.32438 0.943006C0.979266 0.944906 0.648824 1.08283 0.404766 1.32684C0.160708 1.57086 0.0227271 1.90128 0.0207655 2.24639C0.0188038 2.5915 0.153021 2.92347 0.394289 3.17024L8.6435 11.4195L0.394289 19.6687C0.270338 19.7899 0.171668 19.9345 0.103991 20.0941C0.0363139 20.2538 0.000974692 20.4252 1.98797e-05 20.5986C-0.000934933 20.772 0.0325137 20.9438 0.0984285 21.1042C0.164343 21.2645 0.261414 21.4102 0.384022 21.5328C0.50663 21.6554 0.652339 21.7524 0.81271 21.8183C0.973082 21.8842 1.14493 21.9176 1.31831 21.9166C1.49168 21.9157 1.66314 21.8803 1.82275 21.8126C1.98236 21.7449 2.12696 21.6462 2.24817 21.5222L10.497 13.2733L18.7463 21.5222C19.0022 21.7782 19.3378 21.9063 19.673 21.9063C20.0083 21.9063 20.3442 21.7782 20.5998 21.5222C20.8456 21.2764 20.9836 20.943 20.9836 20.5954C20.9836 20.2478 20.8456 19.9145 20.5998 19.6687L12.3509 11.4195Z"
                                fill="#EF0000"
                              />
                            </svg>
                          )}
                          <span className="text-[15px] font-[500]">
                            {item.content}
                          </span>
                        </li>
                      ))}
                    </ul>
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

      <section className="overflow-hidden px-6 sm:px-10 pt-0 pb-0">
        <div className="overflow-hidden">
          <div className="container-fluid">
            {/* Final Heading Section */}
            <div className="col-12 sm:mb-0 pt-10">
              <p className="text-center sm:mb-5 sm:leading-[50px] leading-[35px] mb-4 text-[34px] sm:text-[32px] font-[600]">
                Getting started is easy
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden px-2 sm:px-10 pt-0 pb-0">
        <div className="overflow-hidden">
          <div className="container-fluid">
            <Carousal />
          </div>
        </div>
      </section>

      <section className="overflow-hidden px-6 sm:px-1 pt-2 pb-3">
        <div className="overflow-hidden">
          <div className="container-fluid">
            <div className="col-12 sm:mb-5 sm:pt-0 sm:pt-8 ">
              <p className="text-center sm:text-[34px] text-[44px] sm:leading-[10px] leading-[35px] font-[600]">
                Unleash your success now
              </p>
              <p className="text-center text-[20px] sm:text-[18px] font-[400] sm:pe-5">
                <span className="text-[#0073fd] sm:leading-[10px]">
                  {" "}
                  Compare packages →
                </span>
              </p>
            </div>

            <div className="col-12 mb-5 pt-4 sm:flex  sm:flex -wrap justify-center items-center gap-4">
              <div className="w-full sm:w-[30%] bg-[#fffdfa] border-8 border-[#f3efe7] rounded-[20px] px-6 py-6">
                <div className="h-[135px]">
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
              <div className="w-full sm:w-[30%] bg-[#fffdfa] border-8 border-[#f3efe7] rounded-[20px] px-6 py-6">
                <div className="h-[135px]">
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

      <section className="overflow-hidden sm:px-20 px-6  pt-10 pb-10  bg-[#f3efe7]">
        <div className="overflow-hidden">
          <div className="container-fluid">
            <div className="row">
              <FAQ />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#fff] overflow-hidden sm:px-20 px-6 sm:py-5 py-5">
        <div className="container-fluid p-0">
          <div className="row justify-center">
            <div className="col-md-6">
              <div className="text-center">
                <p className="text-[#212833] font-[cd-m] font-[500] sm:text-[30px] text-[25px] leading-[28px] sm:leading-[40px]  mb-0">
                  Explore over 600 resources for managing small business
                  finances
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-between pt-14">
            <div className="col-md-4 ">
              <div className="mb-4 sm:bg-[#fff] bg-[#f3efe7] sm:border-none border-none border-black sm:px-0 px-3 sm:py-0 py-2  rounded-[10px]">
                <div className="">
                  <Image
                    src="/assets/images/image 57 (1).png"
                    className="w-full"
                    width={1080}
                    height={1080}
                    alt="no-img"
                  />
                </div>
                <div className="pt-6 sm:pb-0 pb-4">
                  <p className="font-[cd-m] text-[#0D0D0D] sm:text-[22px] text-[18px] leading-[20px] sm:leading-[30px]  mb-0">
                    How to Deal with Inflation&apos;s Effects on Your Small
                    Business
                  </p>
                  <p className="font-[cd-r] sm:text-[15px] text-[15px] text-[#4F4F4F]  sm:leading-[25px] leading-[20px] sm:pt-6 pt-3">
                    A year end package with everything you need to file comes
                    standard with Cloud Inc. Upgrade your plan, and cross even
                    more off your to-do list. With Premium, you get expert tax
                    prep, filing, and year-round tax advisory support.
                  </p>

                  <div className="sm:py-6">
                    <button
                      className="font-[cd-r] bg-[#fff] text-[15px] text-[#000] border-[#000] border-[2px]  rounded-[5px] px-10 py-[10px]"
                      type="button"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-4 sm:bg-[#fff] bg-[#f3efe7] sm:border-none border-none border-black sm:px-0 px-3 sm:py-0 py-2 rounded-[10px]">
                <div className="">
                  <Image
                    src="/assets/images/image 47.png"
                    className="w-full"
                    width={1080}
                    height={1080}
                    alt="no-img"
                  />
                </div>
                <div className="pt-6 sm:pb-0 pb-4">
                  <p className="font-[cd-m] text-[#0D0D0D] sm:text-[22px] text-[18px] leading-[20px] sm:leading-[30px]  mb-0">
                    How to Deal with Inflation&apos;s Effects on Your Small
                    Business
                  </p>
                  <p className="font-[cd-r] sm:text-[15px] text-[15px] text-[#4F4F4F]  sm:leading-[25px] leading-[20px] sm:pt-6 pt-3">
                    A year end package with everything you need to file comes
                    standard with Cloud Inc. Upgrade your plan, and cross even
                    more off your to-do list. With Premium, you get expert tax
                    prep, filing, and year-round tax advisory support.
                  </p>

                  <div className="sm:py-6 py-3">
                    <button
                      className="font-[cd-r] bg-[#fff] text-[15px] text-[#000] border-[#000] border-[2px]  rounded-[5px] px-10 py-[10px]"
                      type="button"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-4 sm:bg-[#fff] bg-[#f3efe7] sm:border-none border-none border-black sm:px-0 px-3 sm:py-0 py-2 rounded-[10px]">
                <div className="">
                  <Image
                    src="/assets/images/image 48.png"
                    className="w-full"
                    width={1080}
                    height={1080}
                    alt="no-img"
                  />
                </div>
                <div className="pt-6 sm:pb-0 pb-4">
                  <p className="font-[cd-m] text-[#0D0D0D] sm:text-[22px] text-[18px] leading-[20px] sm:leading-[30px]  mb-0">
                    How to Deal with Inflation&apos;s Effects on Your Small
                    Business
                  </p>
                  <p className="font-[cd-r] sm:text-[15px] text-[15px] text-[#4F4F4F]  sm:leading-[25px] leading-[20px] sm:pt-6 pt-3">
                    A year end package with everything you need to file comes
                    standard with Cloud Inc. Upgrade your plan, and cross even
                    more off your to-do list. With Premium, you get expert tax
                    prep, filing, and year-round tax advisory support.
                  </p>

                  <div className="sm:py-6 py-3">
                    <button
                      className="font-[cd-r] bg-[#fff] text-[15px] text-[#000] border-[#000] border-[2px]  rounded-[5px] px-10 py-[10px]"
                      type="button"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
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
