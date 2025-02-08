import React from "react";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { SiBinance } from "react-icons/si";

export default function SuccessBar() {
  return (
    <div className="flex justify-between w-full bg-white rounded-xl p-5">
      <div className="flex flex-col gap-5 w-3/4">
        <div className="flex gap-1 text-green-500 items-center">
          <span className="">Successfully Connected</span>
          <HiMiniCheckBadge />
        </div>
        <div className="flex w-full font-extralight">
            <span>Hey Congrats your account successfully connected</span>
        </div>
      </div>
      <div className="flex items-center justify-center  h-full w-1/4 ">
        <div className="flex gap-2 p-2 rounded-lg bg-yellow-100 text-yellow-500">
          <SiBinance />
          <span>Binance</span>
        </div>
      </div>
    </div>
  );
}
