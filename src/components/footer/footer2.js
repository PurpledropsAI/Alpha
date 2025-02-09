import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Footer() {
  return (
    <div className="bg-[#10192A] h-full w-full">
      <div className="flex flex-col lg:flex-row justify-between gap-5 items-center  p-3 sm:p-10 h-full w-full">
        <div className="flex flex-col justify-between gap-10 h-full w-full sm:w-[40rem]">
          <div className="flex justify-between items-center">
            <img src="/logo.png" alt="logo" className="w-20 sm:w-36"></img>
            {/* <div className='flex gap-4 text-black h-full'>
                            <div className='text-green-500 rounded-full cursor-pointer'>
                                <FaInstagram size={30} />
                            </div>
                            <div className='text-green-500 rounded-full cursor-pointer'>
                                <FaFacebookSquare size={30} />

                            </div>
                            <div className='text-green-500 rounded-full cursor-pointer'>
                                <FaLinkedinIn size={30} />
                            </div>
                        </div> */}
          </div>
          <div>
            <p className="text-green-500 text-[14px] font-extralight w-60">
              NEVER MISS ANY UPDATED ABOUT US BY SUBSCRIBING TO OUR NEWSLETTER
            </p>
          </div>
          <div className="relative w-full">
            <input
              placeholder="EMAIL"
              className="p-2 px-4 w-full bg-white rounded-xl outline-none"
            />
            <div className="absolute flex items-end right-3 text-slate-400 top-2 cursor-pointer">
              <span>Sign Up</span>
              <IoIosArrowRoundForward size={24} />
            </div>
          </div>
          <div className="flex gap-6 text-black">
            <div className="text-green-500 rounded-full cursor-pointer">
              <FaInstagram size={30} />
            </div>
            <div className="text-green-500 rounded-full cursor-pointer">
              <FaFacebookSquare size={30} />
            </div>
            <div className="text-green-500 rounded-full cursor-pointer">
              <FaLinkedinIn size={30} />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-5 sm:p-5 text-white font-extralight w-full">
          <ul className="flex flex-col gap-1 sm:gap-3 text-[12px] sm:text-[16px]">
            <li className=" font-semibold">Features</li>
            <li>Crypto Baskets</li>
            <li>DCA Investing</li>
            <li>AI Investing</li>
            <li>TradingView Bot</li>
            <li>Trading Bot</li>
            <li>ChatGPT Strategy</li>
            <li>Paper Trading</li>
          </ul>
          <ul className="flex flex-col gap-1 sm:gap-3 text-[12px] sm:text-[16px]">
            <li className=" font-semibold">Resources</li>
            <li>Investing Guides</li>
            <li>Trading Bots Guides</li>
            <li>Blog</li>
            <li>Crypto Converter</li>
            <li>ChatGPT Predictions</li>
            <li>Scalping Signals</li>
            <li>Feedback</li>
          </ul>
          <ul className="flex flex-col gap-1 sm:gap-3 text-[12px] sm:text-[16px]">
            <li className=" font-semibold">Company</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>OctoBot for Businedd</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
            <li>Referral Terms</li>
            <li>Affiliate Terms</li>
          </ul>
        </div>
        <div className="flex flex-col justify-end  h-full">
          <img src="/hello.png" alt="helloLogo" className="w-60 sm:w-96"></img>
        </div>
      </div>
      <div className="bg-slate-400 w-screen h-[1px]"></div>

      <div className="p-3 sm:px-10 flex flex-col sm:flex-row gap-3 text-center justify-between text-white text-[12px] sm:text-[14px]">
        <p>© alpha robotics llp. All Rights Reserved 2024</p>
        <p>Designed by our company</p>
      </div>
    </div>
  );
}
