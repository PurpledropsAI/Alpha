import { TfiStatsUp } from "react-icons/tfi";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { FiRefreshCcw } from "react-icons/fi";
import { IoMdWallet } from "react-icons/io";

const StatsSideBar = ({
  usdtBal,
  usdtProfit,
  totalUsdtUsed,
  remainingUsdt,
}) => {
  return (
    <div className="text-left w-full my-5 mx-auto bg-white rounded-lg">
      <div className="py-2 px-4">
        <span className="text-lg font-semibold"> Stats</span>

        <div className="my-2 flex flex-col">
          <div className="my-2 flex flex-row justify-start items-center px-1">
            <div className="mr-8">
              <span className="">
                <TfiStatsUp className="text-6xl text-green-500 font-bold" />
              </span>
            </div>
            <div className=" flex flex-col items-start">
              <span className="font-extralight mb-1 uppercase">
                Current Profit:
                <span className="text-alphaBlack font-normal">
                  <BsFillQuestionCircleFill className="inline m-1" />
                </span>
              </span>
              <span
                className={`text-2xl mb-1  font-bold ${
                  usdtProfit > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {usdtProfit} USDT{`(0%)`}
              </span>
              <span className="mb-1">reset |</span>
            </div>
          </div>
        </div>
      </div>

      <hr class="border-alphaGray " />

      <div className="py-2 px-4">
        <div className="my-2 flex flex-col">
          <div className="my-2 flex flex-row justify-start items-center px-1">
            <div className="mr-8">
              <span className="inline">
                <IoMdWallet className="text-6xl   font-bold" />
              </span>
            </div>
            <div className=" flex flex-col items-start">
              <span className="text-alphaGray mb-1 uppercase">
                Total <span className=" text-alphaBlack">USDT</span> set as
                Initial capital for the bot to trade:
                <span className="text-alphaBlack font-normal">
                  <BsFillQuestionCircleFill />
                </span>
              </span>
              <span className="text-2xl mb-1 text-green-500 font-bold">
                {/* {Number(usdtBal || 0)?.toFixed(4)} {`(0%)`} */}
                {usdtBal}
                {"(0%)"}
              </span>

              <span className="text-alphaGray mb-1">
                Start balance:
                <span className="font-bold"> 0.00</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-between">
          <div className="flex items-center justify-between">
            <span>Total USDT Used </span>
            <span className="text-yellow-500 rounded-md p-2 bg-yellow-100">
              {totalUsdtUsed} USDT
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span>Remaining USDT</span>
            <span className="text-green-500 rounded-md p-2 bg-green-100">
              {remainingUsdt} USDT
            </span>
          </div>
        </div>
      </div>
      {/* <hr class="border-alphaGray " /> */}

      {/* <div className="text-center">
        <button className="m-2 rounded-xl bg-white border-solid border-l border-alphaGray w-1/2 md:w-2/3">
          <FiRefreshCcw className="inline m-2" /> Convert to USDT
        </button>
      </div> */}
    </div>
  );
};
export default StatsSideBar;
