"use client";
import Image from "next/image";
import Header from "../components/header";
import FAQ from "../components/faq";
import Footer from "../components/footer";

import "bootstrap/dist/css/bootstrap.min.css";
export default function Home() {
    return (
        <>
            <section>
                <div className="bg-[#f3efe7]">
                    <Header />
                </div>
            </section>

            <section className="overflow-hidden sm:px-20 px-6  pt-24 pb-10">
                <div className="overflow-hidden">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 flex justify-start items-center">
                                <div className="col-md-10">
                                    <p className="sm:text-[50px] text-[30px] sm:leading-[60px] leading-[35px]  font-[600] ">
                                        Business Setup in Dubai, UAE
                                    </p>
                                    <p className="sm:text-[19px] sm:leading-[25px] font-[400] leading-[22px]">
                                        23+ Years of bringing dreams to Life | Over 50,000
                                        Companies Setup
                                    </p>
                                    <div className="col-12 sm:flex gap-3 mb-4">
                                        <div>
                                            <button className="border-1 font-[400] border-[black] sm:w-[150px] w-[325px] sm:h-[40px] sm:py-0 py-[13px] rounded-[50px] text-[15px] sm:mb-0 mb-3">
                                                Get Started
                                            </button>
                                        </div>
                                        <div>
                                            <button className="border-1 font-[400] border-[black] sm:w-[150px] w-[325px] sm:h-[40px] sm:py-0 py-[13px] rounded-[50px] text-white bg-[#212833] text-[15px]">
                                                Schedule a call
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 flex justify-center items-center">
                                <div className="col-md-12 flex justify-end items-center">
                                    <Image
                                        src="/assets/images/Picture ⏵ comp-secreyary-vanessa-sg@1x.webp (6).png"
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

            <section className="overflow-hidden sm:px-10 px-6 sm:py-14 py-4 pb-10  bg-[#F3EFE7]">
                <div className="overflow-hidden">
                    <div className="container-fluid">
                        <div className="col-12 justify-center sm:mb-16 mb-8">
                            <p className="text-center sm:mb-3 mb-2 text-[18px] pt-4 sm:pb-3 font-[400] sm:leading-[24px] leading-[30px] text-[#353535]">
                                WHAT YOU GET
                            </p>
                            <p className="text-center  text-[34px] font-[600] sm:leading-[15px] leading-[32px]">
                                Business Setup Services
                            </p>
                        </div>
                        <div className="col-12 sm:flex justify-center mb-0">
                            <div className="col-md-11 sm:flex sm:justify-around sm:gap-3 sm:me-4">
                                <div className="col-md-4 sm:mb-0 mb-4">
                                    <div className="sm:flex sm:flex-col sm:justify-between rounded-[10px] px-4 py-4 bg-[#FFFDFA]">
                                        <div>
                                            <div className="col-12 py-3 sm:h-[150px]">
                                                <Image
                                                    src="/assets/images/image 56 (1).png"
                                                    width={112}
                                                    height={112}
                                                    alt="no-img"
                                                />
                                            </div>
                                            <div>
                                                <div className="sm:h-[220px]">
                                                    <p className="text-[28px] font-[500] mb-1 ">
                                                        UAE Company Formation{" "}
                                                    </p>

                                                    <p className="sm:text-[17px] font-[200] font-[400] leading-[25px] text-[#656565]">
                                                        Cloud BSS has the best company formation
                                                        specialists, who are well-equipped with all the
                                                        latest resources and expertise. They will assist you
                                                        in executing a smooth and effortless business
                                                        incorporation in the UAE.
                                                    </p>
                                                </div>
                                                <div className="mb-4">
                                                    <button className="w-[150px] py-2 font-[400] text-center text-[16px] rounded-[50px] border border-black">
                                                        Learn more
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 sm:mb-0 mb-4">
                                    <div className="sm:flex flex-col justify-between rounded-[10px] px-4 py-4 bg-[#FFFDFA]">
                                        <div>
                                            <div className="col-12 py-3  sm:h-[150px]">
                                                <Image
                                                    src="/assets/images/image 58 (1).png"
                                                    width={128}
                                                    height={112}
                                                    alt="no-img"
                                                />
                                            </div>
                                            <div>
                                                <div className="sm:h-[220px]">
                                                    <p className="text-[28px] font-[500] mb-1">
                                                        UAE Business License
                                                    </p>

                                                    <p className="text-[17px] leading-[25px] font-[200] font-[400] text-[#656565]">
                                                        Our experienced consultants at Cloud BSS will help
                                                        in all legal business establishment services,
                                                        including business license acquisition, ensuring
                                                        compliance with UAE law.
                                                    </p>
                                                </div>
                                                <div className="mb-4">
                                                    <button className="w-[150px] py-2 font-[400] text-center text-[16px] rounded-[50px] border border-black">
                                                        Learn more
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 sm:mb-0 mb-4">
                                    <div className="flex flex-col justify-between rounded-[10px] px-4 py-4 bg-[#FFFDFA]">
                                        <div>
                                            <div className="col-12 py-3 sm:h-[150px]">
                                                <Image
                                                    src="/assets/images/image 60.png"
                                                    width={128}
                                                    height={112}
                                                    alt="no-img"
                                                />
                                            </div>
                                            <div>
                                                <div className="sm:h-[220px]">
                                                    <p className="text-[28px] font-[500] mb-1">
                                                        UAE Visa Services
                                                    </p>

                                                    <p className="text-[17px] leading-[25px] font-[200] font-[400] text-[#656565]">
                                                        Cloud BSS is one of the leading business setup
                                                        service provider firms in the UAE. From searching
                                                        for the right means to acquire a UAE partner visa to
                                                        investor visa services, Cloud BSS is at your
                                                        assistance.
                                                    </p>
                                                </div>
                                                <div className="mb-4">
                                                    <button className="w-[150px] py-2 font-[400] text-center text-[16px] rounded-[50px] border border-black">
                                                        Learn more
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 sm:flex justify-center mb-14">
                            <div className="col-md-11 sm:flex sm:justify-around sm:gap-3 sm:me-4">
                                <div className="col-md-4 sm:mb-0 mb-4">
                                    <div className="sm:flex sm:flex-col sm:justify-between rounded-[10px] px-4 py-4 bg-[#FFFDFA]">
                                        <div>
                                            <div className="col-12 py-3  sm:h-[150px]">
                                                <Image
                                                    src="/assets/images/image 57 (2).png"
                                                    width={112}
                                                    height={112}
                                                    alt="no-img"
                                                />
                                            </div>
                                            <div>
                                                <div className="sm:h-[220px]">
                                                    <p className="text-[28px] font-[500] mb-1">
                                                        PRO Services
                                                    </p>

                                                    <p className="text-[17px] font-[200] font-[400] leading-[25px] text-[#656565]">
                                                        The PRO team at Cloud BSS focuses on licenses,
                                                        visas, and other admin tasks, allowing clients to
                                                        focus on core business activities while saving money
                                                        and time.
                                                    </p>
                                                </div>
                                                <div className="mb-4">
                                                    <button className="w-[150px] py-2 font-[400] text-center text-[16px] rounded-[50px] border border-black">
                                                        Learn more
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 sm:mb-0 mb-4">
                                    <div className="flex flex-col justify-between rounded-[10px] px-4 py-4 bg-[#FFFDFA]">
                                        <div>
                                            <div className="col-12 py-3  h-[150px]">
                                                <Image
                                                    src="/assets/images/image 56.png"
                                                    width={128}
                                                    height={112}
                                                    alt="no-img"
                                                />
                                            </div>
                                            <div>
                                                <div className="h-[220px]">
                                                    <p className="text-[28px] font-[500] mb-1">
                                                        Tax & VAT Services
                                                    </p>

                                                    <p className="text-[17px] leading-[25px] font-[200] font-[400] text-[#656565]">
                                                        Cloud BSS has a highly qualified team of accountants
                                                        who efficiently manage finances, including Tax & VAT
                                                        concerns.
                                                    </p>
                                                </div>
                                                <div className="mb-4">
                                                    <button className="w-[150px] py-2 font-[400] text-center text-[16px] rounded-[50px] border border-black">
                                                        Learn more
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 sm:mb-0 mb-4">
                                    <div className="flex flex-col justify-between rounded-[10px] px-4 py-4 bg-[#FFFDFA]">
                                        <div>
                                            <div className="col-12 py-3  h-[150px]">
                                                <Image
                                                    src="/assets/images/image 61.png"
                                                    width={128}
                                                    height={112}
                                                    alt="no-img"
                                                />
                                            </div>
                                            <div>
                                                <div className="h-[220px]">
                                                    <p className="text-[28px] font-[500] mb-1">
                                                        Office Space
                                                    </p>

                                                    <p className="text-[17px] leading-[25px] font-[200] font-[400] text-[#656565]">
                                                        Cloud BSS understands your requirements and
                                                        recommends office spaces in the most happening
                                                        locations, considering your cost convenience,
                                                        operational needs, and others.
                                                    </p>
                                                </div>
                                                <div className="mb-4">
                                                    <button className="w-[150px] py-2 font-[400] text-center text-[16px] rounded-[50px] border border-black">
                                                        Learn more
                                                    </button>
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
            <section className="overflow-hidden px-6 sm:px-20 pb-18 pt-0 sm:pb-2">
                <div className="overflow-hidden">
                    <div className="container-fluid">
                        {/* Final Heading Section */}
                        <div className="col-12 sm:mb-5 pt-12">
                            <p className="text-center text-[20px] sm:pb-2 sm:text-[18px] sm:mb-0 mb-2 font-[400] leading-[40px]">
                                STEP TO START A
                            </p>
                            <p className="text-center text-[18px] text-[34px] font-[600] sm:leading-[10px] leading-[35px]">
                                Business Setup In Dubai
                            </p>
                        </div>
                        <div className="col-12 sm:flex justify-center mt-14">
                            <div className="col-md-11 sm:flex justify-center gap-4">
                                <div className="col-md-3 rounded-[10px] sm:mb-0 mb-4 sm:pb-0 pb-14 px-4 py-0 bg-[#f3efe7]">
                                    <div className="py-4">
                                        <div className="sm:h-[100px]">
                                            <Image
                                                src="/assets/images/image 53.png"
                                                width={112}
                                                height={112}
                                                alt="no-img"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:h-[100px] px-2">
                                        <p className="text-[26px] font-[500]">Documentation</p>
                                        <p className="text-[17px] font-[500] text-[#656565] pb-5 sm:leading-[24px]">
                                            Focus on your core business, leave the paperwork to us.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-3 rounded-[10px] sm:mb-0 mb-4 px-4 py-0 bg-[#f3efe7]">
                                    <div className="py-4">
                                        <div className="h-[100px]">
                                            <Image
                                                src="/assets/images/image 54.png"
                                                width={112}
                                                height={112}
                                                alt="no-img"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:h-[100px] px-2">
                                        <p className="text-[26px] font-[500]">Business License</p>
                                        <p className="text-[17px] font-[500] pb-5 text-[#656565] leading-[24px]">
                                            Secure your UAE Trade License effortlessly.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-3 rounded-[10px] sm:mb-0 mb-4 px-4 py-0 bg-[#f3efe7]">
                                    <div className="py-4">
                                        <Image
                                            src="/assets/images/image 52.png"
                                            width={112}
                                            height={112}
                                            alt="no-img"
                                        />
                                    </div>
                                    <div className="sm:h-[100px] px-2">
                                        <p className="text-[26px] font-[500]">Visa Process</p>
                                        <p className="text-[17px] font-[500] pb-5 text-[#656565] leading-[24px]">
                                            Enjoy stress-free experience for all your visa needs.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-3 rounded-[10px] sm:mb-0 mb-4 px-4 py-0 bg-[#f3efe7]">
                                    <div className="py-4">
                                        <Image
                                            src="/assets/images/image 51.png"
                                            width={112}
                                            height={112}
                                            alt="no-img"
                                        />
                                    </div>
                                    <div className="sm:h-[100px] px-2 mb-14">
                                        <p className="text-[26px] font-[500]">Bank Account</p>
                                        <p className="text-[17px] pb-5 font-[500] text-[#656565] leading-[24px]">
                                            Smooth setup of a corporate bank account.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="overflow-hidden sm:px-20 px-6 sm:pt-8 pb-10 ">
                <div className="overflow-hidden">
                    <div className="container-fluid">
                        <div className="sm:col-12 sm:mb-5 pt-0 sm:pb-10 pb-8">
                            <p className="text-center text-[24px] sm:text-[20px] font-[400] sm:leading-[30px] leading-[25px]">
                                Talk to our
                            </p>
                            <p className="text-center text-[28px] sm:text-[34px] font-[600] sm:leading-[10px] leading-[34px]">
                                UAE Business Setup Advisors!
                            </p>
                        </div>
                        <div className="d-flex justify-start">
                            <div className="col-md-12">
                                <div className="col-12 sm:flex align-items-center sm:justify-between sm:ml-4">
                                    <div className="col-md-6 sm:mb-0 mb-4">
                                        <Image
                                            src="/assets/images/group-people-working-out-business-plan-office 4.png"
                                            width={600}
                                            height={486}
                                            alt="no-img"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <p className="font-[400] sm:text-[17px] text-[14px] mb-8 sm:leading-[30px] leading-[22px]">Cloud BSS has been helping UAE company setup and Branch Office in Dubai. Cloud BSS offers affordable and easy ways to set up a business in Dubai. Be it a multinational company or an SME, we can help you with Business setup services in Dubai To know how to speak to our business setup experts and advisors. </p>
                                        <div className="leading-[20px]">
                                            <div className="flex items-start gap-2 mb-2">
                                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-[7px]"></div>
                                                <p className="text-[13px] sm:text-[16px] font-[300] mt-0 sm:mb-0 mb-2">
                                                    Streamlined Business Set Up Process in the UAE
                                                </p>
                                            </div>
                                            <div className="flex items-start gap-2 mb-0">
                                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-[7px]"></div>
                                                <p className="text-[13px] sm:text-[16px] font-[300] mt-0 mb-3">
                                                    Business Setup License (0 Visa Quota ) Starting from AED 12,900*
                                                </p>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-[7px]"></div>
                                                <p className="text-[13px] sm:text-[16px] font-[300] mt-0 mb-2">
                                                    Business Setup License (1 Visa Quota) Starting from AED 22,500*
                                                </p>
                                            </div>
                                        </div>

                                    </div>
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
            <section className="bg-[#FFFDFA] overflow-hidden sm:px-20 px-6 sm:py-5 py-5">
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

                    <div className="row justify-around pt-14">
                        <div className="col-md-4">
                            <div className="mb-4 sm:bg-[#FFFDFA] bg-[#f3efe7] sm:border-none border-none border-black sm:px-0 px-3 sm:py-0 py-2  rounded-[10px]">
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
                                            className="font-[cd-r] bg-[#FFFDFA] text-[15px] text-[#000] border-[#000] border-[2px]  rounded-[5px] px-10 py-[10px]"
                                            type="button"
                                        >
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-4 sm:bg-[#FFFDFA] bg-[#f3efe7] sm:border-none border-none border-black sm:px-0 px-3 sm:py-0 py-2 rounded-[10px]">
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
                                            className="font-[cd-r] bg-[#FFFDFA] text-[15px] text-[#000] border-[#000] border-[2px]  rounded-[5px] px-10 py-[10px]"
                                            type="button"
                                        >
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-4 sm:bg-[#FFFDFA] bg-[#f3efe7] sm:border-none border-none border-black sm:px-0 px-3 sm:py-0 py-2 rounded-[10px]">
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
                                            className="font-[cd-r] bg-[#FFFDFA] text-[15px] text-[#000] border-[#000] border-[2px]  rounded-[5px] px-10 py-[10px]"
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
                                <p className="font-[cd-r] text-[#ABABAB] sm:text-[16px] text-[15px] pt-4 mb-0">
                                    Learn crucial tips on how to save money and build a
                                    flourishing business, with real entrepreneurs sharing their
                                    own experiences.
                                </p>
                                <div className="sm:flex justify-center items-center gap-4 max-w-lg mx-auto pt-4">
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="w-full px-4 font-[400] py-2 rounded-full text-black border border-gray-400 mb-4"
                                    />
                                    <button className="bg-white text-black font-medium px-6 py-2 rounded-full hover:bg-gray-100 mb-4 ">
                                        SUBSCRIBE
                                    </button>
                                </div>
                                <p className="text-[#fff] text-[15px] font-[400]">
                                    <a className="no-underline text-[#ABABAB]" href="#">
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
