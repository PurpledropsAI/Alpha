import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../api/api";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

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
    setSelectedCycleNumber(tradeData?.trade_cycles?.at(-1)?.cycle_number);
    setTotalUsdtUsed(tradeData?.trade_cycles[0]?.used_capital);
    setRemainingUsdt(tradeData?.trade_cycles[0]?.remaining_capital);
  }, [tradeData]);
  return (
    <div className="flex flex-col gap-5">
      {/* Trade Cycles */}
      <div className="flex flex-col  w-full bg-white rounded-xl p-3 sm:p-5">
        <div className="flex">
          <span className="">Trade Cycles</span>
        </div>

        <div className="w-">
          {tradeData?.trade_cycles?.length > 0 ? (
            <div className="flex gap-10 flex-nowrap overflow-auto w-[50rem] p-5 ">
              {tradeData?.trade_cycles
                ?.slice()
                .reverse()
                .map((item, index) => (
                  <div
                    className={`flex flex-col gap-3 font-light rounded-lg border p-3 min-w-72 cursor-pointer  ${
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
            <div>You do not have any Trade Cycles {`(yet)`}.</div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-start p-5 bg-white rounded-lg">
        <div>
          <span>DCA BOT</span>
        </div>

        <div className="w-full">
          <table className="w-full">
            <thead className=" ">
              <tr className="font-normal bg-white bg-opacity-10 text-[12px] sm:text-[16px] ">
                <th className="">Pair</th>
                <th className="">Today's Profit</th>
                <th className="">Total Profit</th>
                <th className="">Status</th>
              </tr>
            </thead>
            <tbody className="text-[12px] sm:text-[16px]">
              <tr className=" border-b border-gray-700 font-extralight">
                {/* <td className="py-2 px-4">{new Date(item?.started_at).toLocaleDateString()}</td> */}

                <td className="py-2 px-">BNB/USDT</td>
                <td className="py-2 px-">{tradeData?.daily_profit}</td>
                <td className="py-2 px-">
                  {tradeData?.trade_cycles[0]?.live_profit} USDT
                </td>
                <td className="py-2 px-">{tradeData?.bot_status}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/*  */}
      <div className="flex flex-col w-full">
        <div className="flex w-full">
          {tradeData?.trade_cycles?.length > 0 ? (
            tradeData?.trade_cycles
              ?.slice()
              .reverse()
              .map((cycle, indxe) => (
                <span
                  className={`p-3 py-5 rounded-t-lg cursor-pointer  ${
                    cycle?.cycle_number == selectedCycleNumber
                      ? "bg-white "
                      : "text-white hover:bg-white hover:bg-opacity-20"
                  }`}
                  onClick={() => setSelectedCycleNumber(cycle?.cycle_number)}
                >
                  Cycle ID: {cycle?.cycle_number}
                </span>
              ))
          ) : (
            <div className="text-white">No trade cycles found.</div>
          )}
        </div>
        <div className="flex w-full bg-white rounded-b-lg p-5">
          {
            // isLoading ? (
            //   <div className="flex justify-center w-full">
            //     <RotatingLines
            //       visible={true}
            //       height="40"
            //       width="40"
            //       color="blue"
            //       strokeWidth="5"
            //       animationDuration="0.75"
            //       ariaLabel="rotating-lines-loading"
            //       wrapperStyle={{}}
            //       wrapperClass=""
            //     />
            //   </div>
            // ) :
            selectedCycle?.orders?.length > 0 ? (
              <div className="flex flex-col items-start w-full">
                <div>These are your current open positions.</div>
                <div className="w-full overflow-auto p-5">
                  <table className="w-full">
                    <thead className=" ">
                      <tr className="font-normal bg-white bg-opacity-10 text-[12px] sm:text-[16px] ">
                        <th className="">Started at</th>
                        <th className="">Cost</th>
                        <th className="">BNB Bought</th>
                        <th className="">Bought at</th>
                        <th className="">Order type</th>
                      </tr>
                    </thead>
                    {selectedCycle.orders?.map((item, index) => (
                      <tbody className="text-[12px] sm:text-[16px]">
                        <tr
                          key={index}
                          className=" border-b border-gray-700 font-extralight"
                        >
                          {/* <td className="py-2 px-4">{new Date(item?.started_at).toLocaleDateString()}</td> */}
                          <td className="py-2 px-">
                            {new Date(item?.timestamp).toLocaleDateString()}
                          </td>
                          <td className="py-2 px-">{item?.order_capital}</td>
                          <td className="py-2 px-">{item?.quantity}</td>
                          <td className="py-2 px-">{item?.fill_price}</td>
                          <td className="py-2 px-">{item?.order_type}</td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            ) : (
              <div className="text-white">
                You do not have any positions {`(yet)`}.
              </div>
            )
          }
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
