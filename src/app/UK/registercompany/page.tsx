"use client";
import Image from "next/image";
import HeaderUK from "@/app/components/headerUk";
import FAQ from "../../components/faq";
import Footer from "../../components/footer";
import RecFaqPart from "@/app/components/RecFaqPart";
// import Carousal from "@/app/components/Slider";
import DownloadText from "@/app/components/downloadtext";
import BusinessStarterText from "@/app/components/businesstartertext";

import "bootstrap/dist/css/bootstrap.min.css";
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
              <div className="col-md-6 flex justify-start items-center">
                <div className="col-md-11">
                  <p className="sm:text-[53px] text-[25px] sm:leading-[60px] leading-[35px] font-[600]">
                    Register a Limited Company in the UK
                  </p>
                  <p className="sm:text-[20px] sm:leading-[30px] leading-[22px] font-[400] pe-4">
                    Company registration in the UK doesn&apos;t have to be a
                    hassle. Let us handle the formation process for you online
                    so you can focus on your business. Let&apos;s start by
                    checking if your Ltd company name is available.
                  </p>
                  <div className="col-12 flex gap-3 mb-4">
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
              <div className="col-md-6 flex justify-center items-center sm:pt-12 sm:pb-12">
                <div className="col-md-12 flex justify-end items-center">
                  <Image
                    src="/assets/images/Picture ⏵ comp-secreyary-vanessa-sg@1x.webp (9).png"
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
            <div className="col-12 sm:mb-5 flex justify-center pt-5">
              <div className="w-[440px]">
                <p className="text-[18px] font-[400] text-center sm:leading-[18px]">
                  WHAT YOU GET
                </p>
                <p className="text-center text-[24px] sm:text-[34px] font-[600] sm:leading-[40px]">
                  Online company formation with Cloud Bss
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
                        Access to experts
                      </p>
                    </div>
                    <p className="text-[15px] font-[400] text-[#656565] leading-[22px]">
                      Register your limited company with us and a dedicated
                      business expert will always be at hand, via live chat or
                      over the phone.
                    </p>
                  </div>
                </div>
                <div className="col-md-3 rounded-[10px] sm:mb-0 mb-4 px-4 py-2 bg-[#fff]">
                  <div className="py-4">
                    <Image
                      src="/assets/images/image 34.svg"
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
                      Simply send us your documents via live chat. We&apos;ll
                      fill out your Companies House application and send it to
                      you for your digital signature.
                    </p>
                  </div>
                </div>
                <div className="col-md-3 rounded-[10px] sm:mb-0 mb-4 px-4 py-2 bg-[#fff]">
                  <div className="py-4">
                    <Image
                      src="/assets/images/image 31.svg"
                      width={112}
                      height={112}
                      alt="no-img"
                    />
                  </div>
                  <div className="px-2 w-[250px]">
                    <div className="w-[200px]">
                      <p className="text-[25px] font-[500] leading-[30px]">
                        Help opening a bank account
                      </p>
                    </div>
                    <p className="text-[15px] font-[400] text-[#656565] leading-[22px]">
                      Get guidance from our experts on the best business bank
                      account for you and referrals to our industry-leading
                      partners.
                    </p>
                  </div>
                </div>
                <div className="col-md-3 rounded-[10px] sm:mb-0 mb-4 px-4 py-2 bg-[#fff]">
                  <div className="py-4">
                    <Image
                      src="/assets/images/image 36.svg"
                      width={112}
                      height={112}
                      alt="no-img"
                    />
                  </div>
                  <div className="px-2 w-[250px]">
                    <div className="w-[250px]">
                      <p className="text-[25px] font-[500] leading-[30px]">
                        All documents stored in one, convenient place
                      </p>
                    </div>
                    <p className="text-[15px] font-[400] text-[#656565] leading-[22px]">
                      A complete set of company incorporation documents for
                      limited companies, ready to go from day one.
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
              <div className="col-12 flex justify-center pt-12">
                <button className="font-[400] text-[17px] pb-2">PRICING</button>
              </div>
              <div className="flex justify-center pb-2">
                <div className="w-[590px]">
                  <p className="text-[46px] text-center leading-[50px] font-[600]">
                    Simple and fast company formation
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-[770px]">
                  <p className="text-[20px] font-[400] text-center leading-[35px]">
                    The cost to register a company with Cloud Bss depends on
                    what you need. We can simply handle the registration for
                    you. Or we can handle your compliance and accounting needs
                    too. Take a look at your options below:
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 flex justify-center">
              <div className="col-md-9 flex gap-2 p-2">
                <div className="col-md-6 bg-[#F7F3EB] rounded-[30px] p-[8px]">
                  <div className="col-md-12 flex justify-center">
                    <div className="rounded-[15px] bg-[#FFFDFA] rounded-[30px] py-4 px-4 mb-5">
                      <p className="text-[28px] font-[600] leading-[20px]">
                        Basic
                      </p>
                      <p className="text-[18px] text-[#767676] font-[300] leading-[24px]">
                        Set up as a limited company and receive all legal
                        paperwork
                      </p>
                      <p className="text-[40px] font-[400] leading-[50px]">
                        £<span className="text-[50px] font-[500] pl-1">50</span>
                      </p>
                      <p className="text-[23px] font-[500] leading-[20px] text-[#767676]">
                        + VAT
                      </p>
                      <div className="flex justify-center">
                        <button className="bg-[#fff] rounded-[50px] border border-dark text-[#000] hover:bg-[#212833] hover:text-[#fff] w-[430px] font-[400] h-[45px]">
                          Get this Plan
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-[#B0B0B0] leading-[10px]">
                    <div className="rounded-lg">
                      <ul className="space-y-4 text-gray-800 text-base">
                        <li className="text-[16px] font-[400]">
                          • Company formation
                        </li>
                        <li className="text-[16px] font-[400]">
                          • Digital incorporation certificates
                        </li>
                        <li className="text-[16px] font-[400]">
                          • Share Certificate
                        </li>
                        <li className="text-[16px] font-[400]">
                          • Live chat with an expert
                        </li>
                        <li className="text-[16px] font-[400]">
                          • Exclusive offers from our Banking Partners
                        </li>
                        <li className="text-[16px] font-[400]">
                          • Companies House fee included
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="">
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex justify-between items-center pb-2 mb-2">
                        <h2 className="text-lg font-bold text-black">
                          Optional add-ons
                        </h2>
                        <span className="text-xl font-[600] text-black">—</span>
                      </div>

                      {/* Add-ons List */}
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-[#000] font-[400]">
                            Registered London office address
                          </span>
                          <span className="text-[#767676] font-[500]">
                            £100/y
                          </span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-[#000] font-[400]">
                            Manual document review
                          </span>
                          <span className="text-[#767676] font-[500]">£49</span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-[#000] font-[400]">
                            Confirmation Statement
                          </span>
                          <span className="text-[#767676] font-[500]">
                            £100
                          </span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-[#000] font-[400]">
                            PAYE registration
                          </span>
                          <span className="text-[#767676] font-[500]">£50</span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-[#000] font-[400]">
                            VAT registration
                          </span>
                          <span className="text-[#767676] font-[500]">£50</span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-[#000] font-[400]">
                            Accounting services
                          </span>
                          <span className="text-[#767676] font-[500]">
                            from £65/m
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 bg-[#F7F3EB] rounded-[30px] p-[8px]">
                  <div className="col-md-12 flex justify-center">
                    <div className="rounded-[15px] bg-[#FFFDFA] rounded-[30px] py-4 px-4 mb-5">
                      <p className="text-[28px] font-[600] leading-[20px]">
                        Basic
                      </p>
                      <p className="text-[18px] text-[#767676] font-[300] leading-[24px]">
                        Set up as a limited company and receive all legal
                        paperwork
                      </p>
                      <p className="text-[40px] font-[400] leading-[50px]">
                        £
                        <span className="text-[50px] font-[500] pl-1">289</span>
                      </p>
                      <p className="text-[23px] font-[500] leading-[20px] text-[#767676]">
                        + VAT
                      </p>
                      <div className="flex justify-center">
                        <button className="bg-[#fff] rounded-[50px] border border-dark text-[#000] hover:bg-[#212833] hover:text-[#fff] w-[430px] font-[400] h-[45px]">
                          Get this Plan
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-[#B0B0B0] leading-[10px]">
                    <ul className="space-y-4 text-gray-800 text-base">
                      <li className="text-[16px] font-[400]">
                        • Company formation
                      </li>
                      <li className="text-[16px] font-[400]">
                        • Digital incorporation certificates
                      </li>
                      <li className="text-[16px] font-[400]">
                        • Share Certificate
                      </li>
                      <li className="text-[16px] font-[400]">
                        • Live chat with an expert
                      </li>
                      <li className="text-[16px] font-[400]">
                        • Exclusive offers from our Banking Partners
                      </li>
                      <li className="text-[16px] text-[#0061fe] font-[400]">
                        • Company house fee included
                      </li>
                      <li className="text-[16px] text-[#0061fe] font-[400]">
                        • Registered London office address
                      </li>
                      <li className="text-[16px] text-[#0061fe] font-[400]">
                        • Same-day document scanning
                      </li>
                      <li className="text-[16px] text-[#0061fe] font-[400]">
                        • Unlimited corporate changes
                      </li>
                      <li className="text-[16px] text-[#0061fe] font-[400]">
                        • Manual document review
                      </li>
                      <li className="text-[16px] text-[#0061fe] font-[400]">
                        • Confirmation Statement
                      </li>
                    </ul>
                  </div>
                  <div className="m">
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex justify-between items-center pb-2 mb-2">
                        <h2 className="text-lg font-bold text-black">
                          Optional add-ons
                        </h2>
                        <span className="text-xl font-[600] text-black">—</span>
                      </div>

                      {/* Add-ons List */}
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-[#000] font-[400]">
                            PAYE registration
                          </span>
                          <span className="text-[#767676] font-[500]">£50</span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-[#000] font-[400]">
                            VAT registration
                          </span>
                          <span className="text-[#767676] font-[500]">£49</span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-[#000] font-[400]">
                            Accounting services
                          </span>
                          <span className="text-[#767676] font-[500]">
                            from £65/m
                          </span>
                        </div>
                      </div>
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
          <div className="container-fluid">
            <DownloadText />
          </div>
        </div>
      </section>

      <section className="bg-[#fff] overflow-hidden sm:px-20 px-6 sm:py-10 py-10">
        <div className="container-fluid p-0">
          <div className="row justify-center">
            <div className="col-md-6 sm:pb-4">
              <div className="text-center ">
                <p className="text-[#353535] font-[400] text-[16px]">
                  HOW IT WORKS
                </p>
                <p className="font-[cd-se]  sm:text-[35px] text-[30px]  text-[#000] text-center sm:leading-[38px] leading-[35px]">
                  The company registration process in the United Kingdom
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="col-md-10 pt-4">
              <div className="row align-items-center justify-between">
                <div className="col-md-5 mb-4">
                  <Image
                    src="/assets/images/Rectangle 4630.svg"
                    className="w-full"
                    width={1080}
                    height={1080}
                    alt="no-img"
                  />
                </div>
                <div className="col-md-5 mb-4">
                  <div className="col-md-10">
                    <p className="text-[38px] font-[600] leading-[40px]">
                      Choose a new company name
                    </p>
                    <p className="text-[16px] text-[#000] font-[400]  leading-[25px] ">
                      Your name must be unique and meet government standards. To
                      prevent your name from being rejected by Companies House,
                      here are a few general rules to follow.
                    </p>
                  </div>
                  <button className="text-[14px] font-[400] rounded-[50px] h-[40px] w-[350px] border-black border bg-[#fff] text-[#000] hover:bg-[#000] hover:text-[#fff] transition">
                    Check your company name
                  </button>
                </div>
              </div>
              <div className="row align-items-center justify-between">
                <div className="col-md-5 order-md-2 order-1 mb-4">
                  <Image
                    src="/assets/images/Rectangle 4631.svg"
                    className="w-full"
                    width={1080}
                    height={1080}
                    alt="no-img"
                  />
                </div>
                <div className="col-md-5 mb-4">
                  <div className="col-md-10">
                    <p className="text-[38px] font-[600] leading-[40px]">
                      Choose the SIC code
                    </p>
                    <p className="text-[16px] text-[#000] font-[400]  leading-[25px] ">
                      Your Standard Industrial Classification (SIC) Code defines
                      your industry and the rules and regulations applied to
                      your business. Make sure you pick the right code when
                      registering your company.
                    </p>
                  </div>
                  <button className="text-[14px] font-[400] rounded-[50px] h-[40px] w-[350px] border-black border bg-[#fff] text-[#000] hover:bg-[#000] hover:text-[#fff] transition">
                    Check your company name
                  </button>
                </div>
              </div>
              <div className="row align-items-center justify-between">
                <div className="col-md-5 mb-4 ">
                  <Image
                    src="/assets/images/Rectangle 4639.svg"
                    className="w-full"
                    width={1080}
                    height={1080}
                    alt="no-img"
                  />
                </div>
                <div className="col-md-5 mb-4">
                  <div className="col-md-11">
                    <p className="text-[38px] font-[600] leading-[40px]">
                      Prepare your documents
                    </p>
                    <p className="text-[16px] text-[#000] font-[400]  leading-[25px]">
                      All you need to do before you get started is:
                      <ul className="space-y-4 text-gray-800 text-base mt-3">
                        <li className="text-[16px] font-[400] leading-[24px]">
                          • Prepare passport copies and proof of address for
                          yourself and any other directors or shareholders
                        </li>
                        <li className="text-[16px] font-[400]">
                          • Choose your company address. Use your home address
                          if you&apos;re comfortable with this info being public, or
                          register an address through us
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row align-items-center justify-between">
                <div className="col-md-5 order-md-2 order-1 mb-4">
                  <Image
                    src="/assets/images/Rectangle 4631 (1).svg"
                    className="w-full"
                    width={1080}
                    height={1080}
                    alt="no-img"
                  />
                </div>
                <div className="col-md-5 mb-4">
                  <div className="col-md-10">
                    <p className="text-[38px] font-[600] leading-[40px]">
                      Open a business bank account
                    </p>
                    <p className="text-[16px] text-[#000] font-[400]  leading-[25px] ">
                      You&apos;ll need a business bank account to open your company,
                      receive money and pay invoices. We partner with local
                      banks that can set up your account online in just a few
                      days.
                    </p>
                  </div>
                  <button className="text-[14px] font-[400] rounded-[50px] h-[40px] w-[350px] border-black border bg-[#fff] text-[#000] hover:bg-[#000] hover:text-[#fff] transition">
                    Check your company name
                  </button>
                </div>
              </div>
              <div className="row align-items-center justify-between">
                <div className="col-md-5 mb-4 ">
                  <Image
                    src="/assets/images/Rectangle 4655.svg"
                    className="w-full"
                    width={1080}
                    height={1080}
                    alt="no-img"
                  />
                </div>
                <div className="col-md-5 mb-4">
                  <div className="col-md-11">
                    <p className="text-[38px] font-[600] leading-[40px]">
                      Submit everything to Companies House
                    </p>
                    <p className="text-[16px] text-[#000] font-[400]  leading-[25px]">
                      From there we&apos;ll register your company for you by
                      preparing the following information
                      <ul className="space-y-4 text-gray-800 text-base mt-3">
                        <li className="text-[16px] font-[400] leading-[1px]">
                          • Company formation
                        </li>
                        <li className="text-[16px] font-[400]">
                          • Digital incorporation certificates
                        </li>
                      </ul>
                      You can leave it all to us. We&apos;ll share your documents
                      with Companies House.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden sm:px-20 px-6 py-14 pb-10  bg-[#F7F3EB]">
        <div className="overflow-hidden">
          <div className="container-fluid">
            <div className="row">
              {/* Card 1 */}
              <div className="col-md-4 mb-4">
                <div className="flex flex-col justify-between rounded-[12px] px-4 py-4 bg-[#fff] h-full">
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
                <div className="flex flex-col justify-between rounded-[12px] px-4 py-4 bg-[#fff] h-full ">
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
                        We&apos;ll tell you what information and documents you need
                        to provide for registration, and offer our advice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="flex flex-col justify-between rounded-[12px] px-4 py-4 bg-[#fff] h-full ">
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

      <section className="overflow-hidden sm:px-20 px-6  pt-10 pb-10  bg-[#CCDFFF]">
        <div className="overflow-hidden">
          <div className="container-fluid">
            <DownloadText />
          </div>
        </div>
      </section>

      <section className="overflow-hidden sm:px-20 px-6 bg-[#F7F3EB]  pt-10 pb-10">
        <div className="overflow-hidden">
          <div className="container-fluid">
            <RecFaqPart />
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
