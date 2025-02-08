import React from "react";

export default function TradeHistory() {
  return (
    <div className="flex flex-col p-10 w-full">
      <div className="flex ">
        <span className="text-[44px] text-white">Trade History</span>
      </div>

      {/* Table */}
      <div className="flex flex-col  bg-white rounded-2xl w-full">
        <div className="header flex justify-between items-center w-full bg-slate-200 p-5 rounded-t-2xl">
          <span>All History</span>
          <div className="flex gap-5">
            <div className="flex gap-2">
              <input
                type="checkbox"
                defaultChecked
                className="border text-black"
                name="usd"
              />
              <label htmlFor="usd">USD</label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="bnb" />
              <label htmlFor="usd">BNB</label>
            </div>
          </div>
        </div>

        <div className="w-full overflow-auto p-5">
          <table className="w-full">
            <thead className=" flex justify-between w-full">
              <tr className="flex justify-between w-full bg-white bg-opacity-10 text-[12px] sm:text-[16px] ">
                <th className="">Date</th>
                <th className="">Pair</th>
                <th className="">Amount</th>
                <th className="">Pair entry</th>
                <th className="">Pair exit</th>
                <th className="">Status</th>
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
      </div>
    </div>
  );
}
