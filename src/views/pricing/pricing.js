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
    totalInPaise: 1799500, 
  };

  const handleBuyNow = async () => {
    try {
      setLoading(true);

      
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
          amount: planData.totalInPaise,  
          currency: "INR"
        },
        { headers }
      );

      const { order_id, amount, currency } = createOrderResp.data;

     
      const options = {
        key: "rzp_test_i2PpkMQpHSbv4w", 
        amount: amount,
        currency: currency,
        name: "Alpha Robotics LLP",
        description: "One Year Plan",
        order_id: order_id, 
        handler: async function (response) {
          
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
