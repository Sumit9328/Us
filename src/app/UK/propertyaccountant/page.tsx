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
                    Expert property accountants for your UK portfolio
                  </p>
                  <p className="sm:text-[18px] sm:leading-[25px] leading-[22px] font-[400] pe-4">
                    Maximise your profits and pay the right tax by relying on our team of expert tax advisors. Become more efficient and stay compliant, whether you’re a buy-to-let landlord or manage a property for additional income.
                  </p>
                  <div className="col-12 sm:flex  gap-3 mb-4">
                    <div>
                      <button className="border-1 mb-2 hover:text-[#fff] hover:bg-[#000] font-[400] border-[black] sm:w-[150px] w-full h-[40px] rounded-[50px] text-[15px]">
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

      <section className="overflow-hidden sm:px-20 px-6 sm:py-10 py-10 pt-14 bg-[#f3efe7]">
        <div className="container-fluid  pt-2">
          <div className="col-12 sm:flex  justify-center mb-14">
            <div className="col-md-6">
              <p className="text-[18px] font-[400] text-center">WHY CLOUD BSS</p>
              <p className="sm:text-[48px] text-[35px] font-[600] text-center sm:leading-[45px]">Tailored financial advice for the property sector</p>
            </div>
          </div>
          <div className="sm:d-sm:flex   justify-center">
            <div className="col-md-11">
              <div className="col-12 sm:flex  gap-4 align-items-center justify-between">
                <div className="col-md-6 mb-4">
                  <div className="sm:d-sm:flex   justify-start">
                    <Image
                      src="/assets/images/Group 17834.png"
                      alt=".."
                      width={502}
                      height={382}
                    />
                  </div>
                </div>
                <div className="col-md-6 order-md-1 order-2 mb-4">
                  <p className="font-[600] text-[#212833] sm:text-[42px] text-[22px] mb-3 sm:leading-[45px]">
                    Specialist property accountants
                  </p>
                  <p className="font-[400] text-[#7C7C7C] text-[16px] mb-0">
                    Understanding property taxes can be intricate, and the strategy you take should be personalised to your portfolio and objectives. Our UK team of property accountants help buy-to-let landlords and HMOs with this, and are always available via phone call or live chat.
                  </p>

                </div>
              </div>
            </div>
          </div>
          <div className="sm:d-sm:flex   justify-center">
            <div className="col-md-11">
              <div className="col-12 sm:flex  align-items-center justify-content-between">
                <div className="col-md-6 sm:flex  justify-end order-md-2 order-1 mb-4 leading-[45px]">
                  <Image
                    src="/assets/images/Group 17835.png"
                    alt=".."
                    width={502}
                    height={382}
                  />
                </div>

                <div className="col-md-6 order-md-1 order-2 mb-4">
                  <p className="font-[600] text-[#212833] sm:text-[42px] text-[22px] mb-3 sm:leading-[45px]">
                    Guidance on limited company structures
                  </p>
                  <p className="font-[400] text-[#7C7C7C] text-[16px] mb-0">
                    Pondering a limited company structure to align with your property investment ambitions? We’ll clear your doubts with our specialised tax advice for limited companies. An expert accountant will tailor advice to your specific situation, providing the surety you need to invest with confidence.
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
                <div className="col-md-6 mb-4">
                  <p className="font-[600] text-[#212833] sm:text-[42px] text-[22px] mb-3 leading-[45px] leading-[45px]">
                    Ongoing compliance
                  </p>

                  <p className="font-[cd-r] font-[500] text-[#7C7C7C] sm:text-[16px] text-[16px] mb-0 ">
                    Get your company registered fast and online, and
                    fast-tracked to a business account. All government fees and
                    must-have services are included, for foreigners and India
                    locals.
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
                  <p className="font-[600] text-[#212833] sm:text-[42px] text-[22px] mb-3 leading-[45px]">
                    Simple accounting software
                  </p>
                  <p className="font-[400] text-[#7C7C7C] text-[16px] mb-0">
                    Pondering a limited company structure to align with your property investment ambitions? We’ll clear your doubts with our specialised tax advice for limited companies. An expert accountant will tailor advice to your specific situation, providing the surety you need to invest with confidence.
                  </p>

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


      <section className="overflow-hidden sm:px-20 px-6 py-14 pb-0 bg-[#F7F3EB]">
        <div className="overflow-hidden">
          <div className="container-fluid">
            <div className="col-12 mb-14 sm:flex  justify-center">
              <div className="col-md-5">
                <p className="text-[18px] font-[400] text-center">
                  WHAT YOU GET
                </p>
                <p className="text-[36px] font-[600] leading-[40px] text-center">
                  Full control and transparency of your sales
                </p>
              </div>
            </div>
            <div className="row">
              {/* Card 1 */}
              <div className="col-md-4 mb-4">
                <div className="sm:flex  sm:flex -col justify-between rounded-[12px] px-4 py-4 bg-[#fff] h-full">
                  <div>
                    <div className="col-12 h-[115px]">
                      <Image
                        src="/assets/images/image 30.svg"
                        width={112}
                        height={112}
                        alt="no-img"
                      />
                    </div>
                    <div>
                      <p className="text-[28px] font-[500]">
                        Choose your package
                      </p>

                      <p className="text-[15px] font-[200] font-[400] text-[#656565]">
                        Start with what you need right now and add specialist
                        services later as you grow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="sm:flex  sm:flex -col justify-between rounded-[12px] px-4 py-4 bg-[#fff] h-full ">
                  <div>
                    <div className="col-12 h-[115px]">
                      <Image
                        src="/assets/images/image 30.svg"
                        width={128}
                        height={112}
                        alt="no-img"
                      />
                    </div>
                    <div>
                      <p className="text-[28px] font-[500]">
                        Submit your details
                      </p>

                      <p className="text-[15px] font-[200] font-[400] text-[#656565]">
                        We&apos;ll tell you what information and documents you
                        need to provide for registration, and offer our advice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="sm:flex  sm:flex -col justify-between rounded-[12px] px-4 py-4 bg-[#fff] h-full ">
                  <div>
                    <div className="col-12 h-[115px]">
                      <Image
                        src="/assets/images/image 38.svg"
                        width={112}
                        height={112}
                        alt="no-img"
                      />
                    </div>
                    <div>
                      <p className="text-[28px] font-[500] leading-[32px]">
                        Get confirmation and paperwork
                      </p>

                      <p className="text-[15px] font-[200] font-[400] text-[#656565]">
                        Receive your certificate of incorporation and key
                        company documents. It’s that simple!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden px-6 sm:px-20 pt-0 pb-10 bg-[#F7F3EB]">
        <div className="overflow-hidden">
          <div className="container-fluid">
            <div className="col-12 pb-4">
              <div className="col-12 sm:flex justify-center pt-12">
                <button className="font-[400] text-[17px] pb-2 ">WHO WE HELP</button>
              </div>
              <div className="sm:flex  justify-center pb-0">
                <div className="sm:w-[730px]">
                  <p className="text-[46px] text-center leading-[50px] font-[600]">
                    For property side hustlers
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 sm:flex  justify-center gap-2">
              <div className="col-md-4">
                <div className="sm:flex  justify-center py-4">
                  <Image
                    src="/assets/images/Rectangle 4644.png"
                    width={450}
                    height={112}
                    alt="no-img"
                  />
                </div>
                <div className="col-md-12">
                  <p className="text-center text-[26px] font-[500] leading-[25px]">
                    Property flippers and developers
                  </p>
                  <p className="text-center text-[15px] font-[500] text-[#9D9D9D] leading-[20px]">
                    Join the world of property moguls quicker by streamlining your bookkeeping. You handle your projects, we&apos;ll do the financial admin.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="sm:flex  justify-center py-4">
                  <Image
                    src="/assets/images/Rectangle 4645.png"
                    width={450}
                    height={112}
                    alt="no-img"
                  />
                </div>
                <div className="col-md-12">
                  <p className="text-center text-[26px] font-[500] leading-[25px]">
                    Buy-to-let landlords
                  </p>
                  <p className="text-center text-[15px] font-[500] text-[#9D9D9D] leading-[20px]">
                    Pay the right tax without missing out on tax-saving opportunities. Our experts help you maximise your rental income alongside our smart software.
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
                    Serviced accommodation owners
                  </p>
                  <p className="text-center text-[15px] font-[500] text-[#9D9D9D] leading-[20px]">
                    Whether you own to-let accommodation or an aparthotel, you can easily manage your income streams and ensure your property’s profits are taxed appropriately.
                  </p>
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
