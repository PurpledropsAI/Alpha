import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../../api/api";

const OpenPositionsTab = ({ isfirst }) => {
  const [tradeData, setTradeData] = useState();
  const [isLoading, setIsLoading] = useState();

  const token = localStorage.getItem("token");

  const fetchtradeData = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}/bot/realtime-trade-cycle/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log("tradeData response: ", response?.data);

      setTradeData(response.data);
    } catch (error) {
      console.error(
        "Error fetching cycle status:",
        error.response?.data || error.message
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchtradeData();
  }, []);

  return (
    <div
      className={`text-left w-full py-4 px-5 mx-auto bg-white ${
        isfirst ? `rounded-b-lg` : `rounded-lg`
      }`}
    >
      {!tradeData?.length > 0 ? (
        <div>
          <div>These are your current positions.</div>
          <div className="w-full overflow-auto p-5">
            <table className="w-full">
              <thead className=" flex justify-between w-full">
                <tr className="flex justify-between w-full bg-white bg-opacity-10 text-[12px] sm:text-[16px] ">
                  <th className="">Started at</th>
                  <th className="">Quantity</th>
                  <th className="">Avg Price</th>
                  <th className="">Result</th>
                  <th className="">Age</th>
                  <th className="">Ended at</th>
                </tr>
              </thead>
              {/* {swapHistory.length > 0 ? ( */}
              {tradeData?.map((item, index) => (
                <tbody className="text-[12px] sm:text-[16px] font-200 z-[1000000]">
                  <tr key={index} className="border-b border-gray-700">
                    <td className="">{item?.date}</td>
                    <td className="">{item?.time}</td>
                    <td className="py-2 px-4">{item?.adrx_swapped}</td>
                    <td className="py-2 px-4">{item?.usdt_received}</td>
                  </tr>
                </tbody>
              ))}
              {/* ) 
                : (
                  <div>No swapping history found.</div>
                  )
                  }  */}
            </table>
          </div>
        </div>
      ) : (
        <div>You do not have any positions {`(yet)`}.</div>
      )}
    </div>
  );
};
export default OpenPositionsTab;
