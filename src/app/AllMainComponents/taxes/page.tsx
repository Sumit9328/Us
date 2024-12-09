"use client";
import Image from "next/image";
import Header from "@/app/components/header";
import FAQ from "../../components/faq";
import Footer from "../../components/footer";

import "bootstrap/dist/css/bootstrap.min.css";
export default function Home() {
  return (
    <>
      <section>
        <div className="bg-[#f3efe7]">
          <Header />
        </div>
      </section>

      <section className="overflow-hidden sm:px-20 px-6  pt-32 pb-10">
        <div className="overflow-hidden">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 flex justify-start items-center">
                <div className="col-md-10">
                  <p className="sm:text-[50px] text-[30px] sm:leading-[60px] leading-[35px]  font-[600] ">
                    Embrace worry-free tax filings
                  </p>

                  <div className="col-12 flex gap-3 mb-4">
                    <div>
                      <button className="border-1 font-[400] border-[black] w-[150px] h-[40px] rounded-[50px] text-[14px]">
                        Get Started
                      </button>
                    </div>
                    <div>
                      <button className="border-1 font-[400] border-[black] w-[150px] h-[40px] rounded-[50px] text-white bg-black text-[14px]">
                        Schedule a call
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 flex justify-center items-center">
                <div className="col-md-12 flex justify-end items-center">
                  <Image
                    src="/assets/images/Picture ⏵ comp-secreyary-vanessa-sg@1x.webp (4).png"
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

      <section className="overflow-hidden sm:px-20 px-6 py-0 pb-10  ">
        <div className="overflow-hidden">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <p className="text-center sm:text-[34px] text-[30px] font-[600] sm:mt-2 sm:leading-[35px] leading-[35px]">
                  Easily manage & grow your business
                </p>
                <p className="text-center sm:text-[16px] text-[16px] font-[400] leading-[20px]">
                  Your taxes, compliance, and finances made simple.
                </p>
                <div className="col-12 sm:flex justify-center">
                  <div className="col-9 bg-[#f3efe7] flex rounded-[20px] mt-3">
                    <div className="sm:col-md-7 p-5 sm:h-[300px] flex items-center">
                      <div className="mt-2">
                        <p className="text-[33px] font-[600]">
                          All your forms filed in one place
                        </p>
                        <p className="text-[15px] font-[400]">
                          Cloud BSS prepares and files tax forms for independent
                          contractors, freelancers, startups, e-commerce owners,
                          and service vendors, ensuring a worry-free experience.
                        </p>
                        <div className="col-12 sm:flex gap-3 mb-4">
                          <div>
                            <button className="border-1 font-[400] bg-[#fff] border-[black] w-[150px] h-[40px] rounded-[50px] text-[14px]">
                              Get Started
                            </button>
                          </div>
                          <div>
                            <button className="border-1 font-[400] border-[black] w-[150px] h-[40px] rounded-[50px] text-white bg-black text-[14px]">
                              Schedule a call
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 sm:flex justify-end">
                      <Image
                        src="/assets/images/Figure → percentage.png.png"
                        width={350}
                        height={280}
                        alt="no-img"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-12 sm:flex justify-center">
                  <div className="col-9 sm:flex rounded-[20px] mt-3 gap-2 sm:h-[300px] mr-3">
                    <div className="col-md-6 rounded-[20px] bg-[#fbf9f3] flex justify-center items-center">
                      <div className="col-10">
                        <div className="sm:h-[100px]">
                          <p className="text-[32px] font-[600] leading-[40px]">
                            The easiest tax solution for Non-US residents
                          </p>
                        </div>
                        <div className="sm:h-[80px]">
                          <p className="text-[14px] font-[400]">
                            Starting a US Company as a non-US resident? We’ve
                            got the tax expertise you need. We handle your every
                            tax and compliance need and can answer all your
                            questions. Launch your US business and get your
                            taxes done with Cloud BSS.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 rounded-[20px] bg-[#fbf9f3]  flex justify-center items-center">
                      <div className="col-10">
                        <div className="sm:h-[100px]">
                          <p className="text-[34px] font-[600] leading-[40px]">
                            Avoid penalities
                          </p>
                        </div>
                        <div className="sm:h-[80px]">
                          <p className="text-[14px] font-[400]">
                            You can be fined $25,000 for inaccurate or missing
                            forms, and can be charged $250 PER FORM for
                            non-compliance. Make sure you avoid all fines by
                            filing with our experienced CPAs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 sm:flex justify-center">
                  <div className="col-md-9 sm:flex  mt-3 gap-2 sm:h-[400px] ">
                    <div className="col-md-7 bg-[#fff] flex items-center">
                      <div className="col-md-10">
                        <p className="sm:text-[26px] text-[26px] font-[600] sm:leading-[30px] leading-[34px] mb-4">
                          Seamless tax filings unlocking simplicity with a
                          single price
                        </p>
                        <button className="bg-[#0073fd] font-[400] text-[#fff] rounded-[50px] mb-4 sm:w-[280px] w-[320px] sm:h-[35px] h-[45px]">
                          Incl, in Total Compliance
                        </button>
                      </div>
                    </div>
                    <div className="col-md-5 rounded-[30px] border-8 border-[#f3efe7] bg-[#fffdfa] ">
                      <div>
                        <div className="mb-4 mt-4">
                          <span className="text-[24px] rounded-[40px] font-[600] px-4 py-1 text-black">
                            Cloud Bss Taxes
                          </span>
                        </div>
                        <div className="sm:h-[280px]">
                          <ul className="space-y-4">
                            {[
                              {
                                content: "Annual State filings",
                                status: "tick",
                              },
                              {
                                content: "Business IRS Tax filings",
                                status: "tick",
                              },
                              {
                                content: "1:1 CPA consultation",
                                status: "tick",
                              },
                              {
                                content: "24/7 live customer support",
                                status: "tick",
                              },
                            ].map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start space-x-3"
                              >
                                {item.status === "tick" ? (
                                  // Green tick icon with fixed size
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="text-green-500"
                                    style={{
                                      minWidth: "24px",
                                      minHeight: "24px",
                                    }} // Fixed size
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
                                    style={{
                                      minWidth: "18px",
                                      minHeight: "18px",
                                    }} // Fixed size
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
                          <p className="text-[35px] sm:text-[45px] font-[600] ml-9 leading-[50px]">
                            <span className="text-[25px] sm:text-[30px]">
                              $
                            </span>{" "}
                            297/y
                          </p>
                          <div className="col-12 sm:mt-4 flex justify-center mb-4">
                            <button className="border border-black rounded-[50px] text-[14px] sm:text-[16px] text-white bg-black sm:w-[350px] w-[260px] h-[40px]">
                              Total Compliance
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 flex justify-center items-end">
                <div>
                  {/* Final Heading Section */}
                  <div className="col-12 sm:mb-5 pt-14">
                    <p className="text-center sm:leading-[10px] leading-[1px] text-[24px] sm:text-[32px] font-[600]">
                      Unleash your success now
                    </p>
                    <p className="text-center text-[14px] sm:text-[18px] font-[400] sm:leading-[1px] leading-[20px]"></p>
                    <p className="text-center text-[14px] sm:text-[18px] font-[400] sm:pe-5">
                      <span className="text-[#0073fd]">
                        {" "}
                        Compare packages →
                      </span>
                    </p>
                  </div>

                  {/* Pricing Section */}
                  <div className="col-12 mb-4 sm:pt-10 pt-4 flex flex-wrap justify-center items-center gap-4">
                    <div className="w-full sm:w-[30%] bg-[#fffdfa] border-8 border-[#f3efe7] rounded-[20px] px-6 py-6">
                      <p className="text-[20px] sm:text-[25px] font-[600] leading-[20px]">
                        Starter
                      </p>
                      <p className="text-[16px] sm:text-[18px] font-[500] leading-[20px]">
                        Start your business
                      </p>
                      <p className="text-[14px] sm:text-[16px] font-[400] text-[#666666] leading-[20px]">
                        Formation & EIN filings, RA service, Operating
                        Agreement, and regular compliance reminders.
                      </p>
                      <p className="text-[35px] sm:text-[45px] font-[600] leading-[50px]">
                        <span className="text-[25px] sm:text-[30px]">$</span>{" "}
                        297/y
                      </p>
                      <p className="text-[12px] sm:text-[14px] font-[400] text-[#767676] leading-[1px]">
                        State fee not included.
                      </p>
                      <div className="col-12 mt-4">
                        <button className="border font-[400] border-black rounded-[50px] text-[14px] sm:text-[16px] text-white bg-black w-full h-[45px]">
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
                      <p className="text-[14px] sm:text-[16px] font-[400] text-[#666666] leading-[20px]">
                        Formation with Annual State filings, IRS Tax filings, a
                        dedicated Account Manager and a free CPA consultation.
                      </p>
                      <p className="text-[35px] sm:text-[45px] font-[600] leading-[50px]">
                        <span className="text-[25px] sm:text-[30px]">$</span>{" "}
                        300/m
                      </p>
                      <p className="text-[12px] sm:text-[14px] font-[400] text-[#767676] leading-[1px]">
                        State fee not included.
                      </p>
                      <div className="col-12 mt-4">
                        <button className="border border-black font-[400] rounded-[50px] text-[14px] sm:text-[16px] text-white bg-black w-full h-[45px]">
                          Total Compliance
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden sm:px-20 px-6  pt-10 pb-10 bg-[#FAF8F6]">
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
                  <p className="font-[cd-r] sm:text-[15px] text-[14px] text-[#4F4F4F]  sm:leading-[25px] leading-[20px] sm:pt-6 pt-3">
                    A year end package with everything you need to file comes
                    standard with Cloud Inc. Upgrade your plan, and cross even
                    more off your to-do list. With Premium, you get expert tax
                    prep, filing, and year-round tax advisory support.
                  </p>

                  <div className="sm:py-6">
                    <button
                      className="font-[cd-r] bg-[#fff] text-[14px] text-[#000] border-[#000] border-[2px]  rounded-[5px] px-10 py-[10px]"
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
                  <p className="font-[cd-r] sm:text-[15px] text-[14px] text-[#4F4F4F]  sm:leading-[25px] leading-[20px] sm:pt-6 pt-3">
                    A year end package with everything you need to file comes
                    standard with Cloud Inc. Upgrade your plan, and cross even
                    more off your to-do list. With Premium, you get expert tax
                    prep, filing, and year-round tax advisory support.
                  </p>

                  <div className="sm:py-6 py-3">
                    <button
                      className="font-[cd-r] bg-[#fff] text-[14px] text-[#000] border-[#000] border-[2px]  rounded-[5px] px-10 py-[10px]"
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
                  <p className="font-[cd-r] sm:text-[15px] text-[14px] text-[#4F4F4F]  sm:leading-[25px] leading-[20px] sm:pt-6 pt-3">
                    A year end package with everything you need to file comes
                    standard with Cloud Inc. Upgrade your plan, and cross even
                    more off your to-do list. With Premium, you get expert tax
                    prep, filing, and year-round tax advisory support.
                  </p>

                  <div className="sm:py-6 py-3">
                    <button
                      className="font-[cd-r] bg-[#fff] text-[14px] text-[#000] border-[#000] border-[2px]  rounded-[5px] px-10 py-[10px]"
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
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <div className="col-md-8">
                <p className="font-[cd-m] text-[#fff] sm:text-[30px] text-[18px] leading-[20px] sm:leading-[30px]  mb-0">
                  Get tips on how to run your business smarter
                </p>
                <p className="font-[cd-r] text-[#ABABAB] sm:text-[16px] text-[14px] pt-4 mb-0">
                  Learn crucial tips on how to save money and build a
                  flourishing business, with real entrepreneurs sharing their
                  own experiences.
                </p>
                <div className="sm:flex justify-center items-center gap-4 max-w-lg mx-auto pt-4">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-2 font-[400] rounded-full text-black border border-gray-400 mb-4"
                  />
                  <button className="bg-white text-black font-medium px-6 py-2 rounded-full hover:bg-gray-100 mb-4 ">
                    SUBSCRIBE
                  </button>
                </div>
                <p className="text-[#fff] font-[400] text-[14px]">
                  <a className="no-underline font-[400] text-[#ABABAB] " href="#">
                    By clicking, you agree to our
                  </a>{" "}
                  Terms & Conditions, Privacy and Data Protection Policy
                </p>
              </div>
            </div>
            <div className="col-md-6 ">
              <Image
                src="/assets/images/original-4703d0ba72b72f87fa49a618a24a1f6d 3.png"
                className="w-full"
                width={1080}
                height={1080}
                alt="no-img"
              />
            </div>
          </div>
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
