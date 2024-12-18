import React from 'react'
import Image from 'next/image'

const BusinessStarterText = () => {
  return (
    <div>
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
                            className="w-full outline-none px-4 font-[400] py-2 rounded-full text-black border border-gray-400 mb-4"
                          />
                          <button className="bg-[#fff] border-[#000] border text-[#000] font-medium px-6 py-2 rounded-full mb-4 hover:bg-[#000] hover:text-[#fff] transition">
                            SUBSCRIBE
                          </button>
                        </div>
                        <p className="text-[#fff] font-[400] text-[15px]">
                          <a className="no-underline font-[400] text-[#ABABAB] " href="#">
                            By clicking, you agree to our
                          </a>{""}
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
  )
}

export default BusinessStarterText;