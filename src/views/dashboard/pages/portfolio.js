import React, { useEffect, useState } from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { LineChart } from "@mui/x-charts";
import { BASE_URL } from "../../../api/api";
import axios from "axios";
import { useAuth } from "../../auth/AuthProvider";

export default function Portfolio() {
  const [tradeData, setTradeData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [chartData, setChartData] = useState([]);

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
      
      // Process trade cycle data for chart
      if (response.data?.trade_cycles?.length > 0) {
        processTradeCyclesForChart(response.data.trade_cycles);
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
  
  // Process trade cycles for chart visualization
  const processTradeCyclesForChart = (tradeCycles) => {
    // Sort trade cycles by started_at date
    const sortedCycles = [...tradeCycles].sort((a, b) => 
      new Date(a.started_at) - new Date(b.started_at)
    );
    
    // Map to chart data format with month and average_price
    const processedData = sortedCycles.map((cycle, index) => {
      const date = new Date(cycle.started_at);
      return {
        x: date.getMonth(), // 0-11 for Jan-Dec
        y: parseFloat(cycle.average_price),
        date: date, // store full date for tooltip or reference
        cycleNumber: cycle.cycle_number
      };
    });
    
    setChartData(processedData);
  };

  useEffect(() => {
    fetchtradeData();
  }, []);
  
  // Month names for x-axis formatter
  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  return (
    <div className="flex flex-col p-5 sm:p-10 w-full min-h-screen">
      <div className="flex ">
        <span className="text-[38px] text-white">Portfolio</span>
      </div>
      <div className="flex flex-col p-5 bg-white rounded-2xl w-full">
        <div className="flex justify-between items-center w-full">
          <span>Overview</span>
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

        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="flex items-end md:w-5/12">
            <Gauge
              width={300}
              height={300}
              value={60}
              cornerRadius="50%"
              innerRadius="85%"
              sx={(theme) => ({
                [`& .${gaugeClasses.valueText}`]: {
                  fontSize: 40,
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
          <div className="flex flex-col gap-2 justify-end items-start font-extralight md:w-5/12">
            <span>Total / Changes 24hr</span>
            <div className="flex items-center gap-3">
              <span className="font-normal">$20.87</span>
              <span className="px-2 bg-slate-200 rounded-lg">56%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="">{"<"}0.0002345 BNB</span>
              <span className="px-2 bg-slate-200 rounded-lg">56%</span>
            </div>
          </div>

          <div className="flex w-full h-full ">
            {chartData.length > 0 ? (
              <LineChart
                dataset={chartData}
                xAxis={[
                  {
                    dataKey: "x",
                    scaleType: "band",
                    valueFormatter: (x) => monthNames[x],
                  },
                ]}
                series={[
                  { 
                    dataKey: "y",
                    label: "Average Price",
                    color: "#52b202",
                    showMark: true,
                    valueFormatter: (value) => `$${value.toFixed(2)}`,
                  }
                ]}
                height={300}
                margin={{ left: 50, right: 30, top: 30, bottom: 30 }}
                grid={{ horizontal: true, vertical: false }}
                tooltip={{ trigger: "item" }}
                slotProps={{
                  legend: {
                    hidden: false,
                    position: { vertical: "top", horizontal: "right" },
                  },
                }}
              />
            ) : (
              <div className="flex items-center justify-center w-full h-[300px] text-gray-500">
                {isLoading ? "Loading chart data..." : "No trade cycle data available"}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
