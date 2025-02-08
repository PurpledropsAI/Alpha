import React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { BarChart } from "@mui/x-charts";

export default function Profits() {
  return (
    <div className="flex flex-col gap-5 p-10 w-full">
      <div className="flex ">
        <span className="text-[38px] text-white">Profits</span>
      </div>
      <div className="flex justify-between gap-5">
        <div className="flex flex-col p-5 bg-white rounded-2xl">
          <div className="flex justify-between items-center w-full">
            <span>Total Profits</span>
            <div className="flex gap-5">
              <span>Months</span>
            </div>
          </div>
          <div className="flex items-end w-full p-5 px-20">
            <Gauge
              width={350}
              height={350}
              value={40}
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
        <div className="flex flex-col p-5 bg-white rounded-2xl">
          <div className="flex justify-between items-center w-full">
            <span>Capital Used</span>
            <div className="flex gap-5">
              <div className="flex gap-5">
                <span>Months</span>
              </div>
            </div>
          </div>
          <div className="flex items-end w-full p-5 px-20">
            <Gauge
              width={350}
              height={350}
              value={40}
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
              { scaleType: "band", data: ["Deal 1", "Deal 2", "Deal 3", "Deal 4", "Deal 5", "Deal 6", "Deal 7", "Deal 8", "Deal 9", "Deal 10"] },
            ]}
            
            series={[{ data: [50,80,50,80,60,15,95,60,30,75] }]}
            width={700}
            height={300}
            
          />
        </div>
      </div>
    </div>
  );
}
