import React from 'react'
import Image from 'next/image'

const DownloadText = () => {
  return (
    <div>
                    <div className="row items-center">
                      <div className="col-md-6 flex items-end">
                        <div className="col-md-10 w-full">
                          <div className="col-12 mb-4">
                            <p className="text-[57px] font-[500] leading-[55px] text-[#0061FE]">
                              Download free guide on how to set up business in the US
                            </p>
                            <p className="text-[16px] font-[400] leading-[20px] text-[#0061FE]">
                              We’ve put together all of the documents and details you
                              need to figure out before you open a company
                            </p>
                          </div>
                          <div className="flex flex-col sm:flex-row col-12 items-center mb-4 gap-3">
                            <div className="w-full sm:w-8/12">
                              <input
                                type="text"
                                placeholder="Enter your Email Address"
                                className="border font-[400] outline-none rounded-[50px] px-6 h-[48px] w-full text-[15px] sm:text-[16px]"
                              />
                            </div>
                            <div className="w-full sm:w-4/12">
                              <button className="bg-[#0061FE] text-white justify-center items-center rounded-[50px] px-6 sm:py-2 py-4 w-full flex text-[18px] font-[400] h-[40px]">
                                Submit
                              </button>
                            </div>
                          </div>
                          <div className="col-12">
                            <p className="text-[13px] font-[400] sm:leading-[15px] text-[#0061FE]">
                              By clicking, you agree to our
                              <span className="underline">
                                Terms & Conditions, Privacy and Data Protection Policy
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 flex justify-end mb-5">
                        <div className="col-md-10 w-full">
                          <Image
                            src="/assets/images/image 46.png"
                            width="630"
                            height="430"
                            alt="no-img"
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
    </div>
  )
}

export default DownloadText