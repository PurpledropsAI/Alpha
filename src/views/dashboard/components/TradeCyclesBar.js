import React, { useEffect, useState, useRef } from "react";
import { BASE_URL } from "../../../api/api";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import { useAuth } from "../../../views/auth/AuthProvider";

export default function TradeCyclesBar({
  setUsdtProfit,
  setBotStatus,
  setTradeCycleNo,
  setBotReason,
  setLiveMarketPrice,
  setTotalUsdtUsed,
  setRemainingUsdt,
  isBotEnabled,
  fetchData,
}) {
  const [tradeData, setTradeData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCycleNumber, setSelectedCycleNumber] = useState(0);
  const isFirstLoad = useRef(true);
  
  const { logout } = useAuth();
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
      
      // Set the selected cycle number to the last cycle only on first load
      if (isFirstLoad.current && response.data?.trade_cycles?.length > 0) {
        setSelectedCycleNumber(response.data.trade_cycles.at(-1)?.cycle_number);
        isFirstLoad.current = false;
      }
      
    } catch (error) {
      console.error(
        "Error fetching cycle status:",
        error.response?.data || error.message
      );
      
      // Check if the error is due to unauthorized access (401)
      if (error.response?.status === 401) {
        console.log("Unauthorized access detected. Logging out...");
        logout(); // Call the logout function from AuthProvider
      }
    } finally {
      setIsLoading(false);
    }
  };

  function formatTradeCycleAge(tradeCycleAge) {
    const { seconds, minutes, hours, days } = tradeCycleAge;
    let parts = [];

    if (days) parts.push(`${days}d`);
    if (hours) parts.push(`${hours}h`);
    if (minutes) parts.push(`${minutes}m`);
    if (seconds) parts.push(`${seconds}s`);

    return parts.join(", ");
  }

  const selectedCycle = tradeData?.trade_cycles?.find(
    (cycle) => cycle.cycle_number === selectedCycleNumber
  );

  useEffect(() => {
    console.log("selectedCycle: ", selectedCycle);
  }, [selectedCycle]);

  useEffect(() => {
    fetchtradeData();

    const interval = setInterval(() => {
      fetchtradeData();
    }, 5000);
    return () => clearInterval(interval);
  }, [isBotEnabled, fetchData]);

  useEffect(() => {
    setUsdtProfit(tradeData?.trade_cycles[0]?.live_profit);
    setBotStatus(tradeData?.bot_status);
    setBotReason(tradeData?.reason_inactive);
    setLiveMarketPrice(tradeData?.trade_cycles[0]?.current_market_price);
    setTradeCycleNo(tradeData?.trade_cycles[0]?.cycle_number);
    setTotalUsdtUsed(tradeData?.trade_cycles[0]?.used_capital);
    setRemainingUsdt(tradeData?.trade_cycles[0]?.remaining_capital);
  }, [tradeData]);
  return (
    <div className="flex flex-col gap-5">
      {/* Trade Cycles */}
      <div className="flex flex-col w-full bg-white rounded-xl p-3 sm:p-5">
        <div className="flex">
          <span className="text-lg font-medium">Trade Cycles</span>
        </div>

        <div className="w-full overflow-x-auto">
          {tradeData?.trade_cycles?.length > 0 ? (
            <div className="flex gap-4 md:gap-10 flex-nowrap py-3 px-1 sm:w-[50rem]">
              {tradeData?.trade_cycles
                ?.slice()
                .reverse()
                .map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col gap-3 font-light rounded-lg border p-3 min-w-[280px] flex-shrink-0 cursor-pointer  ${
                      item?.cycle_number == selectedCycleNumber
                        ? "bg-green-400"
                        : "hover:bg-green-500 hover:bg-opacity-20"
                    }`}
                    onClick={() => setSelectedCycleNumber(item?.cycle_number)}
                  >
                    <span>
                      Cycle ID:{" "}
                      <span className="font-normal">{item?.cycle_number}</span>
                    </span>
                    <div className="w-full h-[1px] bg-black"></div>
                    <span>
                      Status:{" "}
                      <span className="font-normal">{item?.status}</span>
                    </span>
                    <span>
                      Start date:{" "}
                      <span className="font-normal">
                        {new Date(item?.started_at).toLocaleDateString()}
                      </span>
                    </span>
                    <span>
                      Start time:{" "}
                      <span className="font-normal">
                        {new Date(item?.started_at).toLocaleTimeString()}
                      </span>
                    </span>
                    <span>
                      Quantity:{" "}
                      <span className="font-normal">
                        {item?.accumulated_quantity}
                      </span>
                    </span>
                    <span>
                      Average Price:{" "}
                      <span className="font-normal">{item?.average_price}</span>
                    </span>
                    <span>
                      Profit:{" "}
                      <span className="font-normal">{item?.live_profit}</span>
                    </span>
                    <span>
                      Age:{" "}
                      <span className="font-normal">
                        {formatTradeCycleAge(item?.trade_cycle_age)}
                      </span>
                    </span>
                    <span>
                      End date:{" "}
                      <span className="font-normal">
                        {item?.ended_at
                          ? new Date(item?.ended_at)?.toLocaleDateString()
                          : "TBD"}
                      </span>
                    </span>
                    <span>
                      End time:{" "}
                      <span className="font-normal">
                        {item?.ended_at
                          ? new Date(item?.ended_at)?.toLocaleTimeString()
                          : "TBD"}
                      </span>
                    </span>
                  </div>
                ))}
            </div>
          ) : (
            <div className="py-4">You do not have any Trade Cycles {`(yet)`}.</div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-start p-3 sm:p-5 bg-white rounded-lg">
        <div className="mb-3">
          <span className="text-lg font-medium">DCA BOT</span>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="font-normal bg-gray-100 text-[12px] sm:text-[16px]">
                <th className="py-2 px-3 text-left">Pair</th>
                <th className="py-2 px-3 text-left">Today's Profit</th>
                <th className="py-2 px-3 text-left">Total Profit</th>
                <th className="py-2 px-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="text-[12px] sm:text-[16px]">
              <tr className="border-b border-gray-200 font-extralight text-start">
                <td className="py-3 px-3">BNB/USDT</td>
                <td className="py-3 px-3">{tradeData?.daily_profit}</td>
                <td className="py-3 px-3">
                  {tradeData?.trade_cycles[0]?.live_profit} USDT
                </td>
                <td className="py-3 px-3">{tradeData?.bot_status}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/*  */}
      <div className="flex flex-col w-full">
        <div className="flex w-full overflow-x-auto">
          <div className="flex">
            {tradeData?.trade_cycles?.length > 0 ? (
              tradeData?.trade_cycles
                ?.slice()
                .reverse()
                .map((cycle, index) => (
                  <span
                    key={index}
                    className={`p-2 sm:p-3 sm:py-4 rounded-t-lg cursor-pointer text-[14px] sm:text-[16px] whitespace-nowrap ${
                      cycle?.cycle_number == selectedCycleNumber
                        ? "bg-white text-black"
                        : "text-white hover:bg-white hover:bg-opacity-20"
                    }`}
                    onClick={() => setSelectedCycleNumber(cycle?.cycle_number)}
                  >
                    Cycle ID: {cycle?.cycle_number}
                  </span>
                ))
            ) : (
              <div className="text-white p-3">No trade cycles found.</div>
            )}
          </div>
        </div>
        <div className="flex w-full bg-white rounded-b-lg p-3 sm:p-5">
          {selectedCycle?.orders?.length > 0 ? (
            <div className="flex flex-col items-start w-full">
              <div className="text-[12px] sm:text-[16px] mb-3">These are your current open positions.</div>
              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="font-normal bg-gray-100 text-[12px] sm:text-[16px]">
                      <th className="py-2 px-3 text-left">Started at</th>
                      <th className="py-2 px-3 text-left">Cost</th>
                      <th className="py-2 px-3 text-left">BNB Bought</th>
                      <th className="py-2 px-3 text-left">Bought at</th>
                      <th className="py-2 px-3 text-left">Order type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedCycle.orders?.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b text-start border-gray-200 font-extralight text-[12px] sm:text-[16px]"
                      >
                        <td className="py-3 px-3">
                          {new Date(item?.timestamp).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-3">{item?.order_capital}</td>
                        <td className="py-3 px-3">{item?.quantity}</td>
                        <td className="py-3 px-3">{item?.fill_price}</td>
                        <td className="py-3 px-3">{item?.order_type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="py-4">
              You do not have any positions {`(yet)`}.
            </div>
          )}
        </div>
      </div>
      {/* <div>
        <Tabs>
          <TabList>
            {tradeData?.trade_cycles?.map((cycle) => (
              <Tab key={cycle?.cycle_number}>Cycle ID: {cycle.cycle_number}</Tab>
            ))}
          </TabList>
          <TabPanels>
            <TabPanel>
              <OpenPositionsTab
                isfirst={true}
                tradeCycleOrders={
                  tradeData?.trade_cycles[selectedCycleNumber]?.orders
                }
              />
            </TabPanel>
            <TabPanel>
              <OpenPositionsTab
                isfirst={true}
                tradeCycleOrders={
                  tradeData?.trade_cycles[selectedCycleNumber]?.orders
                }
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div> */}
    </div>
  );
}
