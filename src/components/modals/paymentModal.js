import React, { useState } from 'react';
import Header from '../navbar/header';
import Footer from '../footer/footer';
import { CgCloseO } from 'react-icons/cg';

export default function PaymentModal({onclose}) {
  const [selectedMethod, setSelectedMethod] = useState('creditCard');

  return (
    <div className='w-screen h-full sm:h-screen fixed top-0 text-black left-0 flex font-aclonica justify-center items-center backdrop-blur-xl z-[100] overflow-auto' data-aos="fade-in">
      <div className="fixed h-auto max-h-[90vh] overflow-y-auto m-4 sm:m-10 bg-white rounded-lg shadow-lg p-4 sm:p-10 w-[95%] sm:w-[90%] max-w-4xl" data-aos="zoom-in">
        <div className='flex justify-between items-center py-3 sm:py-5'>
          <h2 className="text-xl sm:text-2xl font-bold">Payment Method</h2>
          <CgCloseO size={25} onClick={onclose} className='cursor-pointer'/>
        </div>

        <div className="mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-semibold">Choose a payment method</h3>
          <div className="flex flex-wrap justify-center sm:justify-around gap-3 mt-4">
            <div
              onClick={() => setSelectedMethod('creditCard')}
              className={`cursor-pointer border p-3 sm:p-4 rounded-lg flex flex-col items-center w-24 sm:w-32 
                ${selectedMethod === 'creditCard' ? 'border-green-400' : 'border-gray-200'}`}
            >
              <div className="text-2xl sm:text-3xl">💳</div>
              <p className="text-sm sm:text-base text-center">Credit card</p>
              {selectedMethod === 'creditCard' && <div className="text-green-500 mt-1 sm:mt-2">✔</div>}
            </div>

            <div
              onClick={() => setSelectedMethod('paypal')}
              className={`cursor-pointer border p-3 sm:p-4 rounded-lg flex flex-col items-center w-24 sm:w-32 
                ${selectedMethod === 'paypal' ? 'border-green-400' : 'border-gray-200'}`}
            >
              <div className="text-2xl sm:text-3xl">🅿️</div>
              <p className="text-sm sm:text-base text-center">Paypal</p>
              {selectedMethod === 'paypal' && <div className="text-green-500 mt-1 sm:mt-2">✔</div>}
            </div>

            <div
              onClick={() => setSelectedMethod('upi')}
              className={`cursor-pointer border p-3 sm:p-4 rounded-lg flex flex-col items-center w-24 sm:w-32 
                ${selectedMethod === 'upi' ? 'border-green-400' : 'border-gray-200'}`}
            >
              <div className="text-2xl sm:text-3xl">📱</div>
              <p className="text-sm sm:text-base text-center">UPI transaction</p>
              {selectedMethod === 'upi' && <div className="text-green-500 mt-1 sm:mt-2">✔</div>}
            </div>
          </div>
        </div>

        {selectedMethod === 'creditCard' && (
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Add your card details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Card Number */}
              <div className="relative">
                <label className="block mb-1 sm:mb-2 font-semibold text-sm sm:text-base">Card Number</label>
                <input
                  type="text"
                  value="1900 4367 9362 8937"
                  className="w-full border rounded-lg p-2 sm:p-3 text-base sm:text-lg"
                  readOnly
                />
                <div className="absolute right-4 top-8 sm:top-10 text-lg sm:text-xl">VISA</div>
                <div className="absolute right-12 sm:right-14 top-8 sm:top-10 text-green-500">✔</div>
              </div>

              {/* Expiration Date */}
              <div className="relative">
                <label className="block mb-1 sm:mb-2 font-semibold text-sm sm:text-base">Expiration Date</label>
                <input
                  type="text"
                  value="02/26"
                  className="w-full border rounded-lg p-2 sm:p-3 text-base sm:text-lg"
                  readOnly
                />
                <div className="absolute right-4 top-8 sm:top-10 text-gray-500">📅</div>
              </div>

              {/* Card Holder Name */}
              <div>
                <label className="block mb-1 sm:mb-2 font-semibold text-sm sm:text-base">Card Holder Name</label>
                <input
                  type="text"
                  value="Mr. Siva Prakash"
                  className="w-full border rounded-lg p-2 sm:p-3 text-base sm:text-lg"
                  readOnly
                />
              </div>

              {/* CVV */}
              <div className="relative">
                <label className="block mb-1 sm:mb-2 font-semibold text-sm sm:text-base">CVV</label>
                <input
                  type="text"
                  value="987"
                  className="w-full border rounded-lg p-2 sm:p-3 text-base sm:text-lg"
                  readOnly
                />
                <div className="absolute right-4 top-8 sm:top-10 text-gray-500">🔒</div>
              </div>
            </div>

            {/* Total and Place Order */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-8 gap-4">
              <div className="text-base sm:text-lg font-bold">Total: $1200</div>
              <button className="w-full sm:w-auto bg-green-500 text-white px-6 py-2 sm:py-3 rounded-lg hover:bg-green-600">
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
