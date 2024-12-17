"use client";
import Image from "next/image";
import Footer from "../../components/footer";
import HeaderUAE from "@/app/components/headerUAE";
import BusinessStarterText from "@/app/components/businesstartertext";

import "bootstrap/dist/css/bootstrap.min.css";
export default function Home() {
    return (
        <>
            <section>
                <div className="bg-[#f3efe7]">
                    <HeaderUAE />
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
                    <Image
                      src="/assets/images/Group 17834.png"
                      alt=".."
                      width={502}
                      height={382}
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <p className="font-[cd-r] font-[500] text-[#7C7C7C] sm:text-[16px] text-[16px] mb-0 ">
                    Get your company registered fast and online, and
                    fast-tracked to a business account. All government fees and
                    must-have services are included, for foreigners and India
                    locals.
                  </p>
                  <div className="d-flex pt-4 justify-content-sm-start justify-content-between gap-2 ">
                    <button className="bg-[#fff] text-[#000] py-2 font-[500] text-[14px] text-[#212833] border border-dark rounded-full sm:w-[160px] w-[150px] hover:bg-[#212833] hover:text-[#fff]">
                      LET’S START IT
                    </button>
                    <button className="bg-[#fff] text-[#000] px-2 py-2 font-[500] sm:text-[14px] text-[13px] border border-dark rounded-[30px] sm:w-[230px] w-[220px] hover:bg-[#212833] hover:text-[#fff]">
                      LET’S SEE HOW IT WORKS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-center">
            <div className="col-md-11">
              <div className="col-12 flex align-items-center justify-content-between">
                <div className="col-md-6 flex justify-end order-md-2 order-1 mb-4">
                  <Image
                    src="/assets/images/Group 17835.png"
                    alt=".."
                    width={502}
                    height={382}
                  />
                </div>

                <div className="col-md-6 order-md-1 order-2 mb-4">
                  <p className="font-[cd-se] font-[500] text-[#212833] sm:text-[22px] text-[22px] mb-3">
                    Corporate Secretary
                  </p>
                  <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[16px] mb-0">
                    Your compliance in check. We track deadlines, file
                    documents, and answer questions daily. All standard
                    resolutions and routine filings are included in the plan.
                  </p>
                  <div className="d-flex pt-4 gap-2">
                    <button className="bg-[#fff] text-[#000] px-2 py-2 font-[500] text-[14px] font-[500] text-[#212833] border border-dark rounded-[30px] sm:w-[170px] w-full hover:bg-[#212833] hover:text-[#fff]">
                      READY TO START
                    </button>
                    <button className="bg-[#fff] text-[#000] px-2 py-2 font-[500] text-[14px] font-[500] border border-dark rounded-[30px] sm:w-[160px] w-full hover:bg-[#212833] hover:text-[#fff]">
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
                    <Image
                      src="/assets/images/Rectangle 4670.png"
                      alt=".."
                      width={502}
                      height={382}
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <p className="font-[cd-r] font-[500] text-[#7C7C7C] sm:text-[16px] text-[16px] mb-0 ">
                    Get your company registered fast and online, and
                    fast-tracked to a business account. All government fees and
                    must-have services are included, for foreigners and India
                    locals.
                  </p>
                  <div className="d-flex pt-4 justify-content-sm-start justify-content-between gap-2 ">
                    <button className="bg-[#fff] text-[#000] py-2 font-[500] text-[14px] text-[#212833] border border-dark rounded-full sm:w-[160px] w-[150px] hover:bg-[#212833] hover:text-[#fff]">
                      LET’S START IT
                    </button>
                    <button className="bg-[#fff] text-[#000] px-2 py-2 font-[500] sm:text-[14px] text-[13px] border border-dark rounded-[30px] sm:w-[230px] w-[220px] hover:bg-[#212833] hover:text-[#fff]">
                      LET’S SEE HOW IT WORKS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-center">
            <div className="col-md-11">
              <div className="col-12 flex align-items-center justify-content-between">
                <div className="col-md-6 flex justify-end order-md-2 order-1 mb-4">
                  <Image
                    src="/assets/images/Group 17835.png"
                    alt=".."
                    width={502}
                    height={382}
                  />
                </div>

                <div className="col-md-6 order-md-1 order-2 mb-4">
                  <p className="font-[cd-se] font-[500] text-[#212833] sm:text-[22px] text-[22px] mb-3">
                    Corporate Secretary
                  </p>
                  <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[16px] mb-0">
                    Your compliance in check. We track deadlines, file
                    documents, and answer questions daily. All standard
                    resolutions and routine filings are included in the plan.
                  </p>
                  <div className="d-flex pt-4 gap-2">
                    <button className="bg-[#fff] text-[#000] px-2 py-2 font-[500] text-[14px] font-[500] text-[#212833] border border-dark rounded-[30px] sm:w-[170px] w-full hover:bg-[#212833] hover:text-[#fff]">
                      READY TO START
                    </button>
                    <button className="bg-[#fff] text-[#000] px-2 py-2 font-[500] text-[14px] font-[500] border border-dark rounded-[30px] sm:w-[160px] w-full hover:bg-[#212833] hover:text-[#fff]">
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
                    <Image
                      src="/assets/images/Rectangle 4670.png"
                      alt=".."
                      width={502}
                      height={382}
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <p className="font-[cd-r] font-[500] text-[#7C7C7C] sm:text-[16px] text-[16px] mb-0 ">
                    Get your company registered fast and online, and
                    fast-tracked to a business account. All government fees and
                    must-have services are included, for foreigners and India
                    locals.
                  </p>
                  <div className="d-flex pt-4 justify-content-sm-start justify-content-between gap-2 ">
                    <button className="bg-[#fff] text-[#000] py-2 font-[500] text-[14px] text-[#212833] border border-dark rounded-full sm:w-[160px] w-[150px] hover:bg-[#212833] hover:text-[#fff]">
                      LET’S START IT
                    </button>
                    <button className="bg-[#fff] text-[#000] px-2 py-2 font-[500] sm:text-[14px] text-[13px] border border-dark rounded-[30px] sm:w-[230px] w-[220px] hover:bg-[#212833] hover:text-[#fff]">
                      LET’S SEE HOW IT WORKS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-center">
            <div className="col-md-11">
              <div className="col-12 flex align-items-center justify-content-between">
                <div className="col-md-6 flex justify-end order-md-2 order-1 mb-4">
                  <Image
                    src="/assets/images/Group 17835.png"
                    alt=".."
                    width={502}
                    height={382}
                  />
                </div>

                <div className="col-md-6 order-md-1 order-2 mb-4">
                  <p className="font-[cd-se] font-[500] text-[#212833] sm:text-[22px] text-[22px] mb-3">
                    Corporate Secretary
                  </p>
                  <p className="font-[cd-r] font-[500] text-[#7C7C7C] text-[16px] mb-0">
                    Your compliance in check. We track deadlines, file
                    documents, and answer questions daily. All standard
                    resolutions and routine filings are included in the plan.
                  </p>
                  <div className="d-flex pt-4 gap-2">
                    <button className="bg-[#fff] text-[#000] px-2 py-2 font-[500] text-[14px] font-[500] text-[#212833] border border-dark rounded-[30px] sm:w-[170px] w-full hover:bg-[#212833] hover:text-[#fff]">
                      READY TO START
                    </button>
                    <button className="bg-[#fff] text-[#000] px-2 py-2 font-[500] text-[14px] font-[500] border border-dark rounded-[30px] sm:w-[160px] w-full hover:bg-[#212833] hover:text-[#fff]">
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
               <BusinessStarterText/>
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
