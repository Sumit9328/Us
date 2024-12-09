"use client";
import Image from "next/image";
import Header from "../../components/header";
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
                            <div className="col-md-6 flex justify-center items-center">
                                <div className="col-md-12">
                                    <p className="sm:text-[50px] text-[30px] sm:leading-[60px] leading-[35px] font-[600]">
                                        Unlock borderless banking with a U.S.-based account
                                    </p>
                                    <p className="sm:text-[20px] font-[400] sm:leading-[25px] leading-[22px]">
                                        Coming soon, with early access now.
                                        <span className="text-[#266ef1] underline">
                                            See if you qualify for early access.
                                        </span>
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
                                        src="/assets/images/Picture ⏵ comp-secreyary-vanessa-sg@1x.webp (3).png"
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

            <section className="overflow-hidden sm:px-20 px-6 py-0 pb-10  bg-[#F3EFE7]">
                <div className="overflow-hidden">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <p className="text-center sm:text-[34px] text-[30px] font-[600] mt-5 sm:leading-[35px] leading-[35px]">
                                    International transfers to 100+ countries.
                                </p>
                                <p className="text-center sm:text-[16px] text-[16px] font-[400] leading-[20px]">
                                    Introducing a powerful, low-cost solution for international
                                    money transfers. doola Money facilitates transactions in local
                                    currencies worldwide with the added convenience of deposits in
                                    $USD. No Social Security Number (SSN) is required to open an
                                    account, making it the ideal solution for founders around the
                                    globe.
                                </p>
                                <div className="col-12 sm:flex justify-center items-center py-4 mb-3">
                                    <div className="col-md-5 sm:flex sm:justify-between justify-center">
                                        <button className="rounded-[50px] font-[400] sm:w-[170px] w-[320px] sm:h-[40px] h-[50px] bg-black text-[#fff] text-[15px] sm:mb-0 mb-3">
                                            Overview
                                        </button>
                                        <button className="rounded-[50px] font-[400] sm:w-[170px] w-[320px] sm:h-[40px] h-[50px] bg-[#fff] text-black text-[15px] sm:mb-0 mb-3">
                                            Transfer
                                        </button>
                                        <button className="rounded-[50px] font-[400] sm:w-[170px] w-[320px] sm:h-[40px] h-[50px] bg-[#fff] text-black text-[15px] sm:mb-0 mb-3">
                                            Transactions
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 flex justify-center items-end">
                                <div>
                                    <Image
                                        src="/assets/images/Figure → Frame-1000003299-1.png.png"
                                        width={750}
                                        height={450}
                                        alt="no-img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="overflow-hidden px-6 sm:px-20 pb-18 pt-0 pb-10">
                <div className="overflow-hidden">
                    <div className="container-fluid">
                        {/* Final Heading Section */}
                        <div className="col-12 sm:mb-5 pt-10">
                            <p className="text-center text-[24px] sm:text-[32px] font-[600]">
                                Designed for global founders
                            </p>
                        </div>
                        <div className="col-12 sm:flex justify-center mt-14">
                            <div className="col-12 sm:flex justify-center gap-2">
                                <div className="col-md-3 rounded-[10px] sm:mb-0 mb-4 px-4 py-2 bg-[#f3efe7]">
                                    <div className="py-4">
                                        <Image
                                            src="/assets/images/Vector.png"
                                            width={112}
                                            height={112}
                                            alt="no-img"
                                        />
                                    </div>
                                    <div className="h-[180px] px-2">
                                        <p className="text-[16px] font-[500]">
                                            Fast & Easy Payouts
                                        </p>
                                        <p className="text-[14px] font-[400] text-[#656565] leading-[22px]">
                                            Quickly connect your Amazon, Stripe, Paypal accounts, and
                                            more to receive your payouts and then transfer anywhere.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-3 rounded-[10px] sm:mb-0 mb-4 px-4 py-2 bg-[#f3efe7]">
                                    <div className="py-4">
                                        <Image
                                            src="/assets/images/Vector.png"
                                            width={112}
                                            height={112}
                                            alt="no-img"
                                        />
                                    </div>
                                    <div className="h-[180px] px-2">
                                        <p className="text-[16px] font-[500]">
                                            Backed by U.S Security
                                        </p>
                                        <p className="text-[14px] font-[400] text-[#656565] leading-[22px]">
                                            FDIC-insured for balances up to $250,000. Focus on making money; we’ll keep it secure.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-3 rounded-[10px] sm:mb-0 mb-4 px-4 py-2 bg-[#f3efe7]">
                                    <div className="py-4">
                                        <Image
                                            src="/assets/images/Vector.png"
                                            width={112}
                                            height={112}
                                            alt="no-img"
                                        />
                                    </div>
                                    <div className="h-[180px] px-2">
                                        <p className="text-[16px] font-[500]">
                                            No (or low) fees
                                        </p>
                                        <p className="text-[14px] font-[400] text-[#656565] leading-[22px]">
                                            The account and all $USD transfers are free! International transfers are as low as 1%  and transparent: we break it all down before you submit it.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-3 rounded-[10px] sm:mb-0 mb-4 px-4 py-2 bg-[#f3efe7]">
                                    <div className="py-4">
                                        <Image
                                            src="/assets/images/Vector.png"
                                            width={112}
                                            height={112}
                                            alt="no-img"
                                        />
                                    </div>
                                    <div className="h-[180px] px-2">
                                        <p className="text-[16px] font-[500]">
                                            Quick Transfers
                                        </p>
                                        <p className="text-[14px] font-[400] text-[#656565] leading-[22px]">
                                            In 1 to 5 days, get your ACH, wire, or international transfers where you want them when you need them.
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
                        <div className="col-12 sm:flex">
                            <div className="col-md-6 flex items-center">
                                <div className="col-md-9">

                                    <p className="text-[32px] font-[600] leading-[35px]">Easily move between local currencies in over 100 countries</p>
                                    <div className="flex sm:mb-0 mb-4 mt-4">
                                        <button className="border border-black gap-1 flex justify-center items-center bg-[#212833] text-[#fff] rounded-[50px] sm:w-[155px] w-[320px] sm:h-[40px] h-[55px] text-[14px] font-[500]">See where<svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-math-greater mt-[4px]"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 18l14 -6l-14 -6" /></svg></button>

                                    </div>
                                </div>

                                <p></p>
                            </div>
                            <div className="col-md-6 flex justify-end">
                                <Image
                                    src="/assets/images/Background.png"
                                    width={450}
                                    height={350}
                                    alt="no-img"
                                />
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
                                        className="w-full font-[400] px-4 py-2 rounded-full text-black border border-gray-400 mb-4"
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
