
"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from '../../components/footer'
import HeaderUK from "../../components/headerUk";


import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {
    return (
        <>
            <div className="bg-[#f3efe7]">
                <HeaderUK />
                <section className="overflow-hidden sm:px-20 px-6  sm:pt-20 pb-4">
                    <div className="flex items-center justify-center">
                        <div className="flex items-center px-4 py-2 border rounded-full border-black">
                            <div className="flex-space-x-2">
                                <Image
                                    src="/assets/images/Group 17583.png"
                                    alt="Person 1"
                                    width='50'
                                    height='20'

                                />


                            </div>

                            <div className="ml-3 font-[500] font-[500] no-underline sm:text-[13px] text-[#000]">
                                Trusted by 200k+ Companies
                            </div>
                        </div>
                    </div>

                </section>
                <section>
                    <div className="overflow-hidden sm:px-20 px-6 ">
                        <div className="container-fluid p-0">
                            <div className="row justify-center ">
                                <div className="col-md-8">
                                    <div className="text-center">
                                        <p className="font-[cd-se]  no-underline sm:text-[42px] text-[28px] text-[#000] text-center sm:leading-[46px] leading-[30px]">Online invoicing?It&apos;s a breeze</p>
                                        
                                        <p className="no-underline sm:text-[20px] text-[28px] text-[#000] text-center sm:leading-[26px] font-[400] leading-[30px]">Understand how much money is coming into your business cash flow, create and send invoices, and get paid faster.</p>

                                    </div>
                                </div>
                                <div className="col-md-8  pb-5 pt-2">
                                    <div className="text-center" >
                                      
                                            <button className="font-[500] font-[400] text-[14px] text-[#000] bg-[#fff] hover:bg-[#000] hover:text-[#fff] border opacity-100 px-5 py-[10px] rounded-[30px] text-center">Login</button>
                                     
                                      
                                            <button className="font-[500] font-[400] ms-[15px] text-[14px] text-[#000] bg-[#fff] hover:bg-[#000] hover:text-[#fff] border px-5 py-[10px] rounded-[30px] text-center ">Schedule a call</button>
                                     


                                    </div>
                                </div>
                                <div className="col-md-8">

                                    <Image src='/assets/images/image 23.png' alt=".." width='3000' height='3000' className="w-full rounded-[10px]" />



                                </div>

                            </div>
                        </div>

                    </div>

                </section>
            </div>


            <section className="bg-[#fff] overflow-hidden sm:px-20 px-6 sm:py-10 py-10">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-8 sm:pb-4">
                            <div className="text-center ">
                                <p className="text-[#353535] font-[400] text-[16px]">INVOICING FEATURES</p>
                                <p className="font-[cd-se]  sm:text-[35px] text-[30px]  text-[#000] text-center sm:leading-[38px] leading-[35px]">Get full control of your business finances</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="col-md-10 pt-4">
                            <div className="row align-items-center justify-between">
                                <div className="col-md-5 mb-4">
                                    <Image
                                        src="/assets/images/group-people-working-out-business-plan-office 2.png"
                                        className="w-full"
                                        width={1080}
                                        height={1080}
                                        alt="no-img"
                                    />

                                </div>
                                <div className="col-md-5 mb-4">
                                    <div className="" >

                                        <p className="text-[22px] text-[#000] font-[500] leading-[25px]">
                                            <span className="text-center sm:text-left">Get paid faster with PayPal</span>
                                        </p>
                                        <p className="text-[16px] text-[#000] font-[400] leading-[25px]">Create invoices and give your customers secure way to pay. Activate PayPal and accept credit and debit card payments — your customers don’t even need a PayPal account.</p>

                                    </div>
                                </div>

                            </div>
                            <div className="row align-items-center justify-between">
                                <div className="col-md-5 order-md-2 order-1 mb-4">
                                    <Image src="/assets/images/brunette-businesswoman-posing 2.png" className="w-full" width={1080} height={1080} alt="no-img"
                                    />
                                </div>
                                <div className="col-md-5 mb-4 order-md-1 order-2">
                                    <p className="text-[22px] text-[#000] font-[500]  leading-[25px] ">Keep on top of your finances</p>
                                    <p className="text-[16px] text-[#000] font-[400] leading-[25px]">Your dashboard gives you a quick and confident overview of all your invoices, what&apos;s due, what&apos;s overdue and what&apos;s been paid.</p>
                                </div>
                            </div>
                            <div className="row align-items-center justify-between">
                                <div className="col-md-5 mb-4 ">
                                    <Image src="/assets/images/group-people-working-out-business-plan-office 3.png" className="w-full" width={1080} height={1080} alt="no-img"
                                    />
                                </div>
                                <div className="col-md-5 mb-4 order-md-1 order-2">
                                    <p className="text-[22px] text-[#000] font-[500]  leading-[25px] ">Get invoicing done quicker</p>
                                    <p className="text-[16px] text-[#000] font-[400] leading-[25px]">Set up your invoice template, save customer details and send invoices to customers quickly and easily.</p>
                                </div>

                            </div>

                            <div className="row align-items-center justify-between">
                                <div className="col-md-5 order-md-2 order-1 mb-4">
                                    <Image src="/assets/images/brunette-businesswoman-posing 2.png" className="w-full" width={1080} height={1080} alt="no-img"
                                    />
                                </div>
                                <div className="col-md-5 mb-4 order-md-1 order-2">
                                    <p className="text-[22px] text-[#000] font-[500]  leading-[25px] ">Automatic tax reporting</p>
                                    <p className="text-[16px] text-[#000] font-[400] leading-[25px]">Our app pulls your transactions, automatically applies tax codes, prepares tax records and makes sure you&apos;re fully tax compliant – giving you the time to focus on the important stuff.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


                        <section className="overflow-hidden sm:px-20 px-6 py-14 pb-8">
                            <div className="overflow-hidden">
                                <div className="container-fluid">
                                    <div className="col-12 mb-14 flex justify-center">
                                        <div className="col-md-5">
            
                                            <p className="text-[18px] font-[400] text-center">WHAT YOU GET</p>
                                            <p className="text-[36px] font-[600] leading-[40px] text-center">Full control and transparency of your sales</p>
                                        </div>
            
                                    </div>
                                    <div className="row">
                                        {/* Card 1 */}
                                        <div className="col-md-4 mb-4">
                                            <div className="flex flex-col justify-between rounded-[12px] px-4 py-4 bg-[#F7F3EB] h-full">
                                                <div>
                                                    <div className="col-12 h-[115px]">
                                                        <Image
                                                            src="/assets/images/image 49.svg"
                                                            width={112}
                                                            height={112}
                                                            alt="no-img"
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="text-[28px] font-[500]">
                                                        Integrations
                                                        </p>
            
                                                        <p className="text-[15px] font-[200] font-[400] text-[#656565]">
                                                        Connect your marketplaces and bank accounts to see real-time sales, returns, and fees and make smarter business decisions.
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <button className="py-1 rounded-[50px] border-dark px-3 border hover:bg-[#000] font-[400] hover:text-[#fff] text-[#000] bg-[]">Learn more</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <div className="flex flex-col justify-between rounded-[12px] px-4 py-4 bg-[#F7F3EB] h-full ">
                                                <div>
                                                    <div className="col-12 h-[115px]">
                                                        <Image
                                                            src="/assets/images/image 50.svg"
                                                            width={128}
                                                            height={112}
                                                            alt="no-img"
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="text-[28px] font-[500]">
                                                        Accounting
                                                        </p>
            
                                                        <p className="text-[15px] font-[200] font-[400] text-[#656565]">
                                                        Your dedicated accountant will know your business inside out, helping you manage your taxes, VAT reports and more.
            
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <button className="py-1 rounded-[50px] border-dark px-3 border hover:bg-[#000] font-[400] hover:text-[#fff] text-[#000] bg-[]">Learn more</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <div className="flex flex-col justify-between rounded-[12px] px-4 py-4 h-full bg-[#F7F3EB]">
                                                <div>
                                                    <div className="col-12 h-[115px]">
                                                        <Image
                                                            src="/assets/images/image 51.svg"
                                                            width={112}
                                                            height={112}
                                                            alt="no-img"
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="text-[28px] font-[500] leading-[32px]">
                                                        Absolute clarity
                                                        </p>
            
                                                        <p className="text-[15px] font-[200] font-[400] text-[#656565]">
                                                        Automate bookkeeping from all your sales platforms and lean on your accounting expert who understands ecommerce business.
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <button className="py-1 rounded-[50px] border-dark px-3 border hover:bg-[#000] font-[400] hover:text-[#fff] text-[#000] bg-[]">Learn more</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        {/* Card 1 */}
                                        <div className="col-md-4 mb-4">
                                            <div className="flex flex-col justify-between rounded-[12px] px-4 py-4 bg-[#F7F3EB] h-full">
                                                <div>
                                                    <div className="col-12 h-[115px]">
                                                        <Image
                                                            src="/assets/images/image 52.svg"
                                                            width={112}
                                                            height={112}
                                                            alt="no-img"
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="text-[28px] font-[500]">
                                                        Reporting
                                                        </p>
            
                                                        <p className="text-[15px] font-[200] font-[400] text-[#656565]">
                                                        Сlearly see how your business is doing at any point in time, take action, and make your business more profitable.
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <button className="py-1 rounded-[50px] border-dark px-3 border hover:bg-[#000] font-[400] hover:text-[#fff] text-[#000] bg-[]">Learn more</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <div className="flex flex-col justify-between rounded-[12px] px-4 py-4 bg-[#F7F3EB] h-full ">
                                                <div>
                                                    <div className="col-12 h-[115px]">
                                                        <Image
                                                            src="/assets/images/image 53.svg"
                                                            width={128}
                                                            height={112}
                                                            alt="no-img"
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="text-[28px] font-[500]">
                                                        Expenses
                                                        </p>
            
                                                        <p className="text-[15px] font-[200] font-[400] text-[#656565]">
                                                        Organise your expenses and stay compliant when you declare your personal spending.
            
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <button className="py-1 rounded-[50px] border-dark px-3 border hover:bg-[#000] font-[400] hover:text-[#fff] text-[#000] bg-[]">Learn more</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <div className="flex flex-col justify-between rounded-[12px] px-4 py-4 bg-[#F7F3EB] h-full ">
                                                <div>
                                                    <div className="col-12 h-[115px]">
                                                        <Image
                                                            src="/assets/images/image 54.svg"
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
                                                    <div>
                                                        <button className="py-1 rounded-[50px] border-dark px-3 border hover:bg-[#000] font-[400] hover:text-[#fff] text-[#000] bg-[]">Learn more</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

            <section className="bg-[#F3EFE7] sm:px-20 px-6 ">
                <div className="overflow-hidden">
                    <div className="container-fluid p-0">
                        <div className="row  sm:pt-5 pt-4 sm:pb-5 pb-4 justify-content-center  ">
                            <div className="col-md-7">
                                <p className="font-[400]   text-[16px]  text-[#353535] text-center">WHY CHOOSE US</p>
                                <p className="font-[cd-se]  sm:text-[40px] text-[30px]  text-[#000] text-center sm:leading-[40px] leading-[30px]">From founding to filing and beyond, we’re with you</p>
                            </div>

                        </div>
                        <div className="d-flex justify-center sm:pb-5">
                            <div className="col-md-10">
                                <div className="row justify-between">
                                    <div className="col-md-6">
                                        <Image
                                            src="/assets/images/image 24 (1).png"
                                            alt="Person 1"

                                            width='5550'
                                            height='550'
                                            className="w-full rounded-[15px]"

                                        />
                                        <div className="pt-4 pb-4">
                                        <div className="">
                                                <div className="h-[80px]  w-[350px]">
                                                    <p className="font-[cd-se] sm:text-[32px] text-[#000] sm:leading-[35px]">Accountants that know your business</p>
                                                </div>
                                                <div className="h-[200px] w-[400px]">

                                                <p className="font-[400] text-[16px]">Your personal accountant is a small business specialist. We take a proactive approach to help you make informed financial decisions to grow revenue.

                                                </p>
                                                <p className="font-[400] text-[16px]">
                                                Our team helps you stay on top of tax payments, track deadlines, and manage filing with HMRC and Companies House.</p>

                                                </div>

                                            </div>
                                            <Link href='/'>
                                                <button className="font-[500] font-[500]  text-[14px] border border-dark text-[#000] text-[#000] hover:bg-[#000] hover:text-[#fff] border px-5 py-[10px] rounded-[30px] text-center">Schedule a call</button>
                                            </Link>

                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <Image
                                            src="/assets/images/image 25.png"
                                            alt="Person 1"
                                            width='5550'
                                            height='550'
                                            className="w-full"

                                        />
                                        <div className="pt-4 pb-4 ">
                                            <div className="">
                                                <div className="h-[80px]  w-[350px]">
                                                    <p className="font-[cd-se] sm:text-[32px] text-[#000] sm:leading-[35px]">Smart software made for business owners</p>
                                                </div>
                                                <div className="h-[200px] w-[400px]">

                                                <p className="font-[400] text-[16px]">Our formula for success: expert accountants plus easy-to-use tools. Together, they give you cash flow clarity to make informed business decisions.

                                                </p>
                                                <p className="font-[400] text-[16px]">
                                                    Our in-house software helps manage bookkeeping, invoicing, payments and much more. It&apos;s your financial data, in real-time, all in one place.</p>

                                                </div>

                                            </div>
                                            <Link href='/'>
                                                <button className="font-[500] font-[500]  text-[14px] border border-dark text-[#000] text-[#000] hover:bg-[#000] hover:text-[#fff] border px-5 py-[10px] rounded-[30px] text-center">Schedule a call</button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <Footer />






        </>
    );
}
