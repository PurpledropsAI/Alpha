import React from "react";

export default function Page1() {
  return (
    <div>
      <div className="flex flex-col items-center gap-3 pt-20 p-10 lg:px-[22rem] text-center w-screen">
        <span className="text-[20px]">Alpha Robotics LLP</span>

        <span className="text-[60px] leading-[4.5rem]">
          The Fastest and Secure Trading Bot
        </span>
        <span className="text-[14px]">
          Alpha Robotics LLP enhances business performance globally by providing
          unique and inventive technology solu-tions through a mix of skills and
          imagination for growth and improved working conditions.
        </span>
      </div>
      <div className="flex w-full h-full px-10">
        <img src="/hello2.png" alt="helloLogo" className="w-[25rem]"></img>
      </div>
    </div>
  );
}
