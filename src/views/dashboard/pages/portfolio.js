import React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { LineChart } from "@mui/x-charts";

export default function Portfolio() {
  

  return (
    <div className="flex flex-col p-10 w-full">
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

        <div className="flex justify-between gap-5">
          <div className="flex items-end w-5/12">
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
          <div className="flex flex-col gap-2 justify-end items-start font-extralight w-5/12">
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
            <LineChart
              dataset={[
                { x: 1, y: 0 },
                { x: 2, y: 10 },
                { x: 4, y: 0 },
                { x: 6, y: 20 },
              ]}
              xAxis={[
                {
                  dataKey: "x",
                  scaleType: "band",
                  valueFormatter: (x) => ["JAN", "FEB", "MAR", "APR", "MAY","JUN"][x - 1],
                },
              ]}

              series={[{ dataKey: "y" }]}
              height={300}
              margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
              grid={{ horizontal: true }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
