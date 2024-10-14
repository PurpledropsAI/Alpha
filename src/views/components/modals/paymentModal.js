import React, { useState } from 'react';
import Header from '../header';
import Footer from '../footer';
import { CgCloseO } from 'react-icons/cg';

export default function PaymentModal({onclose}) {
  const [selectedMethod, setSelectedMethod] = useState('creditCard');

  return (
    <div className='w-screen h-screen fixed top-0 left-0 flex justify-center items-center backdrop-blur-xl z-[100]' data-aos="fade-in">
      <div className="fixed bg-white rounded-lg shadow-lg p-10 w-full max-w-4xl" data-aos="zoom-in">
        <div className='flex justify-between items-center py-5'>
          <h2 className="text-2xl font-bold ">Payment Method</h2>
          <CgCloseO size={25} onClick={onclose} className='cursor-pointer'/>
        </div>


        <div className="mb-6">
          <h3 className="text-lg font-semibold">Choose a payment method</h3>
          <div className="flex justify-around mt-4">
            <div
              onClick={() => setSelectedMethod('creditCard')}
              className={`cursor-pointer border p-4 rounded-lg flex flex-col items-center w-32 
                ${selectedMethod === 'creditCard' ? 'border-green-400' : 'border-gray-200'}`}
            >
              <div className="text-3xl">💳</div>
              <p>Credit card</p>
              {selectedMethod === 'creditCard' && <div className="text-green-500 mt-2">✔</div>}
            </div>

            <div
              onClick={() => setSelectedMethod('paypal')}
              className={`cursor-pointer border p-4 rounded-lg flex flex-col items-center w-32 
                ${selectedMethod === 'paypal' ? 'border-green-400' : 'border-gray-200'}`}
            >
              <div className="text-3xl">🅿️</div>
              <p>Paypal</p>
            </div>

            <div
              onClick={() => setSelectedMethod('upi')}
              className={`cursor-pointer border p-4 rounded-lg flex flex-col items-center w-32 
                ${selectedMethod === 'upi' ? 'border-green-400' : 'border-gray-200'}`}
            >
              <div className="text-3xl">📱</div>
              <p>UPI transaction</p>
            </div>
          </div>
        </div>

        {selectedMethod === 'creditCard' && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Add your card details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card Number */}
              <div className="relative">
                <label className="block mb-2 font-semibold">Card Number</label>
                <input
                  type="text"
                  value="1900 4367 9362 8937"
                  className="w-full border rounded-lg p-3 text-lg"
                  readOnly
                />
                <div className="absolute right-4 top-10 text-xl">VISA</div>
                <div className="absolute right-14 top-10 text-green-500">✔</div>
              </div>

              {/* Expiration Date */}
              <div className="relative">
                <label className="block mb-2 font-semibold">Expiration Date</label>
                <input
                  type="text"
                  value="02/26"
                  className="w-full border rounded-lg p-3 text-lg"
                  readOnly
                />
                <div className="absolute right-4 top-10 text-gray-500">📅</div>
              </div>

              {/* Card Holder Name */}
              <div>
                <label className="block mb-2 font-semibold">Card Holder Name</label>
                <input
                  type="text"
                  value="Mr. Siva Prakash"
                  className="w-full border rounded-lg p-3 text-lg"
                  readOnly
                />
              </div>

              {/* CVV */}
              <div className="relative">
                <label className="block mb-2 font-semibold">CVV</label>
                <input
                  type="text"
                  value="987"
                  className="w-full border rounded-lg p-3 text-lg"
                  readOnly
                />
                <div className="absolute right-4 top-10 text-gray-500">🔒</div>
              </div>
            </div>

            {/* Total and Place Order */}
            <div className="flex justify-between items-center mt-8">
              <div className="text-lg font-bold">Total: $1200</div>
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
