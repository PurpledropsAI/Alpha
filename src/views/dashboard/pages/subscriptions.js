import React, { useState } from 'react'
import PaymentModal from '../../../components/modals/paymentModal';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { CiExport } from 'react-icons/ci';

export default function Subscriptions() {
  const [isPaymentModal, setIsPaymentModal] = useState(false);

    const cardList = [
        {
          title: "Life Time Plan",
          primaryPrice: "$500.00",
          secondaryPrice: "$600.00",
          descriptionList: [
            "Everything in Innovator, plus",
            "Competitoe Benchmarking",
            "Holistic Market Visualization",
            "Adaptive Stategy Planner",
            "24/7 Priority Support",
          ],
          planType: "1_year",
        },
        {
          title: "1 Year Plan",
          primaryPrice: "$200.00",
          secondaryPrice: "$300.00",
          descriptionList: [
            "Everything in Innovator, plus",
            "Competitoe Benchmarking",
            "Holistic Market Visualization",
            "Adaptive Stategy Planner",
            "24/7 Priority Support",
          ],
          planType: "lifetime",
        },
      ];

  return (

<div className="flex flex-col gap-5 p-10 w-full">
      <div className="flex ">
        <span className="text-[38px] text-white">Billing & Subscriptions</span>
      </div>
      {/* <div className="flex justify-between gap-5">
      <div className="flex flex-col p-5 bg-white rounded-2xl w-full">
        <div className="flex justify-between items-center w-full">
          <span>Total Profits</span>
          <div className="flex gap-5">
            <span>Months</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-5 bg-white rounded-2xl w-full">
        <div className="flex justify-between items-center w-full">
          <span>Capital Used</span>
          <div className="flex gap-5">
          <div className="flex gap-5">
            <span>Months</span>
          </div>
          </div>
        </div>
      </div>
      </div> */}

        {/* Pricing Cards */}
                <div className="flex flex-col sm:flex-row gap-8 justify-center">
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
                          <li key={index}>✔ {desc}</li>
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

       {/* Table */}
       <div className="flex flex-col  bg-white rounded-2xl w-full">
        <div className="header flex justify-between items-center w-full bg-slate-200 p-5 rounded-t-2xl">
          <span>Billing History</span>
          <div className="flex gap-2 items-center border-black border p-2 rounded-lg">
            <span>Export</span>
            <CiExport />

          </div>
        </div>

        <div className="w-full overflow-auto p-5">
          <table className="w-full">
            <thead className=" flex justify-between w-full">
              <tr className="flex justify-between w-full bg-white bg-opacity-10 text-[12px] sm:text-[16px] ">
                <th className="">Plan name</th>
                <th className="">Amounts</th>
                <th className="">Purchase dtae</th>
                <th className="">End date</th>
                <th className="">Status</th>
                <th className="">Action</th>
              </tr>
            </thead>
            {/* {swapHistory.length > 0 ? (
              swapHistory?.map((item, index) => (
                <tbody className="text-[12px] sm:text-[16px] font-200 z-[1000000]">
                  <tr key={index} className="border-b border-gray-700">
                    <td className="">{item?.date}</td>
                    <td className="">{item?.time}</td>
                    <td className="py-2 px-4">{item?.adrx_swapped}</td>
                    <td className="py-2 px-4">{item?.usdt_received}</td>
                  </tr>
                </tbody>
              ))
            ) : (
              <div>No swapping history found.</div>
            )} */}
          </table>
        </div>

        {isPaymentModal && (
                <PaymentModal onclose={() => setIsPaymentModal(false)} />
              )}

      </div>


    </div>)
}
