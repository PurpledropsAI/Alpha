import React, { useState } from 'react';
import Header from '../components/header';
import PaymentModal from '../components/modals/paymentModal';

import Footer from '../components/footer';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { FaCircleCheck } from 'react-icons/fa6';

export default function Pricing() {
    const [isPaymentModal, setIsPaymentModal] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-[#0D3225] via-[#172631] to-[#545767]  overflow-hidden">
            <Header />

            <div className="flex flex-col gap-5 items-center p-3 sm:p-20 w-full">
                <div className="text-center text-white">
                    <h1 className="text-4xl font-bold">
                        Start making <span className="text-green-400">smarter</span> decisions,
                    </h1>
                    <h2 className="text-4xl font-bold">Choose a plan</h2>
                </div>

                {/* Pricing Cards */}
                <div className="flex flex-col sm:flex-row gap-8">
                    {/* Lifetime Plan */}
                    <div className=" bg-white rounded-xl p-3 sm:p-5 sm:px-10 flex flex-col gap-3 items-center">
                        <div>
                            <h3 className="text-xl font-sans font-400 text-gray-800 text-center">Life Time Plan</h3>
                            <div className="flex items-end">
                                <span className="text-3xl font-bold text-green-500">$500.00/</span>
                                <span className="text-gray-500">$600.00</span>
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-slate-400'></div>
                        <ul className="text-gray-700 space-y-2">
                            <li>✔ Everything in Innovator, plus</li>
                            <li>✔ Competitor Benchmarking</li>
                            <li>✔ Holistic Market Visualization</li>
                            <li>✔ Adaptive Strategy Planner</li>
                            <li>✔ 24/7 Priority Support</li>
                        </ul>
                        <div
                            className="flex justify-center items-center bg-gradient-to-b from-[#1BAA4C] to-[#34CD69] text-white py-2 px-4 w-full mt-10 rounded-lg  cursor-pointer"
                            onClick={() => setIsPaymentModal(true)}>

                            <span>
                                Buy Now
                            </span>
                            <IoIosArrowRoundForward size={30} />
                        </div>

                    </div>

                    <div className=" bg-white rounded-xl p-3 sm:p-5 sm:px-10 flex flex-col gap-3 items-center">
                        <div>
                            <h3 className="text-xl font-sans font-400 text-gray-800 text-center">1 Year Plan</h3>
                            <div className="flex items-end">
                                <span className="text-3xl font-bold text-green-500">$200.00/</span>
                                <span className="text-gray-500">$300.00</span>
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-slate-400'></div>
                        <ul className="text-gray-700 space-y-2">
                            <li>✔ Everything in Innovator, plus</li>
                            <li>✔ Competitor Benchmarking</li>
                            <li>✔ Holistic Market Visualization</li>
                            <li>✔ Adaptive Strategy Planner</li>
                            <li>✔ 24/7 Priority Support</li>
                        </ul>
                        <div
                            className="flex justify-center items-center text-black shadow-md border border-slate-400 py-2 px-4 w-full mt-10 rounded-lg cursor-pointer"
                            onClick={() => setIsPaymentModal(true)}>
                            <span>
                                Buy Now
                            </span>
                            <IoIosArrowRoundForward size={30} />
                        </div>

                    </div>

                </div>

                {/* Footer Icons */}
                <div className="flex gap-5 justify-center items-center text-green-500 text-center">
                    <div className="flex flex-col sm:flex-row gap-1 items-center">
                        {/* <span className="w-4 h-4 bg-green-500 rounded-full inline-block mr-2"></span> */}
                        <FaCircleCheck className='text-green-500' />

                        Free trial
                    </div>
                    <div className="flex flex-col sm:flex-row gap-1 items-center">
                        {/* <span className="w-4 h-4 bg-green-500 rounded-full inline-block mr-2"></span> */}
                        <FaCircleCheck className='text-green-500' />

                        Cancel anytime
                    </div>
                    <div className="flex flex-col sm:flex-row gap-1 items-center">
                        {/* <span className="w-4 h-4 bg-green-500 rounded-full inline-block mr-2"></span> */}
                        <FaCircleCheck className='text-green-500' />

                        Support included
                    </div>
                </div>
            </div>

            <Footer />

            {isPaymentModal && <PaymentModal onclose={() => setIsPaymentModal(false)} />}

        </div>
    );
}
