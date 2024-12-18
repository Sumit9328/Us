import React from 'react'
import { useState } from "react";


const PricingPlans = () => {
  const [isAnnually, setIsAnnually] = useState(false);

  return (
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

            <div className="flex items-center justify-center my-8">
              <div className="flex bg-[#F5EFE7] rounded-full w-[300px] p-1 relative">
                {/* Pay Monthly Button */}
                <button
                  className={`w-1/2 py-2 rounded-full text-center text-[16px] font-[500] ${!isAnnually
                    ? "bg-white text-black"
                    : "text-gray-600 hover:text-black"
                    }`}
                  onClick={() => setIsAnnually(false)}
                >
                  Pay monthly
                </button>

                {/* Pay Annually Button */}
                <button
                  className={`w-1/2 py-2 rounded-full text-center text-[16px] font-[500] relative ${isAnnually
                    ? "bg-white text-black"
                    : "text-gray-600 hover:text-black"
                    }`}
                  onClick={() => setIsAnnually(true)}
                >
                  Pay annually
                  {isAnnually && (
                    <span className="absolute -right-3 top-0 bg-blue-600 text-white text-[12px] font-[600] rounded-full px-3 py-1">
                      -17%
                    </span>
                  )}
                </button>
              </div>
            </div>

          </div>
          <div className="col-12 flex justify-center">
            <div className="col-12 flex gap-3 p-2">
              <div>
                <div className="col-md-12 bg-[#F7F3EB] rounded-[30px] p-[8px]">
                  <div className="col-md-12 flex justify-center">
                    <div className="rounded-[15px] bg-[#FFFDFA] rounded-[30px]  py-4 mb-5">
                      <div className="w-[420px] px-4">
                        <p className="text-[28px] font-[600] leading-[20px]">
                          Operate
                        </p>
                        <p className="text-[18px] text-[#767676] font-[300] leading-[24px]">
                          For business owners who want to ensure they tick all
                          basic compliance boxes as they grow
                        </p>
                        <p className="text-[18px] font-[500] mb-0">from</p>
                        <p className="text-[40px] font-[400] leading-[50px]">
                          £
                          <span className="text-[50px] font-[500] pl-1">
                            50
                          </span>
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
                  </div>

                  <div className="leading-[10px] mb-8">
                    <div className="rounded-lg">
                      <p className="text-[20px] font-[600] ml-4">
                        Financial software
                      </p>
                      <ul className="space-y-4 text-gray-800 text-base">
                        <li className="text-[16px] font-[400]">
                          • Create, send, and chase invoices
                        </li>
                        <li className="text-[16px] font-[400]">
                          • Capture bills and receipts easily
                        </li>
                        <li className="text-[16px] font-[400]">
                          • Pay bills in one click
                        </li>
                        <li className="text-[16px] font-[400]">
                          • Reimburse expenses
                        </li>
                        <li className="text-[16px] font-[400]">
                          • Real-time financial reports
                        </li>
                        <li className="text-[16px] font-[400]">
                          • Connect your banks
                        </li>
                        <li className="text-[16px] font-[400]">
                          • Use multiple currencies
                        </li>
                        <li className="text-[16px] font-[400]">
                          • Connect 1 marketplace
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="leading-[10px] mb-8">
                    <div className="rounded-lg">
                      <p className="text-[20px] font-[600] ml-4">
                        Bookkeeping
                      </p>
                      <ul className="space-y-4 text-gray-800 text-base">
                        <li className="text-[16px] font-[400]">
                          • Unlimited bookkeeping
                        </li>
                        <li className="text-[16px] font-[400]">
                          • Automatic reconciliations
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="leading-[10px] mb-8">
                    <div className="rounded-lg">
                      <p className="text-[20px] font-[600] ml-4 mb-4">
                        Expert service
                      </p>
                      <ul className="space-y-4 text-gray-800 text-base leading-[18px]">
                        <li className="text-[16px] font-[400]">
                          • Initial consultation with a tax expert
                        </li>
                        <li className="text-[16px] font-[400]">
                          • In-app chat
                        </li>
                        <li className="text-[16px] font-[400]">
                          • Tax advice on payroll and dividends
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="leading-[10px] mb-8">
                    <div className="rounded-lg">
                      <p className="text-[20px] font-[600] ml-4 mb-4">
                        Tax & Filings
                      </p>
                      <ul className="space-y-4 text-gray-800 text-base leading-[18px]">
                        <li className="text-[16px] font-[400]">
                          • Annual filings
                        </li>
                        <li className="text-[16px] font-[400]">
                          • Self-assessment
                        </li>
                        <li className="text-[16px] font-[400]">
                          • Annual review with accountant
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="leading-[10px] mb-8">
                    <div className="rounded-lg">
                      <p className="text-[20px] font-[600] ml-4 mb-4">
                        Payrolls
                      </p>
                      <ul className="space-y-4 text-gray-800 text-base leading-[18px]">
                        <li className="text-[16px] font-[400]">
                          • PAYE registration
                        </li>
                        <li className="text-[16px] font-[400]">
                          • 1st Director Payroll
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="leading-[10px] mb-8">
                    <div className="rounded-lg">
                      <p className="text-[20px] font-[600] ml-4 mb-4">
                        1st Director Payroll
                      </p>
                      <ul className="space-y-4 text-gray-800 text-base leading-[18px]">
                        <li className="text-[16px] font-[400]">
                          • Unlimited corporate changes
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="">
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex justify-between items-center pb-2 mb-2">
                        <h2 className="text-lg font-bold text-black">
                          Historical work
                        </h2>
                        <span className="text-xl font-[600] text-black">
                          —
                        </span>
                      </div>

                      {/* Add-ons List */}
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-[#000] font-[400]">
                            Catch-Up Bookkeeping
                          </span>
                          <span className="text-[#767676] font-[500]">
                            £38/m
                          </span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-[#000] font-[400]">
                            Urgency Filing
                          </span>
                          <span className="text-[#767676] font-[500]">
                            £200
                          </span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-[#000] font-[400]">
                            Historical annual filing and bookkeeping
                          </span>
                          <span className="text-[#767676] font-[500]">
                            £680/y
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="col-md-12 bg-[#F7F3EB] rounded-[30px] p-[8px]">
                  <div className="col-md-12 flex justify-center">
                    <div className="rounded-[15px] bg-[#FFFDFA] rounded-[30px]  py-4 mb-5">
                      <div className="w-[420px] px-4">
                        <p className="text-[28px] font-[600] leading-[20px]">
                          Operate
                        </p>
                        <p className="text-[18px] text-[#767676] font-[300] leading-[24px]">
                          For business owners who want to ensure they tick all
                          basic compliance boxes as they grow
                        </p>
                        <p className="text-[18px] font-[500] mb-0">from</p>
                        <p className="text-[40px] font-[400] leading-[50px]">
                          £
                          <span className="text-[50px] font-[500] pl-1">
                            50
                          </span>
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
                  </div>

                  <div className="leading-[10px] mb-8">
                    <div className="rounded-lg">
                      <p className="text-[20px] text-[#0061FE] font-[600] ml-4 pb-3">
                        Operate package +
                      </p>

                      <p className="text-[20px] font-[600] ml-4">
                        Financial software
                      </p>

                      <ul className="space-y-4 text-gray-800 text-base">
                        <li className="text-[16px] font-[400]">
                          • Connect unlimited marketplaces
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="leading-[10px] mb-8">
                    <div className="rounded-lg">
                      <p className="text-[20px] font-[600] ml-4 mb-4">
                        Expert service
                      </p>
                      <ul className="space-y-4 text-gray-800 text-base leading-[18px]">
                        <li className="text-[16px] font-[400]">
                          • Video calls with an expert
                        </li>
                        <li className="text-[16px] font-[400]">
                          • Ad-hoc tax advice
                        </li>
                        <li className="text-[16px] font-[400]">
                          • Dedicated accountant
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="leading-[10px] mb-8">
                    <div className="rounded-lg">
                      <p className="text-[20px] font-[600] ml-4 mb-4">
                        Tax & Filings
                      </p>
                      <ul className="space-y-4 text-gray-800 text-base leading-[18px]">
                        <li className="text-[16px] font-[400]">
                          • Monthly review with accountant
                        </li>
                        <li className="text-[16px] font-[400]">
                          • VAT filing
                        </li>
                        <li className="text-[16px] font-[400]">
                          • VAT registration
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="leading-[10px] mb-8">
                    <div className="rounded-lg">
                      <p className="text-[20px] font-[600] ml-4 mb-4">
                        Payrolls
                      </p>
                      <ul className="space-y-4 text-gray-800 text-base leading-[18px]">
                        <li className="text-[16px] font-[400]">
                          • Full payroll, 5 employees
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="leading-[10px] mb-8">
                    <div className="rounded-lg">
                      <p className="text-[20px] font-[600] ml-4 mb-4">
                        Company admin
                      </p>
                      <ul className="space-y-4 text-gray-800 text-base leading-[18px]">
                        <li className="text-[16px] font-[400]">
                          • Registered address
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-dark">
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex justify-between items-center pb-2 mb-2">
                        <h2 className="text-lg font-bold text-black">
                          Historical work
                        </h2>
                        <span className="text-xl font-[600] text-black">
                          —
                        </span>
                      </div>

                      {/* Add-ons List */}
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-[#000] font-[400]">
                            Catch-Up Bookkeeping
                          </span>
                          <span className="text-[#767676] font-[500]">
                            £38/m
                          </span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-[#000] font-[400]">
                            Urgency Filing
                          </span>
                          <span className="text-[#767676] font-[500]">
                            £200
                          </span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-[#000] font-[400]">
                            Historical annual filing and bookkeeping
                          </span>
                          <span className="text-[#767676] font-[500]">
                            £680/y
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="col-md-12 bg-[#F7F3EB] rounded-[30px] p-[8px]">
                  <div className="col-md-12 flex justify-center">
                    <div className="rounded-[15px] bg-[#FFFDFA] rounded-[30px]  py-4 mb-5">
                      <div className="w-[420px] px-4">
                        <p className="text-[28px] font-[600] leading-[20px]">
                          Operate
                        </p>
                        <p className="text-[18px] text-[#767676] font-[300] leading-[24px]">
                          For business owners who want to ensure they tick all
                          basic compliance boxes as they grow
                        </p>
                        <p className="text-[18px] font-[500] mb-0">from</p>
                        <p className="text-[40px] font-[400] leading-[50px]">
                          £
                          <span className="text-[50px] font-[500] pl-1">
                            50
                          </span>
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
                  </div>

                  <div className="leading-[10px] mb-8">
                    <div className="rounded-lg">
                      <p className="text-[20px] text-[#0061FE] font-[600] ml-4 pb-3">
                        Operate package +
                      </p>

                      <p className="text-[20px] font-[600] ml-4">
                        Expert service
                      </p>

                      <ul className="space-y-4 text-gray-800 text-base">
                        <li className="text-[16px] font-[400]">
                          • Senior dedicated accountant
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="leading-[10px] mb-8">
                    <div className="rounded-lg">
                      <p className="text-[20px] font-[600] ml-4 mb-4">
                        Payroll
                      </p>
                      <ul className="space-y-4 text-gray-800 text-base leading-[18px]">
                        <li className="text-[16px] font-[400]">
                          • Full payroll, 10 employees
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="leading-[10px] mb-8">
                    <div className="rounded-lg">
                      <p className="text-[20px] font-[600] ml-4 mb-4">
                        Company admin
                      </p>
                      <ul className="space-y-4 text-gray-800 text-base leading-[18px]">
                        <li className="text-[16px] font-[400]">
                          • Professional references
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-dark">
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex justify-between items-center pb-2 mb-2">
                        <h2 className="text-lg font-bold text-black">
                          Historical work
                        </h2>
                        <span className="text-xl font-[600] text-black">
                          —
                        </span>
                      </div>

                      {/* Add-ons List */}
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-[#000] font-[400]">
                            Catch-Up Bookkeeping
                          </span>
                          <span className="text-[#767676] font-[500]">
                            £38/m
                          </span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-[#000] font-[400]">
                            Urgency Filing
                          </span>
                          <span className="text-[#767676] font-[500]">
                            £200
                          </span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-[#000] font-[400]">
                            Historical annual filing and bookkeeping
                          </span>
                          <span className="text-[#767676] font-[500]">
                            £680/y
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 pb-4">
            <div className="col-12 flex justify-center pt-12">
              <button className="font-[400] border-dark flex justify-center items-center gap-2 border w-[240px] h-[40px] text-[17px] border-[#000] rounded-[50px] text-[#000] bg-[#fff] hover:text-[#fff] hover:bg-[#000] transition">
                Compare Pricing <span className="text-[25px]">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingPlans