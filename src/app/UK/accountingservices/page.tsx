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
                    Your finances sorted with all-in-one accounting services
                  </p>
                  <p className="sm:text-[18px] sm:leading-[25px] leading-[22px] font-[400] pe-4">
                    Free yourself from financial admin. Our dedicated experts
                    and easy-to-use tools make managing your money easier.
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
                    src="/assets/images/header-1.png"
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
              <div className="w-[550px]">
                <p className="text-[18px] font-[400] text-center sm:leading-[18px]">
                  WHAT YOU GET
                </p>
                <p className="text-center text-[24px] sm:text-[34px] font-[600] sm:leading-[40px]">
                  Total visibility and control over your finances
                </p>
              </div>
            </div>
            <div className="col-12 sm:flex justify-center mt-14 ">
              <div className="col-12 sm:flex justify-center gap-2 ">
                <div className="col-md-3 rounded-[10px] sm:mb-0 mb-4 px-4 py-2 bg-[#fff]">
                  <div className="py-4">
                    <Image
                      src="/assets/images/image 33.svg"
                      width={112}
                      height={112}
                      alt="no-img"
                    />
                  </div>
                  <div className="h-[180px] px-2 w-[250px]">
                    <div className="w-[150px]">
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

      <section className="overflow-hidden px-6 sm:px-20 pt-0 pb-10">
        <div className="overflow-hidden">
          <div className="container-fluid">
            <div className="col-12 pb-4">
              <div className="col-12 sm:flex  justify-center pt-12">
                <button className="font-[400] text-[17px] pb-2">PRICING</button>
              </div>
              <div className="sm:flex  justify-center pb-2">
                <div className="w-[730px]">
                  <p className="text-[46px] text-center leading-[50px] font-[600]">
                    For new founders and seasoned entrepreneurs
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 sm:flex  justify-center gap-2">
              <div className="col-md-4">
                <div className="sm:flex  justify-center py-4">
                  <Image
                    src="/assets/images/Rectangle 4644.svg"
                    width={450}
                    height={112}
                    alt="no-img"
                  />
                </div>
                <div className="col-md-12">
                  <p className="text-center text-[26px] font-[500] leading-[25px]">
                    Solo founders
                  </p>
                  <p className="text-center text-[15px] font-[500] text-[#9D9D9D] leading-[20px]">
                    Ambitious startups require adaptable, proactive accounting
                    services. We prepare financial statements and manage
                    bookkeeping to provide your business with the support
                    necessary for growth.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="sm:flex  justify-center py-4">
                  <Image
                    src="/assets/images/Rectangle 4645.svg"
                    width={450}
                    height={112}
                    alt="no-img"
                  />
                </div>
                <div className="col-md-12">
                  <p className="text-center text-[26px] font-[500] leading-[25px]">
                    Small Business
                  </p>
                  <p className="text-center text-[15px] font-[500] text-[#9D9D9D] leading-[20px]">
                    Start small and grow with confidence. We give you the
                    experts and tools to track your cash flow, manage your
                    finances, and pay the right tax.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="sm:flex  justify-center py-4">
                  <Image
                    src="/assets/images/Rectangle 4646.svg"
                    width={450}
                    height={112}
                    alt="no-img"
                  />
                </div>
                <div className="col-md-12">
                  <p className="text-center text-[26px] font-[500] leading-[25px]">
                    Ecommerce
                  </p>
                  <p className="text-center text-[15px] font-[500] text-[#9D9D9D] leading-[20px]">
                    Forget generic accounting solutions. Our accountants know
                    ecommerce and our software supports Amazon, Shopify, and
                    eBay integrations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <PricingPlans/> */}

      <section className="overflow-hidden sm:px-20 px-6 sm:py-10 py-10 bg-[#F7F3EB]">
        <div className="container-fluid p-0">
          <div className="row justify-center">
            <div className="col-md-6 sm:pb-4">
              <div className="text-center ">
                <p className="text-[#353535] font-[400] text-[16px]">
                  WHY CLOUD BSS
                </p>
                <p className="sm:text-[39px] font-[600] text-[30px]  text-[#000] text-center sm:leading-[38px] leading-[35px]">
                  Feel fully in control of your business finances
                </p>
              </div>
            </div>
          </div>

          <div className="sm:flex  justify-center">
            <div className="col-md-10 pt-4">
              <div className="row align-items-center justify-between">
                <div className="col-md-5 mb-4">
                  <Image
                    src="/assets/images/Rectangle 4630.png"
                    className="w-full"
                    width={1080}
                    height={1080}
                    alt="no-img"
                  />
                </div>
                <div className="col-md-5 mb-4">
                  <div className="col-md-10">
                    <p className="text-[38px] font-[600] leading-[40px]">
                      Experts on your side
                    </p>
                    <p className="text-[16px] text-[#000] font-[400]  leading-[25px] ">
                      Get a personal accountant for your business from day one.
                      Our UK-based team helps founders get their taxes right
                      from the start. Any questions? Get a response through live
                      chat within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row align-items-center justify-between">
                <div className="col-md-5 order-md-2 order-1 mb-4">
                  <Image
                    src="/assets/images/group 17750.png"
                    className="w-full"
                    width={1080}
                    height={1080}
                    alt="no-img"
                  />
                </div>
                <div className="col-md-5 order-md-1 order-2 mb-4">
                  <div className="col-md-10">
                    <p className="text-[38px] font-[600] leading-[40px]">
                      Get clear on cash flow
                    </p>
                    <p className="text-[16px] text-[#000] font-[400]  leading-[25px] ">
                      With our real-time dashboard, your cash flow info is at
                      your fingertips. Quickly see the money you have, what you
                      owe, and how much you’re owed.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row align-items-center justify-between">
                <div className="col-md-5 mb-4 ">
                  <Image
                    src="/assets/images/Rectangle 4639.png"
                    className="w-full"
                    width={1080}
                    height={1080}
                    alt="no-img"
                  />
                </div>
                <div className="col-md-5 mb-4">
                  <div className="col-md-11">
                    <p className="text-[38px] font-[600] leading-[40px]">
                      Pay the right tax
                    </p>
                    <p className="text-[16px] text-[#000] font-[400]  leading-[25px]">
                      We help you stay on top of your finances. We keep track of
                      deadlines and remind you about VAT and other compliance
                      needs. Plus, our experts handle tax returns and filing, so
                      you’re free to focus on your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-center">
            <div className="col-md-10 mt-4 sm:flex  justify-center sm:pb-4">
              <div className="text-center sm:flex  items-center">
                <p className="sm:text-[44px] font-[500] text-[30px]  text-[#000] text-center sm:leading-[38px] leading-[35px]">
                  Bookkeeping?
                </p>
                <Image
                  src="/assets/images/image 43.svg"
                  className=""
                  width={80}
                  height={40}
                  alt="no-img"
                />
                <p className="sm:text-[px] font-[500] text-[30px]  text-[#000] text-center sm:leading-[38px] leading-[35px]">
                  It’s included.
                </p>
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
