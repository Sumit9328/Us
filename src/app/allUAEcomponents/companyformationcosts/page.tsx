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

            <section className="overflow-hidden sm:px-20 px-6  pt-32 pb-16">
                <div className="overflow-hidden">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 flex justify-start items-center">
                                <div className="col-md-10">
                                    <p className="sm:text-[50px] text-[30px] sm:leading-[60px] leading-[35px]  font-[600] ">
                                    Company Formation Cost In UAE
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
                                        src="/assets/images/Picture ⏵ comp-secreyary-vanessa-sg@1x.webp (7).png"
                                        width={600}
                                        height={550}
                                        alt="no-img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="overflow-hidden sm:px-20 px-6 sm:py-10 py-10 pt-14 bg-[#f3efe7]">
                <div className="container-fluid  pt-14">
                   
                    <div className="d-flex justify-center">
                        <div className="col-md-11">
                            <div className="col-12 flex gap-4 align-items-center justify-between">
                                <div className="col-md-6 mb-4">
                                    <div className="d-flex justify-start">

                                        <Image src='/assets/images/Group 17834.png' alt=".." width={502} height={382} />

                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <p className='font-[cd-r] font-[500] text-[#7C7C7C] sm:text-[16px] text-[16px] mb-0 '>Get your company registered fast and online, and fast-tracked to a business account. All government fees and must-have services are included, for foreigners and India locals.</p>
                                    <div className="d-flex pt-4 justify-content-sm-start justify-content-between gap-2 ">
                                        <button className="bg-[#fff] py-2 font-[cd-m] text-[14px] text-[13px]  text-[#212833] border border-dark rounded-full sm:w-[160px] w-[150px]  tracking-wider">
                                            LET’S START IT
                                        </button>
                                        <button className="bg-[#212833] px-2 py-2 font-[cd-m]  sm:text-[14px] text-[13px]  text-[#fff] border border-dark rounded-[30px] sm:w-[230px] w-[220px]  tracking-wider ">LET’S SEE HOW IT WORKS</button>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="d-flex justify-center">
                        <div className="col-md-11">
                            <div className="col-12 flex align-items-center justify-content-between">
                                <div className="col-md-6 flex justify-end order-md-2 order-1 mb-4">
                                    <Image src='/assets/images/Group 17835.png' alt=".." width={502} height={382} />



                                </div>

                                <div className="col-md-6 order-md-1 order-2 mb-4">


                                    <p className="font-[cd-se] font-[500] text-[#212833] sm:text-[22px] text-[22px] mb-3">
                                        Corporate Secretary
                                    </p>
                                    <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[16px] mb-0">
                                        Your compliance in check. We track deadlines, file documents, and answer questions daily. All standard resolutions and routine filings are included in the plan.
                                    </p>
                                    <div className="d-flex pt-4 gap-2">
                                        <button className="bg-[#fff] px-2 py-2 font-[cd-m] text-[14px] font-[500] text-[#212833] border border-dark rounded-[30px] sm:w-[170px] w-full tracking-wider ">
                                            READY TO START
                                        </button>
                                        <button className="bg-[#212833] px-2 py-2 font-[cd-m] text-[14px] font-[500] text-[#fff] border border-dark rounded-[30px] sm:w-[160px] w-full  tracking-wider ">
                                            TELL ME MORE
                                        </button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-center">
                        <div className="col-md-11">
                            <div className="col-12 flex gap-4 align-items-center justify-between">
                                <div className="col-md-6 mb-4">
                                    <div className="d-flex justify-start">

                                        <Image src='/assets/images/Rectangle 4670.png' alt=".." width={502} height={382} />

                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <p className='font-[cd-r] font-[500] text-[#7C7C7C] sm:text-[16px] text-[16px] mb-0 '>Get your company registered fast and online, and fast-tracked to a business account. All government fees and must-have services are included, for foreigners and India locals.</p>
                                    <div className="d-flex pt-4 justify-content-sm-start justify-content-between gap-2 ">
                                        <button className="bg-[#fff] py-2 font-[cd-m] text-[14px] text-[13px]  text-[#212833] border border-dark rounded-full sm:w-[160px] w-[150px]  tracking-wider">
                                            LET’S START IT
                                        </button>
                                        <button className="bg-[#212833] px-2 py-2 font-[cd-m]  sm:text-[14px] text-[13px]  text-[#fff] border border-dark rounded-[30px] sm:w-[230px] w-[220px]  tracking-wider ">LET’S SEE HOW IT WORKS</button>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="d-flex justify-center">
                        <div className="col-md-11">
                            <div className="col-12 flex align-items-center justify-content-between">
                                <div className="col-md-6 flex justify-end order-md-2 order-1 mb-4">
                                    <Image src='/assets/images/Group 17835.png' alt=".." width={502}
                                        height={382} />



                                </div>

                                <div className="col-md-6 order-md-1 order-2 mb-4">
                                    <p className="font-[cd-se] font-[500] text-[#212833] sm:text-[22px] text-[22px] mb-3">
                                        Corporate Secretary
                                    </p>
                                    <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[16px] mb-0">
                                        Your compliance in check. We track deadlines, file documents, and answer questions daily. All standard resolutions and routine filings are included in the plan.
                                    </p>
                                    <div className="d-flex pt-4 gap-2">
                                        <button className="bg-[#fff] px-2 py-2 font-[cd-m] text-[14px] font-[500] text-[#212833] border border-dark rounded-[30px] sm:w-[170px] w-full tracking-wider ">
                                            READY TO START
                                        </button>
                                        <button className="bg-[#212833] px-2 py-2 font-[cd-m] text-[14px] font-[500] text-[#fff] border border-dark rounded-[30px] sm:w-[160px] w-full  tracking-wider ">
                                            TELL ME MORE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-center">
                        <div className="col-md-11">
                            <div className="col-12 flex gap-4 align-items-center justify-between">
                                <div className="col-md-6 mb-4">
                                    <div className="d-flex justify-start">

                                        <Image src='/assets/images/Rectangle 4670.png' alt=".." width={502} height={382} />

                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <p className='font-[cd-r] font-[500] text-[#7C7C7C] sm:text-[16px] text-[16px] mb-0 '>Get your company registered fast and online, and fast-tracked to a business account. All government fees and must-have services are included, for foreigners and India locals.</p>
                                    <div className="d-flex pt-4 justify-content-sm-start justify-content-between gap-2 ">
                                        <button className="bg-[#fff] py-2 font-[cd-m] text-[14px] text-[13px]  text-[#212833] border border-dark rounded-full sm:w-[160px] w-[150px]  tracking-wider">
                                            LET’S START IT
                                        </button>
                                        <button className="bg-[#212833] px-2 py-2 font-[cd-m]  sm:text-[14px] text-[13px]  text-[#fff] border border-dark rounded-[30px] sm:w-[230px] w-[220px]  tracking-wider ">LET’S SEE HOW IT WORKS</button>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="d-flex justify-center">
                        <div className="col-md-11">
                            <div className="col-12 flex align-items-center justify-content-between">
                                <div className="col-md-6 flex justify-end order-md-2 order-1 mb-4">
                                    <Image src='/assets/images/Group 17835.png' alt=".." width={502}
                                        height={382} />



                                </div>

                                <div className="col-md-6 order-md-1 order-2 mb-4">
                                    <p className="font-[cd-se] font-[500] text-[#212833] sm:text-[22px] text-[22px] mb-3">
                                        Corporate Secretary
                                    </p>
                                    <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[16px] mb-0">
                                        Your compliance in check. We track deadlines, file documents, and answer questions daily. All standard resolutions and routine filings are included in the plan.
                                    </p>
                                    <div className="d-flex pt-4 gap-2">
                                        <button className="bg-[#fff] px-2 py-2 font-[cd-m] text-[14px] font-[500] text-[#212833] border border-dark rounded-[30px] sm:w-[170px] w-full tracking-wider ">
                                            READY TO START
                                        </button>
                                        <button className="bg-[#212833] px-2 py-2 font-[cd-m] text-[14px] font-[500] text-[#fff] border border-dark rounded-[30px] sm:w-[160px] w-full  tracking-wider ">
                                            TELL ME MORE
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
