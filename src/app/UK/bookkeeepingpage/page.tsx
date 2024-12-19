"use client";
import Image from "next/image";
import HeaderUK from "@/app/components/headerUk";
import FAQ from "../../components/faq";
import Footer from "../../components/footer";
import DownloadText from "@/app/components/downloadtext";
import BusinessStarterText from "@/app/components/businesstartertext";

import "bootstrap/dist/css/bootstrap.min.css";
import PricingPlans from "@/app/components/PricingPlans";
export default function Home() {
  return (
    <>
      <section>
        <div className="bg-[#F7F3EB]">
          <HeaderUK />
        </div>
      </section>

      <section className="overflow-hidden sm:px-20 px-6 sm:pt-22 pt-0 pb-0">
        <div className="overflow-hidden">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 sm:flex  justify-start items-center">
                <div className="col-md-10">
                  <p className="sm:text-[53px] text-[25px] sm:leading-[60px] leading-[35px] font-[600]">
                    Bookkeeping services in the UK
                  </p>
                  <p className="sm:text-[18px] sm:leading-[25px] leading-[22px] font-[400] pe-4">
                    We handle your bookkeeping for you so you can focus on doing business. Pay the right tax, reconcile transactions, and prepare invoices, all in one online platform.
                  </p>
                  <div className="col-12 sm:flex  gap-3 mb-4">
                    <div>
                      <button className="border-1 hover:text-[#fff] hover:bg-[#000] font-[400] border-[black] sm:w-[150px] w-full mb-2 h-[40px] rounded-[50px] text-[15px]">
                        Get Started
                      </button>
                    </div>
                    <div>
                      <button className="border-1 hover:text-[#fff] hover:bg-[#000] font-[400] border-[black] sm:w-[150px] w-full h-[40px] rounded-[50px] text-[15px]">
                        Schedule a call
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 sm:flex  justify-center items-center sm:pt-12 sm:pb-12">
                <div className="col-md-12 sm:flex  justify-end items-center">
                  <Image
                    src="/assets/images/Picture ⏵ comp-secreyary-vanessa-sg@1x.webp (10).png"
                    width={500}
                    height={350}
                    alt="no-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="overflow-hidden px-6 sm:px-20 pb-18 pt-0 pb-10 bg-[#F7F3EB]">
        <div className="overflow-hidden">
          <div className="container-fluid">
            {/* Final Heading Section */}
            <div className="col-12 sm:mb-5 sm:flex  justify-center pt-5">
              <div className="sm:w-[550px]">
                <p className="text-[18px] font-[400] text-center sm:leading-[18px]">
                  WHAT YOU GET
                </p>
                <p className="text-center text-[24px] sm:text-[34px] font-[600] sm:leading-[40px]">
                  Total visibility and control over your finances
                </p>
              </div>
            </div>
            <div className="col-12 sm:flex   justify-center mt-14 ">
              <div className="col-12 sm:flex   justify-center gap-2 ">
                <div className="col-md-3 rounded-[10px] sm:mb-0 mb-4 px-4 py-2 bg-[#fff]">
                  <div className="py-4">
                    <Image
                      src="/assets/images/image 33.svg"
                      width={112}
                      height={112}
                      alt="no-img"
                    />
                  </div>
                  <div className="sm:h-[180px] px-2 w-[250px]">
                    <div className="sm:w-[150px]">
                      <p className="text-[25px] font-[500] leading-[30px]">
                        Dedicated accountant
                      </p>
                    </div>
                    <p className="text-[15px] font-[400] text-[#656565] leading-[22px]">
                      Your dedicated accountant is on-call through live chat and
                      responds within 24 hours.
                    </p>
                  </div>
                </div>
                <div className="col-md-3 rounded-[10px] sm:mb-0 mb-4 px-4 py-2 bg-[#fff]">
                  <div className="py-4">
                    <Image
                      src="/assets/images/image 34 (1).svg"
                      width={112}
                      height={112}
                      alt="no-img"
                    />
                  </div>
                  <div className="h-[180px] px-2 w-[250px]">
                    <div className="w-[200px]">
                      <p className="text-[25px] font-[500] leading-[30px]">
                        Effortless online process
                      </p>
                    </div>
                    <p className="text-[15px] font-[400] text-[#656565] leading-[22px]">
                      Our financial tools give you control, automating
                      invoicing, payments, and expenses with real-time cash flow
                      insight.
                    </p>
                  </div>
                </div>
                <div className="col-md-3 rounded-[10px] sm:mb-0 mb-4 px-4 py-2 bg-[#fff]">
                  <div className="py-4">
                    <Image
                      src="/assets/images/image 31 (1).svg"
                      width={112}
                      height={112}
                      alt="no-img"
                    />
                  </div>
                  <div className="px-2 w-[250px]">
                    <div className="w-[200px]">
                      <p className="text-[25px] font-[500] leading-[30px]">
                        Unlimited bookkeeping
                      </p>
                    </div>
                    <p className="text-[15px] font-[400] text-[#656565] leading-[22px]">
                      Bookkeeping is part of your package. We&apos;ll take care
                      of your financial records, taxes, transaction matching,
                      and billing.
                    </p>
                  </div>
                </div>
                <div className="col-md-3 rounded-[10px] sm:mb-0 mb-4 px-4 py-2 bg-[#fff]">
                  <div className="py-4">
                    <Image
                      src="/assets/images/image 36 (1).svg"
                      width={112}
                      height={112}
                      alt="no-img"
                    />
                  </div>
                  <div className="px-2 w-[250px]">
                    <div className="w-[250px]">
                      <p className="text-[25px] font-[500] leading-[30px]">
                        Filing and compliance
                      </p>
                    </div>
                    <p className="text-[15px] font-[400] text-[#656565] leading-[22px]">
                      Leave the tax, deadlines, and filing with HMRC to us.
                      We’ll make sure you pay the right tax and stay compliant.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="overflow-hidden sm:px-20 px-6 sm:py-10 py-10 pt-14 bg-[#f3efe7]">
        <div className="container-fluid  pt-2">
          <div className="col-12 sm:flex  justify-center mb-5">
            <div className="col-md-6">
              <p className="text-center text-[18px] font-[400]">WHY CLOUD BSS</p>
              <p className="text-center text-[48px] font-[600] leading-[45px]">Benefits of Cloud Bss services</p>

            </div>
          </div>
          <div className="sm:d-sm:flex   justify-center">
            <div className="col-md-11">
              <div className="col-12 sm:flex  gap-4 align-items-center justify-between">
                <div className="col-md-6 mb-4">
                  <div className="sm:d-sm:flex justify-start">
                    <Image
                      src="/assets/images/Group 17834.png"
                      alt=".."
                      width={502}
                      height={382}
                    />
                  </div>
                </div>
                <div className="col-md-6 order-md-1 order-2 mb-4">
                  <p className="sm:leading-[45px] leading-[25px] font-[600] text-[#212833] sm:text-[42px] text-[22px] mb-3">
                    Bringing order to your documents chaos
                  </p>
                  <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[16px] mb-0">
                    Your compliance in check. We track deadlines, file
                    documents, and answer questions daily. All standard
                    resolutions and routine filings are included in the plan.
                  </p>

                </div>
              </div>
            </div>
          </div>
          <div className="sm:d-sm:flex   justify-center">
            <div className="col-md-11">
              <div className="col-12 sm:flex  align-items-center justify-content-between">
                <div className="col-md-6 sm:flex  justify-end order-md-2 order-1 mb-4">
                  <Image
                    src="/assets/images/Group 17835.png"
                    alt=".."
                    width={502}
                    height={382}
                  />
                </div>

                <div className="col-md-6 order-md-1 order-2 mb-4">
                  <p className=" font-[600] text-[#212833] sm:text-[42px] text-[22px] mb-3">
                    Books done in minutes
                  </p>
                  <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[16px] mb-0">
                    Send us your documents the minute you receive them. We reconcile every 24 hours and show what&apos;s missing, meaning you don&apos;t have to spend hours retracing old invoices.
                  </p>

                </div>
              </div>
            </div>
          </div>
          <div className="sm:d-sm:flex   justify-center">
            <div className="col-md-11">
              <div className="col-12 sm:flex  gap-4 align-items-center justify-between">
                <div className="col-md-6 mb-4">
                  <div className="sm:d-sm:flex   justify-start">
                    <Image
                      src="/assets/images/Rectangle 4670.png"
                      alt=".."
                      width={502}
                      height={382}
                    />
                  </div>
                </div>
                <div className="col-md-6 order-md-1 order-2 mb-4">
                  <p className=" font-[600] text-[#212833] sm:text-[42px] text-[22px] mb-3">
                    A dedicated bookkeeper
                  </p>
                  <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[16px] mb-0">
                    We respond quickly to any live chat queries, even late at night or over the weekend.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden sm:px-0 pt-0 pb-0">
        <div className="overflow-hidden">
          <div className="">
            <div className="sm:col-12 sm:flex  bg-[#000]">
              <div className="col-md-6 py-16 px-4 border-[#fff] sm:flex  justify-end items-center">
                <div className="col-md-10">
                  <div className="sm:col-md-10">
                    <p className="text-[#fff] sm:text-[48px] text-[35px] font-[600] sm:leading-[53px] leading-[40px]">
                      Got questions? Chat with our local experts
                    </p>
                  </div>
                  <div className="col-md-11">
                    <p className="text-[#fff] text-[19px] font-[400] leading-[25px]">
                      Choose a convenient time to chat with our accounting
                      experts and get the answers you need to take the next
                      step.
                    </p>
                  </div>
                  <div className="col-md-12">
                    <button className="text-[#000] bg-[#fff] font-[400] py-2 rounded-[50px] hover:text-[#fff] hover:bg-[#000] border transition px-4">
                      Schedula a call
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 border-[#fff] sm:flex  justify-end items-end sm:px-4 sm:pt-14">
                <div className="col-md-8">
                  <Image
                    src="/assets/images/image 45.png"
                    width={400}
                    height={350}
                    alt="no-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PricingPlans />

      <section className="overflow-hidden sm:px-20 px-6 pt-14 sm:pb-10 bg-[#ccdfff]">
        <div className="overflow-hidden">
          <div className="container-fluid">
            <DownloadText />
          </div>
        </div>
      </section>

      <section className="overflow-hidden sm:px-20 px-6 bg-[#F7F3EB] pt-10 pb-10">
        <div className="overflow-hidden">
          <div className="container-fluid">
            <FAQ />
          </div>
        </div>
      </section>

      <section className="overflow-hidden sm:px-20 px-6 sm:py-5 py-5 bg-[#F7F3EB]">
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
            <div className="col-md-4 bg-[#F7F3EB]">
              <div className="mb-4 sm:bg-[#F7F3EB] bg-[#F7F3EB] sm:border-none border-none border-black sm:px-0 px-3 sm:py-0 py-2  rounded-[10px]">
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
              <div className="mb-4 sm:bg-[#F7F3EB] bg-[#F7F3EB] sm:border-none border-none border-black sm:px-0 px-3 sm:py-0 py-2 rounded-[10px]">
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
              <div className="mb-4 sm:bg-[#F7F3EB] bg-[#F7F3EB] sm:border-none border-none border-black sm:px-0 px-3 sm:py-0 py-2 rounded-[10px]">
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
