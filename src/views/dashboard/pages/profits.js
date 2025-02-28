import React, { useEffect, useState } from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { BarChart } from "@mui/x-charts";
import { BASE_URL } from "../../../api/api";
import axios from "axios";
import { Tooltip } from "@mui/material";

export default function Profits() {
  const [loading, setLoading] = useState(false);
  const [initialCapital, setInitialCapital] = useState(null);
  const [liveProfit, setLiveProfit] = useState(null);
  const [realProfit, setRealProfit] = useState(null);
  const [realCapital, seTrealCapital] = useState(null);

  const token = localStorage.getItem("token");

  const fetchLiveProfit = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}/bot/realtime-trade-cycle/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      if (response) {
        console.log(response?.data);

        console.log(
          "liveProfit: ",
          response?.data?.trade_cycles[0]?.live_profit
        );
        const profit = response?.data?.trade_cycles[0]?.live_profit;
        if (profit < 10) {
          setLiveProfit(profit * 100);
        } else {
          setLiveProfit(profit);
        }
        setRealProfit(profit);
      }
    } catch (error) {
      console.error(
        "Error fetching cycle status:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchBotConfig = async () => {
    try {
      console.log("fetching balance...");

      const response = await axios.get(`${BASE_URL}/bot/config/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      console.log("bot/config: ", response.data);
      if (response?.status === 200) {
        console.log();
        const capital = response?.data?.initial_capital;
        if (capital > 100) {
          setInitialCapital(capital / 10);
        } else if (capital > 1000) {
          setInitialCapital(capital / 1000);
        } else {
          setInitialCapital(capital);
        }
        seTrealCapital(capital);
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    } finally {
      // setIsLoading(false);  // ✅ Ensures loading state resets
    }
  };

  useEffect(() => {
    fetchLiveProfit();
    fetchBotConfig();
  }, []);

  return (
    <div className="flex flex-col gap-5 p-10 w-full">
      <div className="flex ">
        <span className="text-[38px] text-white">Profits</span>
      </div>
      <div className="flex justify-between gap-5">
        <div className="flex flex-col p-5 bg-white rounded-2xl">
          <div className="flex justify-between items-center w-full">
            <span>Total Profits</span>
            {/* <div className="flex gap-5">
              <span>Months</span>
            </div> */}
          </div>
          <div className="relative flex items-end w-full p-5 px-20 text-red-600">
            <div className="flex flex-col items-center">
              <Tooltip title={`Value: ${realProfit}`}>
                <div className="text-lg font-semibold mb-2">
                  Value: {realProfit}
                </div>{" "}
                {/* Title above */}
              </Tooltip>
              <Gauge
                valueMax={parseInt(initialCapital)}
                value={realProfit}
                width={350}
                height={350}
                cornerRadius="50%"
                innerRadius="80%"
                sx={{
                  [`& .${gaugeClasses.valueText}`]: {
                    fontSize: 50,
                  },
                  [`& .${gaugeClasses.valueArc}`]: {
                    fill: realProfit < 0 ? "#ff0000" : "#52b202",
                  },
                  [`& .${gaugeClasses.referenceArc}`]: {
                    fill: "#ffff2",
                  },
                }}
              />
            </div>

            {/* <div className="absolute top-[50%] left-[50%] -translate-x-[50%] text-2xl font-bold text-black">
              {realProfit}
            </div> */}
          </div>
        </div>
        <div className="flex flex-col p-5 bg-white rounded-2xl">
          <div className="flex justify-between items-center w-full">
            <span>Capital Used</span>
            {/* <div className="flex gap-5">
              <div className="flex gap-5">
                <span>Months</span>
              </div>
            </div> */}
          </div>
          <div className="flex items-end w-full p-5 px-20">
            <Gauge
              width={350}
              height={350}
              value={1350}
              cornerRadius="50%"
              innerRadius="80%"
              sx={(theme) => ({
                [`& .${gaugeClasses.valueText}`]: {
                  fontSize: 50,
                },
                [`& .${gaugeClasses.valueArc}`]: {
                  fill: "#52b202",
                },
                [`& .${gaugeClasses.referenceArc}`]: {
                  fill: "#ffff2",
                },
              })}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col p-5 bg-white rounded-2xl w-full">
        <div className="flex justify-between items-center w-full">
          <span>Number of Deals</span>
          <div className="flex gap-5">
            <div className="flex gap-5">
              <span>Months</span>
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: [
                  "Deal 1",
                  "Deal 2",
                  "Deal 3",
                  "Deal 4",
                  "Deal 5",
                  "Deal 6",
                  "Deal 7",
                  "Deal 8",
                  "Deal 9",
                  "Deal 10",
                ],
              },
            ]}
            series={[{ data: [50, 80, 50, 80, 60, 15, 95, 60, 30, 75] }]}
            width={700}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
