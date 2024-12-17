"use client";
import Image from "next/image";
import Header from "../../components/header";
import FAQ from "../../components/faq";
import Footer from "../../components/footer";
import BusinessStarterText from "@/app/components/businesstartertext";
import DownloadText from "@/app/components/downloadtext";

import "bootstrap/dist/css/bootstrap.min.css";
export default function Home() {
  return (
    <>
      <section>
        <div className="bg-[#f3efe7]">
          <Header />
        </div>
      </section>

      <section className="overflow-hidden sm:px-20 px-6 sm:pt-24 pb-10">
        <div className="overflow-hidden">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 flex justify-center items-center">
                <div className="col-md-12">
                  <p className="sm:text-[50px] text-[30px] sm:leading-[60px] leading-[35px]  font-[600] ">
                    The ultimate bookkeeping solution for busy founders
                  </p>
                  <p className="sm:text-[19px] sm:leading-[25px] font-[400] leading-[22px]">
                    Say goodbye to the stress of managing your finances and
                    spend more time focusing on what really matters – your core
                    business.
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
                    src="/assets/images/Picture ⏵ comp-secreyary-vanessa-sg@1x.webp (5).png"
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

      <section className="overflow-hidden sm:px-20 px-6 py-14 pb-10  bg-[#F3EFE7]">
        <div className="overflow-hidden">
          <div className="container-fluid">
            <div className="col-12 sm:flex justify-center">
              <div className="col-md-10 gap-3 sm:flex justify-center">
                <div className="col-md-5 mb-4">
                  <div className="flex flex-col justify-between rounded-[12px] px-4 py-4 bg-[#fff]">
                    <div>
                      <div className="col-12 py-3  h-[150px]">
                        <Image
                          src="/assets/images/Vector.png"
                          width={112}
                          height={112}
                          alt="no-img"
                        />
                      </div>
                      <div>
                        <div className="h-[100px]">
                          <p className="text-[28px] font-[500] mb-1">
                            Bookkeeping Software
                          </p>
                          <p className="text-[18px] font-[500] leading-[18px]">
                            Keep track of your money.
                          </p>
                        </div>
                        <p className="text-[15px] font-[200] font-[400] leading-[25px] text-[#656565]">
                          Optimize your financial management with our intuitive
                          bookkeeping software. Connect multiple bank accounts,
                          send and track invoices effortlessly, categorize
                          transactions with ease, and more.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 mb-4">
                  <div className="flex flex-col justify-between rounded-[12px] px-4 py-4 bg-[#fff]">
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
                        <div className="h-[100px]">
                          <p className="text-[28px] font-[500] mb-1">
                            Dedicated Bookkeeper
                          </p>
                          <p className="text-[18px] font-[500] leading-[18px]">
                            Gain peace of mind with a dedicated bookkeeper.
                          </p>
                        </div>
                        <p className="text-[15px] leading-[25px] font-[200] font-[400] text-[#656565]">
                          While software solutions are valuable, nothing beats
                          the expertise of a dedicated bookkeeper who
                          understands your business. Benefit from expert CPA
                          review, quarterly financial reports, and much more.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 1 */}
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden px-6 sm:px-20 pb-18 pt-0 sm:pb-10">
        <div className="overflow-hidden">
          <div className="container-fluid">
            {/* Final Heading Section */}
            <div className="col-12 sm:mb-5 pt-12">
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
                      Manage all your transactions in one place
                    </p>
                    <p className="text-[15px] font-[400] text-[#656565] leading-[22px]">
                      Manage all your transactions from various sources in one
                      intuitive dashboard, saving you time and reducing the risk
                      of errors.
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
                    <p className="text-[18px] font-[500]">
                      Custom invoice templates as you wish
                    </p>
                    <p className="text-[16px] font-[400] text-[#656565] leading-[22px]">
                      Choose your preferred layout and reflect your brand’s
                      uniqueness with fully customizable invoice templates.
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
                    <p className="text-[18px] font-[500] sm:mb-[40px]">
                      Set up recurring invoices
                    </p>
                    <p className="text-[15px] font-[400] text-[#656565] leading-[22px]">
                      Automate your billing process to ensure timely invoicing
                      and maintain a consistent cash flow.
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
                    <p className="text-[18px] font-[500] leading-[23px] sm:mb-[40px]">
                      Manage client lists
                    </p>
                    <p className="text-[15px] font-[400] text-[#656565] leading-[22px]">
                      Effortlessly organize & track outstanding client invoices
                      and successful payments to simplify your accounting
                      operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden sm:px-20 px-6 py-0 pb-10  ">
        <div className="overflow-hidden">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <p className="text-center sm:text-[34px] text-[30px] font-[600] mt-0 sm:leading-[35px] leading-[35px]">
                  Easily manage & grow your business
                </p>
                <p className="text-center sm:text-[16px] text-[16px] font-[400] sm:leading-[1px] sm:mb-0 mb-4">
                  Your taxes, compliance, and finances made simple.
                </p>

                <div className="col-12 sm:flex justify-center pt-8 sm:mb-8">
                  <div className="col-md-12 sm:flex  mt-3 gap-3 sm:h-full ">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="rounded-[30px] border-8 border-[#f3efe7] bg-[#fffdfa] sm:mb-0 mb-4">
                        <div>
                          <div className="mb-4 mt-4 ">
                            <span className="text-[16px] ml-3 bg-[#F6F6F6] rounded-[40px] font-[600] px-4 py-2 text-black">
                              Invoicing
                            </span>
                          </div>
                          <div className="sm:h-[350px]">
                            <ul className="space-y-4">
                              {[
                                {
                                  content: "Create customized invoice template",
                                  status: "tick",
                                },
                                {
                                  content: "Manage client lists",
                                  status: "tick",
                                },
                                {
                                  content:
                                    "Create or connect merchant processing account via Stripe integration",
                                  status: "tick",
                                },
                                {
                                  content: "Set up recurring invoices",
                                  status: "tick",
                                },
                                {
                                  content:
                                    "Collect payments via the invoices you send with Stripe",
                                  status: "tick",
                                },
                              ].map((item, index) => (
                                <li
                                  key={index}
                                  className="flex items-start space-x-3"
                                >
                                  {item.status === "tick" ? (
                                    // Green tick icon with fixed size
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      className="text-green-500"
                                      style={{
                                        minWidth: "24px",
                                        minHeight: "24px",
                                      }} // Fixed size
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  ) : (
                                    // Red cross icon with fixed size
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{
                                        minWidth: "18px",
                                        minHeight: "18px",
                                      }} // Fixed size
                                    >
                                      <path
                                        d="M12.3509 11.4195L20.5998 3.17024C20.725 3.04932 20.8249 2.90467 20.8936 2.74474C20.9623 2.58481 20.9984 2.4128 21 2.23875C21.0015 2.0647 20.9683 1.89208 20.9024 1.73098C20.8365 1.56988 20.7391 1.42352 20.6161 1.30044C20.493 1.17736 20.3466 1.08003 20.1855 1.01412C20.0244 0.948208 19.8518 0.915041 19.6778 0.916553C19.5037 0.918066 19.3317 0.954228 19.1718 1.02293C19.0118 1.09163 18.8672 1.19149 18.7463 1.31669L10.497 9.56557L2.24817 1.31669C2.00144 1.07538 1.66949 0.941105 1.32438 0.943006C0.979266 0.944906 0.648824 1.08283 0.404766 1.32684C0.160708 1.57086 0.0227271 1.90128 0.0207655 2.24639C0.0188038 2.5915 0.153021 2.92347 0.394289 3.17024L8.6435 11.4195L0.394289 19.6687C0.270338 19.7899 0.171668 19.9345 0.103991 20.0941C0.0363139 20.2538 0.000974692 20.4252 1.98797e-05 20.5986C-0.000934933 20.772 0.0325137 20.9438 0.0984285 21.1042C0.164343 21.2645 0.261414 21.4102 0.384022 21.5328C0.50663 21.6554 0.652339 21.7524 0.81271 21.8183C0.973082 21.8842 1.14493 21.9176 1.31831 21.9166C1.49168 21.9157 1.66314 21.8803 1.82275 21.8126C1.98236 21.7449 2.12696 21.6462 2.24817 21.5222L10.497 13.2733L18.7463 21.5222C19.0022 21.7782 19.3378 21.9063 19.673 21.9063C20.0083 21.9063 20.3442 21.7782 20.5998 21.5222C20.8456 21.2764 20.9836 20.943 20.9836 20.5954C20.9836 20.2478 20.8456 19.9145 20.5998 19.6687L12.3509 11.4195Z"
                                        fill="#EF0000"
                                      />
                                    </svg>
                                  )}
                                  <span className="text-[15px] font-[500]">
                                    {item.content}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-[35px] sm:text-[45px] font-[600] ml-9 leading-[50px]">
                              <span className="text-[25px] sm:text-[30px]">
                                $
                              </span>{" "}
                              50/y
                            </p>
                            <div className="col-12 sm:mt-4 flex justify-center mb-4">
                              <button className="border rounded-[50px] text-[15px] sm:text-[16px] font-[400] text-[#000] bg-[#fff] sm:w-[280px] w-[260px] h-[40px] hover:bg-[#212833] hover:text-[#fff]">
                                Get Invoicing
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-[30px] border-8 border-[#f3efe7] bg-[#fffdfa] sm:mb-0 mb-4">
                        <div>
                          <div className="mb-4 mt-4">
                            <span className="text-[16px] ml-3 bg-[#F6F6F6] rounded-[40px] font-[600] px-4 py-2 text-black">
                              Bookkeeping Software
                            </span>
                          </div>
                          <div className="sm:h-[350px]">
                            <ul className="space-y-4">
                              {[
                                {
                                  content: "Includes doola Invoicing",
                                  status: "tick",
                                },
                                {
                                  content:
                                    "Connect multiple bank accounts to manage transactions all in one platform",
                                  status: "tick",
                                },
                                {
                                  content:
                                    "Tag and categorize income and expense transactions",
                                  status: "tick",
                                },
                                {
                                  content:
                                    "Upload and attach receipts to transactions",
                                  status: "tick",
                                },
                                {
                                  content:
                                    "Build automated rules for tagging income or expense transactions",
                                  status: "tick",
                                },
                              ].map((item, index) => (
                                <li
                                  key={index}
                                  className="flex items-start space-x-3"
                                >
                                  {item.status === "tick" ? (
                                    // Green tick icon with fixed size
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      className="text-green-500"
                                      style={{
                                        minWidth: "24px",
                                        minHeight: "24px",
                                      }} // Fixed size
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  ) : (
                                    // Red cross icon with fixed size
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{
                                        minWidth: "18px",
                                        minHeight: "18px",
                                      }} // Fixed size
                                    >
                                      <path
                                        d="M12.3509 11.4195L20.5998 3.17024C20.725 3.04932 20.8249 2.90467 20.8936 2.74474C20.9623 2.58481 20.9984 2.4128 21 2.23875C21.0015 2.0647 20.9683 1.89208 20.9024 1.73098C20.8365 1.56988 20.7391 1.42352 20.6161 1.30044C20.493 1.17736 20.3466 1.08003 20.1855 1.01412C20.0244 0.948208 19.8518 0.915041 19.6778 0.916553C19.5037 0.918066 19.3317 0.954228 19.1718 1.02293C19.0118 1.09163 18.8672 1.19149 18.7463 1.31669L10.497 9.56557L2.24817 1.31669C2.00144 1.07538 1.66949 0.941105 1.32438 0.943006C0.979266 0.944906 0.648824 1.08283 0.404766 1.32684C0.160708 1.57086 0.0227271 1.90128 0.0207655 2.24639C0.0188038 2.5915 0.153021 2.92347 0.394289 3.17024L8.6435 11.4195L0.394289 19.6687C0.270338 19.7899 0.171668 19.9345 0.103991 20.0941C0.0363139 20.2538 0.000974692 20.4252 1.98797e-05 20.5986C-0.000934933 20.772 0.0325137 20.9438 0.0984285 21.1042C0.164343 21.2645 0.261414 21.4102 0.384022 21.5328C0.50663 21.6554 0.652339 21.7524 0.81271 21.8183C0.973082 21.8842 1.14493 21.9176 1.31831 21.9166C1.49168 21.9157 1.66314 21.8803 1.82275 21.8126C1.98236 21.7449 2.12696 21.6462 2.24817 21.5222L10.497 13.2733L18.7463 21.5222C19.0022 21.7782 19.3378 21.9063 19.673 21.9063C20.0083 21.9063 20.3442 21.7782 20.5998 21.5222C20.8456 21.2764 20.9836 20.943 20.9836 20.5954C20.9836 20.2478 20.8456 19.9145 20.5998 19.6687L12.3509 11.4195Z"
                                        fill="#EF0000"
                                      />
                                    </svg>
                                  )}
                                  <span className="text-[15px] font-[500]">
                                    {item.content}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-[35px] sm:text-[45px] font-[600] ml-9 leading-[50px]">
                              <span className="text-[25px] sm:text-[30px]">
                                $
                              </span>{" "}
                              300/y
                            </p>
                            <div className="col-12 sm:mt-4 flex justify-center mb-4">
                              <button className="border rounded-[50px] text-[15px] sm:text-[16px] font-[400] text-[#000] bg-[#fff] sm:w-[280px] w-[260px] h-[40px] hover:bg-[#212833] hover:text-[#fff]">
                                Get Software
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-[30px] border-8 border-[#f3efe7] bg-[#fffdfa] sm:mb-0 mb-4">
                        <div>
                          <div className="mb-4 mt-4">
                            <span className="text-[16px] ml-3 rounded-[40px] font-[600] px-4 py-2 text-black">
                              Dedicated Bookkeeper
                            </span>
                          </div>
                          <div className="sm:h-[350px]">
                            <ul className="space-y-4">
                              {[
                                {
                                  content:
                                    "Dedicated bookkeeping team of Certified Public Accountant’s",
                                  status: "tick",
                                },
                                {
                                  content: "1,200 transactions / year*",
                                  status: "tick",
                                },
                                {
                                  content:
                                    "Categorization of business transactions",
                                  status: "tick",
                                },
                                {
                                  content:
                                    "Reconciliation of business bank and credit card accounts (unlimited bank accounts and channels of revenue allowed)",
                                  status: "tick",
                                },
                                {
                                  content: "Ongoing Bookkeeping support",
                                  status: "tick",
                                },
                              ].map((item, index) => (
                                <li
                                  key={index}
                                  className="flex items-start space-x-3"
                                >
                                  {item.status === "tick" ? (
                                    // Green tick icon with fixed size
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      className="text-green-500"
                                      style={{
                                        minWidth: "24px",
                                        minHeight: "24px",
                                      }} // Fixed size
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  ) : (
                                    // Red cross icon with fixed size
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{
                                        minWidth: "18px",
                                        minHeight: "18px",
                                      }} // Fixed size
                                    >
                                      <path
                                        d="M12.3509 11.4195L20.5998 3.17024C20.725 3.04932 20.8249 2.90467 20.8936 2.74474C20.9623 2.58481 20.9984 2.4128 21 2.23875C21.0015 2.0647 20.9683 1.89208 20.9024 1.73098C20.8365 1.56988 20.7391 1.42352 20.6161 1.30044C20.493 1.17736 20.3466 1.08003 20.1855 1.01412C20.0244 0.948208 19.8518 0.915041 19.6778 0.916553C19.5037 0.918066 19.3317 0.954228 19.1718 1.02293C19.0118 1.09163 18.8672 1.19149 18.7463 1.31669L10.497 9.56557L2.24817 1.31669C2.00144 1.07538 1.66949 0.941105 1.32438 0.943006C0.979266 0.944906 0.648824 1.08283 0.404766 1.32684C0.160708 1.57086 0.0227271 1.90128 0.0207655 2.24639C0.0188038 2.5915 0.153021 2.92347 0.394289 3.17024L8.6435 11.4195L0.394289 19.6687C0.270338 19.7899 0.171668 19.9345 0.103991 20.0941C0.0363139 20.2538 0.000974692 20.4252 1.98797e-05 20.5986C-0.000934933 20.772 0.0325137 20.9438 0.0984285 21.1042C0.164343 21.2645 0.261414 21.4102 0.384022 21.5328C0.50663 21.6554 0.652339 21.7524 0.81271 21.8183C0.973082 21.8842 1.14493 21.9176 1.31831 21.9166C1.49168 21.9157 1.66314 21.8803 1.82275 21.8126C1.98236 21.7449 2.12696 21.6462 2.24817 21.5222L10.497 13.2733L18.7463 21.5222C19.0022 21.7782 19.3378 21.9063 19.673 21.9063C20.0083 21.9063 20.3442 21.7782 20.5998 21.5222C20.8456 21.2764 20.9836 20.943 20.9836 20.5954C20.9836 20.2478 20.8456 19.9145 20.5998 19.6687L12.3509 11.4195Z"
                                        fill="#EF0000"
                                      />
                                    </svg>
                                  )}
                                  <span className="text-[15px] font-[500]">
                                    {item.content}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-[35px] sm:text-[45px] font-[600] ml-9 leading-[50px]">
                              <span className="text-[25px] sm:text-[30px]">
                                $
                              </span>{" "}
                              1500/y
                            </p>
                            <div className="col-12 sm:mt-4 flex justify-center mb-4">
                              <button className="border rounded-[50px] text-[15px] sm:text-[16px] font-[400] text-[#000] bg-[#fff] sm:w-[280px] w-[260px] h-[40px] hover:bg-[#212833] hover:text-[#fff]">
                                Get a Human
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 flex justify-center sm:mb-10">
                  <div className="col-md-6">
                    <p className="text-center text-[18px] font-[500]">
                      * Includes up to 5000 transactions per year, depending on
                      the package you select. Contact us to learn more.
                    </p>
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

      <section className="overflow-hidden sm:px-20 px-6  pt-10 pb-10  bg-[#f3efe7]">
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

      <section className="bg-[#000] overflow-hidden sm:px-12 px-6 sm:py-5 py-5">
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
