import React, { useState } from "react";
import PaymentModal from "../../components/modals/paymentModal";

import Footer from "../../components/footer/footer";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";
import HomeHeader from "../../components/navbar/homeHeader";

export default function Pricing() {
  const [isPaymentModal, setIsPaymentModal] = useState(false);

  const cardList = [
    {
      title: "Life Time Plan",
      primaryPrice: "₹15250.00",
      secondaryPrice: "+ ₹2745.00 GST (18%)",
      descriptionList: [
        "Everything in Innovator, plus",
        "Competitoe Benchmarking",
        "Holistic Market Visualization",
        "Adaptive Stategy Planner",
        "24/7 Priority Support",
      ],
      planType: "1_year",
    },
    // {
    //   title: "1 Year Plan",
    //   primaryPrice: "$200.00",
    //   secondaryPrice: "$300.00",
    //   descriptionList: [
    //     "Everything in Innovator, plus",
    //     "Competitoe Benchmarking",
    //     "Holistic Market Visualization",
    //     "Adaptive Stategy Planner",
    //     "24/7 Priority Support",
    //   ],
    //   planType: "lifetime",
    // },
  ];
  // const cardList = [
  //   {
  //     title: "Life Time Plan",
  //     primaryPrice: "$500.00",
  //     secondaryPrice: "$600.00",
  //     descriptionList: [
  //       "Everything in Innovator, plus",
  //       "Competitoe Benchmarking",
  //       "Holistic Market Visualization",
  //       "Adaptive Stategy Planner",
  //       "24/7 Priority Support",
  //     ],
  //     planType: "1_year",
  //   },
  //   {
  //     title: "1 Year Plan",
  //     primaryPrice: "$200.00",
  //     secondaryPrice: "$300.00",
  //     descriptionList: [
  //       "Everything in Innovator, plus",
  //       "Competitoe Benchmarking",
  //       "Holistic Market Visualization",
  //       "Adaptive Stategy Planner",
  //       "24/7 Priority Support",
  //     ],
  //     planType: "lifetime",
  //   },
  // ];

  const pricingFooter = ["Free trial", "Cancel anytime", "Support included"];

  return (
    <div className="flex flex-col items-center text-white font-aclonica justify-center h-full bg-gradient-to-br from-[#0D3225] via-[#172631] to-[#545767]  overflow-hidden">
      <HomeHeader />

      <div className="flex flex-col gap-5 items-center p-3 sm:p-20 w-full">
        <div className="text-center text-white">
          <h1 className="text-[18px] sm:text-4xl font-bold">
            Start making <span className="text-green-400">smarter</span>{" "}
            decisions,
          </h1>
          <h2 className="text-[18px] sm:text-4xl font-bold">Choose a plan</h2>
        </div>

        {/* Pricing Cards. */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 w-full">
          {cardList?.map((items, index) => (
            <div
              key={index}
              className=" bg-white rounded-xl p-3 sm:p-5 sm:px-10 flex flex-col gap-3 items-center"
            >
              <div>
                <h3 className="text-xl font-sans font-400 text-gray-800 text-center">
                  {items.title}
                </h3>
                <div className="flex items-end">
                  <span className="text-3xl font-bold text-green-500">
                    {items.primaryPrice}/
                  </span>
                  <span className="text-gray-500">{items.secondaryPrice}</span>
                </div>
              </div>
              <div className="w-full h-[1px] bg-slate-400"></div>
              <ul className="text-gray-700 space-y-2">
                {items.descriptionList?.map((desc, index) => (
                  <li key={index} className="text-[14px] sm:text-[16px]">✔ {desc}</li>
                ))}
              </ul>
              <div
                className={`flex justify-center items-center text-black py-2 px-4 w-full mt-10 rounded-lg shadow-md  cursor-pointer ${
                  index === 0
                    ? "bg-gradient-to-b from-[#1BAA4C] to-[#34CD69] text-white"
                    : "border border-slate-400"
                }`}
                onClick={() => setIsPaymentModal(true)}
              >
                <span>Buy Now</span>
                <IoIosArrowRoundForward size={30} />
              </div>
            </div>
          ))}
        </div>

        {/* Footer Icons */}
        <div className="flex gap-2 sm:gap-5 justify-center items-center text-green-500 text-center">
          {pricingFooter?.map((item, index) => (
            <div className="flex flex-col sm:flex-row gap-1 items-center text-[12px] sm:text-[16px]">
              <FaCircleCheck className="text-green-500" />
              {item}
            </div>
          ))}
        </div>
      </div>

      <Footer />

      {isPaymentModal && (
        <PaymentModal onclose={() => setIsPaymentModal(false)} />
      )}
    </div>
  );
}
