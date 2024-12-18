
"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from '../components/footer'
import HeaderUK from "../components/headerUk";

import "../globals.css";

import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {
    return (
        <>
            <div className="bg-[#f3efe7]">
                <HeaderUK />
                <section className="overflow-hidden sm:px-20 px-6  sm:pt-20 pb-4">
                    <div className="sm:flex  items-center justify-center">
                        <div className="sm:flex  items-center px-4 py-2 border rounded-full border-black">
                            <div className="sm:flex space-x-2">
                                <Image
                                    src="/assets/images/Group 17583.png"
                                    alt="Person 1"
                                    width='50'
                                    height='20'

                                />


                            </div>

                            <div className="sm:ml-3 font-[500] no-underline sm:text-[13px] text-[#000]">
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
                                        <p className="font-[cd-se]  no-underline sm:text-[42px] text-[28px] text-[#000] text-center sm:leading-[46px] leading-[30px]">Accounting experts  and  simple software for better businesses</p>

                                    </div>
                                </div>
                                <div className="col-md-8 pb-5 pt-2">
                                    <div className="text-center" >

                                        <button className="font-[500] font-[400] text-[14px] text-[#000] bg-[#fff] hover:bg-[#000] hover:text-[#fff] border opacity-100 mb-2 px-5 py-[10px] rounded-[30px] text-center">Login</button>

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

            <section className="bg-[#f3efe7] overflow-hidden sm:px-20 px-6 sm:py-10 py-10">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-6 pb-4 sm:flex  justify-center">
                            <div className="text-center sm:w-[450px]">
                                <p className="text-[#353535] font-[400] text-[16px]">WHAT WE DO</p>
                                <p className="font-[cd-se]  sm:text-[35px] text-[30px]  text-[#000] text-center sm:leading-[38px] leading-[35px]">Services that give you peace of mind</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="bg-white p-4 rounded-[20px] h-full sm:flex  sm:flex -col">
                                <p className="text-[#000] font-[500] text-[22px] leading-[25px] m-0 p-0">
                                    Accounting<p className="text-[#0073FD] font-[500]"> from  £65 </p>
                                </p>
                                <div className="h-[80px]">

                                    <p className="text-[#616161] font-[400] text-[16px] pb-3 leading-[20px]">
                                        Get an expert accountant, accounting software and bookkeeping in one plan.
                                    </p>
                                </div>


                                <Link href="#" className="sm:w-full no-underline">
                                    <button className="w-full sm:py-[8px] px-6 rounded-full font-[500] text-[16px] border-2 border-[#0073FD] text-blue-500 hover:bg-[#0073FD] hover:text-white hover:border-[#0073FD] focus:outline-none sm:flex  items-center justify-center gap-2 group">
                                        Go to Incorporation
                                        <svg
                                            width="22"
                                            height="16"
                                            viewBox="0 0 22 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="fill-blue-500 group-hover:fill-white transition-all duration-300"
                                        >
                                            <path
                                                d="M21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM0 9H21V7H0V9Z"
                                            />
                                        </svg>
                                    </button>
                                </Link>





                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="bg-white p-4 rounded-[20px] h-full sm:flex  sm:flex -col">
                                <p className="text-[#000] font-[500] text-[22px] leading-[25px] m-0 p-0">
                                    Accounting for  <p className="text-[#0073FD] font-[500]">Ecommerce from £65</p>
                                </p>
                                <div className="h-[80px]">

                                    <p className="text-[#616161] font-[400] text-[16px] pb-3 leading-[20px]">
                                        Access ecommerce accountants, sales platform integrations and international VAT returns.
                                    </p>
                                </div>


                                <Link href="#" className="w-full no-underline">
                                    <button className="w-full py-[8px] px-6 rounded-full font-[500] text-[16px] border-2 border-[#0073FD] text-blue-500 hover:bg-[#0073FD] hover:text-white hover:border-[#0073FD] focus:outline-none sm:flex  items-center justify-center gap-2 group">
                                        Go to Accounting
                                        <svg
                                            width="22"
                                            height="16"
                                            viewBox="0 0 22 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="fill-blue-500 group-hover:fill-white transition-all duration-300"
                                        >
                                            <path
                                                d="M21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM0 9H21V7H0V9Z"
                                            />
                                        </svg>
                                    </button>
                                </Link>





                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="bg-white p-4 rounded-[20px] h-full sm:flex  sm:flex -col">
                                <p className="text-[#000] font-[500] text-[22px] leading-[25px] m-0 p-0">
                                    Company formation<p className="text-[#0073FD]"> from £50 </p>
                                </p>
                                <div className="h-[80px]">

                                    <p className="text-[#616161] font-[400] text-[16px] pb-3 leading-[20px]">
                                        Start your business the right way with incorporation, bank account and registered address.
                                    </p>
                                </div>


                                <Link href="#" className="w-full no-underline">
                                    <button className="w-full py-[8px] px-6 rounded-full font-[500] text-[16px] border-2 border-[#0073FD] text-blue-500 hover:bg-[#0073FD] hover:text-white hover:border-[#0073FD] focus:outline-none sm:flex  items-center justify-center gap-2 group">
                                        Go to Secretary
                                        <svg
                                            width="22"
                                            height="16"
                                            viewBox="0 0 22 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="fill-blue-500 group-hover:fill-white transition-all duration-300"
                                        >
                                            <path
                                                d="M21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM0 9H21V7H0V9Z"
                                            />
                                        </svg>
                                    </button>
                                </Link>





                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="bg-[#fff] overflow-hidden sm:px-20 px-6 sm:py-10 py-10">
                <div className="container-fluid p-0">
                    <div className="row justify-center">
                        <div className="col-md-8 sm:pb-4">
                            <div className="text-center ">
                                <p className="text-[#353535] font-[400] text-[16px]">WHO WE HELP</p>
                                <p className="font-[cd-se]  sm:text-[35px] text-[30px]  text-[#000] text-center sm:leading-[38px] leading-[35px]">For founders ready to ditch the books and do business</p>
                            </div>
                        </div>
                    </div>

                    <div className="sm:flex  justify-center">
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

                                        <p className="text-[22px] text-[#000] font-[500]  leading-[25px] ">
                                            <span className="text-center sm:text-left">Solopreneurs who want their weekends back from financial admin</span>
                                        </p>

                                    </div>
                                </div>

                            </div>
                            <div className="row align-items-center justify-between">
                                <div className="col-md-5 order-md-2 order-1 mb-4">
                                    <Image src="/assets/images/brunette-businesswoman-posing 2.png" className="w-full" width={1080} height={1080} alt="no-img"
                                    />
                                </div>
                                <div className="col-md-5 mb-4 order-md-1 order-2">
                                    <p className="text-[22px] text-[#000] font-[500]  leading-[25px] ">Solopreneurs who want their weekends back from financial admin</p>
                                </div>
                            </div>
                            <div className="row align-items-center justify-between">
                                <div className="col-md-5 mb-4 ">
                                    <Image src="/assets/images/group-people-working-out-business-plan-office 3.png" className="w-full" width={1080} height={1080} alt="no-img"
                                    />
                                </div>
                                <div className="col-md-5 ">
                                    <p className="text-[22px] text-[#000] font-[500]  leading-[25px] ">Ecommerce sellers seeking accountants that understand their business</p>
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
                        <div className="sm:d-sm:flex   justify-center sm:pb-5">
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
                                                    <p className="sm:text-[32px] text-[30px]  text-[#000] sm:leading-[35px] font-[500] leading-[30px]">Accountants that know your business</p>
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
                                                    <p className="sm:text-[32px] text-[30px]  text-[#000] sm:leading-[35px] font-[500] leading-[30px]">Smart software made for business owners</p>
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
