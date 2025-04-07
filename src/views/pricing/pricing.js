// import React, { useState } from "react";
// import PaymentModal from "../../components/modals/paymentModal";

// import Footer from "../../components/footer/footer";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { FaCircleCheck } from "react-icons/fa6";
// import HomeHeader from "../../components/navbar/homeHeader";

// export default function Pricing() {
//   const [isPaymentModal, setIsPaymentModal] = useState(false);

//   const cardList = [
//     {
//       title: "Alpha Robotics Trading Bot – One Year Plan",
//       primaryPrice: "₹15250.00",
//       secondaryPrice: "+ ₹2745.00 GST (18%)",
//       descriptionList: [
//         "Access to Alpha Trading Bot for 12 months",

//         "Smart AI-based trading strategies",

//         "Real-time market monitoring",

//         "Automatic trade execution",

//         "24/7 customer support",

//         "Monthly performance reports",

//         "Secure & user-friendly dashboard"
//       ],
//       planType: "1_year",
//     },
//     // {
//     //   title: "1 Year Plan",
//     //   primaryPrice: "$200.00",
//     //   secondaryPrice: "$300.00",
//     //   descriptionList: [
//     //     "Everything in Innovator, plus",
//     //     "Competitoe Benchmarking",
//     //     "Holistic Market Visualization",
//     //     "Adaptive Stategy Planner",
//     //     "24/7 Priority Support",
//     //   ],
//     //   planType: "lifetime",
//     // },
//   ];

//   const pricingFooter = ["Free trial", "Cancel anytime", "Support included"];

//   return (
//     <div className="flex flex-col items-center text-white font-aclonica justify-center h-full bg-gradient-to-br from-[#0D3225] via-[#172631] to-[#545767]  overflow-hidden">
//       <HomeHeader />

//       <div className="flex flex-col gap-5 items-center p-3 sm:p-20 w-full">
//         <div className="text-center text-white">
//           <h1 className="text-[18px] sm:text-4xl font-bold">
//             Start making <span className="text-green-400">smarter</span>{" "}
//             decisions,
//           </h1>
//           <h2 className="text-[18px] sm:text-4xl font-bold">Choose a plan</h2>
//         </div>

//         {/* Pricing Cards */}
//         <div className="flex flex-col sm:flex-row justify-center gap-8 w-full">
//           {cardList?.map((items, index) => (
//             <div
//               key={index}
//               className=" bg-white rounded-xl p-3 sm:p-5 sm:px-10 flex flex-col gap-3 items-center"
//             >
//               <div>
//                 <h3 className="text-xl font-sans font-400 text-gray-800 text-center">
//                   {items.title}
//                 </h3>
//                 <div className="flex items-end">
//                   <span className="text-3xl font-bold text-green-500">
//                     {items.primaryPrice}/
//                   </span>
//                   <span className="text-gray-500">{items.secondaryPrice}</span>
//                 </div>
//               </div>
//               <div className="w-full h-[1px] bg-slate-400"></div>
//               <ul className="text-gray-700 space-y-2">
//                 {items.descriptionList?.map((desc, index) => (
//                   <li key={index} className="text-[14px] sm:text-[16px]">✔ {desc}</li>
//                 ))}
//               </ul>
//               <div
//                 className={`flex justify-center items-center text-black py-2 px-4 w-full mt-10 rounded-lg shadow-md  cursor-pointer ${
//                   index === 0
//                     ? "bg-gradient-to-b from-[#1BAA4C] to-[#34CD69] text-white"
//                     : "border border-slate-400"
//                 }`}
//                 onClick={() => setIsPaymentModal(true)}
//               >
//                 <span>Buy Now</span>
//                 <IoIosArrowRoundForward size={30} />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer Icons */}
//         <div className="flex gap-2 sm:gap-5 justify-center items-center text-green-500 text-center">
//           {pricingFooter?.map((item, index) => (
//             <div className="flex flex-col sm:flex-row gap-1 items-center text-[12px] sm:text-[16px]">
//               <FaCircleCheck className="text-green-500" />
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />

//       {isPaymentModal && (
//         <PaymentModal onclose={() => setIsPaymentModal(false)} />
//       )}
//     </div>
//   );
// }


// import React, { useState } from "react";
// import PaymentModal from "../../components/modals/paymentModal";

// import Footer from "../../components/footer/footer";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { FaCircleCheck } from "react-icons/fa6";
// import HomeHeader from "../../components/navbar/homeHeader";

// export default function Pricing() {
//   const [isPaymentModal, setIsPaymentModal] = useState(false);

//   const cardList = [
//     {
//       title: "Life Time Plan",
//       primaryPrice: "₹15250.00",
//       secondaryPrice: "+ ₹2745.00 GST (18%)",
//       descriptionList: [
//         "Everything in Innovator, plus",
//         "Competitoe Benchmarking",
//         "Holistic Market Visualization",
//         "Adaptive Stategy Planner",
//         "24/7 Priority Support",
//       ],
//       planType: "1_year",
//     },
//     // {
//     //   title: "1 Year Plan",
//     //   primaryPrice: "$200.00",
//     //   secondaryPrice: "$300.00",
//     //   descriptionList: [
//     //     "Everything in Innovator, plus",
//     //     "Competitoe Benchmarking",
//     //     "Holistic Market Visualization",
//     //     "Adaptive Stategy Planner",
//     //     "24/7 Priority Support",
//     //   ],
//     //   planType: "lifetime",
//     // },
//   ];
//   // const cardList = [
//   //   {
//   //     title: "Life Time Plan",
//   //     primaryPrice: "$500.00",
//   //     secondaryPrice: "$600.00",
//   //     descriptionList: [
//   //       "Everything in Innovator, plus",
//   //       "Competitoe Benchmarking",
//   //       "Holistic Market Visualization",
//   //       "Adaptive Stategy Planner",
//   //       "24/7 Priority Support",
//   //     ],
//   //     planType: "1_year",
//   //   },
//   //   {
//   //     title: "1 Year Plan",
//   //     primaryPrice: "$200.00",
//   //     secondaryPrice: "$300.00",
//   //     descriptionList: [
//   //       "Everything in Innovator, plus",
//   //       "Competitoe Benchmarking",
//   //       "Holistic Market Visualization",
//   //       "Adaptive Stategy Planner",
//   //       "24/7 Priority Support",
//   //     ],
//   //     planType: "lifetime",
//   //   },
//   // ];

//   const pricingFooter = ["Free trial", "Cancel anytime", "Support included"];

//   return (
//     <div className="flex flex-col items-center text-white font-aclonica justify-center h-full bg-gradient-to-br from-[#0D3225] via-[#172631] to-[#545767]  overflow-hidden">
//       <HomeHeader />

//       <div className="flex flex-col gap-5 items-center p-3 sm:p-20 w-full">
//         <div className="text-center text-white">
//           <h1 className="text-[18px] sm:text-4xl font-bold">
//             Start making <span className="text-green-400">smarter</span>{" "}
//             decisions,
//           </h1>
//           <h2 className="text-[18px] sm:text-4xl font-bold">Choose a plan</h2>
//         </div>

//         {/* Pricing Cards. */}
//         <div className="flex flex-col sm:flex-row justify-center gap-8 w-full">
//           {cardList?.map((items, index) => (
//             <div
//               key={index}
//               className=" bg-white rounded-xl p-3 sm:p-5 sm:px-10 flex flex-col gap-3 items-center"
//             >
//               <div>
//                 <h3 className="text-xl font-sans font-400 text-gray-800 text-center">
//                   {items.title}
//                 </h3>
//                 <div className="flex items-end">
//                   <span className="text-3xl font-bold text-green-500">
//                     {items.primaryPrice}/
//                   </span>
//                   <span className="text-gray-500">{items.secondaryPrice}</span>
//                 </div>
//               </div>
//               <div className="w-full h-[1px] bg-slate-400"></div>
//               <ul className="text-gray-700 space-y-2">
//                 {items.descriptionList?.map((desc, index) => (
//                   <li key={index} className="text-[14px] sm:text-[16px]">✔ {desc}</li>
//                 ))}
//               </ul>
//               <div
//                 className={`flex justify-center items-center text-black py-2 px-4 w-full mt-10 rounded-lg shadow-md  cursor-pointer ${
//                   index === 0
//                     ? "bg-gradient-to-b from-[#1BAA4C] to-[#34CD69] text-white"
//                     : "border border-slate-400"
//                 }`}
//                 onClick={() => setIsPaymentModal(true)}
//               >
//                 <span>Buy Now</span>
//                 <IoIosArrowRoundForward size={30} />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer Icons */}
//         <div className="flex gap-2 sm:gap-5 justify-center items-center text-green-500 text-center">
//           {pricingFooter?.map((item, index) => (
//             <div className="flex flex-col sm:flex-row gap-1 items-center text-[12px] sm:text-[16px]">
//               <FaCircleCheck className="text-green-500" />
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />

//       {!isPaymentModal && (
//         <PaymentModal onclose={() => setIsPaymentModal(false)} />
//       )}
//     </div>
//   );
// }



// src/views/pricing/pricing.js

import React, { useState } from "react";
import axios from "axios";
import Footer from "../../components/footer/footer";
import HomeHeader from "../../components/navbar/homeHeader";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";

export default function Pricing() {
  const [loading, setLoading] = useState(false);

  // Suppose you have only one plan
  const planData = {
    title: "Alpha Robotics Trading Bot – One Year Plan",
    primaryPrice: "₹15250.00",
    secondaryPrice: "+ ₹2745.00 GST (18%)",
    totalInPaise: 1800000, // example: 15250 + 2745 = 17995 => about 1800000 paise
  };

  const handleBuyNow = async () => {
    try {
      setLoading(true);

      // 1) Create the Razorpay order on your backend
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first.");
        setLoading(false);
        return;
      }
      const headers = { Authorization: `Token ${token}` };

      const createOrderResp = await axios.post(
        "https://dca-alpha-bot-aa0c6c561214.herokuapp.com/api/users/create-razorpay-order/",
        {
          amount: planData.totalInPaise,  // in paise
          currency: "INR"
        },
        { headers }
      );

      const { order_id, amount, currency } = createOrderResp.data;

      // 2) Once we get order_id, we open the Razorpay checkout
      const options = {
        key: "rzp_test_i2PpkMQpHSbv4w", // from your env or .env
        amount: amount,
        currency: currency,
        name: "Alpha Robotics LLP",
        description: "One Year Plan",
        order_id: order_id, 
        handler: async function (response) {
          /*
             This callback is invoked after a successful payment. 
             We'll call your /payment-success/ endpoint to verify the signature 
             and mark subscription active.
          */
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;
          console.log("Razorpay success:", response);

          try {
            const verifyResp = await axios.post(
              "https://dca-alpha-bot-aa0c6c561214.herokuapp.com/api/users/payment-success/",
              {
                razorpay_payment_id,
                razorpay_order_id,
                razorpay_signature
              },
              { headers }
            );
            if (verifyResp.data.message) {
              alert("Payment success! Subscription activated.");
            }
          } catch (err) {
            console.error("Verification error:", err?.response?.data);
            alert("Error verifying payment. Contact support if money was deducted.");
          }
        },
        prefill: {
          // prefill your user's info
          name: "Murugaraj",
          email: "murugaraj2@gmail.com",
          contact: "8015347451",
        },
        notes: {
          plan: "One Year Plan",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      
    } catch (error) {
      console.error("Error creating Razorpay order:", error);
      alert("Error creating order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center text-white font-aclonica justify-center h-full bg-gradient-to-br from-[#0D3225] via-[#172631] to-[#545767] overflow-hidden">
      <HomeHeader />
      <div className="flex flex-col gap-5 items-center p-3 sm:p-20 w-full">
        <div className="text-center text-white">
          <h1 className="text-[18px] sm:text-4xl font-bold">
            Start making <span className="text-green-400">smarter</span> decisions,
          </h1>
          <h2 className="text-[18px] sm:text-4xl font-bold">Choose a plan</h2>
        </div>
        {/* Single Plan Card */}
        <div className="bg-white rounded-xl p-3 sm:p-5 sm:px-10 flex flex-col gap-3 items-center text-black max-w-[24rem]">
          <h3 className="text-xl text-center">
            {planData.title}
          </h3>
          <div className="flex items-end justify-center gap-1">
            <span className="text-3xl font-bold text-green-500">{planData.primaryPrice}</span>
            <span className="text-sm text-gray-500">{planData.secondaryPrice}</span>
          </div>
          <hr className="w-full border-gray-300" />
          <ul className="text-gray-700 space-y-2 list-disc list-inside">
            <li>Access to Alpha Trading Bot for 12 months</li>
            <li>Smart AI-based trading strategies</li>
            <li>Real-time market monitoring</li>
            <li>Automatic trade execution</li>
            <li>24/7 customer support</li>
            {/* etc. */}
          </ul>
          <div
            onClick={handleBuyNow}
            className={`flex justify-center items-center mt-6 text-white py-2 px-4 w-full rounded-lg cursor-pointer ${
              loading ? "bg-green-300" : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {loading ? "Processing..." : (
              <>
                <span>Buy Now</span>
                <IoIosArrowRoundForward size={30} />
              </>
            )}
          </div>
        </div>

        {/* Some possible footers */}
        <div className="flex gap-2 sm:gap-5 justify-center items-center text-green-500 text-center mt-5">
          <div className="flex flex-col sm:flex-row gap-1 items-center text-[12px] sm:text-[16px]">
            <FaCircleCheck /> Free trial
          </div>
          <div className="flex flex-col sm:flex-row gap-1 items-center text-[12px] sm:text-[16px]">
            <FaCircleCheck /> Cancel anytime
          </div>
          <div className="flex flex-col sm:flex-row gap-1 items-center text-[12px] sm:text-[16px]">
            <FaCircleCheck /> Support included
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
